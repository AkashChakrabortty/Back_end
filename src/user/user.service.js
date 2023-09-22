const User = require("./user.model");

const createUserDB = async (user) => {
  const createdUser = await User.create(user);
  return createdUser;
};

const editRoleServiceDB = async (user) => {
  const filter = { email: user.email };
  const result = await User.updateOne(filter, user);
  return result;
};

const deleteRoleServiceDB = async (user) => {
  const filter = { email: user.email };
  const isPassValid = await User.findOne({ role: "admin" });
  if (isPassValid?.password === user.password) {
    const result = await User.deleteOne(filter);
    return result;
  } else {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, "Invalid Password");
  }
};

const getAllRoleServiceDB = async () => {
  const users = await User.find({
    role: { $not: { $eq: "admin" } },
  });
  return users;
};

const getSearchRoleServiceDB = async (value) => {
  const user = await User.findOne({
    email: { $regex: `^${value}`, $options: "i" },
  });
  return user;
};

const adminLoginServiceDB = async (user) => {
  const userFound = await User.findOne({
    role: "admin",
    email: user.email,
    password: user.password,
  });
  if (!userFound) {
    throw new ApiError(httpStatus.NOT_FOUND, "Authentication Failed");
  }
  //create access token and refresh token
  const accessToken = jwtHelpers.createToken(
    { role: userFound?.role, email: userFound?.email },
    config.jwt.jwt_secret,
    config.jwt.jwt_expires_in
  );

  const refreshToken = jwtHelpers.createToken(
    { role: userFound?.role, email: userFound?.email },
    config.jwt.jwt_refresh_secret,
    config.jwt.jwt_refresh_expires_in
  );

  return {
    accessToken,
    refreshToken,
  };
};

const othersLoginServiceDB = async (user) => {
  const userFound = await User.findOne({
    email: user.email,
    password: user.password,
  });
  if (!userFound) {
    throw new ApiError(httpStatus.NOT_FOUND, "Authentication Failed");
  }
  //create access token and refresh token
  const accessToken = jwtHelpers.createToken(
    { email: userFound?.email },
    config.jwt.jwt_secret,
    config.jwt.jwt_expires_in
  );

  const refreshToken = jwtHelpers.createToken(
    { email: userFound?.email },
    config.jwt.jwt_refresh_secret,
    config.jwt.jwt_refresh_expires_in
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshTokenServiceDB = async (token) => {
  let verifyToken;
  try {
    verifyToken = jwtHelpers.verifyToken(token, config.jwt.jwt_refresh_secret);
  } catch {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid Refresh Token");
  }
  const { role, email } = verifyToken;

  const isUserFound = await User.findOne({ email, role });

  if (!isUserFound) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not found");
  }

  // generate new token
  const newAccessToken = jwtHelpers.createToken(
    { role: isUserFound?.role, email: isUserFound?.email },
    config.jwt.jwt_secret,
    config.jwt.jwt_expires_in
  );

  return {
    accessToken: newAccessToken,
  };
};

module.exports = {
  createUserDB,
  adminLoginServiceDB,
  refreshTokenServiceDB,
  getAllRoleServiceDB,
  getSearchRoleServiceDB,
  editRoleServiceDB,
  deleteRoleServiceDB,
  othersLoginServiceDB,
};

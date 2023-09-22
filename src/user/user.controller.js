const httpStatus = require("http-status");
const {
  createUserDB,
  deleteRoleServiceDB,
  editRoleServiceDB,
  adminLoginServiceDB,
  othersLoginServiceDB,
  refreshTokenServiceDB,
  getAllRoleServiceDB,
  getSearchRoleServiceDB,
} = require("./user.service");

const createUser = async (req, res) => {
  const user = req.body;
  const result = await createUserDB(user);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully!",
    data: result,
  });
};

const deleteRole = async (req, res) => {
  const user = req.body;
  const result = await deleteRoleServiceDB(user);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "User deleted successfully!",
    data: result,
  });
};

const editRole = async (req, res) => {
  const user = req.body;
  const result = await editRoleServiceDB(user);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Role edited successfully!",
    data: result,
  });
};

const adminLogin = async (req, res) => {
  const info = req.body;

  const result = await adminLoginServiceDB(info);
  const { refreshToken, ...others } = result;

  //set refresh token into the cookie
  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };
  res.cookie("refreshToken", refreshToken, cookieOptions);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Login successfully!",
    data: others,
  });
};

const othersLogin = async (req, res) => {
  const info = req.body;

  const result = await othersLoginServiceDB(info);
  const { refreshToken, ...others } = result;

  //set refresh token into the cookie
  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };
  res.cookie("refreshToken", refreshToken, cookieOptions);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Login successfully!",
    data: others,
  });
};

const refreshToken = async (req, res) => {
  const { refreshToken } = req.cookies;

  const result = await refreshTokenServiceDB(refreshToken);

  //set refresh token into the cookie
  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };
  res.cookie("refreshToken", refreshToken, cookieOptions);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Login successfully!",
    data: result,
  });
};

const getAllRole = async (req, res) => {
  const result = await getAllRoleServiceDB();

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Users get successfully!",
    data: result,
  });
};

const getSearchRole = async (req, res) => {
  const email = req.params.email;

  const result = await getSearchRoleServiceDB(email);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "User get successfully!",
    data: result,
  });
};

module.exports = {
  createUser,
  adminLogin,
  refreshToken,
  getAllRole,
  getSearchRole,
  editRole,
  deleteRole,
  othersLogin,
};

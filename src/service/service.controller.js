const httpStatus = require("http-status");
const {
  createServiceDB,
  getAllServiceDB,
  getSingleServiceDB,
  updateServiceDB,
  deleteServiceDB,
} = require("./service.service");

const createService = async (req, res) => {
  const service = req.body;
  const result = await createServiceDB(service);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully!",
    data: result,
  });
};

const getAllServices = async (req, res) => {
  const result = await getAllServiceDB();

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully !",
    data: result,
  });
};

const getSingleService = async (req, res) => {
  const id = req.params.id;
  const result = await getSingleServiceDB(id);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully !",
    data: result,
  });
};

const updateService = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await updateServiceDB(id, updatedData);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Service updated successfully !",
    data: result,
  });
};

const deleteService = async (req, res) => {
  const id = req.params.id;
  const result = await deleteServiceDB(id);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Service deleted successfully !",
    data: result,
  });
};

module.exports = {
  createService,
  getAllServices,
  getSingleService,
  deleteService,
  updateService,
};

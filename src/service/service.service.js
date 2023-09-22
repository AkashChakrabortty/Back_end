const SERVICE = require("./service.model");

const createServiceDB = async (service) => {
  const createdService = await SERVICE.create(service);
  return createdService;
};

const getAllServiceDB = async () => {
  const allService = await SERVICE.find();
  return allService;
};

const getSingleServiceDB = async (id) => {
  const Service = await SERVICE.findById(id);
  return Service;
};

const updateServiceDB = async (id, info) => {
  const Service = await SERVICE.findByIdAndUpdate(id, info);
  return Service;
};

const deleteServiceDB = async (id) => {
  const Service = await SERVICE.findByIdAndDelete(id);
  return Service;
};

module.exports = {
  createServiceDB,
  getAllServiceDB,
  getSingleServiceDB,
  deleteServiceDB,
  updateServiceDB,
};

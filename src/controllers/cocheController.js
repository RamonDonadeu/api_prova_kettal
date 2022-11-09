const cocheService = require("../services/cocheService");

const getAllCoches = async (req, res) => {
  try {
    const allCoches = await cocheService.getAllCoches();
    res.send({ status: "OK", data: allCoches });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneCoche = async (req, res) => {
  const {
    params: { cocheId },
  } = req;
  if (!cocheId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':cocheId' can not be empty" },
    });
  }
  try {
    const coche = await cocheService.getOneCoche(cocheId);
    res.send({ status: "OK", data: coche });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createOneCoche = async (req, res) => {
  const { body } = req;
  console.log(body)
  if (
    !body.marca ||
    !body.modelo ||
    !body.color ||
    !body.disponible ||
    !body.cantidad ||
    !body.precio ||
    !body.fechaCreacion
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'marca', 'modelo', 'color', 'disponible', 'cantidad', 'precio', 'fechaCreacion'",
      },
    });
    return;
  }
  
  const newCoche = {
    marca: body.marca,
    modelo: body.modelo,
    color: body.color,
    disponible: body.disponible,
    cantidad: body.cantidad,
    precio: body.precio,
    fechaCreacion: body.fechaCreacion,
  };
  try {
    const createdCoche = await cocheService.createNewCoche(newCoche);
    res.status(201).send({ status: "OK", data: createdCoche });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneCoche = async (req, res) => {
  const {
    body,
    params: { cocheId },
  } = req;
  if (!cocheId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':cocheId' can not be empty" },
    });
  }
  try {
    const updatedCoche = await cocheService.updateOneCoche(cocheId, body);
    res.send({ status: "OK", data: updatedCoche });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneCoche = async (req, res) => {
  const {
    params: { cocheId },
  } = req;
  if (!cocheId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':cocheId' can not be empty" },
    });
  }
  try {
    await cocheService.deleteOneCoche(cocheId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllCoches,
  getOneCoche,
  createOneCoche,
  updateOneCoche,
  deleteOneCoche,
};

const cocheService = require("../services/cocheService");

const getAllCoches = (req, res) => {
  try {
    const allCoches = cocheService.getAllCoches();
    res.send({ status: "OK", data: allCoches });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneCoche = (req, res) => {
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
    const coche = cocheService.getOneCoche(cocheId);
    res.send({ status: "OK", data: coche });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createOneCoche = (req, res) => {
  const { body } = req;
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
    const createdCoche = cocheService.createNewCoche(newCoche);
    res.status(201).send({ status: "OK", data: createdCoche });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneCoche = (req, res) => {
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
    const updatedCoche = cocheService.updateOneCoche(cocheId, body);
    res.send({ status: "OK", data: updatedCoche });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneCoche = (req, res) => {
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
    cocheService.deleteOneCoche(cocheId);
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

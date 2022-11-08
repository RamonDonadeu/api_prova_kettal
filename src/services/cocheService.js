const Coche = require("../database/Coche");

const getAllCoches = () => {
  try {
    const allCoches = Coche.getAllCoche();
    return allCoche;
  } catch (error) {
    throw error;
  }
};

const getOneCoche = (cocheId) => {
  try {
    const coche = Coche.getOneCoche(cocheId);
    return coche;
  } catch (error) {
    throw error;
  }
};

const createNewCoche = (newCoche) => {
  const cocheToInsert = {
    ...newCoche,
  };
  try {
    const createdCoche = Coche.createNewCoche(cocheToInsert);
    return createdCoche;
  } catch (error) {
    throw error;
  }
};

const updateOneCoche = (cocheId, changes) => {
  try {
    const updatedCoche = Coche.updateOneCoche(cocheId, changes);
    return updatedCoche;
  } catch (error) {
    throw error;
  }
};

const deleteOneCoche = (cocheId) => {
  try {
    Coche.deleteOneCoche(cocheId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCoches,
  getOneCochet,
  createNewCochet,
  updateOneCochet,
  deleteOneCochet,
};

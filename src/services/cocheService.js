const Coche = require("../database/Coche");

const getAllCoches = async () => {
  try {
    const allCoches = await Coche.getAllCoches();
    console.log(allCoches)
    return allCoches;
  } catch (error) {
    throw error;
  }
};

const getOneCoche = async (cocheId) => {
  try {
    const coche = await Coche.getOneCoche(cocheId);
    return coche;
  } catch (error) {
    throw error;
  }
};

const createNewCoche = async (newCoche) => {
  const cocheToInsert = {
    ...newCoche,
  };
  try {
    const createdCoche = await Coche.createNewCoche(cocheToInsert);
    return createdCoche;
  } catch (error) {
    throw error;
  }
};

const updateOneCoche = async (cocheId, changes) => {
  try {
    const updatedCoche = await Coche.updateOneCoche(cocheId, changes);
    return updatedCoche;
  } catch (error) {
    throw error;
  }
};

const deleteOneCoche = async (cocheId) => {
  try {
    await Coche.deleteOneCoche(cocheId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCoches,
  getOneCoche,
  createNewCoche,
  updateOneCoche,
  deleteOneCoche,
};

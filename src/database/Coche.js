const pool = require("../config/postgres");

const getAllCoches = async () => {
  try {
    const allCoches = await pool.query("SELECT * FROM coches");
    return allCoches;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneCoche = async (cocheId) => {
  try {
    const coche = await pool.query(
      "SELECT * FROM coches WHERE coches.id = " + cocheId
    );
    if (!coche) {
      throw {
        status: 400,
        message: `Can't find coche with the id '${cocheId}'`,
      };
    }
    return coche;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewCoche = async (newCoche) => {
  try {
    return newCoche;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneCoche = async (CocheId, changes) => {
  try {
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneCoche = async (cocheId) => {
  try {
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllCoches,
  createNewCoche,
  getOneCoche,
  updateOneCoche,
  deleteOneCoche,
};

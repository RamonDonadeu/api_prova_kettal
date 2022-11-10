const pool = require("../config/postgres");

const getAllCoches = async () => {
  try {
    const allCoches = await pool.query("SELECT * FROM coches ORDER BY id");
    return allCoches.rows;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneCoche = async (cocheId) => {
  try {
    const coche = await pool.query(
      "SELECT * FROM coches where id = " + cocheId
    );
    console.log(new Date(coche.rows[0].fechacreacion.setDate(coche.rows[0].fechacreacion.getDate()+1)).toISOString())
    if (coche.rows.length == 0) {
      throw {
        status: 400,
        message: `Can't find coche with the id '${cocheId}'`,
      };
    }
    return coche.rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewCoche = async (newCoche) => {
  try {
    newCoche = await pool.query(
      `INSERT INTO coches (marca,modelo,color,disponible,cantidad,precio,fechaCreacion) 
      VALUES (
        '${newCoche.marca}',
        '${newCoche.modelo}',
        '${newCoche.color}',
        '${newCoche.disponible}',
        '${newCoche.cantidad}',
        '${newCoche.precio}',
        '${newCoche.fechaCreacion}'
        )`
    );
    return newCoche.status;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneCoche = async (CocheId, changes) => {
  console.log(changes.fechacreacion.split('T')[0])
  try {
    changes = await pool.query(
      `UPDATE coches SET 
      marca         = '${changes.marca}',
      modelo        = '${changes.modelo}',
      color         = '${changes.color}',
      disponible    = '${changes.disponible}',
      cantidad      = '${changes.cantidad}',
      precio        = '${changes.precio}',
      fechaCreacion = '${changes.fechacreacion}'
    WHERE id = ${CocheId}`
    );
    return changes.status;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneCoche = async (cocheId) => {
  try {
    await pool.query("DELETE FROM coches WHERE id = " + cocheId);
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

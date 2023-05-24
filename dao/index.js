const mongoose = require('mongoose');
const UsuarioDao = require('./usuarioDao');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'controlAsistencia'; // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect();
    this.usuarioDao = new UsuarioDao();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error' + err);
      });
  }
}

module.exports = Database;

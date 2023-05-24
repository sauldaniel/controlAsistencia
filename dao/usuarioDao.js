const Usuario = require('../models/Usuario')

class UsuarioDao {
  constructor() {}

  async findAll() {
    try {
      const usuarios = await Usuario.find({})
      return usuarios
    } catch (error) {
      console.error(error)
      throw new Error('Error al buscar usuarios')
    }
  }

  async insertarUsuario(user){
    try {
        const newUser = new Usuario(user)
        return newUser.save()
      } catch (error) {
        console.error(error)
        throw new Error('Error al escribir usuario')
      }
  }
  async buscarPorRFID(code) {
    try {
      const usuario = await Usuario.findOne({ rfid_code: code });
      return usuario;
    } catch (error) {
      console.error(error);
    }
  }


  
}

module.exports = UsuarioDao;

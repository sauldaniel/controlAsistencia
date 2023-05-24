const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new mongoose.Schema({
    matricula: String,
    rfid_code: String,
    name: String
  })
  
  const Usuario = mongoose.model('Usuario', usuarioSchema)

  module.exports=Usuario
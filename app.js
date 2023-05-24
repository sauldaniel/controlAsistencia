const Database = require('./dao');
const db = new Database();


const SerialPortManager = require('./SerialPortManager')

const spm = new SerialPortManager()

spm.onData(data => {
    db.usuarioDao.buscarPorRFID(data).then((usuario) => {
        if(usuario!=null){
            console.log('Si existe el usuario')
            spm.port.write('1')
        }
        else{
            console.log('No existe el usuario.')
            spm.port.write('0')
        }
        
        //console.log(usuario);
      }).catch((error) => {
        console.error(error);
      });
})






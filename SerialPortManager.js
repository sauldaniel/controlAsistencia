const { SerialPort, ReadlineParser } = require('serialport')

class SerialPortManager {
  constructor() {
    this.port = new SerialPort({ path:'COM3', baudRate:9600 })
    this.parser = new ReadlineParser()
    this.port.pipe(this.parser)
    this.parser.on('data', data => {
      if (typeof this.dataCallback === 'function') {
        this.dataCallback(data.trim())
      }
    })

  }

  onData(callback) {
    this.dataCallback = callback
  }
}

module.exports = SerialPortManager

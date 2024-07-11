const {registrar, leer} = require ('./operaciones.js')

const [operacion, Nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)

if (operacion === 'registrar') {
    registrar(Nombre, edad, tipo, color, enfermedad)
}

if (operacion === 'leer'){
    leer()
}

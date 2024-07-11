const fs = require ('fs')

const registrar = (Nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    if (!Nombre || !edad || !tipo || !color ||!enfermedad){
        console.log('Faltan datos para registrar tu cita');
        return;
    }
    citas.push({Nombre, edad, tipo, color, enfermedad});
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log(citas)
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    console.log(citas)
}

module.exports={registrar, leer}

const fs = require ('fs')

const registrar = (Nombre, edad, tipo, color, enfermedad) => {
    //analiza una cadena de texto como json fs.rfy es una funcion que lee el archivo de forma sincrona
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    if (!Nombre || !edad || !tipo || !color ||!enfermedad){
        console.log('Faltan datos para registrar tu cita');
        return;
    }
    citas.push({Nombre, edad, tipo, color, enfermedad});
    // \\fswfs escribe datos de forma sincrona y bloquea buble de eventos hasta completar la escritura del archivo - stringify funcion que convierte obj js en cadenas con formato json
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log(citas)
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    console.log(citas)
}

module.exports={registrar, leer}

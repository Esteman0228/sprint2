
const sitiosEcoturisticos = [];

const insertarSitioEcoturistico = (nombre,municipio,departamento,latitud,longitud,estrellas)=>{
    const sitio = {
        nombre: "Las Piedras de Algeciras",
        municipio: "Algeciras",
        departamento: "Huila",
        latitud: 2.2642666,
        longitud: -73.8118611,
        estrellas: 0
    }
    // const prueba = {
    //     nombre: "Rio",
    //     municipio: "MEdELLin",
    //     departamento: "Antioquia",
    //     latitud: 3.2642666,
    //     longitud: -74.8118611
    // }
    sitiosEcoturisticos.push(sitio);
    // sitiosEcoturisticos.push(prueba);
    // console.log(sitiosEcoturisticos);
};

const filtrarResultados = (key,value)=>{
    if (key == "nombre" || key=="municipio" || key == "departamento") {
        var ip = sitiosEcoturisticos.filter(function(sitiosEcoturisticos){
            return sitiosEcoturisticos.municipio === 'municipio'});
            return ip;
    }
    else if (key == null || value== null){
        return null;
    }
}
console.log(sitiosEcoturisticos);

module.exports.filtrarResultados = filtrarResultados;
module.exports.insertarSitioEcoturistico = insertarSitioEcoturistico;
module.exports.sitiosEcoturisticos = sitiosEcoturisticos;
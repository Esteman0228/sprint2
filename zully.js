const sitiosEcoturisticos = [];

const insertarSitioEcoturistico = (nombre,municipio, departamento, latitud, longitud, estrellas) =>{
    const objeto = {
        nombre: "Las Piedras de Algeciras",
        municipio: "Algeciras",
        departamento: "Huila",
        latitud: 2.2642666,
        longitud: 73.8118611,
        estrellas: 0
    }
    sitiosEcoturisticos.push(objeto);
}

insertarSitioEcoturistico("nombre","municipio", "departamento", "latitud", "longitud");
console.log(sitiosEcoturisticos);

const filtrarResultados = (key, value) =>{
    key = key.toLowerCase();
    if(key == "nombre"){
        const filtro = sitiosEcoturisticos.filter(objeto =>objeto.nombre == value )
        console.log(filtro);
        return filtro;
    }else if(key == "municipio"){
        const filtro = sitiosEcoturisticos.filter(objeto =>objeto.municipio == value )
        console.log(filtro);
        return filtro;
    }else if(key == "departamento"){
        const filtro = sitiosEcoturisticos.filter(objeto =>objeto.departamento == value )
        console.log(filtro);
        return filtro;
    }else if(key == "latitud"){
        const filtro = sitiosEcoturisticos.filter(objeto =>objeto.latitud == value )
        console.log(filtro);
        return filtro;
    }else if(key == "longitud"){
        const filtro = sitiosEcoturisticos.filter(objeto =>objeto.longitud == value )
        console.log(filtro);
        return filtro;
    }else if(key == null){
        console.log("los parametros solicitados no coinciden");
        return null
    }
    

}

filtrarResultados("laTitud",2.2642666);



module.exports. filtrarResultados= filtrarResultados;
module.exports. insertarSitioEcoturistico= insertarSitioEcoturistico;
module.exports.sitiosEcoturisticos=sitiosEcoturisticos;

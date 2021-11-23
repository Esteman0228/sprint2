


const registrarIMC = (value) =>{
    if(value>50 || value<0 ){
        return "fuera_de_rango"
    }
    const rangosIMC = [
        {etiqueta: 'Bajo peso', de: 0, hasta:18.5},
        {etiqueta: 'Normal', de: 18.6, hasta:24.9},
        {etiqueta: 'Sobrepeso', de: 25, hasta: 29.9},
        {etiqueta: 'Obesidad', de: 30, hasta:50}
    ]
    
    const retorno = rangosIMC.map(function(elemento){
        if(value >= elemento.de && value <= elemento.hasta){
            const elementos = (elemento.etiqueta);
            return elementos
        }
    })
    console.log(retorno);


    return retorno
}

const calcularIMC = (peso, estatura) =>{
    let IMC = {'formula':0};
    if(peso == 0 || estatura == 0){
        return 0
    }
    let resultadoIMC = (peso/(estatura**2));
    IMC.formula = resultadoIMC;
    registrarIMC(IMC.formula);
    return IMC;
}


calcularIMC(75, 1.80);
module.exports.calcularIMC = calcularIMC;
module.exports.registrarIMC = registrarIMC;


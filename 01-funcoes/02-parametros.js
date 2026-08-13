function apresentar(nome){
    console.log("Ola, "+ nome);
}

apresentar("Camily");


function sistema(nome = "Visitante"){
    console.log("Ola, "+ nome);
}
sistema();
sistema("Camily");

function somar(numero1, numero2){
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
}

somar(10,5);
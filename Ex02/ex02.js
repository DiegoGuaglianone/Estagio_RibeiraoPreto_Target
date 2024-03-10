function descobrirFibo(procura){
    let numAnterior = 0;
    let numAnteriorPerto = 1;
    let numAtual = 0;
    for(let i = 0; i < procura; i = numAtual){
        numAtual = numAnterior + numAnteriorPerto;
        numAnterior = numAnteriorPerto;
        numAnteriorPerto = numAtual;
    }
    if(numAtual === procura){
        console.log("Número encontrado");
    } else {
        console.log("Número não existe na sequência")
    }
}

//Utilizei o HTML para passar o parâmetro e conferi os resultados pelo console do navegador utilizando a extensão Live Server no Visual Studio Code
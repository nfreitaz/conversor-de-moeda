
function converteMoeda(){
    const menu = document.querySelector('#conversorMoeda')
    let moeda = menu.options[menu.selectedIndex].value;

    let valor =parseFloat(document.getElementById('entradaValor').value); 

    let converteDolar = (valor / 5.06).toFixed(2);
    let converteEuro = (valor / 5.17).toFixed(2);
    let converteBitCoin = (valor / 108970.69).toFixed(5);
    
    if(moeda == 'Dolar'){
        resultadoDolar.innerHTML = `O valor em Dolar é US$ ${converteDolar}`
    }else if (moeda == 'Euro'){
        resultadoEuro.innerHTML = `O valor em Euro é € ${converteEuro}`
    }else if (moeda == 'Bit Coin'){
        resultadoBitCoin.innerHTML = `O valor em Bit Coin é ₿ ${converteBitCoin}`
        
    }
    
    console.log(converteDolar)
    
}
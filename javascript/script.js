const isFlex = document.getElementById('flex')

function finalizar() {
    const kmTrajeto = document.getElementById('txtTrajeto').value
    //cons do calculo para o alcool
    const consumoGasolinaCidadeKm = document.getElementById('kcidadeg').value
    const consumoGasolinaEstradaKm = document.getElementById('kestradag').value
    const valorDaGasolina = document.getElementById('valorGasolina').value
    //Const do calculo para o alcool
    const consumoEtanolCidadeKm = document.getElementById('kcidadea').value
    const consumoEtanolEstradaKm = document.getElementById('kestradaa').value
    const valorDoAlcool = document.getElementById('valorAlcool').value
    
    const resGasolina = document.getElementById('resGasolina')
    const resAlcool = document.getElementById('resAlcool')

    if (kmTrajeto.length == 0 && consumoGasolinaCidadeKm.length == 0 && consumoGasolinaEstradaKm.length == 0) {
        window.alert('[ERRO] Verifique os dados de gasolina e tente novamente!')
        return false
    }

    if (isFlex.checked && kmTrajeto.length == 0 && consumoEtanolCidadeKm.length == 0 && consumoEtanolEstradaKm.length == 0) {
        window.alert('[ERRO] Verifique os dados de etanol e tente novamente!')
        return false
    }

    const { kmLitroCidade, kmLitroEstrada, preçoCidade, preçoEstrada} = calculoGasolina(kmTrajeto, consumoGasolinaEstradaKm, consumoGasolinaCidadeKm, valorDaGasolina);
    resGasolina.innerHTML = `Seu consumo de gasolina na cidade será de ${Math.round(kmLitroCidade)}L e seu custo será de R$${Math.round(preçoCidade)}. Já na estrada será de ${Math.round(kmLitroEstrada)}L. com o custo de R$${Math.round(preçoEstrada)}`

    if(isFlex.checked){
        const {kmLitroCidadeEtanol, kmLitroEstradaEtanol,  preçoCidadeAlcool, preçoEstradaAlcool} = calculoEtanol(kmTrajeto, consumoEtanolEstradaKm, consumoEtanolCidadeKm, valorDoAlcool)
        resAlcool.innerHTML = `Seu consumo de alcool na cidade será de ${Math.round(kmLitroCidadeEtanol)}L e seu custo será de R$${Math.round(preçoCidadeAlcool)}. Já na estrada ${Math.round(kmLitroEstradaEtanol)}L. Com o custo de R$${Math.round(preçoEstradaAlcool)}`
    }
}







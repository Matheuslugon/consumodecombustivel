function calculoEtanol(kmTrajeto, consumoEtanolEstradaKm, consumoEtanolCidadeKm, valorDoAlcool) {
    const kmLitroCidadeEtanol =  Number(kmTrajeto) / Number(consumoEtanolCidadeKm)
    const kmLitroEstradaEtanol = Number(kmTrajeto) / Number(consumoEtanolEstradaKm)
    const preçoCidadeAlcool = Number(kmLitroCidadeEtanol) * Number(valorDoAlcool)
    const preçoEstradaAlcool = Number(kmLitroEstradaEtanol) * Number(valorDoAlcool)
    
    return {
        kmLitroCidadeEtanol, 
        kmLitroEstradaEtanol, 
        preçoCidadeAlcool, 
        preçoEstradaAlcool

    }
}
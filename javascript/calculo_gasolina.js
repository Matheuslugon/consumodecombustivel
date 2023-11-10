function calculoGasolina(kmTrajeto, consumoGasolinaEstradaKm, consumoGasolinaCidadeKm, valorDaGasolina){
    const kmLitroCidade = Number(kmTrajeto) / Number(consumoGasolinaCidadeKm)
    const kmLitroEstrada = Number(kmTrajeto) / Number(consumoGasolinaEstradaKm) 
    const preçoCidade = Number(kmLitroCidade) * Number(valorDaGasolina)
    const preçoEstrada = Number(kmLitroEstrada) * Number(valorDaGasolina)

    return {
        kmLitroCidade, 
        kmLitroEstrada,
        preçoCidade,
        preçoEstrada
    }
}





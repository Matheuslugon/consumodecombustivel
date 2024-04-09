const isFlex = document.getElementById('flex')

function finalizar() {
    const kmTrajeto = document.getElementById('txtTrajeto').value
    //cons do calculo para a gasolina
    const consumoGasolinaCidadeKm = document.getElementById('kcidadeg').value
    const consumoGasolinaEstradaKm = document.getElementById('kestradag').value
    const valorDaGasolina = document.getElementById('valorGasolina').value
    //Const do calculo para o alcool
    const consumoEtanolCidadeKm = document.getElementById('kcidadea').value
    const consumoEtanolEstradaKm = document.getElementById('kestradaa').value
    const valorDoAlcool = document.getElementById('valorAlcool').value
    //const resGasolina = document.getElementById('resGasolina')
    //const resAlcool = document.getElementById('resAlcool')
    const { kmLitroCidade, kmLitroEstrada, preçoCidade, preçoEstrada } = calculoGasolina(kmTrajeto, consumoGasolinaEstradaKm, consumoGasolinaCidadeKm, valorDaGasolina);
    const { kmLitroCidadeEtanol, kmLitroEstradaEtanol, preçoCidadeAlcool, preçoEstradaAlcool } = calculoEtanol(kmTrajeto, consumoEtanolEstradaKm, consumoEtanolCidadeKm, valorDoAlcool)
    console.log(valorDaGasolina)

//[ERRO] IF NAO ESTÁ VALIDANDO valorDaGasolina. Necessario criar um novo IF para validar!
    if (kmTrajeto.length == 0 && consumoGasolinaCidadeKm.length == 0 && consumoGasolinaEstradaKm.length == 0){
        window.alert('[ERRO] Verifique os dados de gasolina e tente novamente!')
        return false
    }

    if (valorDaGasolina.length == 0){
      window.alert('[ERRO] Verifique os dados de gasolina e tente novamente!')
      return false
    }

    const rescidadeGasolina = document.getElementById('respostaCidadeGasolina')
    rescidadeGasolina.innerHTML = `${kmLitroCidade} Litros`
    const resCustocidadeGasolina = document.getElementById('respostaCustoCidadeGasolina')
    resCustocidadeGasolina.innerHTML = `R$ ${preçoCidade}`
    //ESTRADA
    const resEstradaGasolina = document.getElementById('respostaEstradaGasolina')
    resEstradaGasolina.innerHTML = `${kmLitroEstrada} Litros`
    const resCustoEstradaGasolina = document.getElementById('respostaCustoEstradaGasolina')
    resCustoEstradaGasolina.innerHTML = `R$ ${preçoEstrada}`

    if (isFlex.checked && consumoEtanolCidadeKm.length == 0 && consumoEtanolEstradaKm.length == 0 && valorDoAlcool.length == 0){
        window.alert('[ERRO] Verifique os dados do Etanol e tente novamente!')
        return false
    }

    if (isFlex.checked && valorDoAlcool.length == 0){
      window.alert('[ERRO] Verifique os dados do Etanol e tente novamente!')
      return false
    }

    if (isFlex.checked) {
        //CIDADE
        const rescidadeAlcool = document.getElementById('respostaCidadeAlcool')
        rescidadeAlcool.innerHTML = `${kmLitroCidadeEtanol} Litros`
        const resCustocidadeAlcool = document.getElementById('respostaCustoCidadeAlcool')
        resCustocidadeAlcool.innerHTML = `R$ ${preçoCidadeAlcool}`
        //ESTRADA
        const resEstradaAlcool = document.getElementById('respostaEstradaAlcool')
        resEstradaAlcool.innerHTML = `${kmLitroEstradaEtanol} Litros`
        const resCustoEstradaAlcool = document.getElementById('respostaCustoEstradaAlcool')
        resCustoEstradaAlcool.innerHTML = `R$ ${preçoEstradaAlcool}`

    }
    openModal()
}

function openModal(){
    //Criação das variaveis para o modal
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    //btn.onclick = function() {
        modal.style.display = "block";
      //}
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "block";
        }
      }
}






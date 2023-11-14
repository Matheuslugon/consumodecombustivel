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

    const { kmLitroCidade, kmLitroEstrada, preçoCidade, preçoEstrada } = calculoGasolina(kmTrajeto, consumoGasolinaEstradaKm, consumoGasolinaCidadeKm, valorDaGasolina);
    const { kmLitroCidadeEtanol, kmLitroEstradaEtanol, preçoCidadeAlcool, preçoEstradaAlcool } = calculoEtanol(kmTrajeto, consumoEtanolEstradaKm, consumoEtanolCidadeKm, valorDoAlcool)

    console.log(kmLitroEstradaEtanol)


    if (kmTrajeto.length == 0 && consumoGasolinaCidadeKm.length == 0 && consumoGasolinaEstradaKm.length == 0) {
        window.alert('[ERRO] Verifique os dados de gasolina e tente novamente!')
        return false
    }

    if (isFlex.checked && kmTrajeto.length == 0 && consumoEtanolCidadeKm.length == 0 && consumoEtanolEstradaKm.length == 0) {
        window.alert('[ERRO] Verifique os dados de etanol e tente novamente!')
        return false
    }

    //resGasolina.innerHTML = `<p>Seu consumo de gasolina na cidade será de ${Math.round(kmLitroCidade)}L e seu custo será de R$${Math.round(preçoCidade)}. Já na estrada será de ${Math.round(kmLitroEstrada)}L. com o custo de R$${Math.round(preçoEstrada)}</p>`

    if (isFlex.checked) {
        //resAlcool.innerHTML = `<p>Seu consumo de alcool na cidade será de ${Math.round(kmLitroCidadeEtanol)}L e seu custo será de R$${Math.round(preçoCidadeAlcool)}. Já na estrada ${Math.round(kmLitroEstradaEtanol)}L. Com o custo de R$${Math.round(preçoEstradaAlcool)}</p>`
    }
    openModal()
}

function openModal(){
    console.log("Funcionou!!")
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
          modal.style.display = "none";
        }
      }
}







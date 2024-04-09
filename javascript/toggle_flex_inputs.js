function toggleFlexInput(isHide) {
    //console.log(isHide)
    const divAlcool = document.getElementById('alcool')
    const resAlcool = document.getElementById('resAlcool')
    if (isHide) {
        divAlcool.classList.add("show")
        divAlcool.classList.remove("hide")
        resAlcool.classList.add("showAlcool")
        resAlcool.classList.remove("hide")
    } else {
        divAlcool.classList.add("hide")
        divAlcool.classList.remove("show")
        resAlcool.classList.add("hide")
        resAlcool.classList.remove("showAlcool")     
    }
}
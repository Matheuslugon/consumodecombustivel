function toggleFlexInput(isHide) {
    //console.log(isHide)
    const divAlcool = document.getElementById('alcool')

    if (isHide) {
        divAlcool.classList.add("show")
        divAlcool.classList.remove("hide")
    } else {
        divAlcool.classList.add("hide")
        divAlcool.classList.remove("show")
    }
}
const toggleButton = document.getElementById("toggle-button")

toggleButton.addEventListener('click', event=> {
 toggleButton.classList.toggle('active')
 changeText1()
 changeText2()
 changeText3()
})

function  changeText1 () {
    var priceElementOne = document.getElementById("price-element-1")
    if (toggleButton.classList.contains('active')) {
            priceElementOne.innerHTML = "&dollar;19.99"
    } else {
        priceElementOne.innerHTML = "&dollar;199.99"
    }
}
function  changeText2 () {
    var priceElementTwo = document.getElementById("price-element-2")
    if (toggleButton.classList.contains('active')) {
            priceElementTwo.innerHTML = "&dollar;24.99"
    } else {
        priceElementTwo.innerHTML = "&dollar;249.99"
    }
}
function  changeText3 () {
    var priceElementThree = document.getElementById("price-element-3")
    if (toggleButton.classList.contains('active')) {
            priceElementThree.innerHTML = "&dollar;39.99"
    } else {
        priceElementThree.innerHTML = "&dollar;399.99"
    }
}
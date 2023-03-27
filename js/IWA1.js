const MAX_NUMBER = 20
const MIN_NUMBER = -20

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () => {
    const value = parseInt(number.value) - 2
    number.value =  value

    if (value <= MIN_NUMBER){
        subtract.disabled = true
    }
    if (add.disabled === true){
        add.disabled = false
    }
}
const addHandler = () => {
    const value = parseInt(number.value) + 2
    number.value =  value
    if (value >= MAX_NUMBER){
        add.disabled = true
    }
    
    if (subtract.disabled === true){
        subtract.disabled = false
}
}
subtract.addEventListener("click", subtractHandler)

add.addEventListener("click", addHandler)
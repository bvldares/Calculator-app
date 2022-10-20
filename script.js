const scrollBar = document.getElementById("theme")
const digits = document.querySelectorAll(".digit")
const operatori = document.querySelectorAll(".operator")
const resultOutput = document.querySelector(".result")
let numero = ""

let operator = null 


function sum (arr){
    let sum = 0
    arr.map(num =>sum+= num)
    return sum
}

function multiplication(arr){
    let result = 1
    arr.map(num => sum *= num)
    return result
}

function division(arr){
    let result = 1
    arr.map(num => result /=num)
    return result
}

function subtraction(arr){
    let result = 0
    arr.map(num=> result -= num)
    return result
}


digits.forEach(num =>{
    num.addEventListener("click", () =>{
        numero += num.value
        resultOutput.innerHTML = numero
    })
})


operatori.forEach(operatore =>{
    operatore.addEventListener("click", ()=>{
        operator = operatore.value
        numero = ""

    })
})


























//Funzione per il cambio tema
scrollBar.addEventListener("change", ()=> {
    console.log(scrollBar.value)
})




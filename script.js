const scrollBar = document.getElementById("theme")
const digits = document.querySelectorAll(".digit")
let numArray = []
scrollBar.addEventListener("change", ()=> {
    console.log(scrollBar.value)
})


digits.forEach(digit =>{
    digit.addEventListener("click", ()=>{
        numArray.push(parseInt(digit.value))
        console.log(numArray)
    })
})





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




const scrollBar = document.getElementById("theme")
const digits = document.querySelectorAll(".digit")
const operatori = document.querySelectorAll(".operator")
const resultOutput = document.getElementById("outinp")
const egualBtn = document.querySelector("#egual")
const delBtn = document.querySelector("#delete")
const resetBtn = document.querySelector("#reset")


digits.forEach(btn =>{
    btn.addEventListener("click", function(){
        resultOutput.value += btn.value
    })
})


egualBtn.addEventListener("click", function(){
    resultOutput.value = eval(resultOutput.value)
  
})


resetBtn.addEventListener("click",()=>{
    resultOutput.value =""
})


delBtn.addEventListener("click", function(){
    console.log("clicked")
    resultOutput.value = resultOutput.value.slice(0,-1)
})




//Elementi da HTML per il cambio tema
const navEl = document.querySelector("nav")
const calculatorEl = document.querySelector(".calculator")
const mainEl = document.querySelector(".main")
const btnEl = document.querySelectorAll(".same")
const egualEl = document.querySelector("#egual")
const inputEl = document.getElementById("outinp")

function themeSwapper(nav, calc, main, digit, btn, egual, outinp, scrollinfo){
    navEl.className = ""
    navEl.classList.add(`${nav}`)

    calculatorEl.className = ""
    calculatorEl.classList.add(`${calc}`)
    calculatorEl.classList.add(`calculator`)
    
    mainEl.className = ""
    mainEl.classList.add(`${main}`)
    
    digits.forEach(key =>{
        key.className = ""
        key.classList.add(`digit`)
        key.classList.add(`${digit}`)
    })

    btnEl.forEach(button =>{
        button.className = ""
        button.classList.add(`same`)
        button.classList.add(`${btn}`)
    })

    egualEl.className = ""
    egualEl.classList.add(`egual`)
    egualEl.classList.add(`${egual}`)

    inputEl.id = outinp
    scrollBar.id = scrollinfo
    
}


scrollBar.addEventListener("change", ()=> {
    if(scrollBar.value === "1"){
        
        document.body.style.background = "#647299"
        themeSwapper("nav-one", "calculator-one", "main-one","digits-one", "btn-one", "egual-one", "inpout-one","theme-one")
    }else if(scrollBar.value ==="2"){
        document.body.style.background = "#e6e6e6"
        themeSwapper("nav-two", "calculator-two", "main-two", "digits-two", "btn-two", "egual-two", "inpout-two", "theme-two")
    }else if(scrollBar.value ==="3"){
        document.body.style.background = "#17062A"
        themeSwapper("nav-tre", "calculator-tre", "main-tre", "digits-tre", "btn-tre", "egual-tre", "inpout-tre", "theme-tre")
    }
})




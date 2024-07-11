const numeros=document.querySelector("#eight");
const resultado=document.querySelector("#result");
numeros.addEventListener("click",()=>{
    console.log(numeros.textContent);
    resultado.textContent=numeros.textContent;
})

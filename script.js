
const numeros=document.querySelector("#opsAndNums");
const resultado=document.querySelector("#result");

//operaciones botones
const sumar=document.querySelector("#sumar");
const restar=document.querySelector("#restar");
const multiplicar=document.querySelector("#multiplicar");
const dividir=document.querySelector("#dividir");





//Funciona con botones
numeros.addEventListener("click",(e)=>{
    switch(e.target.id){
        case 'one':
            resultado.textContent+='1';
            console.log("hi");
            break;
        case 'two':
            resultado.textContent+='2';
            console.log("hi");
            break;
        case 'three':
            resultado.textContent+='3';
            console.log("hi");
            break;
        case 'four':
            resultado.textContent+='4';
            console.log("hi");
            break;
        case 'five':
            resultado.textContent+='5';
            console.log("hi");
            break;
        case 'six':
            resultado.textContent+='6';
            console.log("hi");
            break;
        case 'seven':
            resultado.textContent+='7';
            console.log("hi");
            break;
        case 'eight':
            resultado.textContent+='8';
            console.log("hi");
            break;
        case 'nine':
        resultado.textContent+='9';
        console.log("hi");
            break;
        case 'zero':
            resultado.textContent+='0';
            console.log("hi");
            break;
        case 'dot':
            const texto=resultado.textContent;
            textArr=texto.split('').filter(item => item.includes('.'));
            console.log(textArr);
            if (textArr.length>0){
               alert("Solo puedes escribir un punto"); 
            }else{resultado.textContent+='.';}
            break;
    }
    
})

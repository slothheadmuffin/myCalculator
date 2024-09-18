const resultadoDiv=document.querySelector("#resultado");
const botones=document.querySelector("#opsAndNums"); //voy a intentar otra cosa
const numerosBotones=document.querySelectorAll(".numeros");
const operandoBoton=document.querySelectorAll(".operando");
const borradoresBoton=document.querySelectorAll(".borradores");

let firstNumber;
let secondNumber;
let operador;
let solution; //porsi

let resultadoValue=resultadoDiv.textContent;


numerosBotones.forEach((boton)=>{
    boton.addEventListener("click",(e)=>{
               
        if (boton.id=='dot'){
            const texto=resultado.textContent;
            textArr=texto.split('').filter(item => item.includes('.'));
            if (textArr.length>0){
                alert("Solo puedes escribir un punto"); 
            }else{resultadoDiv.textContent+='.';}
        }
        else {
            //if (firstNumber!=undefined&&secondNumber!=undefined){resultadoDiv.textContent='';}
            resultadoDiv.textContent+=boton.textContent;
        }
    })
})


operandoBoton.forEach((boton)=>{
    boton.addEventListener("click",(e)=>{
        
        if (firstNumber==undefined){
            firstNumber=parseFloat(resultadoDiv.textContent);
            operador=boton.textContent;
            resultadoDiv.textContent='';
        }
        else {
            secondNumber=parseFloat(resultadoDiv.textContent);
            firstNumber=calculo(firstNumber,secondNumber,operador);
            operador=boton.textContent;
            resultadoDiv.textContent=firstNumber;
        }

        /*if (firstNumber!=undefined&&secondNumber!=undefined&&operador!=''){
                x=calculo(firstNumber,secondNumber,operador);
                console.log(x);
            }*/
        
    })
})

borradoresBoton.forEach((boton)=>{
    boton.addEventListener("click",(e)=>{
        switch(boton.id){
            case 'c':
                resultadoDiv.textContent='';
                break;
            case 'ce':
                resultadoDiv.textContent='';
                firstNumber=undefined;
                secondNumber=undefined;
                operador='';
                break;
            case 'borrar':
                let text=resultadoDiv.textContent.split('');
                if (text.length>0){
                    text=text.slice(0,(text.length-1)).join();
                    if(text.includes (',')){
                        text=text.replaceAll(',','');}
                }
                resultadoDiv.textContent=text;
                break;
            case 'equal':
                if (firstNumber!=undefined||operador==''){
                    secondNumber=parseFloat(resultado.textContent);
                    solution=calculo(firstNumber,secondNumber,operador);
                    resultadoDiv.textContent=solution;
                    firstNumber=undefined;
                    secondNumber=undefined;
                }
                else{alert("Ingresa un numero o escoge una operacion")}
                
                break;
        }
    })
})

document.addEventListener("keydown",(tecla)=>{
    const teclaPresionada=tecla.key;
    
    switch(teclaPresionada){ 
        //numeros y punto
        case '1':
            break;
        case '2':
            break;
        case '3':
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        case '9':
            break;
        case '0':
            break;
        case '.':
            break;
        //Operadores
        case '+':
            break;
        case '-':
            break;
        case '*':
            break;
        case '/':
            break;
        //borrar y enter
        case 'Enter':
            break;
        case 'Backspace':
            break;
    }
})


function redondearDecimal(numero) {
    const factor = 10 ** 4;
    return Math.round(numero * factor) / factor;
}
//Proceso de la calculadora
function calculo(a,b,e){
    let result;
    switch (e){
        case '+':
            result=add(a,b);
            break;
        case '-':
            result=substract(a,b);
            break;
        case '*':
            result=multiply(a,b);
            break;
        case '/':
            result=divide(a,b);
            break;
    }
    return result;
}
function add(a,b){let result; result=a+b;return result;}
function substract(a,b){let result; result=a-b;return result;}
function multiply(a,b){let result; result=a*b;return result;}
function divide(a,b){let result = (b==0) ? "Undefined" : a/b;return result;}

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
        //numeros y punto
        case 'one':
            resultado.textContent+='1';

            break;
        case 'two':
            resultado.textContent+='2';

            break;
        case 'three':
            resultado.textContent+='3';

            break;
        case 'four':
            resultado.textContent+='4';

            break;
        case 'five':
            resultado.textContent+='5';

            break;
        case 'six':
            resultado.textContent+='6';

            break;
        case 'seven':
            resultado.textContent+='7';

            break;
        case 'eight':
            resultado.textContent+='8';

            break;
        case 'nine':
        resultado.textContent+='9';
            break;
        case 'zero':
            resultado.textContent+='0';

            break;
        case 'dot':
            const texto=resultado.textContent;
            textArr=texto.split('').filter(item => item.includes('.'));
            
            if (textArr.length>0){
               alert("Solo puedes escribir un punto"); 
            }else{resultado.textContent+='.';}
            break;
        //operaciones
        case 'sumar':
            resultado.textContent='';
            break;
        case 'restar':
            resultado.textContent='';
            break;
        case 'multiplicar':
            resultado.textContent='';
            break;
        case 'dividir':
            resultado.textContent='';
            break;
        //borrar
        case 'c':
            resultado.textContent='';
            break;
        case 'ce':
            resultado.textContent='';
            break;
        case 'borrar':
            let text=resultado.textContent.split('');
            if (text.length>0){
                text=text.slice(0,(text.length-1)).join();
                if(text.includes (',')){
                    text=text.replaceAll(',','');}
            }
            resultado.textContent=text;
            break;
    }
    
})

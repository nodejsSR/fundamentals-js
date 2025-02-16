
// tipo de declaraciones de funcion de javascript
const suma1 = ()=>{}
function suma2(){}
const suma3 = function(){}
// que es un callback
// que es el hell de  los callback
// que son promesas
// que un closure
// que es async y await

const suma = (num1,num2,callback) => {
    const result = num1 + num2
    callback(result)
}

suma(2,3,(resul)=>{
    console.log(resul)
})
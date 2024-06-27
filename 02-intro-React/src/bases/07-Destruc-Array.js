

const personajes = ['goku','vegeta','trunks'] ;


const [, , p2] = personajes


console.log(p2);


const retornaArreglo = () => {
    
    
    return (
        ['ABC' , 123]
    );
    
}


const [ , numeros] = retornaArreglo();


console.log(numeros)



//Tarea
//1. el primer valor del arr se llamara nombre
//2.se llamara esetnombre
const usoDeEstado = (valor) => {
    
    return(
        [valor,()=>{console.log(`hola ${valor}`)}]
    );
}


const [nombre,setNombre] = usoDeEstado('Marcelo')

console.log(nombre)
setNombre()

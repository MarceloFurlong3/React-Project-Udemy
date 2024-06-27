//destructuracion
//asignacion destructurante


const persona = {

    nombre:'Tony',
    edad:45,
    clave:'ironman',

};






console.log(persona.nombre)


const UseContext = ( {nombre,edad,clave,rango = 'capitan'}) => {

    

    //console.log(nombre,edad,rango)

    return {
        nombreClave:clave,
        edad:edad,
        laring: {
            lar:352,
            lng:123123
        }

    }

}


const {nombreClave,edad,laring:{lar,lng}} =UseContext(persona)

console.log(nombreClave)
console.log(edad)
console.log(lar,lng)


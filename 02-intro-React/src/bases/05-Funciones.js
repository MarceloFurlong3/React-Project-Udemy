//funciones en js
const nombre = 'Marcelo';

const saludar = function (nombre) {

    return `hola ${nombre}`
}

console.log(nombre)

const saludar2 = (nombre) => `hola, ${nombre}`;

const saludar4 = (nombre) => `hola mundo`;

console.log(saludar('marcelo'))

console.log(saludar2('juan'))

console.log(saludar4("hola mundo"))


const getUser = () => 

({
        uid : 123123,
        username:'carlos',
    })




console.log(getUser())


const getUserActive = (nombre) => ({uid:'123323',username:nombre})





const userActive = getUserActive('Juan')


console.log(userActive)



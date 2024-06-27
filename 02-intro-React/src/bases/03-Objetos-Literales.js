const persona = {
    nombre:'tony',
    apellido:'stark',
    edad :45,
    
};


console.table(persona);

//asignacion de referencia 
const persona2 = {...persona}
persona2.nombre = "Marcelo"

console.log (persona2)

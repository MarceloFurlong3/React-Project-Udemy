import { getHeroebyId } from "./bases/08-import-export"




/* 
const promesa = new Promise ((resolve , reject) => {
    //Tarea
    //Importen

    setTimeout(() => {
        
        const heroe = getHeroebyId('a')
        resolve(heroe)
        reject('no se pudo encontrar el heroe')
    },2000)


})

promesa.then((p1) =>{
    console.log('then de la promesa',p1)
})
.catch(err => console.warn (err)) */



const getHeroebyIdAsync = (id) => {

    return  new Promise ((resolve , reject) => {
        //Tarea
        //Importen
    
        setTimeout(() => {
            
            const heroe = getHeroebyId(id)
            if (heroe !== undefined)
            resolve(heroe)
            else
            reject('no se pudo encontrar el heroe')
        },2000)
    
    
    });

    
}




getHeroebyIdAsync(1)
.then(console.log)
.catch(console.warn)
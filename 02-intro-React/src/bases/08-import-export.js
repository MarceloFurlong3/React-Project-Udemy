import { heroes } from "../data/heroes"


export const getHeroebyId = (iden) => heroes.find(heroes => heroes.id === iden) 
    ;



//console.log(getHeroebyId(2))


//const getHeroebyOwners = (owner) => heroes.find(heroes => heroes.owner === owner) 


//console.log(getHeroebyOwners('DC'))

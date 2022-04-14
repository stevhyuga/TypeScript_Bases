/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen : number;
    segundo : number;
    cancion : string;
    detalles : Detalles;
}

interface Detalles {
    autor : string; 
    annio : number;
}

const reproductor : Reproductor = {
    volumen : 90,
    segundo : 36,
    cancion : 'LAMASABROSA',
    detalles : {
        autor: 'Dr. Strange',
        annio : 2021
    }
}

/*const {volumen, segundo, cancion, detalles : { autor } } = reproductor --> Desestructurar un objeto*/ 
const {volumen, segundo, cancion, detalles } = reproductor /*--> Desestructurar un objeto*/ 
const {autor} = detalles /*--> Desestructurar un objeto*/ 

//console.log('El volumen es de: ' + volumen);
//console.log('El segundo actual es: ' + segundo);
//console.log('La Cancion actual es: ' + cancion);
//console.log('El autor es: ' + autor);


/* --> Destructurar Arreglos */

const dbz: string[] = ['Goku','Vegeta','Trunks'];
const [d1, d2, d3] = dbz;

//Valores Basados en su posicion
console.log('Personaje 1: ' + dbz[0]);
console.log('Personaje 2: ' + dbz[1]);
console.log('Personaje 3: ' + dbz[2]);

//Valores basados en desestructuracion
console.log('Personaje d-1: ' + d1);
console.log('Personaje d-2: ' + d2);
console.log('Personaje d-3: ' + d3);
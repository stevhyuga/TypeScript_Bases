/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre:string;
    hijos?: string[] // --> ? se refiere al encadenamiento opcional, sirve para evaluar variables u objetos
}

const pasajero1: Pasajero = {nombre:'Fernando'}
const pasajero2: Pasajero = {nombre:'Meilssa',
                             hijos:['LAMASABROSA','Petter']}

imprimeHijos(pasajero1);

function imprimeHijos (pasajero: Pasajero) : void {
    const cuantosHijos = pasajero.hijos?.length || 0;// --> ? se refiere al encadenamiento opcional, sirve para evaluar variables u objetos
    console.log(cuantosHijos);
    pasajero.hijos?.forEach(p => {// --> ? se refiere al encadenamiento opcional, sirve para evaluar variables u objetos
        console.log(p, ' ');
    });    
}
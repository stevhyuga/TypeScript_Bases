/*
    ===== Código de TypeScript =====
*/
function sumar(a : number, b : number) : number{
    return a + b;
}

const sumarFlecha = (a : number,b : number) : number => {
    return a + b;
}

function multiplicar( numero : number, otroNumero? : number, base : number = 2) : number{
    return numero * base;
}

interface PersonajeFs {
    nombre : string;
    pv : number;
    mostrarHP: () => void;
}

function restoreHealth(personaje : PersonajeFs, salud : number) : void {
    personaje.pv += salud;
}

const nuevoPersonaje : PersonajeFs = {
    nombre : 'LAMASABROSA',
    pv : 50,
    mostrarHP(){
        console.log('Puntos de vida: ', this.pv);
    }
}

restoreHealth(nuevoPersonaje, 14);
nuevoPersonaje.mostrarHP();

/*const resultado = (sumar(34, 80) + multiplicar(5, 0, 10));
console.log( resultado ); */
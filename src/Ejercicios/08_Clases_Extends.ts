/*
    ===== Código de TypeScript =====
*/
class PersonaNormal{
    constructor(public nombre: string, public direccion?:string){}
}
class Heroe extends PersonaNormal{
    constructor(public alterEgo: string, public edad?: number, public nombreReal?: string){
        super(nombreReal,'LAMASABROSA');
    }
    imprimirNombre(){
        return this.alterEgo + ' ' + this.nombreReal; 
    }
}

const ironfat = new Heroe('SpyderFat', 31, 'Petter');

console.log(ironfat,ironfat.imprimirNombre());
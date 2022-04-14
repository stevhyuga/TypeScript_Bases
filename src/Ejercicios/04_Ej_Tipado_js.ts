/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe {
    nombre : string;
    edad : number;
    direccion : Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    calle : string;
    ciudad : string;
    pais : string;
}

const superHeroe = {
    nombre : 'LAMASABROSA',
    edad : 31,
    direccion : {
        calle : 'Esta...',
        ciudad : 'llevate',
        pais:"Huy te vas?..."
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.pais + ', ' + this.direccion.ciudad + ' ' + this.direccion.calle;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion )
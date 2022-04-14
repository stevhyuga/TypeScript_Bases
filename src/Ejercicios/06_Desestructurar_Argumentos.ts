/*
    ===== Código de TypeScript =====
*/
export interface Producto{
    desc : string;
    precio : number;
}

const telefono : Producto = {
    desc: 'Xiaomi Mi8',
    precio: 1.320000
}

const escritorio : Producto = {
    desc: 'Estacion de Trabajo Viscaya',
    precio:480.000
}

export function calculaISV(productos : Producto[]) : [number, number]{
    let total: number =0;
    productos.forEach(({precio})=>{ //--> Desestructuracion de Argumentos {precio}
        total+=precio;
    });
    return [total ,total * 0.15];
}

const ariculos : Producto[] = [telefono, escritorio];
const [total , isv] = calculaISV(ariculos);//--> Desestructuracion de Argumentos

console.log('Total: ', total);
console.log('ISV: ', isv);
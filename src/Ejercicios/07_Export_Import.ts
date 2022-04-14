import { calculaISV, Producto } from "./06_Desestructurar_Argumentos";

/*
    ===== Código de TypeScript =====
*/
const carritoCompras: Producto[] = [{
                                        precio: 100,
                                        desc: "Telefono LG"
                                    },
                                    {
                                        precio: 250,
                                        desc: 'Telefono LMSA'
                                    }];
                                    
const [total, isv] = calculaISV(carritoCompras);

console.log('Total: ', total);
console.log('ISV: ', isv);
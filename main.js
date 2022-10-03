// /*Lee un número por teclado que pida el precio de un producto (puede tener
// decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
// del 21%*/

// let precio = prompt('Introduce un precio');
// const iva = 1.21

// console.log((parseInt(precio) * iva));


// /*Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while. */

// let num = 1;
// while (num <= 100) {
//     console.log(num);
//     num++;
// }

// /*Haz el mismo ejercicio anterior con un bucle for. */

// for (let i = 1; i <= 100; i++){
//     console.log(i);

// }


// /*Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
// el bucle que desees. */

// for (let i = 1; i <= 100; i++) {
//     if(((i % 2) == 0) && ((i % 3) == 0)){
//         console.log(i);
//     }
    
// }

// /*Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
// que no. */

// let ventas = prompt('Introduce el número de ventas');
// let total = 0;

// for(let i = 0; i < parseInt(ventas); i++){
//     let precio = prompt('Introduce el precio a sumar');
//     total += parseInt(precio);
// }
// console.log('La suma de todas las ventas es de: ' + total + '€');


// /*Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
// laboral o no. Usa un switch para ello. */

// let dia =  prompt('Introduce un dia de la semana');
// let dialower = dia.toLowerCase();

// switch (dialower) {
//     case 'lunes':
//     case 'martes':
//     case 'miercoles':
//     case 'jueves':
//     case 'viernes':
//         console.log('Lo siento, es dia laboral');
//         break;
//     case 'sabado':
//     case 'domingo':
//         console.log('Es fin de semana!');
//     default:
//         console.log('Eso no es un dia')
//         break;
// }

// /*Escribe una aplicación con un String que contenga una contraseña cualquiera.
// Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
// aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
// “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
// aunque le queden intentos). */

// let password = 'holahola';

// for (let i = 3; i > 0; i--) {
//     let password2 = prompt('Introduce la contraseña,' + i + ' intentos restantes.');
//     if(password === password2){
//         console.log('Enhorabuena');
//     }
// }   

// /*Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
// un signo aritmético (String), según este último se realizará la operación
// correspondiente. Al final mostrara el resultado en un cuadro de dialogo. */

// let num1 = 0;
// let num2 = 0;
// let operacion = '';

// switch (operacion) {
//     case 'suma':
//         console.log('La suma de los dos numeros es ' + (num1 + num2));
//         break;
//     case 'resta':
//         console.log('La resta de los dos numeros es ' + (num1 - num2));
//         break;
//     case 'producto':
//         console.log('El producto de los dos numeros es ' + (num1 * num2));
//         break;
//     case 'division':
//         console.log('La división de num1/num2 es ' + (num1 / num2));
//         break;
//     case 'exponente':
//         console.log('La potencia de num1' + (num1 ^ num2));
//         break;
//     case 'resto':
//         console.log('El resto de la división es ' + (num1 % num2));
//         break;


//     default:
//         console.log('La operación dada no está disponible')
//         break;
// }


const fecha = new Date();
console.log(fecha)

const fecha2 = new Date(1997, 4, 16);
console.log(fecha2)

console.log(fecha.getTime())
console.log(fecha2.getTime())

const esMasTarde = fecha > fecha2;
console.log(esMasTarde)

const mesNacimiento = fecha2.getMonth() + 1;
console.log(mesNacimiento)

const añoNacimiento = fecha2.getFullYear()
console.log(añoNacimiento)

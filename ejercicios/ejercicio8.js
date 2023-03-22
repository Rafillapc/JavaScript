const yo = {
    nombre:"Rafa",
    apellido:"Paradas",
    edad:30,
    altura:1.63,
    isDeveloper:true
}

let edad = yo.edad;
console.log(edad)

const lista = [yo]

const amigos = {
    nombre1: "Carlos",
    apellido1:"Rico",
    edad1:28,
    altura1: 1.75,
    isDeveloper1:false,
    nombre2:"Javi",
    apellido2:"Hidalgo",
    altura2:1.80,
    isDeveloper2:false
}

const nuevaLista = [yo, amigos]

nuevaLista.sort((a,b) => b.edad - a.edad1)
console.log(nuevaLista)

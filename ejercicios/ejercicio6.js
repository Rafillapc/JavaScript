const listaCompra = ["Huevos", "Patatas", "Cebolla", "Leche", "Pollo", "Pan", "Hambrguesas"]
const aceite = ["Aceite de girasol"];
const listaCompra2 = listaCompra.concat(aceite);
console.log(listaCompra2)
const sinAceite = listaCompra2.splice(7, 1);
console.log(listaCompra2)

const listaPelis = [
    {titulo: "Big Fish", autor: "Daniel Wallace", fecha: 2003},
    {titulo: "Parasite", autor: "Bong Joon-ho", fecha: 2019},
    {titulo: "Malditos Bastardos", autor:"Quentin Tarantino", fecha: 2009}
]


const listaPelisNuevas = listaPelis.filter(listaPelis => listaPelis.fecha >2010)
console.log(listaPelisNuevas)

const directoresPelis = listaPelis.map(listaPelis => listaPelis.autor)
console.log(directoresPelis)

const titulosPelis = listaPelis.map(listaPelis => listaPelis.titulo)
console.log(titulosPelis)

const listaConcat = directoresPelis.concat(titulosPelis)
console.log(listaConcat)

const listaPropag = [...directoresPelis, ...titulosPelis]
console.log(listaPropag)

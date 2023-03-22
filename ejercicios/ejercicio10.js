function siempreTrue() {
    return true;
}

console.log(siempreTrue())

async function saludar() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("hola soy una promesa")
}
saludar();


function* indicesPares() {
    let i = 0;
    while (true) {
      yield i;
      i += 2;
    }
}

const generador = indicesPares();

console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);

const miFuncion = valor => {
    if (typeof valor === "number") {
        return valor * 2;
    }
    throw new Error("El valor no es de tipo numero")
}


try {
    console.log("Está ejecutandose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
}   catch {
    console.log("ERROR")
}

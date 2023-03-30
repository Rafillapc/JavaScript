const nombre = "Rafa";
const apellido = "Paradas";
const objeto = { nombre, apellido };

sessionStorage.setItem("objeto", JSON.stringify(objeto));

localStorage.setItem("objeto", JSON.stringify(objeto));

const expirationDate = new Date(Date.now() + 2 * 60 * 1000).toUTCString();
document.cookie = `objeto=${JSON.stringify(objeto)}; expires=${expirationDate}`;

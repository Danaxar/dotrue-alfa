console.log("Hola mundo");
const input = document.querySelector("input");
const add = document.querySelector("button");
const lista = document.querySelector("ul");

add.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que se recargue la página
  const fila = document.createElement("li"); // Crear una fila
  const p = document.createElement("p"); // Crear un parrafo
  p.textContent = input.value; // Asigno el texto del input al parrafo
  fila.appendChild(p); // Agrego el parrafo a la fila
  lista.appendChild(fila); // Agrego la fila a la lista

  // Fin
  console.log("Tarea añadida");
});

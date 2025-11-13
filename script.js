 // Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://i.pinimg.com/736x/1d/03/17/1d0317fea1f27cd088f72aba16ffd8bc.jpg",
  "https://i.pinimg.com/736x/62/58/40/625840175026c645aff3aa742028ed5e.jpg",
  "https://i.pinimg.com/736x/20/78/15/207815e929f35f9a9c914a0cc46dd728.jpg",
  "https://i.pinimg.com/1200x/d9/7f/b8/d97fb8dac5e6b9db630d840cda4ee02d.jpg",
  "https://i.pinimg.com/736x/11/c2/6c/11c26c762434ef2721707203cd7a26df.jpg",
  "https://i.pinimg.com/1200x/b3/4f/49/b34f49837112b7af8ce871fee32b0eeb.jpg",
  "https://i.pinimg.com/736x/ae/1d/ae/ae1daeee7846b93bd733209a4e680717.jpg",
  "https://i.pinimg.com/1200x/6a/ae/80/6aae800bf23b2d78b3ca6a5e3936a9da.jpg",
];

const titulos = [
  "Yo siempre contesto-Latin mafia",
  "Recorde-MiloJ",
  "Chance-C.R.O ",
  "Persona Ideal- Adolescent's Orquesta",
  "Damelo-Barderos",
  "Perder-Penayir"
  "2:12-Rauw Alejandro"
  "Frances Limon- Enanitos Verdes"
];

const frases = [
  "Si me muero, Ven a buscarme tan pronto tengas otro cuerpo Y otra forma de mirarme",
  "Tengo miedo de la oscuridad Porque soy otra piedra en la arena Que algún día desaparecerá Y la paz romperá mi cadenas",
  "Man, ella no te quiere para su vida Y si te dice que te quiere, te aseguro que es mentira",
  "Me tengo que ir Y no es por mí, contigo está mi corazón Todo el amor de mis entrañas De mi cuerpo y de mi alma Todo el fruto de este amor te queda a ti",
  "Perdón si soy denso, es que el amor me tiene adicto a ese placer tan inmenso Rompeme por dentro, haceme delirar Llevame a soñar, rompe mi calmar Dame energía para poder despertar",
  "Y no sé, si la llamo mientras está distraída Pa' abrirme la herida que ella misma me hizo Y con el tiempo cerré",
  "Ven y bésame la boca Que las horas solo son pocas Ven y bésame la boca Donde tus labios mejor pertenecen",
  "En un barco de papel yo volveré Por ti mi amor francés limón Las luces de la ciudad se apagaran Te besaré, me besarás",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();
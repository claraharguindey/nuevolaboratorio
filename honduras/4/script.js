const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
};

const params = new URLSearchParams(window.location.search);
let acceso = params.get("name");

if (acceso) {
  acceso = normalizeString(acceso);
}

const contenidos = {
  aday: { name: "de Aday", color: "#90da70" }, // Verde
  alma: { name: "de Alma", color: "#FFD700" }, // Dorado
  axel: { name: "de Axel", color: "#7FFFD4" }, // Aguamarina
  basma: { name: "de Basma", color: "#FF6347" }, // Rojo tomate
  brianna: { name: "de Brianna", color: "#40E0D0" }, // Turquesa
  daniel: { name: "de Daniel", color: "#FF69B4" }, // Rosa fuerte
  daniela: { name: "de Daniela", color: "#98FB98" }, // Verde claro
  estrella: { name: "de Estrella", color: "#FF4500" }, // Naranja fuerte
  joselorenzo: { name: "de José Lorenzo", color: "#DA70D6" }, // Orquídea
  lucas: { name: "de Lucas", color: "#FF8C00" }, // Naranja oscuro
  maricarmen: { name: "de Mari Carmen", color: "#FF00FF" }, // Magenta
  miguel: { name: "de Miguel", color: "#87CEEB" }, // Azul cielo
  omnia: { name: "de Omnia", color: "#32CD32" }, // Verde lima oscuro
  ricky: { name: "de Ricky", color: "#00BFFF" }, // Azul profundo
  ruth: { name: "de Ruth", color: "#8A2BE2" }, // Azul violeta
  saray: { name: "de Saray", color: "#F08080" }, // Rojo coral
  yareli: { name: "de Yareli", color: "#B0E0E6" }, // Azul pálido
};

const claveEncontrada = Object.keys(contenidos).find(
  (key) => normalizeString(key) === acceso
);

if (claveEncontrada) {
  document.getElementById("name").innerText = contenidos[claveEncontrada].name;
  document.getElementById("main").style.backgroundColor =
    contenidos[claveEncontrada].color;
  // document.getElementById("image1").style.display = "none";
  // document.getElementById("image2").src = `./drawings/${claveEncontrada}`;
  // document.getElementById(
  //   "image2"
  // ).alt = `El poder de ${contenidos[claveEncontrada].name}`;
  // document.getElementById("image2").style.filter = "invert(0)";
} else {
  document.getElementById("name").innerText = acceso ? `de ${acceso}` : "";
}

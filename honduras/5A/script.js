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
  daniela: { name: "de Daniela", color: "#FFB6C1" }, // Rosa claro
  jeferson: { name: "de Jeferson", color: "#FFD700" }, // Dorado
  naiara: { name: "de Naiara", color: "#7FFFD4" }, // Aguamarina
  gabriela: { name: "de Gabriela", color: "#FF6347" }, // Rojo tomate
  indira: { name: "de Indira", color: "#FF69B4" }, // Rosa fuerte
  juan: { name: "de Juan", color: "#40E0D0" }, // Turquesa 
  carlos: { name: "de Carlos", color: "#98FB98" }, // Verde claro
  thaily: { name: "de Thaily", color: "#FF4500" }, // Naranja fuerte
  santiago: { name: "de Santiago", color: "#DA70D6" }, // Orquídea
  samira: { name: "de Samira", color: "#FF8C00" }, // Naranja oscuro
  arryana: { name: "de Arryana", color: "#FF00FF" }, // Magenta
  isabella: { name: "de Isabella", color: "#87CEEB" }, // Azul cielo
  cintia: { name: "de Cintia", color: "#32CD32" }, // Verde lima oscuro
  joel: { name: "de Joel", color: "#00BFFF" }, // Azul profundo
  jaquelin: { name: "de Jaquelín", color: "#8A2BE2" }, // Azul violeta
  daniel: { name: "de Daniel", color: "#F08080" }, // Rojo coral
  karelly: { name: "de Karelly", color: "#B0E0E6" }, // Azul pálido
  damaris: { name: "de Dámaris", color: "#C71585" }, // Rojo violeta
  rosi: { name: "de Rosi", color: "#8B4513" }, // Marrón
  luisa: { name: "de Luisa", color: "#20B2AA" }, // Verde azulado
  joscar: { name: "de Joscar", color: "#FFDAB9" }, // Melocotón
  gia: { name: "de Gía", color: "#B0E0E6" }, // Azul pálido
  bernardo: { name: "de Bernardo", color: "#90da70" }, // Rosa fuerte
  yadira: { name: "de Yadira", color: "#9932CC" }, // Púrpura oscuro
  englez: { name: "de Englez", color: "#00FA9A" }, // Verde marino

  roos: { name: "de Roos", color: "#C71585" }, // Azul pálido
  rocio: { name: "de Rocío", color: "#FF00FF" }, // Azul pálido
  andree: { name: "de Andree", color: "#90da70" }, // Azul pálido
  mari: { name: "de Mari", color: "#40E0D0" }, // Azul pálido
  daray: { name: "de Daray", color: "#FFB6C1" }, // Azul pálido

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

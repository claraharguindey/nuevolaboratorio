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
  celeen: { name: "de Celeen", color: "#FFB6C1" }, // Rosa claro
  roosmariel: { name: "de Roosmariel", color: "#FFD700" }, // Dorado
  valentina: { name: "de Valentina", color: "#FF6347" }, // Rojo tomate
  jenko: { name: "de Jenko", color: "#7FFFD4" }, // Aguamarina
  jesus: { name: "de Jesús", color: "#40E0D0" }, // Turquesa
  daray: { name: "de Daray", color: "#FF69B4" }, // Rosa fuerte
  andree: { name: "de Andree", color: "#FFA07A" }, // Salmón
  barbara: { name: "de Bárbara", color: "#FFDAB9" }, // Melocotón
  ana: { name: "de Ana", color: "#98FB98" }, // Verde claro
  isabel: { name: "de Isabel", color: "#87CEEB" }, // Azul cielo
  yanira: { name: "de Yanira", color: "#FF4500" }, // Naranja fuerte
  esther: { name: "de Esther", color: "#DA70D6" }, // Orquídea
  kilino: { name: "de Kilino", color: "#ADFF2F" }, // Verde lima
  genesis: { name: "de Génesis", color: "#FF8C00" }, // Naranja oscuro
  rocio: { name: "de Rocío", color: "#8A2BE2" }, // Azul violeta
  ricardo: { name: "de Ricardo", color: "#DC143C" }, // Rojo cereza
  fernanda: { name: "de Fernanda", color: "#FF00FF" }, // Magenta
  juan: { name: "de Juan", color: "#20B2AA" }, // Verde azulado
  yusra: { name: "de Yusra", color: "#32CD32" }, // Verde lima oscuro
  samara: { name: "de Samara", color: "#9932CC" }, // Púrpura oscuro
  constan: { name: "de Constan", color: "#00BFFF" }, // Azul profundo
  joni: { name: "de Joni", color: "#F08080" }, // Rojo coral
  victoria: { name: "de Victoria", color: "#E6E6FA" }, // Lavanda
  mari: { name: "de Mari", color: "#B0E0E6" }, // Azul pálido
  adrian: { name: "de Adrián", color: "#C71585" }, // Rojo violeta
};

const claveEncontrada = Object.keys(contenidos).find(
  (key) => normalizeString(key) === acceso
);

if (claveEncontrada) {
  document.getElementById("name").innerText = contenidos[claveEncontrada].name;
  document.getElementById("main").style.backgroundColor = contenidos[claveEncontrada].color;
} else {
  document.getElementById("name").innerText = acceso ? `de ${acceso}` : "";
}

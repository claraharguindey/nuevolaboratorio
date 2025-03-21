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
  acceso = normalizeString(acceso.trim());
}

const contenidos = {
  ritaj: { name: "de Ritaj", color: "#FF6347" }, // Rojo tomate
  manha: { name: "de Manha", color: "#FFD700" }, // Dorado
  celia: { name: "de Celia", color: "#FFB6C1" }, // Rosa claro
  evaluna: { name: "de Eva Luna", color: "#7FFFD4" }, // Aguamarina
  esmeralda: { name: "de Esmeralda", color: "#32CD32" }, // Verde lima oscuro
  jose: { name: "de José", color: "#8A2BE2" }, // Azul violeta
  nicanor: { name: "de Nicanor", color: "#90da70" }, // Verde
  pedro: { name: "de Pedro", color: "#00BFFF" }, // Azul profundo
  hector: { name: "de Héctor", color: "#FF4500" }, // Naranja fuerte
  zyad: { name: "de Zyad", color: "#40E0D0" }, // Turquesa
  imran: { name: "de Imran", color: "#FF69B4" }, // Rosa fuerte
  sanou: { name: "de Sanou", color: "#FF8C00" }, // Naranja oscuro
  mila: { name: "de Mila", color: "#8FBC8F" }, // Verde oscuro
  javi: { name: "de Javi", color: "#87CEEB" }, // Azul cielo
  cinthia: { name: "de Cinthia", color: "#FFD700" }, // Dorado
  eithan: { name: "de Eithan", color: "#FFD700" }, // Dorado
};

const claveEncontrada = Object.keys(contenidos).find(
  (key) => normalizeString(key) === acceso
);

if (claveEncontrada) {
  document.getElementById("name").innerText = contenidos[claveEncontrada].name;
  document.getElementById("main").style.backgroundColor =
    contenidos[claveEncontrada].color;
  document.getElementById("image1").style.display = "none";
  document.getElementById("image2").src = `./drawings/${claveEncontrada}`;
  document.getElementById(
    "image2"
  ).alt = `El poder de ${contenidos[claveEncontrada].name}`;
  document.getElementById("image2").style.filter = "invert(0)";
} else {
  document.getElementById("name").innerText = acceso ? `de ${acceso}` : "";
}

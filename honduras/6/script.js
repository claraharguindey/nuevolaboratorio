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
  vivian: { name: "de Vivian", color: "#FFB6C1" }, // Rosa claro
  nestor: { name: "de Néstor", color: "#FFD700" }, // Dorado
  nasr: { name: "de Nasr", color: "#FF6347" }, // Rojo tomate
  israe: { name: "de Israe", color: "#7FFFD4" }, // Aguamarina
  nicanor: { name: "de Nicanor", color: "#40E0D0" }, // Turquesa
  ainhoa: { name: "de Ainhoa", color: "#FF69B4" }, // Rosa fuerte
  bella: { name: "de Bella", color: "#FFA07A" }, // Salmón
  luciana: { name: "de Luciana", color: "#FFDAB9" }, // Melocotón
  mafe: { name: "de Mafe", color: "#98FB98" }, // Verde claro
  thiago: { name: "de Thiago", color: "#87CEEB" }, // Azul cielo
  javier: { name: "de Javier", color: "#FF4500" }, // Naranja fuerte
  matias: { name: "de Matías", color: "#DA70D6" }, // Orquídea
  olivia: { name: "de Olivia", color: "#ADFF2F" }, // Verde lima
  natalia: { name: "de Natalia", color: "#FF8C00" }, // Naranja oscuro
  jeremias: { name: "de Jeremías", color: "#8A2BE2" }, // Azul violeta
  mariajesus: { name: "de María Jesús", color: "#DC143C" }, // Rojo cereza
  marta: { name: "de Marta", color: "#FF00FF" }, // Magenta
  andres: { name: "de Andrés", color: "#20B2AA" }, // Verde azulado
  luciano: { name: "de Luciano", color: "#32CD32" }, // Verde lima oscuro
  aylen: { name: "de Aylén", color: "#9932CC" }, // Púrpura oscuro
  dylan: { name: "de Dylan", color: "#00BFFF" }, // Azul profundo
  alae: { name: "de Alaé", color: "#F08080" }, // Rojo coral
};

const claveEncontrada = Object.keys(contenidos).find(
  (key) => normalizeString(key) === acceso
);

if (claveEncontrada) {
  document.getElementById("name").innerText = contenidos[claveEncontrada].name;
  document.getElementById("main").style.backgroundColor =
    contenidos[claveEncontrada].color;
  document.getElementById("image1").style.display = "none";
  document.getElementById("image2").src = `./drawings/${claveEncontrada}.jpeg`;
  document.getElementById(
    "image2"
  ).alt = `El poder de ${contenidos[claveEncontrada].name}`;
  document.getElementById("image2").style.filter = "invert(0)";
} else {
  document.getElementById("name").innerText = acceso ? `de ${acceso}` : "";
}

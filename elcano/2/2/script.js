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
  ashley: { name: "de Ashley", color: "#FFB6C1" }, // Rosa claro
  rita: { name: "de Rita", color: "#ADD8E6" }, // Azul claro
  nathaly: { name: "de Nathaly", color: "#20B2AA" }, // Verde azulado
  jadel: { name: "de Jadel", color: "#D8BFD8" }, // Lavanda
  anas: { name: "de Anas", color: "#FFA07A" }, // Salmón claro
  emma: { name: "de Emma", color: "#66CDAA" }, // Verde mediano
  santiago: { name: "de Santiago", color: "#BA55D3" }, // Orquídea medio
  raider: { name: "de Raider", color: "#CD5C5C" }, // Rojo indio
  saffwana: { name: "de Saffwana", color: "#F0E68C" }, // Caqui claro
  dafne: { name: "de Dafne", color: "#E9967A" }, // Salmón oscuro
  sheyla: { name: "de Sheyla", color: "#AFEEEE" }, // Azul pálido
  anran: { name: "de Anran", color: "#DAA520" }, // Dorado oscuro
  barae: { name: "de Barae", color: "#87CEFA" }, // Azul cielo claro
  jose: { name: "de José", color: "#C71585" }, // Rosa fuerte oscuro
  mehjabin: { name: "de Mehjabin", color: "#5F9EA0" }, // Verde cadete
  gabriela: { name: "de Gabriela", color: "#FA8072" }, // Salmón
  jorgan: { name: "de Jorgan", color: "#A0522D" }, // Marrón rojizo
  jordan: { name: "de Jordan", color: "#A0522D" }, // Marrón rojizo
  lucas: { name: "de Lucas", color: "#FF8C00" }, // Naranja oscuro
  alan: { name: "de Alan", color: "#7B68EE" }, // Azul pizarra medio
  katalina: { name: "de Katalina", color: "#FFDAB9" }, // Melocotón
  abigail: { name: "de Abigail", color: "#00CED1" }, // Turquesa oscuro
  ivan: { name: "de Iván", color: "#DC143C" }, // Carmesí
  marcos: { name: "de Marcos", color: "#00FA9A" }, // Verde primavera medio
  noemi: { name: "de Noemí", color: "#B22222" }, // Rojo ladrillo
  alaia: { name: "de Alaia", color: "#DB7093" }, // Rosa pálido
  vanessa: { name: "de Vanessa", color: "#4682B4" }, // Azul acero
  yandira: { name: "de Yadira", color: "#4682B4" }, // Azul acero
  sarayma: { name: "de Sarayma", color: "#9ACD32" }, // Verde amarillento
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
  ).alt = `El poder ${contenidos[claveEncontrada].name}`;
  document.getElementById("image2").style.filter = "invert(0)";
} else {
  document.getElementById("name").innerText = acceso ? `de ${acceso}` : "";
}

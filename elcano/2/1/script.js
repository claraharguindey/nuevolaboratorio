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
  munir: { name: "de Munir", color: "#F4A460" }, // Marrón arena
  ianIsmael: { name: "de Ian Ismael", color: "#8FBC8F" }, // Verde mar oscuro
  yanis: { name: "de Yanis", color: "#E6E6FA" }, // Lavanda claro
  valentina: { name: "de Valentina", color: "#FF69B4" }, // Rosa fuerte
  lizzie: { name: "de Lizzie", color: "#BC8F8F" }, // Rosa indio
  kixsi: { name: "de Kixsi", color: "#9370DB" }, // Púrpura medio
  naia: { name: "de Naia", color: "#98FB98" }, // Verde claro
  teo: { name: "de Teo", color: "#40E0D0" }, // Turquesa
  david: { name: "de David", color: "#4169E1" }, // Azul real
  mireya: { name: "de Mireya", color: "#FFB347" }, // Naranja pastel
  harsirat: { name: "de Harsirat", color: "#C0C0C0" }, // Plateado
  elena: { name: "de Elena", color: "#FF7F50" }, // Coral
  lilia: { name: "de Lilia", color: "#F5DEB3" }, // Trigo
  sophia: { name: "de Sophia", color: "#EE82EE" }, // Violeta
  alejandra: { name: "de Alejandra", color: "#FF6347" }, // Rojo tomate
  lucas: { name: "de Lucas", color: "#FF8C00" }, // Naranja oscuro (ya usado)
  sidi: { name: "de Sidi", color: "#A9A9A9" }, // Gris oscuro
  santiago: { name: "de Santiago", color: "#BA55D3" }, // Orquídea medio (ya usado)
  dulce: { name: "de Dulce", color: "#FFE4E1" }, // Rosa neblina
  chloe: { name: "de Chloe", color: "#6A5ACD" }, // Azul pizarra
  nicolas: { name: "de Nicolás", color: "#00FF7F" }, // Verde primavera
  naomi: { name: "de Naomi", color: "#FAFAD2" }, // Amarillo claro
  antonella: { name: "de Antonella", color: "#FFC0CB" }, // Rosa
  iani: { name: "de  Ian", color: "#BDB76B" }, // Caqui oscuro
  alessandro: { name: "de  Alessandro", color: "#BDB76B" }, // Caqui oscuro
  miguel: { name: "de Miguel", color: "#00BFFF" },
  abigail: { name: "de Abigail", color: "#00BFFF" }, // Azul profundo
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

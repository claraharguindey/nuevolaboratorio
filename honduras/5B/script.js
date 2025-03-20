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
  celeen: { name: "de Celeen" },
  roosmariel: { name: "de Roosmariel" },
  valentina: { name: "de Valentina" },
  jenko: { name: "de Jenko" },
  jesus: { name: "de Jesús" },
  daray: { name: "de Daray" },
  andree: { name: "de Andree" },
  barbara: { name: "de Bárbara" },
  ana: { name: "de Ana" },
  isabel: { name: "de Isabel" },
  yanira: { name: "de Yanira" },
  esther: { name: "de Esther" },
  kilino: { name: "de Kilino" },
  genesis: { name: "de Génesis" },
  rocio: { name: "de Rocío" },
  ricardo: { name: "de Ricardo" },
  fernanda: { name: "de Fernanda" },
  juan: { name: "de Juan" },
  yusra: { name: "de Yusra" },
  samara: { name: "de Samara" },
  constan: { name: "de Constan" },
  joni: { name: "de Joni" },
  victoria: { name: "de Victoria" },
  mari: { name: "de Mari" },
  adrian: { name: "de Adrián" },
};

const claveEncontrada = Object.keys(contenidos).find(
  (key) => normalizeString(key) === acceso
);

document.getElementById("name").innerText =
  claveEncontrada ? contenidos[claveEncontrada].name : acceso ? `de ${acceso}` : "";

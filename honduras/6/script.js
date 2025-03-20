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
  vivian: { name: "de Vivian" },
  nestor: { name: "de Néstor" },
  nasr: { name: "de Nasr" },
  israel: { name: "de Israel" },
  nicanor: { name: "de Nicanor" },
  ahinoa: { name: "de Ainhoa" },
  bella: { name: "de Bella" },
  luciana: { name: "de Luciana" },
  mafe: { name: "de Mafê" },
  thiago: { name: "de Thiago" },
  javier: { name: "de Javier" },
  matias: { name: "de Matías" },
  olivia: { name: "de Olivia" },
  natalia: { name: "de Natalia" },
  jeremias: { name: "de Jeremías" },
  mariajesus: { name: "de María Jesús" },
  marta: { name: "de Marta" },
  andres: { name: "de Andrés" },
  luciano: { name: "de Luciano" },
  aylen: { name: "de Aylén" },
  dylan: { name: "de Dylan" },
  alae: { name: "de Alaé" },
};

const claveEncontrada = Object.keys(contenidos).find(
  (key) => normalizeString(key) === acceso
);

document.getElementById("name").innerText =
  claveEncontrada ? contenidos[claveEncontrada].name : acceso ? `de ${acceso}` : "";

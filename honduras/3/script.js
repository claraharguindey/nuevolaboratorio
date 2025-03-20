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
  ritaj: { name: "de Ritaj" },
  manha: { name: "de Manha" },
  celia: { name: "de Celia" },
  evaluna: { name: "de Eva Luna" },
  esmeralda: { name: "de Esmeralda" },
  jose: { name: "de José" },
  nicanor: { name: "de Nicanor" },
  pedro: { name: "de Pedro" },
  hector: { name: "de Héctor" },
  zyad: { name: "de Zyad" },
  imran: { name: "de Imran" },
  sanou: { name: "de Sanou" },
  mila: { name: "de Mila" },
  javi: { name: "de Javi" },
  cinthia: { name: "de Cinthia" },
};

const claveEncontrada = Object.keys(contenidos).find(
  (key) => normalizeString(key) === acceso
);

document.getElementById("name").innerText = claveEncontrada
  ? contenidos[claveEncontrada].name
  : acceso
  ? `de ${acceso}`
  : "";

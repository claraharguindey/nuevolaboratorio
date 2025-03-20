const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
};

const params = new URLSearchParams(window.location.search);
let acceso = params.get("name");
acceso = normalizeString(acceso);

const contenidos = {
  vivian: { name: "de Vivian" },
  nestor: { name: "de Nestor" },
  nasr: { name: "de Nasr" },
  israe: { name: "de Israe" },
  nicanor: { name: "de Nicanor" },
  ahinoa: { name: "de Ahinoa" },
  bella: { name: "de Bella" },
  luciana: { name: "de Luciana" },
  mafe: { name: "de Mafe" },
  thiago: { name: "de Thiago" },
  javier: { name: "de Javier" },
  matias: { name: "de Matias" },
  olivia: { name: "de Olivia" },
  natalia: { name: "de Natalia" },
  jeremias: { name: "de Jeremias" },
  mariajesus: { name: "de Maria Jesus" },
  marta: { name: "de Marta" },
  andres: { name: "de Andres" },
  luciano: { name: "de Luciano" },
  aylen: { name: "de Aylen" },
  dylan: { name: "de Dylan" },
  alae: { name: "de Alae" },
};

if (contenidos[acceso]) {
  document.getElementById("name").innerText = contenidos[acceso].name;
} else {
  acceso
    ? (document.getElementById("name").innerText = `de ${acceso}`)
    : (document.getElementById("name").innerText = "");
}

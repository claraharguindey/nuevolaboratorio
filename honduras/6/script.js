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
  Nestor: { name: "de Nestor" },
  Nasr: { name: "de Nasr" },
  Israe: { name: "de Israe" },
  Nicanor: { name: "de Nicanor" },
  Ahinoa: { name: "de Ahinoa" },
  Bella: { name: "de Bella" },
  Luciana: { name: "de Luciana" },
  Mafe: { name: "de Mafe" },
  Thiago: { name: "de Thiago" },
  Javier: { name: "de Javier" },
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

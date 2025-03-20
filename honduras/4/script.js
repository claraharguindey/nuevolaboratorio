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
  aday: { name: "de Aday" },
  alma: { name: "de Alma" },
  axel: { name: "de Axel" },
  basma: { name: "de Basma" },
  brianna: { name: "de Brianna" },
  daniel: { name: "de Daniel" },
  daniela: { name: "de Daniela" },
  estrella: { name: "de Estrella" },
  joselorenzo: { name: "de Jose Lorenzo" },
  lucas: { name: "de Lucas" },
  maricarmen: { name: "de Mari Carmen" },
  miguel: { name: "de Miguel" },
  omnia: { name: "de Omnia" },
  ricky: { name: "de Ricky" },
  ruth: { name: "de Ruth" },
  saray: { name: "de Saray" },
  yareli: { name: "de Yareli" },
};

if (contenidos[acceso]) {
  document.getElementById("name").innerText = contenidos[acceso].name;
} else {
  acceso
    ? (document.getElementById("name").innerText = `de ${acceso}`)
    : (document.getElementById("name").innerText = "");
}

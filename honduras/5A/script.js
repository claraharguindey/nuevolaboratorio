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
  daniela: { name: "de Daniela" },
  jeferson: { name: "de Jeferson" },
  naiara: { name: "de Naiara" },
  gabriela: { name: "de Gabriela" },
  indira: { name: "de Indira" },
  juan: { name: "de Juan" },
  carlos: { name: "de Carlos" },
  thaily: { name: "de Thaily" },
  santiago: { name: "de Santiago" },
  samira: { name: "de Samira" },
  arryana: { name: "de Arryana" },
  isabella: { name: "de Isabella" },
  cintia: { name: "de Cintia" },
  joel: { name: "de Joel" },
  jaquelin: { name: "de Jaquelín" },
  daniel: { name: "de Daniel" },
  karelly: { name: "de Karelly" },
  damaris: { name: "de Dámaris" },
  rosi: { name: "de Rosi" },
  luisa: { name: "de Luisa" },
  joscar: { name: "de Joscar" },
  gia: { name: "de Gía" },
  bernardo: { name: "de Bernardo" },
  yadira: { name: "de Yadira" },
  englez: { name: "de Englez" },
};

const claveEncontrada = Object.keys(contenidos).find(
  (key) => normalizeString(key) === acceso
);

document.getElementById("name").innerText =
  claveEncontrada ? contenidos[claveEncontrada].name : acceso ? `de ${acceso}` : "";

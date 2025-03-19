const params = new URLSearchParams(window.location.search);
const acceso = params.get("name");

const contenidos = {
  maria: { name: "de María Belen" },
  estela: { name: "de Estela" },
  sonia: { name: "de Sonia" },
  anaisabel: { name: "de Ana Isabel" },
  cristinaf: { name: "de Cristina Fernández" },
  cristinab: { name: "de Cristina Blanco" },
  daniel: { name: "de Daniel" },
  clara: { name: "de Clara" },
  laura: { name: "de Laura" },
};

if (contenidos[acceso]) {
  document.getElementById("name").innerText = contenidos[acceso].name;
} else {
  acceso
    ? (document.getElementById("name").innerText = `de ${acceso}`)
    : (document.getElementById("name").innerText = "");
}

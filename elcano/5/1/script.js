const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
};

// Descripciones poéticas por tipo de piedra
const rockTypes = {
  ignea: {
    label: "Ígnea",
    description:
      "Este tipo de piedra nace del fuego profundo de la Tierra, cuando el magma se enfría lentamente hasta convertirse en cristal. Su esencia guarda la fuerza de los volcanes y el misterio de lo que arde en silencio bajo nuestros pies.",
  },
  sedimentaria: {
    label: "Sedimentaria",
    description:
      "Este tipo de piedra se forma con paciencia infinita, capa sobre capa de historia, arena y tiempo. A menudo guarda secretos del pasado: fósiles, huellas, memorias atrapadas en la roca como si fueran sueños petrificados.",
  },
  metamorfica: {
    label: "Metamórfica",
    description:
      "Este tipo de piedra ha vivido transformaciones profundas. Bajo la presión del mundo y el calor del cambio, renace en formas nuevas, con vetas y texturas que cuentan su viaje. Es una piedra que ha aprendido a ser bella en su evolución.",
  },
};

const contenidos = {
  estrella: {
    name: "de Estrella",
    piedraNombre: "Rubí",
    piedraTipo: "metamorfica",
  },
  aranza: {
    name: "de Aranza",
    piedraNombre: "Ámbar",
    piedraTipo: "sedimentaria",
  },
  sara: {
    name: "de Sara",
    piedraNombre: "Cuarzo Rosa",
    piedraTipo: "ignea",
  },
  carlos: {
    name: "de Carlos",
    piedraNombre: "Aguamarina",
    piedraTipo: "ignea",
  },
  diego: {
    name: "de Diego",
    piedraNombre: "Aguamarina",
    piedraTipo: "ignea",
  },
  abraham: {
    name: "de Abraham",
    piedraNombre: "Esmeralda",
    piedraTipo: "metamorfica",
  },
  aya: {
    name: "de Aya",
    piedraNombre: "Amatista",
    piedraTipo: "ignea",
  },
  emmanuel: {
    name: "de Emmanuel",
    piedraNombre: "Rubí",
    piedraTipo: "metamorfica",
  },
  carlos2: {
    name: "de Carlos",
    piedraNombre: "Ámbar",
    piedraTipo: "sedimentaria",
  },
  andrea: {
    name: "de Andrea",
    piedraNombre: "Cuarzo Rosa",
    piedraTipo: "ignea",
  },
  brandi: {
    name: "de Brandi",
    piedraNombre: "Aguamarina",
    piedraTipo: "ignea",
  },
  juanAli: {
    name: "de Juan Ali",
    piedraNombre: "Esmeralda",
    piedraTipo: "metamorfica",
  },
  alexia: {
    name: "de Alexia",
    piedraNombre: "Amatista",
    piedraTipo: "ignea",
  },
  nicol: {
    name: "de Nicol",
    piedraNombre: "Rubí",
    piedraTipo: "metamorfica",
  },
  danielle: {
    name: "de Danielle",
    piedraNombre: "Ámbar",
    piedraTipo: "sedimentaria",
  },
  ahinara: {
    name: "de Ahinara",
    piedraNombre: "Cuarzo Rosa",
    piedraTipo: "ignea",
  },
  dylan: {
    name: "de Dylan",
    piedraNombre: "Aguamarina",
    piedraTipo: "ignea",
  },
  katherine: {
    name: "de Katherine",
    piedraNombre: "Esmeralda",
    piedraTipo: "metamorfica",
  },
  amaia: {
    name: "de Amaia",
    piedraNombre: "Amatista",
    piedraTipo: "ignea",
  },
  jackson: {
    name: "de Jackson",
    piedraNombre: "Rubí",
    piedraTipo: "metamorfica",
  },
  anaMaria: {
    name: "de Ana María",
    piedraNombre: "Ámbar",
    piedraTipo: "sedimentaria",
  },
  mar: {
    name: "de Mar",
    piedraNombre: "Cuarzo Rosa",
    piedraTipo: "ignea",
  },
  adrian: {
    name: "de Adrián",
    piedraNombre: "Aguamarina",
    piedraTipo: "ignea",
  },
  angel: {
    name: "de Ángel",
    piedraNombre: "Esmeralda",
    piedraTipo: "metamorfica",
  },
};

const params = new URLSearchParams(window.location.search);
let acceso = params.get("name");

if (acceso) {
  acceso = normalizeString(acceso.trim());
  const data = contenidos[acceso];

  if (data) {
    const typeData = rockTypes[data.piedraTipo];

    document.getElementById("info").style.display = "block";
    document.getElementById("image1").style.width = "200px";
    document.getElementById("image1").style.margin = "12px";
    document.getElementById("image2").style.display = "none";
    document.getElementById("name").textContent = data.name;
    document.querySelector(".piedra-name").textContent = `${data.piedraNombre}`;
    document.querySelector(".piedra-type").textContent = `${typeData.label}`;
    document.querySelector(".piedra-description").textContent =
      typeData.description;
  }
}

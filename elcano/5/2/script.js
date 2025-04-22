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
  amir: {
    name: "de Amir",
    piedraNombre: "Afrodita",
    piedraTipo: "metamorfica",
  },
  jesus: {
    name: "de Jesús",
    piedraNombre: "Afrodita",
    piedraTipo: "ignea",
  },
  cristopher: {
    name: "de Cristopher",
    piedraNombre: "Lunática",
    piedraTipo: "metamorfica",
  },
  malumy: {
    name: "de Malumy",
    piedraNombre: "Solecita",
    piedraTipo: "sedimentaria",
  },
  nahomy: {
    name: "de Nahomy",
    piedraNombre: "Solecita",
    piedraTipo: "sedimentaria",
  },
  anastasia: {
    name: "de Anastasia",
    piedraNombre: "Marverita",
    piedraTipo: "ignea",
  },
  nayara: {
    name: "de Nayara",
    piedraNombre: "Cuernita",
    piedraTipo: "sedimentaria",
  },
  lara: {
    name: "de Lara",
    piedraNombre: "Abejatita",
    piedraTipo: "ignea",
  },
  maria: {
    name: "de Maria",
    piedraNombre: "Terrenita",
    piedraTipo: "sedimentaria",
  },
  rafael: {
    name: "de Rafael",
    piedraNombre: "Brr brr brr patapim",
    piedraTipo: "ignea",
  },
  sanaira: {
    name: "de Sanaira",
    piedraNombre: "Jadita",
    piedraTipo: "metamorfica",
  },
  ainhoa: {
    name: "de Ainhoa",
    piedraNombre: "Rubita",
    piedraTipo: "sedimentaria",
  },
  loany: {
    name: "de Loany",
    piedraNombre: "Piedra Luz de Luna",
    piedraTipo: "metamorfica",
  },
  darnell: {
    name: "de Darnell",
    piedraNombre: "Cuarita",
    piedraTipo: "sedimentaria",
  },
  edriclogan: {
    name: "de Edric Logan",
    piedraNombre: "Tienrita",
    piedraTipo: "sedimentaria",
  },
  brenda: {
    name: "de Brenda",
    piedraNombre: "Lunita",
    piedraTipo: "metamorfica",
  },
  mathias: {
    name: "de Mathias",
    piedraNombre: "La vatita",
    piedraTipo: "metamorfica",
  },
  bruno: {
    name: "de Bruno",
    piedraNombre: "Meteorita",
    piedraTipo: "ignea",
  },
  seydi: {
    name: "de Seydi",
    piedraNombre: "Adamantium",
    piedraTipo: "sedimentaria",
  },
  maayane: {
    name: "de Maayane",
    piedraNombre: "San Marino estalactita",
    piedraTipo: "sedimentaria",
  },
  esmeralda: {
    name: "de Esmeralda",
    piedraNombre: "Galita",
    piedraTipo: "sedimentaria",
  },
  victoria: {
    name: "de Victoria",
    piedraNombre: "la piedra de los mil tralarelos",
    piedraTipo: "metamorfica",
  },
  nathalie: {
    name: "de Nathalie",
    piedraNombre: "Bomboclat",
    piedraTipo: "sedimentaria",
  },
  valentina: {
    name: "de Valentina",
    piedraNombre: "",
    piedraTipo: "sedimentaria",
  },
  aitor: {
    name: "de Aitor",
    piedraNombre: "",
    piedraTipo: "sedimentaria",
  },
  allison: {
    name: "de Allison",
    piedraNombre: "",
    piedraTipo: "sedimentaria",
  },
  mijael: {
    name: "de Mijael",
    piedraNombre: "",
    piedraTipo: "metamorfica",
  },
  kico: {
    name: "de Kico",
    piedraNombre: "",
    piedraTipo: "sedimentaria",
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

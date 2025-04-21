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
    description: "Este tipo de piedra nace del fuego profundo de la Tierra, cuando el magma se enfría lentamente hasta convertirse en cristal. Su esencia guarda la fuerza de los volcanes y el misterio de lo que arde en silencio bajo nuestros pies."
  },
  sedimentaria: {
    label: "Sedimentaria",
    description: "Este tipo de piedra se forma con paciencia infinita, capa sobre capa de historia, arena y tiempo. A menudo guarda secretos del pasado: fósiles, huellas, memorias atrapadas en la roca como si fueran sueños petrificados."
  },
  metamorfica: {
    label: "Metamórfica",
    description: "Este tipo de piedra ha vivido transformaciones profundas. Bajo la presión del mundo y el calor del cambio, renace en formas nuevas, con vetas y texturas que cuentan su viaje. Es una piedra que ha aprendido a ser bella en su evolución."
  }
};

const contenidos = {
  ritaj: { 
    name: "de Ritaj", 
    piedraNombre: "Rubí", 
    piedraTipo: "metamorfica"
  },
  manha: { 
    name: "de Manha", 
    piedraNombre: "Ámbar", 
    piedraTipo: "sedimentaria"
  },
  celia: { 
    name: "de Celia", 
    piedraNombre: "Cuarzo Rosa", 
    piedraTipo: "ignea"
  },
  evaluna: { 
    name: "de Eva Luna", 
    piedraNombre: "Aguamarina", 
    piedraTipo: "ignea"
  },
  esmeralda: { 
    name: "de Esmeralda", 
    piedraNombre: "Esmeralda", 
    piedraTipo: "metamorfica"
  },
  jose: { 
    name: "de José", 
    piedraNombre: "Amatista", 
    piedraTipo: "ignea"
  }
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
    document.querySelector(".piedra-description").textContent = typeData.description;
  }
}

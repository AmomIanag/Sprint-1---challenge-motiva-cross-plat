export const indicadores = [
  {
    id: 1,
    quantidade: 12,
    nome: "Crítico",
    cor: "#ED2427",
  },
  {
    id: 2,
    quantidade: 8,
    nome: "Atenção",
    cor: "#FFC400",
  },
  {
    id: 3,
    quantidade: 12,
    nome: "Moderado",
    cor: "#17A94F",
  },
];

export const pontosMapa = [
  {
    id: 1,
    km: "KM 84",
    descricao: "Placa encoberta",
    imagem: require("../../assets/drone1.png"),
  },
  {
    id: 2,
    km: "KM 120",
    descricao: "Vegetação grande",
    imagem: require("../../assets/drone2.png"),
  },
  {
    id: 3,
    km: "KM 284",
    descricao: "Placa encoberta",
    imagem: require("../../assets/drone3.png"),
  },
];

export const alertasIniciais = [
  {
    id: 1,
    km: "KM 84",
    titulo: "URGENTE",
    descricao: "Poda necessária para liberação de placa de curva.",
    tipo: "critico",
  },
  {
    id: 2,
    km: "KM 112",
    titulo: "ATENÇÃO",
    descricao: "Canaleta de drenagem obstruída por vegetação.",
    tipo: "atencao",
  },
];
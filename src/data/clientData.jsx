import api from "@/pages/services/api";

async function getUser() {
  try {
    const response = await api.get("/api/users");
    const users = response.data;
    const valor = users.length;
    return valor;
  } catch (err) {
    console.error("Erro na requisição:", err);
    return 0;
  }
}
{/*Nessa parte tentamos implementar quantos usuários temos no banco de dados, inscrições validas..., mas não conseguimos implementar corretamente, por isso deixamos a função como está.*/}
getUser().then((valor) => {
  console.log(valor); 
});

export let stats = [
  {
    id: 1,
    title: "Total de inscrições",
    percentage: 20,  
    icon: "/images/inscription.png",
    chartBg: "#A061F6",
  },
  {
    id: 2,
    title: "Inscrições validadas",
    percentage: 55,
    icon: "/images/up-arrow.png",
    chartBg: "#4EC579",
  },
  {
    id: 3,
    title: "Inscrições negadas",
    percentage: 20,
    icon: "/images/down-arrow.png",
    chartBg: "#FF6370",
  },
  {
    id: 4,
    title: "Em análise",
    percentage: 25,
    icon: "/images/rotate-arrow.png",
    chartBg: "#F4CC0A",
  },
];
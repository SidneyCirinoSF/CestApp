import { BsArrowDown, BsArrowUp, BsArrowClockwise, BsCardList  } from "react-icons/bs";


export const stats = [
  {
    id: 1,
    title: "Total de inscrições",
    percentage: 100,
    icon: <BsCardList />,
    chartBg: "#A061F6",
  },
  {
    id: 2,
    title: "Inscrições validadas",
    percentage: 55,
    icon: <BsArrowUp />,
    chartBg: "#4EC579",
  },
  {
    id: 3,
    title: "Inscrições negadas",
    percentage: 20,
    icon: <BsArrowDown />,
    chartBg: "#FF6370",
  },
  {
    id: 4,
    title: "Em análise",
    percentage: 25,
    icon: <BsArrowClockwise />,
    chartBg: "#F4CC0A",
  },
];
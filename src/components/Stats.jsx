import { stats } from "../data/clientData";
import MedidorGrafico from "./MedidorGrafico";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {stats.map(({ id, title, percentage, icon, iconBg, chartBg }) => (
        <div className="text-center rounded-xl bg-white shadow p-6" key={id}>
          <div className="relative flex flex-col items-center">
            {/* Ícone centralizado no topo do gráfico */}
            <div
              className="absolute top-[12px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: iconBg }}
            >
              <img src={icon} alt="" className="w-6 h-6 object-contain" />
            </div>

            {/* Espaço para o ícone não colidir com o título */}
            <div className="mt-14">
              <h2 className="font-semibold text-gray-700">{title}</h2>
            </div>

            {/* Gráfico */}
            <div className="mt-4">
              <MedidorGrafico percentage={percentage} chartBg={chartBg} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

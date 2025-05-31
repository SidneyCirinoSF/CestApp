import { stats } from "../data/clientData";
import MedidorGrafico from "./MedidorGrafico";


const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {stats.map(({ id, title, percentage, icon, iconBg, chartBg }) => (
        <div
          className="text-center rounded-xl bg-white shadow p-6"
          key={id}
        >
          <div
            className="mx-auto flex items-center justify-center w-12 h-12 rounded-full"
            style={{ backgroundColor: iconBg }}
          >
            <img src={icon} alt="" width={24} />
          </div>
          <h2 className="mt-4 font-semibold text-gray-700">{title}</h2>
          <div className="mt-6">
            <MedidorGrafico percentage={percentage} chartBg={chartBg} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

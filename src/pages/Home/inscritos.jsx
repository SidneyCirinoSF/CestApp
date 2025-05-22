import "./style.css";
import Sidebar from "../../components/SideBar";

function Inscritos() {
  return (
    <>
      <>
        <div className="flex fixed top-0 left-0 h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 p-4 h-screen w-screen bg-[linear-gradient(135deg,_#74ebd5,_#9face6)]">
            PESQUISAR INSCRITOS
            </div>
        </div>
      </>
    </>
  );
}

export default Inscritos;

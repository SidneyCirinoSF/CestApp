import "./style.css";
import Sidebar from "../../components/SideBar";

function Settings() {
  return (
    <>
      <>
        <div className="flex fixed top-0 left-0 h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 p-4 h-screen w-screen bg-[linear-gradient(135deg,_#74ebd5,_#9face6)]">
            CONFIGS - ALTERAR DADOS/LOGOUT
            </div>
        </div>
      </>
    </>
  );
}

export default Settings;

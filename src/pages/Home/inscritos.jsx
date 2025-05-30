import "./style.css";
import Sidebar from "../../components/SideBar";
import Grid from "../../components/Grid";

function Inscritos() {
  return (
    <div className="flex h-screen">
      {/* Sidebar fixa à esquerda */}
      <aside className="flex w-64 h-screen fixed top-0 left-0 text-white z-50">
        <Sidebar />
      </aside>

      {/* Main content (com margem esquerda para compensar a sidebar) */}
      <main
        className="h-screen p-4 overflow-hidden box-border ml-64"
        style={{ width: 'calc((100vw - 256px) * 0.9)' }}
      >
        <div className="bg-white w-full px-6 md:px-20 py-10 mx-auto rounded-2xl shadow-md overflow-hidden box-border">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
            Inscritos
          </h1>
          <Grid />
        </div>
      </main>
    </div>
  );
}

export default Inscritos;

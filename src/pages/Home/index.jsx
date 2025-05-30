import Sidebar from "../../components/SideBar";
import Stats from "../../components/Stats";
import "./style.css";

function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar fixa à esquerda */}
      <aside className="flex w-64 h-screen fixed top-0 left-0 text-white z-50">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 h-screen overflow-hidden box-border">
        <div className="w-full max-w-6xl px-6 md:px-20 py-10 mx-auto bg-[linear-gradient(135deg,_#74ebd5,_#9face6)] rounded-2xl shadow-md overflow-hidden box-border">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-10">Dashboard</h1>

          <Stats />
        </div>
      </main>
    </div>
  );
}

export default Home;

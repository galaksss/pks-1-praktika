import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const SidebarLayout: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex h-screen">
      <aside className="w-52 bg-blue-900 p-4 flex flex-col justify-between">
        <div className="">
          <h2 className="font-bold text-lg mb-5">Система Контроля</h2>
          <nav className="flex flex-col">
            <ul className="space-y-1">
              <Link to={"defects"}>
                <li className="hover:underline cursor-pointer">Дефекты</li>
              </Link>
              <Link to={"reports"}>
                <li className="hover:underline cursor-pointer">Отчеты</li>
              </Link>
            </ul>
          </nav>
        </div>
        <Link to={"profile/id"}>
          <div className="relative mb-20">
            <div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} className="flex items-center">
              <img src="/user-icon.png" alt="" className="w-7" />
              <h3 className="ml-1">Иван (Инженер)</h3>
            </div>
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-gray-700 text-white text-xs rounded px-2 py-1 shadow-lg whitespace-nowrap z-10 transition-opacity duration-300 ${showTooltip ? "opacity-100" : "opacity-0"}`}>Профиль</div>
          </div>
        </Link>
      </aside>
      <main className="flex-1 bg-gray-800 p-1">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;

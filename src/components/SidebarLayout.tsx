import { Link, Outlet } from "react-router-dom";

const SidebarLayout: React.FC = () => {
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
        <div className="">
          <Link to={"profile/id"}>
            <div className="flex items-center relative">
              <img src="/user-icon.png" alt="" className="w-7" />
              <h3 className="ml-1">Иван (Инженер)</h3>
              {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Профиль
              </div> */}
            </div>
          </Link>
        </div>
      </aside>
      <main className="flex-1 bg-gray-800 p-1">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;

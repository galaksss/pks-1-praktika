import { Outlet } from "react-router-dom";

const SidebarLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-52 bg-blue-900 text-white p-4">
        <h2 className="font-bold text-lg mb-5">Система Контроля</h2>
        <nav className="flex flex-col space-y-2">
          <a href="" className="hover:underline">Дефекты</a>
          <a href="" className="hover:underline">Отчеты</a>
        </nav>
      </aside>
        <main className="flex-1 bg-gray-800 p-1">
          <Outlet />
        </main>
    </div>
  )
}

export default SidebarLayout;

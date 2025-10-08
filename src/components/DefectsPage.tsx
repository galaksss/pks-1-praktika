import { Link } from "react-router-dom";
import SearchIcon from '/close.svg'
const DefectsPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Дефекты</h1>



      <div className="flex justify-between">
        <Link to={"newDefect"}>
          <button className="bg-blue-600 px-3 py-1 rounded mb-4 cursor-pointer hover:bg-blue-700 font-semibold">Новый дефект</button>
          <SearchIcon />
        </Link>

        
        <div className="">
          <input type="text" className="bg-gray-600 rounded w-130 px-3 py-1" />
          <img src="/close.svg" alt="" className=""/>
        </div>


        <div className="font-semibold">
          <label className="mr-1">Сортировка</label>
          <select className="bg-gray-600 rounded">
            <option value="">по приоритету</option>
            <option value="">по срокам</option>
          </select>












        </div>
      </div>
      <div className="space-y-3">
        <Link to={"/defects/2"} className="block">
          <div className="border p-4 rounded shadow bg-green-800 font-semibold">
            <h2 className="">Лопнула труба в 3 помещении</h2>
            <p>
              Статус: <span className="text-green-300">Исправлено</span>
            </p>
          </div>
        </Link>
        <Link to={"/defects/2"} className="block">
          <div className="border p-4 rounded shadow bg-yellow-800 font-semibold">
            <h2 className="">Протечка на крыше</h2>
            <p>
              Статус: <span className="text-yellow-300">В работе</span>
            </p>
          </div>
        </Link>
        <Link to={"/defects/2"} className="block">
          <div className="border p-4 rounded shadow bg-red-800 font-semibold">
            <h2 className="">Не подведено электричество в 1 помещении</h2>
            <p className="">
              Статус: <span className="text-red-300">Не исправлено</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DefectsPage;

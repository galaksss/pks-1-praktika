import { Link } from "react-router-dom";
import { selectDefectsData } from "../redux/defectsSlice";
import { useAppSelector } from "../redux/store";
const DefectsPage: React.FC = () => {
  const { projects } = useAppSelector(selectDefectsData);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Дефекты</h1>

      <div className="flex justify-between">
        <Link to={"newDefect"}>
          <button className="bg-gray-600 px-3 py-1 rounded cursor-pointer font-semibold hover:bg-gray-700">Новый дефект</button>
        </Link>

        <div className="">
          <input placeholder="Найти дефект..." type="text" className="bg-gray-600 rounded w-130 px-3 py-1" />
        </div>

        <div className="font-semibold">
          <label className="mr-1">Сортировка</label>
          <select className="bg-gray-600 rounded">
            <option value="">по приоритету</option>
            <option value="">по срокам</option>
            <option value="">по статусу</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        {items.map((obj, index) => (
          <Link to={`/projects/defects/${obj.id}`}>
            <div className={`border p-4 rounded shadow font-semibold ${(obj.priority === "Низкий" && "bg-green-800") || (obj.priority === "Средний" && "bg-yellow-700") || (obj.priority === "Высокий" && "bg-orange-800") || (obj.priority === "КРИТИЧЕСКИЙ" && "bg-red-900")} ${index < items.length - 1 ? "mb-3" : ""}`}>
              <div className="wrapper relative">
                  <h2 className="">{obj.title}</h2>
                  <p className="font-normal">{obj.description}</p>
                  <button className="absolute bottom-12.5 right-0 bg-blue-600 py-1 px-2 rounded-full text-xs cursor-pointer hover:scale-105 transition-transform duration-300">Редактировать</button>
                  <p>
                    <span className={`absolute right-1 bottom-0 ${(obj.status === "Исправлено" && "text-green-300") || (obj.status === "В работе" && "text-yellow-300") || (obj.status === "Не исправлено" && "text-red-300")}`}>{obj.status}</span>
                  </p>
                  <p>
                    Приоритет: <span className={`${(obj.priority === "Низкий" && "text-green-300") || (obj.priority === "Средний" && "text-yellow-300") || (obj.priority === "Высокий" && "text-red-300") || (obj.priority === "КРИТИЧЕСКИЙ" && "text-red-400")}`}>{obj.priority}</span>
                  </p>
                  {/* <p>
                    Cрок:<span className={`${(obj.priority === "Низкий" && "text-green-300") || (obj.priority === "Средний" && "text-yellow-300") || (obj.priority === "Высокий" && "text-red-300") || (obj.priority === "КРИТИЧЕСКИЙ" && "text-red-400")}`}>{obj.priority}</span>
                  </p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DefectsPage;

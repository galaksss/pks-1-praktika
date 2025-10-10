import { Link } from "react-router-dom";
import { selectDefectsData } from "../redux/defectsSlice";
import { useAppSelector } from "../redux/store";
const DefectsPage: React.FC = () => {
  const { items } = useAppSelector(selectDefectsData);

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
          </select>
        </div>
      </div>
      <div className="mt-5">
        {items.map((obj, index) => (
          <Link to={`/defects/${obj.id}`}>
            <div className={`border p-4 rounded shadow font-semibold ${(obj.status === "Исправлено" && "bg-green-800") || (obj.status === "В работе" && "bg-yellow-800") || (obj.status === "Не исправлено" && "bg-red-800")} ${index < items.length - 1 ? 'mb-3' : ''}`}>
              <h2 className="">{obj.title}</h2>
              <p>
                Статус: <span className={`${(obj.status === "Исправлено" && "text-green-300") || (obj.status === "В работе" && "text-yellow-300") || (obj.status === "Не исправлено" && "text-red-300")}`}>{obj.status}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DefectsPage;

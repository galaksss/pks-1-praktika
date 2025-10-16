import { Link, useParams } from "react-router-dom";
import { selectProjectsData } from "../redux/projectsSlice";
import { useAppSelector } from "../redux/store";
import { useState } from "react";
const DefectsPage: React.FC = () => {
  const { projects } = useAppSelector(selectProjectsData);
  const [ sortType, setSortType ] = useState("");
  const { id } = useParams<{ id: string }>();
  const project = projects.find(project => project.id === id);
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
          <select className="bg-gray-600 rounded cursor-pointer">
            <option value="" onClick={setSortType("priority")}>
              по приоритету
            </option>
            <option value="" onClick={setSortType("date")}>
              по срокам
            </option>
            <option value="" onClick={setSortType("status")}>
              по статусу
            </option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        {project ? (
          project.defects.map((obj, index) => {
            return (
              <Link key={obj.id} to={`/projects/${project.id}/defects/${obj.id}/fullDefect`}>
                <div className={`border p-4 rounded shadow font-semibold ${(obj.priority === "Низкий" && "bg-green-800") || (obj.priority === "Средний" && "bg-yellow-700") || (obj.priority === "Высокий" && "bg-orange-800") || (obj.priority === "КРИТИЧЕСКИЙ" && "bg-red-900")} ${index < project.defects.length - 1 ? "mb-3" : ""}`}>
                  <div className="wrapper relative">
                    <h2 className="">{obj.title}</h2>
                    <p className="font-normal">{obj.description}</p>
                    <button className="absolute bottom-12.5 right-0 bg-blue-600 py-1 px-2 rounded-full text-xs cursor-pointer hover:scale-105 transition-transform duration-300">Редактировать</button>
                    <p>
                      <span className={`rounded-full py-1 px-2 absolute right-0 bottom-0 ${(obj.status === "Исправлено" && "bg-green-200 text-green-600") || (obj.status === "В работе" && "bg-yellow-100 text-yellow-600") || (obj.status === "Не исправлено" && "bg-red-200 text-red-600")}`}>{obj.status}</span>
                    </p>
                    <p>
                      Приоритет: <span className={`${(obj.priority === "Низкий" && "text-green-300") || (obj.priority === "Средний" && "text-yellow-300") || (obj.priority === "Высокий" && "text-red-300") || (obj.priority === "КРИТИЧЕСКИЙ" && "text-red-400")}`}>{obj.priority}</span>
                    </p>
                    <p>
                      Cрок:<span className={`${(obj.priority === "Низкий" && "text-green-300") || (obj.priority === "Средний" && "text-yellow-300") || (obj.priority === "Высокий" && "text-red-300") || (obj.priority === "КРИТИЧЕСКИЙ" && "text-red-400")}`}>{obj.deadline}</span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="text-center py-4">Проект не найден</div>
        )}
      </div>
    </div>
  );
};

export default DefectsPage;

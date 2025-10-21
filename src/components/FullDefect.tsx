import { useParams } from "react-router-dom"
import { useAppSelector } from "../redux/store"
import { selectProjectsData } from "../redux/projectsSlice"
const FullDefectPage: React.FC = () => {
  const params = useParams()
  const projects= useAppSelector(selectProjectsData)
  const project = projects.find((project) => project.id === params.projectId)
  if (!project) {
      return <h1 className="p-70 text-5xl font-semibold">Проект не найден</h1>
  }
  const defect = project.defects.find((defect) => defect.id === params.defectId)
  if (!defect) {
      return <h1 className="p-70 text-5xl font-semibold">Дефект не найден</h1>
  }
  console.log(params)
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Карточка дефекта</h1>
      <p><span className="font-semibold">Название: </span>{defect.title}</p>
      <p><span className="font-semibold">Описание: </span> {defect.description}</p>
      <p className="mb-3"><span className="font-semibold">Создан: </span> {defect.createdAt}</p>
      <div className="border-t border-gray-300 mb-2.5 w-2/3"></div>
      <p><span className="font-semibold">Статус: </span> <span className={`font-semibold ${(defect.status === "Исправлено" && "text-green-300") || (defect.status === "В работе" && "text-yellow-300") || (defect.status === "Простаивает" && "text-red-400")}`}>{defect.status}</span></p>
      <p><span className="font-semibold">Приоритет: </span> <span className={`font-semibold ${(defect.priority === "Низкий" && "text-green-300") || (defect.priority === "Средний" && "text-yellow-300") || (defect.priority === "Высокий" && "text-orange-500") || (defect.priority === "КРИТИЧЕСКИЙ" && "text-red-600")}`}>{defect.priority}</span></p>
      <p><span className="font-semibold">Срок: </span><span className={`font-semibold ${(defect.priority === "Низкий" && "text-green-300") || (defect.priority === "Средний" && "text-yellow-300") || (defect.priority === "Высокий" && "text-orange-500") || (defect.priority === "КРИТИЧЕСКИЙ" && "text-red-600")}`}>до {defect.deadline}</span></p>

      <h1 className="text-xl mt-9 mb-5 font-bold">Комментарии</h1>
      <ul className="ml-6 space-y-3">
        <li className="border rounded-2xl p-4 pr-20 bg-gray-700 w-fit relative"> <span className="text-gray-300 opacity-100 absolute bottom-1.5 right-1 w-16 text-xs">06.10 19:40</span><span className="text-cyan-300">Иван (Инженер):</span> проверю завтра</li>
        <li className="border rounded-2xl p-4 pr-20 bg-gray-700 w-fit relative"> <span className="text-gray-300 opacity-100 absolute bottom-1.5 right-1 w-16 text-xs">06.10 19:44</span><span className="text-cyan-300">Артем (Менеджер):</span> нет, проверишь сегодня</li>
        <li className="border rounded-2xl p-4 pr-20 bg-gray-700 w-fit relative"> <span className="text-gray-300 opacity-100 absolute bottom-1.5 right-1 w-16 text-xs">06.10 19:51</span><span className="text-cyan-300">Иван (Инженер):</span> хорошо</li>
      </ul> 

      <textarea className="border w-full p-2 rounded mt-5"></textarea>
      <button className="bg-blue-600 px-3 py-1 rounded mt-2 hover:bg-blue-700 cursor-pointer">
        Отправить
      </button>
    </div>
  )
}

export default FullDefectPage

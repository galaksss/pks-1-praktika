
const FullDefectPage: React.FC = () => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold mb-2">Карточка дефекта</h1>
      <p><span className="font-semibold">Название:</span> Протечка на крыше</p>
      <p><span className="font-semibold">Описание:</span> Вода течет с крыши во время дождя</p>
      <p><span className="font-semibold">Статус:</span> <span className="text-yellow-300">В работе</span></p>

      <h1 className="text-xl mt-9 mb-5 font-bold">Комментарии</h1>
      <ul className="ml-6 space-y-3">
        <li className="border rounded-2xl p-4 pr-20 bg-gray-700 w-fit relative"> <span className="text-gray-300 opacity-100 absolute bottom-1.5 right-1 w-16 text-xs">06.10 19:40</span><span className="text-cyan-300">Иван (Инженер):</span> проверю завтра</li>
        <li className="border rounded-2xl p-4 pr-20 bg-gray-700 w-fit relative"> <span className="text-gray-300 opacity-100 absolute bottom-1.5 right-1 w-16 text-xs">06.10 19:40</span><span className="text-cyan-300">Артем (Менеджер):</span> нет, проверишь сегодня</li>
        <li className="border rounded-2xl p-4 pr-20 bg-gray-700 w-fit relative"> <span className="text-gray-300 opacity-100 absolute bottom-1.5 right-1 w-16 text-xs">06.10 19:40</span><span className="text-cyan-300">Иван (Инженер):</span> хорошо</li>
      </ul> 

      <textarea className="border w-full p-2 rounded mt-5"></textarea>
      <button className="bg-blue-600 px-3 py-1 rounded mt-2 hover:bg-blue-700 cursor-pointer">
        Отправить
      </button>
    </div>
  )
}

export default FullDefectPage

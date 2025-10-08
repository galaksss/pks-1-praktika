function NewDefectPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Новый дефект</h1>

      <form className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-semibold">Название дефекта</label>
          <input
            type="text"
            placeholder="Например, Протечка крыши"
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Описание</label>
          <textarea
            placeholder="Подробно опишите проблему"
            className="w-full border p-2 rounded h-28 resize-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Приоритет</label>
          <select className="w-full border p-2 rounded">
            <option className="text-black">Низкий</option>
            <option className="text-black">Средний</option>
            <option className="text-black">Высокий</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Исполнитель</label>
          <input
            type="text"
            placeholder="Введите имя исполнителя"
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Срок выполнения</label>
          <input type="text" placeholder="Например, 7 дней" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Вложения (фото)</label>
          <input type="file" className="block" />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Сохранить дефект
        </button>
      </form>
    </div>
  );
}

export default NewDefectPage;

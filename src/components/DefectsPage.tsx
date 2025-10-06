const DefectsPage: React.FC = () => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold mb-4">Дефекты</h1>
      <button className="bg-green-600 px-3 py-1 rounded mb-4 cursor-pointer hover:bg-green-700">Новый дефект</button>
      <div className="space-y-3">
        <div className="border p-4 rounded shadow bg-yellow-800">
          <h2 className="font-semibold">Протечка на крыше</h2>
          <p>
            Статус: <span className="text-yellow-300">В работе</span>
          </p>
        </div>
        <div className="border p-4 rounded shadow bg-yellow-800">
          <h2 className="font-semibold">Лопнула труба в 3 помещении</h2>
          <p>
            Статус: <span className="text-yellow-300">В работе</span>
          </p>
        </div>
        <div className="border p-4 rounded shadow bg-yellow-800">
          <h2 className="font-semibold">Протечка на крыше</h2>
          <p>
            Статус: <span className="text-yellow-300">В работе</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefectsPage;

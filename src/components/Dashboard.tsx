import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Главная панель</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center flex-col bg-blue-800 p-6 rounded-lg shadow-sm border">
          <h3 className="text-2xl font-semibold">Всего проектов</h3>
          <p className="text-4xl font-bold">3</p>
        </div>
        <div className="flex items-center flex-col bg-yellow-700 p-6 rounded-lg shadow-sm border">
          <h3 className="text-2xl font-semibold">Активные дефекты</h3>
          <p className="text-4xl font-bold">4</p>
        </div>
        <div className="flex items-center flex-col bg-red-800 p-6 rounded-lg shadow-sm border">
          <h3 className="text-2xl font-semibold">Критические</h3>
          <p className="text-4xl font-bold">1</p>
        </div>
        <div className="flex items-center flex-col bg-green-700 p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold">Исправлено за неделю</h3>
          <p className="text-4xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

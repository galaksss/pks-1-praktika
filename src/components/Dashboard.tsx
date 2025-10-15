import React from "react";
import { useSelector } from "react-redux";
import { PriorityStatus, selectProjectsData } from "../redux/projectsSlice";

const Dashboard: React.FC = () => {
  const { projects } = useSelector(selectProjectsData);
  let defectsCount = 0;
  projects.forEach(project => {
    defectsCount += project.defects.length;
  });

  let criticalsCount = 0;
  let findedDefects = {};
  let allDefects = [];
  projects.forEach(project => {
    let tempdef;
      tempdef = project.defects.filter((defect) => {
        return defect.priority === PriorityStatus.CRITICAL
      })
      allDefects.push(tempdef)
    });
    allDefects.forEach((arr) => criticalsCount += arr.length)
    console.log(criticalsCount)
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold flex justify-center">Главная панель</h1>
      <h2 className="text-3xl font-bold">Общая статистика</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center flex-col bg-blue-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Всего проектов</h3>
          <p className="text-4xl font-bold">{projects.length}</p>
        </div>
        <div className="flex items-center flex-col bg-yellow-700 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Активные дефекты</h3>
          <p className="text-4xl font-bold">{defectsCount}</p>
        </div>
        <div className="flex items-center flex-col bg-red-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Критические дефекты</h3>
          <p className="text-4xl font-bold">{criticalsCount}</p>
        </div>
        <div className="flex items-center flex-col bg-green-700 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Исправлено за неделю</h3>
          <p className="text-4xl font-bold">12</p>
        </div>
      </div>
      <h2 className="text-3xl font-bold mt-12">Общие показатели</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-fit">
        <div className="border border-slate-500 bg-slate-700 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 flex justify-center">Статусы дефектов</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-red-500 font-medium">Не исправлено</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-yellow-400 font-medium">В работе</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">6</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-400 font-medium">Исправлено</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">4</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-500 bg-slate-700 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Приоритеты дефектов</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-red-500 font-medium">Критические</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-orange-500 font-medium">Высокие</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">6</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-yellow-400 font-medium">Средние</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-400 font-medium">Низкие</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

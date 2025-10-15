import React from "react";
import { Link } from "react-router-dom";
import { selectProjectsData } from "../redux/projectsSlice";
import { useAppSelector } from "../redux/store";

const Projects: React.FC = () => {
  
  const { projects } = useAppSelector(selectProjectsData);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Проекты</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">+ Новый проект</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <Link key={project.id} to={`/projects/${project.id}/defects`} className="bg-slate-700 rounded-lg shadow-sm border border-slate-500 hover:shadow-md transition-shadow flex flex-col group h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Активный</span>
                </div>

                <p className="text-gray-200 mb-2">{project.description}</p>

                <p className="text-gray-300 text-sm mb-4">📍 {project.address}</p>
              </div>
              <div className="flex justify-around text-sm mt-5">
                <div>
                  <span className="text-yellow-500 font-semibold">Дефекты: </span>
                  <span className="text-yellow-500 font-semibold">{project.defectCount}</span>
                </div>
                <div>
                  <span className="text-red-600 font-bold">Критические: </span>
                  <span className="text-red-600 font-bold">{project.criticalDefects}</span>
                </div>
              </div>

              <div className="relative min-h-12 mt-5 border-t border-gray-300 pt-2 pb-2 flex items-center justify-center">
                <span className="absolute bottom-1 text-cyan-400 font-semibold mt-4 group-hover:scale-105 duration-300">Посмотреть дефекты →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

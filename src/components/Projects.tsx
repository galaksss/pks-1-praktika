import React from "react";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const projects = [
    {
      id: "1",
      name: 'Торговый центр "Северный"',
      address: "ул. Строителей, 15",
      startDate: "2024-01-15",
      status: "active",
      description: "Многофункциональный торговый центр с парковкой",
      defectCount: 8,
      criticalDefects: 2,
      defects: [
        {
          id: "1",
          projectId: "1",
          title: "Протечка на крыше в фуд-корте",
          description: "Во время дождя наблюдается протечка в районе фуд-корта, требуется герметизация швов",
          status: "new",
          priority: "high",
          createdAt: "2024-01-20",
          assignedTo: "Иван Петров",
        },
        {
          id: "2",
          projectId: "1",
          title: "Трещина в несущей колонне на 2 этаже",
          description: "Вертикальная трещина шириной 2-3 мм в центральной колонне возле эскалатора",
          status: "in_progress",
          priority: "critical",
          createdAt: "2024-01-18",
          assignedTo: "Сергей Иванов",
        },
        {
          id: "3",
          projectId: "1",
          title: "Неровная укладка плитки в главном холле",
          description: "Перепады до 5 мм на площади 50 м², требуется перекладка",
          status: "new",
          priority: "medium",
          createdAt: "2024-01-22",
          assignedTo: "Не назначен",
        },
        {
          id: "4",
          projectId: "1",
          title: "Не работает система вентиляции в подвале",
          description: "Полностью отсутствует воздухообмен в технических помещениях подвала",
          status: "in_progress",
          priority: "high",
          createdAt: "2024-01-19",
          assignedTo: "Алексей Смирнов",
        },
        {
          id: "5",
          projectId: "1",
          title: "Отсутствует маркировка аварийных выходов",
          description: "Требуется установка светящихся указателей согласно нормам пожарной безопасности",
          status: "new",
          priority: "medium",
          createdAt: "2024-01-21",
          assignedTo: "Не назначен",
        },
        {
          id: "6",
          projectId: "1",
          title: "Не закрываются автоматические двери",
          description: "Двери в главном входе заедают и не закрываются полностью",
          status: "resolved",
          priority: "medium",
          createdAt: "2024-01-17",
          assignedTo: "Петр Сидоров",
        },
        {
          id: "7",
          projectId: "1",
          title: "Подтопление парковки",
          description: "Во время ливня вода проникает на подземную парковку через деформационные швы",
          status: "new",
          priority: "high",
          createdAt: "2024-01-23",
          assignedTo: "Не назначен",
        },
        {
          id: "8",
          projectId: "1",
          title: "Нестабильная работа эскалаторов",
          description: "Эскалаторы периодически останавливаются, требуется диагностика",
          status: "in_progress",
          priority: "critical",
          createdAt: "2024-01-24",
          assignedTo: "Сергей Иванов",
        },
        {
          id: "9",
          projectId: "1",
          title: "Дефект остекления фасада",
          description: "Трещина в стеклянной панели на южном фасаде здания",
          status: "new",
          priority: "medium",
          createdAt: "2024-01-25",
          assignedTo: "Не назначен",
        },
      ],
    },
    {
      id: "2",
      name: "Офисное здание на Ленина",
      address: "ул. Ленина, 42",
      startDate: "2024-02-01",
      status: "active",
      description: "10-этажное офисное здание класса А",
      defectCount: 6,
      criticalDefects: 1,
      defects: [
        {
          id: "1",
          projectId: "2",
          title: "Повреждение фасадной отделки",
          description: "Отслоение гранитных плит на уровне 3-5 этажей с западной стороны",
          status: "new",
          priority: "high",
          createdAt: "2024-02-05",
          assignedTo: "Петр Сидоров",
        },
        {
          id: "2",
          projectId: "2",
          title: "Не закрывается входная дверь",
          description: "Дверь в главном входе заедает из-за перекоса коробки",
          status: "in_progress",
          priority: "medium",
          createdAt: "2024-02-03",
          assignedTo: "Иван Петров",
        },
        {
          id: "3",
          projectId: "2",
          title: "Протекает радиатор в кабинете 301",
          description: "Подтекание в месте соединения трубы с радиатором",
          status: "resolved",
          priority: "low",
          createdAt: "2024-02-01",
          assignedTo: "Сергей Иванов",
        },
        {
          id: "4",
          projectId: "2",
          title: "Скрип паркетных полов в переговорной",
          description: "Сильный скрип в центральной переговорной комнате на 4 этаже",
          status: "new",
          priority: "low",
          createdAt: "2024-02-06",
          assignedTo: "Не назначен",
        },
        {
          id: "5",
          projectId: "2",
          title: "Не работает кондиционирование на 7 этаже",
          description: "Полностью отсутствует охлаждение в офисных помещениях 7 этажа",
          status: "in_progress",
          priority: "high",
          createdAt: "2024-02-07",
          assignedTo: "Алексей Смирнов",
        },
      ],
    },
    {
      id: "3",
      name: 'Жилой комплекс "Солнечный"',
      address: "ул. Солнечная, 7",
      startDate: "2024-03-10",
      status: "active",
      description: "Жилой комплекс с детской площадкой и паркингом",
      defectCount: 4,
      criticalDefects: 1,
      defects: [
        {
          id: "1",
          projectId: "3",
          title: "Трещина в фундаменте подъезда 2",
          description: "Вертикальная трещина шириной 3-4 мм в цокольном этаже",
          status: "new",
          priority: "critical",
          createdAt: "2024-03-12",
          assignedTo: "Алексей Смирнов",
        },
        {
          id: "2",
          projectId: "3",
          title: "Недостаточная теплоизоляция стен",
          description: "Температурные мостики в угловых квартирах, требуется дополнительное утепление",
          status: "in_progress",
          priority: "high",
          createdAt: "2024-03-11",
          assignedTo: "Петр Сидоров",
        },
        {
          id: "3",
          projectId: "3",
          title: "Проблемы с электропроводкой в щитовой",
          description: "Замечания по монтажу электрощитовой, несоответствие ПУЭ",
          status: "new",
          priority: "high",
          createdAt: "2024-03-15",
          assignedTo: "Не назначен",
        },
        {
          id: "4",
          projectId: "3",
          title: "Отделка холла отличается от дизайн-проекта",
          description: "Использованы материалы, не соответствующие утвержденному проекту",
          status: "in_progress",
          priority: "medium",
          createdAt: "2024-03-13",
          assignedTo: "Иван Петров",
        },
        {
          id: "5",
          projectId: "3",
          title: "Протечки в санузлах на 5 этаже",
          description: "Подтопление в санузлах квартир 501, 502, 503",
          status: "resolved",
          priority: "medium",
          createdAt: "2024-03-10",
          assignedTo: "Сергей Иванов",
        },
        {
          id: "6",
          projectId: "3",
          title: "Не работает лифт в подъезде 3",
          description: "Лифт застревает между этажами, требуется срочный ремонт",
          status: "new",
          priority: "critical",
          createdAt: "2024-03-16",
          assignedTo: "Не назначен",
        },
        {
          id: "7",
          projectId: "3",
          title: "Дефекты детской площадки",
          description: "Недостаточно мягкое покрытие, острые углы на оборудовании",
          status: "in_progress",
          priority: "medium",
          createdAt: "2024-03-14",
          assignedTo: "Петр Сидоров",
        },
      ],
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Проекты</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">+ Новый проект</button>
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

                <div className="flex justify-around text-sm">
                  <div>
                    <span className="text-yellow-500 font-semibold">Дефекты: </span>
                    <span className="text-yellow-500 font-semibold">{project.defectCount}</span>
                  </div>
                  <div>
                    <span className="text-red-600 font-bold">Критические: </span>
                    <span className="text-red-600 font-bold">{project.criticalDefects}</span>
                  </div>
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

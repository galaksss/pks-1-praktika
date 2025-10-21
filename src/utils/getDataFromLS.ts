import { DefectStatus, PriorityStatus } from "../redux/projectsSlice";

const getDataFromLS = () => {
  const data = localStorage.getItem("projects")
  const projects = data ? JSON.parse(data) : [
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
          status: DefectStatus.UNRESOLVED,
          priority: PriorityStatus.HIGH,
          createdAt: "2025-10-14",
          assignedTo: "Иван Петров",
          deadline: "2025-10-17"
        },
        {
          id: "2",
          projectId: "1",
          title: "Трещина в несущей колонне на 2 этаже",
          description: "Вертикальная трещина шириной 2-3 мм в центральной колонне возле эскалатора",
          status: DefectStatus.IN_PROGRESS,
          priority: PriorityStatus.CRITICAL,
          createdAt: "2025-10-13",
          assignedTo: "Сергей Иванов",
          deadline: "2025-10-14"
        },
        {
          id: "3",
          projectId: "1",
          title: "Неровная укладка плитки в главном холле",
          description: "Перепады до 5 мм на площади 50 м², требуется перекладка",
          status: DefectStatus.UNRESOLVED,
          priority: PriorityStatus.MEDIUM,
          createdAt: "2025-10-12",
          assignedTo: "Не назначен",
          deadline: "2025-10-19"
        },
        {
          id: "4",
          projectId: "1",
          title: "Не работает система вентиляции в подвале",
          description: "Полностью отсутствует воздухообмен в технических помещениях подвала",
          status: DefectStatus.IN_PROGRESS,
          priority: PriorityStatus.HIGH,
          createdAt: "2025-10-11",
          assignedTo: "Алексей Смирнов",
          deadline: "2025-10-14"
        },
        {
          id: "5",
          projectId: "1",
          title: "Отсутствует маркировка аварийных выходов",
          description: "Требуется установка светящихся указателей согласно нормам пожарной безопасности",
          status: DefectStatus.UNRESOLVED,
          priority: PriorityStatus.MEDIUM,
          createdAt: "2025-10-10",
          assignedTo: "Не назначен",
          deadline: "2025-10-17"
        },
        {
          id: "6",
          projectId: "1",
          title: "Не закрываются автоматические двери",
          description: "Двери в главном входе заедают и не закрываются полностью",
          status: DefectStatus.RESOLVED,
          priority: PriorityStatus.MEDIUM,
          createdAt: "2025-10-09",
          assignedTo: "Петр Сидоров",
          deadline: "2025-10-16"
        },
        {
          id: "7",
          projectId: "1",
          title: "Подтопление парковки",
          description: "Во время ливня вода проникает на подземную парковку через деформационные швы",
          status: DefectStatus.UNRESOLVED,
          priority: PriorityStatus.HIGH,
          createdAt: "2025-10-08",
          assignedTo: "Не назначен",
          deadline: "2025-10-11"
        },
        {
          id: "8",
          projectId: "1",
          title: "Нестабильная работа эскалаторов",
          description: "Эскалаторы периодически останавливаются, требуется диагностика",
          status: DefectStatus.IN_PROGRESS,
          priority: PriorityStatus.CRITICAL,
          createdAt: "2025-10-07",
          assignedTo: "Сергей Иванов",
          deadline: "2025-10-08"
        },
        {
          id: "9",
          projectId: "1",
          title: "Дефект остекления фасада",
          description: "Трещина в стеклянной панели на южном фасаде здания",
          status: DefectStatus.UNRESOLVED,
          priority: PriorityStatus.MEDIUM,
          createdAt: "2025-10-06",
          assignedTo: "Не назначен",
          deadline: "2025-10-13"
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
          status: DefectStatus.UNRESOLVED,
          priority: PriorityStatus.HIGH,
          createdAt: "2025-10-14",
          assignedTo: "Петр Сидоров",
          deadline: "2025-10-17"
        },
        {
          id: "2",
          projectId: "2",
          title: "Не закрывается входная дверь",
          description: "Дверь в главном входе заедает из-за перекоса коробки",
          status: DefectStatus.IN_PROGRESS,
          priority: PriorityStatus.MEDIUM,
          createdAt: "2025-10-13",
          assignedTo: "Иван Петров",
          deadline: "2025-10-20"
        },
        {
          id: "3",
          projectId: "2",
          title: "Протекает радиатор в кабинете 301",
          description: "Подтекание в месте соединения трубы с радиатором",
          status: DefectStatus.RESOLVED,
          priority: PriorityStatus.LOW,
          createdAt: "2025-10-12",
          assignedTo: "Сергей Иванов",
          deadline: "2025-10-26"
        },
        {
          id: "4",
          projectId: "2",
          title: "Скрип паркетных полов в переговорной",
          description: "Сильный скрип в центральной переговорной комнате на 4 этаже",
          status: DefectStatus.UNRESOLVED,
          priority: PriorityStatus.LOW,
          createdAt: "2025-10-11",
          assignedTo: "Не назначен",
          deadline: "2025-10-25"
        },
        {
          id: "5",
          projectId: "2",
          title: "Не работает кондиционирование на 7 этаже",
          description: "Полностью отсутствует охлаждение в офисных помещениях 7 этажа",
          status: DefectStatus.IN_PROGRESS,
          priority: PriorityStatus.HIGH,
          createdAt: "2025-10-10",
          assignedTo: "Алексей Смирнов",
          deadline: "2025-10-13"
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
          status: DefectStatus.UNRESOLVED,
          priority: PriorityStatus.CRITICAL,
          createdAt: "2025-10-14",
          assignedTo: "Алексей Смирнов",
          deadline: "2025-10-15"
        },
        {
          id: "2",
          projectId: "3",
          title: "Недостаточная теплоизоляция стен",
          description: "Температурные мостики в угловых квартирах, требуется дополнительное утепление",
          status: DefectStatus.IN_PROGRESS,
          priority: PriorityStatus.HIGH,
          createdAt: "2025-10-13",
          assignedTo: "Петр Сидоров",
          deadline: "2025-10-16"
        },
        {
          id: "3",
          projectId: "3",
          title: "Проблемы с электропроводкой в щитовой",
          description: "Замечания по монтажу электрощитовой, несоответствие ПУЭ",
          status: DefectStatus.UNRESOLVED,
          priority: PriorityStatus.HIGH,
          createdAt: "2025-10-12",
          assignedTo: "Не назначен",
          deadline: "2025-10-15"
        },
        {
          id: "4",
          projectId: "3",
          title: "Отделка холла отличается от дизайн-проекта",
          description: "Использованы материалы, не соответствующие утвержденному проекту",
          status: DefectStatus.IN_PROGRESS,
          priority: PriorityStatus.MEDIUM,
          createdAt: "2025-10-11",
          assignedTo: "Иван Петров",
          deadline: "2025-10-18"
        },
        {
          id: "5",
          projectId: "3",
          title: "Протечки в санузлах на 5 этаже",
          description: "Подтопление в санузлах квартир 501, 502, 503",
          status: DefectStatus.RESOLVED,
          priority: PriorityStatus.MEDIUM,
          createdAt: "2025-10-10",
          assignedTo: "Сергей Иванов",
          deadline: "2025-10-17"
        },
        {
          id: "6",
          projectId: "3",
          title: "Не работает лифт в подъезде 3",
          description: "Лифт застревает между этажами, требуется срочный ремонт",
          status: DefectStatus.UNRESOLVED,
          priority: PriorityStatus.CRITICAL,
          createdAt: "2025-10-09",
          assignedTo: "Не назначен",
          deadline: "2025-10-10"
        },
        {
          id: "7",
          projectId: "3",
          title: "Дефекты детской площадки",
          description: "Недостаточно мягкое покрытие, острые углы на оборудовании",
          status: DefectStatus.IN_PROGRESS,
          priority: PriorityStatus.MEDIUM,
          createdAt: "2025-10-08",
          assignedTo: "Петр Сидоров",
          deadline: "2025-10-15"
        },
      ],
    },
  ];
  console.log(projects)
  return projects
}

export default getDataFromLS; 
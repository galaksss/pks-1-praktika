import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store";


interface Project {
  id: string;
  name: string;
  address: string;
  startDate: string;
  status: string;
  description: string;
  defectCount: number;
  criticalDefects: number;
  defects: Defect[];
}

interface Defect {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: DefectStatus;
  priority: PriorityStatus;
  assignedTo: string;
  createdAt: string;
  deadline: string;
}

interface StateType {
  projects: Project[];
  status: FetchStatus;
}


export enum FetchStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}


export enum PriorityStatus {
  LOW = 'Низкий',
  MEDIUM = 'Средний',
  HIGH = 'Высокий',
  CRITICAL = 'КРИТИЧЕСКИЙ'
}

export enum DefectStatus {
  UNRESOLVED = "Не исправлено",
  IN_PROGRESS = "В работе",
  RESOLVED = "Исправлено"
}
// export const STATUS_LABELS = {
//   [DefectStatus.NEW]: 'Не исправлено',
//   [DefectStatus.IN_PROGRESS]: 'В работе',
//   [DefectStatus.RESOLVED]: 'Исправлено',
//   [DefectStatus.CANCELLED]: 'Отменено'
// } as const;

const initialState: StateType = {
  projects: [
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
          status: "Не исправлено",
          priority: "Высокий",
          createdAt: "2024-01-20",
          assignedTo: "Иван Петров",
          deadline: "2024-01-24"
        },
        {
          id: "2",
          projectId: "1",
          title: "Трещина в несущей колонне на 2 этаже",
          description: "Вертикальная трещина шириной 2-3 мм в центральной колонне возле эскалатора",
          status: "В работе",
          priority: "КРИТИЧЕСКИЙ",
          createdAt: "2024-01-18",
          assignedTo: "Сергей Иванов",
        },
        {
          id: "3",
          projectId: "1",
          title: "Неровная укладка плитки в главном холле",
          description: "Перепады до 5 мм на площади 50 м², требуется перекладка",
          status: "Не исправлено",
          priority: PriorityStatus.MEDIUM,
          createdAt: "2024-01-22",
          assignedTo: "Не назначен",
        },
        {
          id: "4",
          projectId: "1",
          title: "Не работает система вентиляции в подвале",
          description: "Полностью отсутствует воздухообмен в технических помещениях подвала",
          status: "В работе",
          priority: "Высокий",
          createdAt: "2024-01-19",
          assignedTo: "Алексей Смирнов",
        },
        {
          id: "5",
          projectId: "1",
          title: "Отсутствует маркировка аварийных выходов",
          description: "Требуется установка светящихся указателей согласно нормам пожарной безопасности",
          status: "Не исправлено",
          priority: "Средний",
          createdAt: "2024-01-21",
          assignedTo: "Не назначен",
        },
        {
          id: "6",
          projectId: "1",
          title: "Не закрываются автоматические двери",
          description: "Двери в главном входе заедают и не закрываются полностью",
          status: "Исправлено",
          priority: "Средний",
          createdAt: "2024-01-17",
          assignedTo: "Петр Сидоров",
        },
        {
          id: "7",
          projectId: "1",
          title: "Подтопление парковки",
          description: "Во время ливня вода проникает на подземную парковку через деформационные швы",
          status: "Не исправлено",
          priority: "Высокий",
          createdAt: "2024-01-23",
          assignedTo: "Не назначен",
        },
        {
          id: "8",
          projectId: "1",
          title: "Нестабильная работа эскалаторов",
          description: "Эскалаторы периодически останавливаются, требуется диагностика",
          status: "В работе",
          priority: "КРИТИЧЕСКИЙ",
          createdAt: "2024-01-24",
          assignedTo: "Сергей Иванов",
        },
        {
          id: "9",
          projectId: "1",
          title: "Дефект остекления фасада",
          description: "Трещина в стеклянной панели на южном фасаде здания",
          status: "Не исправлено",
          priority: "Средний",
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
          status: "Не исправлено",
          priority: "Высокий",
          createdAt: "2024-02-05",
          assignedTo: "Петр Сидоров",
        },
        {
          id: "2",
          projectId: "2",
          title: "Не закрывается входная дверь",
          description: "Дверь в главном входе заедает из-за перекоса коробки",
          status: "В работе",
          priority: "Средний",
          createdAt: "2024-02-03",
          assignedTo: "Иван Петров",
        },
        {
          id: "3",
          projectId: "2",
          title: "Протекает радиатор в кабинете 301",
          description: "Подтекание в месте соединения трубы с радиатором",
          status: "Исправлено",
          priority: "Низкий",
          createdAt: "2024-02-01",
          assignedTo: "Сергей Иванов",
        },
        {
          id: "4",
          projectId: "2",
          title: "Скрип паркетных полов в переговорной",
          description: "Сильный скрип в центральной переговорной комнате на 4 этаже",
          status: "Не исправлено",
          priority: "Низкий",
          createdAt: "2024-02-06",
          assignedTo: "Не назначен",
        },
        {
          id: "5",
          projectId: "2",
          title: "Не работает кондиционирование на 7 этаже",
          description: "Полностью отсутствует охлаждение в офисных помещениях 7 этажа",
          status: "В работе",
          priority: "Высокий",
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
          status: "Не исправлено",
          priority: "КРИТИЧЕСКИЙ",
          createdAt: "2024-03-12",
          assignedTo: "Алексей Смирнов",
        },
        {
          id: "2",
          projectId: "3",
          title: "Недостаточная теплоизоляция стен",
          description: "Температурные мостики в угловых квартирах, требуется дополнительное утепление",
          status: "В работе",
          priority: "Высокий",
          createdAt: "2024-03-11",
          assignedTo: "Петр Сидоров",
        },
        {
          id: "3",
          projectId: "3",
          title: "Проблемы с электропроводкой в щитовой",
          description: "Замечания по монтажу электрощитовой, несоответствие ПУЭ",
          status: "Не исправлено",
          priority: "Высокий",
          createdAt: "2024-03-15",
          assignedTo: "Не назначен",
        },
        {
          id: "4",
          projectId: "3",
          title: "Отделка холла отличается от дизайн-проекта",
          description: "Использованы материалы, не соответствующие утвержденному проекту",
          status: "В работе",
          priority: "Средний",
          createdAt: "2024-03-13",
          assignedTo: "Иван Петров",
        },
        {
          id: "5",
          projectId: "3",
          title: "Протечки в санузлах на 5 этаже",
          description: "Подтопление в санузлах квартир 501, 502, 503",
          status: "Исправлено",
          priority: "Средний",
          createdAt: "2024-03-10",
          assignedTo: "Сергей Иванов",
        },
        {
          id: "6",
          projectId: "3",
          title: "Не работает лифт в подъезде 3",
          description: "Лифт застревает между этажами, требуется срочный ремонт",
          status: "Не исправлено",
          priority: "КРИТИЧЕСКИЙ",
          createdAt: "2024-03-16",
          assignedTo: "Не назначен",
        },
        {
          id: "7",
          projectId: "3",
          title: "Дефекты детской площадки",
          description: "Недостаточно мягкое покрытие, острые углы на оборудовании",
          status: "В работе",
          priority: "Средний",
          createdAt: "2024-03-14",
          assignedTo: "Петр Сидоров",
        },
      ],
    },
  ],
  status: FetchStatus.LOADING
}


const defectsSlice = createSlice({
  name: 'defects',
  initialState,
  reducers: {
    addDefect(state, action: PayloadAction<Defect[]>) {
      console.log('asd')
    }
  },
  extraReducers: builder => {
    builder
    .addCase
  }
})

const fetchDefects = createAsyncThunk("defects/fetchDefetcs",async params => {

})

export const selectDefectsData = (state: RootState) => state.defects

export const { addDefect } = defectsSlice.actions;

export default defectsSlice.reducer;



import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store";

interface Defect {
  title: string;
  description: string;
  status: DefectStatus;
  priority: PriorityStatus;
  id: number;
}

interface StateType {
  items: Defect[];
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
  items: [
    {
      title: "Протечка на крыше",
      description: "Во время дождя наблюдается протекание через шов между листами кровли.",
      status: DefectStatus.UNRESOLVED,
      priority: PriorityStatus.LOW,
      id: 1
  },
  {
    title: "Трещина на стене в коридоре",
    description: "Вертикальная трещина длиной около 30 см рядом с дверным проёмом.",
    status: DefectStatus.IN_PROGRESS,
    priority: PriorityStatus.HIGH,
    id: 2
  },
  {
    title: "Неплотно закрывается окно",
    description: "Оконная створка на 2-м этаже не прилегает, пропускает воздух.",
    status: DefectStatus.UNRESOLVED,
    priority: PriorityStatus.CRITICAL,
    id: 3
  },
  {
    title: "Неровная плитка в ванной комнате",
    description: "Одна из плиток выступает на 5 мм, требуется переукладка.",
    status: DefectStatus.RESOLVED,
    priority: PriorityStatus.MEDIUM,
    id: 4
  },
  {
    title: "Сбой в электропроводке",
    description: "При включении света в коридоре происходит короткое замыкание.",
    status: DefectStatus.IN_PROGRESS,
    priority: PriorityStatus.HIGH,
    id: 5
  },
  {
    title: "Отсутствует маркировка аварийного выхода",
    description: "На 3-м этаже не установлена табличка и подсветка выхода.",
    status: DefectStatus.UNRESOLVED,
    priority: PriorityStatus.LOW,
    id: 6
  },
  {
    title: "Повреждена отделка потолка",
    description: "Обнаружено вздутие краски на потолке после высыхания штукатурки.",
    status: DefectStatus.RESOLVED,
    priority: PriorityStatus.CRITICAL,
    id: 7
  },
  {
    title: "Неправильный уклон водостока",
    description: "Вода застаивается в лотке, требуется корректировка наклона.",
    status: DefectStatus.IN_PROGRESS,
    priority: PriorityStatus.CRITICAL,
    id: 8

  }
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



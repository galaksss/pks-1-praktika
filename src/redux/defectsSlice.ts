import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store";

interface Defect {
  title: string;
  description: string;
  defectStatus: DefectStatus;
  priorityStatus: PriorityStatus;
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

enum PriorityStatus {
  LOW = 'Низкий',
  MEDIUM = 'Средний',
  HIGH = 'Высокий'
}

enum DefectStatus {
  Unresolved = "Не исправлено",
  InProgress = "В работе",
  Resolved = "Исправлено"
}

const initialState: StateType = {
  items: [
  {
    title: "Протечка на крыше",
    description: "Во время дождя наблюдается протекание через шов между листами кровли.",
    defectStatus: DefectStatus.Unresolved,
    priorityStatus: PriorityStatus.HIGH,
    id: 1
  },
  {
    title: "Трещина на стене в коридоре",
    description: "Вертикальная трещина длиной около 30 см рядом с дверным проёмом.",
    defectStatus: DefectStatus.InProgress,
    priorityStatus: PriorityStatus.HIGH,
    id: 2
  },
  {
    title: "Неплотно закрывается окно",
    description: "Оконная створка на 2-м этаже не прилегает, пропускает воздух.",
    defectStatus: DefectStatus.Unresolved,
    priorityStatus: PriorityStatus.HIGH,
    id: 3
  },
  {
    title: "Неровная плитка в ванной комнате",
    description: "Одна из плиток выступает на 5 мм, требуется переукладка.",
    defectStatus: DefectStatus.Resolved,
    priorityStatus: PriorityStatus.HIGH,
    id: 4
  },
  {
    title: "Сбой в электропроводке",
    description: "При включении света в коридоре происходит короткое замыкание.",
    defectStatus: DefectStatus.InProgress,
    priorityStatus: PriorityStatus.HIGH,
    id: 5
  },
  {
    title: "Отсутствует маркировка аварийного выхода",
    description: "На 3-м этаже не установлена табличка и подсветка выхода.",
    defectStatus: DefectStatus.Unresolved,
    priorityStatus: PriorityStatus.HIGH,
    id: 6
  },
  {
    title: "Повреждена отделка потолка",
    description: "Обнаружено вздутие краски на потолке после высыхания штукатурки.",
    defectStatus: DefectStatus.Resolved,
    priorityStatus: PriorityStatus.HIGH,
    id: 7
  },
  {
    title: "Неправильный уклон водостока",
    description: "Вода застаивается в лотке, требуется корректировка наклона.",
    defectStatus: DefectStatus.InProgress,
    priorityStatus: PriorityStatus.HIGH,
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

export const selectDefectsData = (state: RootState) => state.defects

export const { addDefect } = defectsSlice.actions;

export default defectsSlice.reducer;



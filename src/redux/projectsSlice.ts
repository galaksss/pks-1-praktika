import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store";
import getDataFromLS from "../utils/getDataFromLS";


export interface Project {
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

export interface Defect {
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
  UNRESOLVED = "Простаивает",
  IN_PROGRESS = "В работе",
  RESOLVED = "Исправлено"
}

const projects = getDataFromLS()
const initialState: StateType = {
  projects,
  status: FetchStatus.LOADING
}




const projectsSlice = createSlice({
  name: 'projectsSlice',
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

const fetchProjects = createAsyncThunk("defects/fetchProjects",async params => {

})

export const selectProjectsData = (state: RootState) => state.projectsSlice.projects

export const { addDefect } = projectsSlice.actions;

export default projectsSlice.reducer;



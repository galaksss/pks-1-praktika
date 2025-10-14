import Dashboard from "./components/Dashboard";
import DefectsPage from "./components/Defects";
import FullDefectPage from "./components/FullDefect";
import NewDefectPage from "./components/NewDefect";
import Projects from "./components/Projects";
import ReportsPage from "./components/Reports";
import SidebarLayout from "./components/SidebarLayout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<SidebarLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/1/defects" element={<DefectsPage />} />
          <Route path="projects/2/defects" element={<DefectsPage />} />
          <Route path="projects/3/defects" element={<DefectsPage />} />
          <Route path="defects/2" element={<FullDefectPage />} />
          <Route path="defects/newDefect" element={<NewDefectPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Defects from "./components/Defects";
import FullDefect from "./components/FullDefect";
import NewDefect from "./components/NewDefect";
import Projects from "./components/Projects";
import Reports from "./components/Reports";
import SidebarLayout from "./components/SidebarLayout";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "./redux/store";
import { selectProjectsData } from "./redux/projectsSlice";
function App() {
  const projects = useAppSelector(selectProjectsData);
  console.log(projects, "1");
  useEffect(() => {
    const json = JSON.stringify(projects);
    console.log(projects);
    localStorage.setItem("projects", json);
  }, [projects]);
  return (
    <>
      <Routes>
        <Route path="" element={<SidebarLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id/defects" element={<Defects />} />
          <Route path="projects/:projectId/defects/:defectId/fullDefect" element={<FullDefect />} />
          <Route path="projects/:id/defects/newDefect" element={<NewDefect />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

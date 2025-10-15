import Dashboard from "./components/Dashboard";
import Defects from "./components/Defects";
import FullDefect from "./components/FullDefect";
import NewDefect from "./components/NewDefect";
import Projects from "./components/Projects";
import Reports from "./components/Reports";
import SidebarLayout from "./components/SidebarLayout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<SidebarLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id/defects" element={<Defects />} />
          <Route path="projects/:id/defects/:id/fullDefect" element={<FullDefect />} />
          <Route path="projects/:id/defects/newDefect" element={<NewDefect />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

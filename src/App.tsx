import DefectsPage from "./components/DefectsPage";
import FullDefectPage from "./components/FullDefectPage";
import NewDefectPage from "./components/NewDefectPage";
import ReportsPage from "./components/ReportsPage";
import SidebarLayout from "./components/SidebarLayout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<SidebarLayout />}>
          <Route path="defects" element={<DefectsPage />} />
          <Route path="defects/2" element={<FullDefectPage />} />
          <Route path="defects/newDefect" element={<NewDefectPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

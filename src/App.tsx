import DefectsPage from "./components/DefectsPage";
import FullDefectPage from "./components/FullDefectPage";
import SidebarLayout from "./components/SidebarLayout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<SidebarLayout />}>
          <Route path="" element={<DefectsPage />} />
          <Route path="defects/2" element={<FullDefectPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

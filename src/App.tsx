import DefectsPage from "./components/DefectsPage"
import SidebarLayout from "./components/SidebarLayout"
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
    <Routes>
      <Route path="" element={<SidebarLayout />}>
      <Route path="" element={<DefectsPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App

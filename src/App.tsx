import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data";
import Docs from "./pages/Docs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="data" element={<Data />} />
          <Route path="docs" element={<Docs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

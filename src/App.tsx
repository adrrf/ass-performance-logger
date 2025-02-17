import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data";
import Docs from "./pages/Docs";
import Landing from "./pages/Landing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ass-performance-logger/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="data" element={<Data />} />
          <Route path="docs" element={<Docs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

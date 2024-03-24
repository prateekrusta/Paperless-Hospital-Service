import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/homepage/home";
import HomeDashboard from "./components/dashboard/homeDashboard"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes path="/" >
        <Route index element={<Home />} />
      </Routes>
      <Routes path="dashboard">
        <Route path="" element={<HomeDashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

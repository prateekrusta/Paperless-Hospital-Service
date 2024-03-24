import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/homepage/home";
import HomeDashboard from "./components/dashboard/homeDashboard"

function App() {
  return (
    <div className="App">
    <Router>
      <main>
      <Routes path="/" >
        <Route index path="/" element={<Home />} />

        <Route path="dashboard">
          <Route index element={<HomeDashboard />} />
        </Route>

      </Routes>
        

      </main>
    </Router>
    </div>
  );
}

export default App;

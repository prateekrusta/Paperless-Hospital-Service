import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/homepage/home";
import AddPatient from './components/dashboard/addpatient';
import AdmitPatient from './components/dashboard/admitpatient';

function App() {
  return (
    <div className="App">
    <Router>
      <main>
      <Routes path="/" >
        <Route index path="/" element={<Home />} />

        <Route path="dashboard">
          <Route index path="add-patient" element={<AddPatient />} />
          <Route path="admit-patient" element={<AdmitPatient />} />
        </Route>

      </Routes>
        

      </main>
    </Router>
    </div>
  );
}

export default App;

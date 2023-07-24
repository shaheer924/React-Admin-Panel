import Sidebar from "./components/sidebar/Sidebar";
import './App.scss'
import Dashboard from "./components/dashboard/Dashboard";
import Patient from "./components/patient/Patient";

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar"/>
      <Dashboard />
    </div>
  );
}

export default App;

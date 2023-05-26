import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EmployeeForm from "./components/EmployeeForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/employee-form" exact element={<EmployeeForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

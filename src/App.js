import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddRecord from "./pages/AddRecord";
import EditRecord from "./pages/EditRecord";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addrecord" element={<AddRecord/>} />
        <Route path="/editrecord/:id" element={<EditRecord/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

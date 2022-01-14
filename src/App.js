import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { Register } from "./Register";
import { Navigation } from "./Navigation";
import { Finance } from "./Finance";
import './App.css'
import { Login } from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/finance" element={<Finance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

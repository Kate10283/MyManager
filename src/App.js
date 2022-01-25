import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./Login/Register";
import { Navigation } from "./Navigation/Navigation";
import { Finance } from "./Finance/Finance";
import './App.css'
import { Login } from "./Login/Login";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Navigate replace to="login" />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="incomes" element={<Finance finance='incomes' />} />
            <Route exact path="costs" element={<Finance finance='costs' />} />
            <Route exact path="debts" element={<Finance finance='debts' />} />
            <Route exact path="savings" element={<Finance finance='savings' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

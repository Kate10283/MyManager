import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./Login/Register.tsx";
import { Navigation } from "./Navigation/Navigation.tsx";
import { Finance } from "./Finance/Finance.tsx";
import './App.css'
import { Login } from "./Login/Login.tsx";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Navigate replace to="login" />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="incomes" element={<Finance finance='incomes' />} />
            <Route path="costs" element={<Finance finance='costs' />} />
            <Route path="debts" element={<Finance finance='debts' />} />
            <Route path="savings" element={<Finance finance='savings' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import './Navigation.css';
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navigation">
            <div className='logo__outer'>
                <Link to={'/'} className="logo">
                    My manager
                </Link>
            </div>
            <div className='nav-links'>
                <NavLink to={'incomes'} className={({ isActive }) => isActive ? "active" : null}>Доходы</NavLink>
                <NavLink to={'costs'}>Расходы</NavLink>
                <NavLink to={'debts'}>Долги</NavLink>
                <NavLink to={'savings'}>Копилка</NavLink>
                <p className="nav-line" />
                <NavLink to={'login'}>Вход|Регистрация</NavLink>
            </div>
        </nav>
    );
}
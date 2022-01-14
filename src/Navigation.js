import './Navigation.css'

export const Navigation = () => {
    return (
        <nav className="navigation">
            <div className='logo__outer'>
                <a href='/' className="logo">
                    My manager
                </a>
            </div>
            <div className='nav-links'>
                <a href='finance'>Доходы</a>
                <a href='#'>Расходы</a>
                <a href='#'>Долги</a>
                <a href='#'>Копилка</a>
                <p className="nav-line" />
                <a href='/login' id='active'>Вход|Регистрация</a>
            </div>
        </nav>
    );
}
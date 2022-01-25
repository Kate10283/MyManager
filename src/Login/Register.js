import { Link } from 'react-router-dom';
import { emailSVG } from '../svg/emailSVG';
import { lockSVG } from '../svg/lockSVG';
import './Login.css'

export const Register = () => {
    return (
        <form className="login">
            <p>Регистрация</p>
            <div className='input-container'>
                <input type='email' placeholder='Email' autoFocus />
                {emailSVG}
            </div>
            <div className='input-container'>
                <input type='password' placeholder='Пароль' />
                {lockSVG}
            </div>
            <div className='input-container'>
                <input type='password' placeholder='Повторите пароль' />
                {lockSVG}
            </div>
            <div className='login-footer'>
                <button type='button' value='Войти'>Зарегистрироваться</button>
                <Link to={'/login'}>Уже есть аккаунт</Link>
            </div>
        </form>
    );
}
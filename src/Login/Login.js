import { Link } from 'react-router-dom';
import { emailSVG } from '../svg/emailSVG';
import { lockSVG } from '../svg/lockSVG';
import './Login.css'

export const Login = () => {
    return (
        <form className="login">
            <p>Вход</p>
            <div className='input-container'>
                <input type='email' placeholder='Email' autoFocus />
                {emailSVG}
            </div>
            <div className='input-container'>
                <input type='password' placeholder='Пароль' />
                {lockSVG}
            </div>
            <div className='login-footer'>
                <button type='button' value='Войти'>Войти</button>
                <Link to={'/register'}>Еще нет аккаунта</Link>
            </div>
        </form>
    );
}
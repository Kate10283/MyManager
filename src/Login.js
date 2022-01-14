import './Login.css'

export const Login = () => {
    return (
        <form className="login">
            <p>Вход</p>
            <div className='input-container'>
                <input type='email' placeholder='Email' autoFocus />
                <svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <title /><path d="M116.73,31.83a3,3,0,0,0-4.2-.61L64.14,67.34a1,1,0,0,1-1.2,0L15.5,31.06a3,3,0,1,0-3.64,
                    4.77L49.16,64.36,12.27,92.16A3,3,0,1,0,15.88,97L54.11,68.14l5.18,4a7,7,0,0,0,8.43.06l5.44-4.06L111.84,97a3,
                    3,0,1,0,3.59-4.81L78.17,64.35,116.12,36A3,3,0,0,0,116.73,31.83Z" />
                    <path d="M113,19H15A15,15,0,0,0,0,34V94a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V34A15,15,0,0,0,113,19Zm9,
                    75a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V34a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z" /></svg>
            </div>
            <div className='input-container'>
                <input type='password' placeholder='Пароль' />
                <svg fill="none" height="26" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M21.1 25H5C3.3 25 1.89999 23.6 1.89999 21.9V13C1.89999 11.3 3.3 9.90002 5 9.90002H21.1C22.8 9.90002 24.2 11.3 24.2 13V21.9C24.2 23.6 22.8 25 21.1 25Z" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><path d="M16.6 9.79999H9.29999C8.69999 9.79999 8.10001 9.30001 8.10001 8.60001V5.5C8.10001 3 10.1 1 12.6 1H13.2C15.7 1 17.7 3 17.7 5.5V8.60001C17.8 9.30001 17.3 9.79999 16.6 9.79999Z" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><path d="M13 21C12.1 21 11.4 20.3 11.4 19.4V15.4C11.4 14.5 12.1 13.8 13 13.8C13.9 13.8 14.6 14.5 14.6 15.4V19.4C14.6 20.3 13.9 21 13 21Z" fill="#4F4F4F"/></svg>
            </div>
            <div className='login-footer'>
                <button type='button' value='Войти'>Войти</button>
                <a href='/register'>Еще нет аккаунта</a>
            </div>
        </form>
    );
}
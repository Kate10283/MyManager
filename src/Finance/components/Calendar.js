import { arrowLeftSVG } from '../../svg/arrowLeftSVG';
import { arrowRightSVG } from '../../svg/arrowRightSVG';
import './Calendar.css';

export const Calendar = () => {
    const date = new Date();
    // const d = new Date(date.getFullYear(), date.getMonth() + 4, 2);
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    // const daysOfWeak = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // const lastDayOfWeak = new Date(date.getFullYear(), date.getMonth(), lastDay).getDay();
    const firstDayOfWeak = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const content = [];

    const mouseOver = (event) => {
        event.target.style.background = 'rgb(227, 243, 226)';
    }

    const mouseOut = (event) => {
        event.target.style.background = 'rgb(250, 250, 250)';
    }

    for (let i = 0; i < lastDay; i++) {
        if (i === 0 && firstDayOfWeak !== 0) {
            content[content.length] = [];
            for (let y = 0; y < firstDayOfWeak - 1; y++) {
                content[content.length - 1].push(<td key={y + 40}></td>);
            }
        }
        else if (i === 0 && firstDayOfWeak === 0) {
            content[content.length] = [];
            for (let y = 0; y < 6; y++) {
                content[content.length - 1].push(<td key={y + 40}></td>);
            }
        }
        if (new Date(date.getFullYear(), date.getMonth(), i + 1).getDay() === 1) {
            content[content.length] = [];
        }

        if (i + 1 === date.getDate()) {
            content[content.length - 1].push(<td id='calendar-today' key={i} 
            onMouseOver={(event)=> mouseOver(event)} onMouseOut={(event)=> mouseOut(event)}>{i + 1}</td>);
        }
        else {
            content[content.length - 1].push(<td key={i} 
                onMouseOver={(event)=> mouseOver(event)} onMouseOut={(event)=> mouseOut(event)}>{i + 1}</td>);
        }
    }

    return (
        <div className='calendar'>
            <div className='month'>
                <p>{months[date.getMonth()]} {date.getFullYear()}</p>
                <p>
                    {arrowLeftSVG}
                    {arrowRightSVG}
                </p>
            </div>
            <table className='weekdays'>
                <thead>
                    <tr>
                        <td>Пн</td>
                        <td>Вт</td>
                        <td>Ср</td>
                        <td>Чт</td>
                        <td>Пт</td>
                        <td>Сб</td>
                        <td>Вс</td>
                    </tr>
                </thead>
                <tbody>
                    {content.map((elem, id) => {
                        return (<tr key={id + 100}>{elem}</tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
}
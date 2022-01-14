import './Calendar.css'

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
            content[content.length - 1].push(<td id='calendar-today' key={i}>{i + 1}</td>);
        }
        else {
            content[content.length - 1].push(<td key={i}>{i + 1}</td>);
        }
    }

    return (
        <div className='calendar'>
            <div className='month'>
                <p>{months[date.getMonth()]} {date.getFullYear()}</p>
                <p>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 129 129">
                        <g>
                            <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
                        </g>
                    </svg>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 129 129">
                        <g>
                            <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                        </g>
                    </svg>
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
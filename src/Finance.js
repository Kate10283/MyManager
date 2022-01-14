import { Calendar } from './Calendar';
import { Chart } from './Chart';
import './Finance.css'
import { Table } from './Table';

export const Finance = () => {
    return (
        <>
            <div className='finance'>
                <Table />
                <Calendar />
                <Chart />
            </div>
        </>
    );
}
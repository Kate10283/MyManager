import { Calendar } from './components/Calendar.tsx';
import { Chart } from './components/Chart.js';
import './Finance.css'
import { Table } from './components/Table.tsx';

export const Finance = (props: {finance: string}) => {    
    const finance = props.finance;

    return (
        <>
            <div className='finance'>
                <Table finance={finance} />
                <Calendar />
                <Chart />
            </div>
        </>
    );
}
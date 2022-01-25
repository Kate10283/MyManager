import { Calendar } from './components/Calendar';
import { Chart } from './components/Chart';
import './Finance.css'
import { Table } from './components/Table';

export const Finance = (props) => {    
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
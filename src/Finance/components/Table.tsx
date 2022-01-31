import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { tableNamesFooter } from '../../config/tableNamesFooter.tsx';
import { tableNamesHeader } from '../../config/tableNamesHeader.tsx';
import { selectUser } from '../../store/selectors';
import { basketSVG } from '../../svg/basketSVG.tsx';
import './Table.css';

export const Table = (props: {finance: string}) => {
    const finance = props.finance;
    const userData = useSelector(selectUser);
    const [tableData, setTableData] = useState<null | string[]>(null);
    const [table, setTable] = useState<null | JSX.Element[][]>();
    const [amount, setAmount] = useState<number>(0);

    const showInput = (event) => {
        event.target.classList.toggle('_hide');
        event.target.nextSibling.classList.toggle('_hide');
        closeInput(event.target, event.target.nextSibling);
    }

    const closeInput = (elem, elemInput) => {
        document.addEventListener('click', function eventListener(event) {
            if (!elem.contains(event.target) && !elemInput.contains(event.target)) {
                elem.classList.toggle('_hide');
                elemInput.classList.toggle('_hide');
                document.removeEventListener('click', eventListener)
            }
        });
    }

    useEffect(() => {
        if (userData !== undefined) {
            setTableData(userData[finance]);
        }
        if (tableData) {
            const tableContent: JSX.Element[][] = [];
            let tempAmount = 0;
            tableData.map((elemTable) => {
                Object.keys(elemTable).map((key, id) => {
                    if (id === 0) {
                        tableContent[tableContent.length] = [];
                    }
                    tableContent[tableContent.length - 1].push(<td onClick={(event) => showInput(event)} key={id}>{elemTable[key]}</td>);

                    switch (key) {
                        case 'name':
                            tableContent[tableContent.length - 1].push(<td className='_hide'>
                                <input type='text' placeholder='Название...' list='nameDatalist' />
                                <datalist id='nameDatalist'>
                                    <option value={elemTable[key]}>{elemTable[key]}</option>
                                    <option value='cat1'>cat1</option>
                                </datalist>
                            </td>);
                            break;
                        case 'money':
                            tableContent[tableContent.length - 1].push(<td className='_hide'>
                                <input type='number' defaultValue={elemTable[key]} />
                            </td>);
                            tempAmount += elemTable[key];
                            break;
                        case 'date':
                            tableContent[tableContent.length - 1].push(<td className='_hide'>
                                <input type='date' defaultValue='2022-01-01' />
                            </td>);
                            break;
                        case 'comment':
                            tableContent[tableContent.length - 1].push(<td className='_hide'>
                                <input type='text' defaultValue={elemTable[key]} />
                            </td>);
                            break;
                        case 'debtor':
                            tableContent[tableContent.length - 1].push(<td className='_hide'>
                                <input type='text' placeholder='Должник...' list='debtDatalist' />
                                <datalist id='debtDatalist'>
                                    <option value='Я'>Я</option>
                                </datalist>
                            </td>);
                            break;
                        default:
                            alert("Что-то пошло не так")
                    }
                    return (0);
                })
                return (0)
            })
            setTable(tableContent);
            setAmount(tempAmount);
        }
    }, [userData, tableData, finance]);


    return (
        <>
            <table className='table'>
                <thead>
                    <tr className='table-header'>
                        {tableNamesHeader[finance].map((elem, id) => {
                            return (<td key={id}>{elem}</td>)
                        })}
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>CAT</td>
                        <td>1200</td>
                        <td>01.01.2022</td>
                        <td>sfdgd</td>
                        <td className='table-basket' title='Удалить эту запись'>
                            {basket}
                        </td>
                    </tr> */}

                    {table ? table.map((elem, id) => {
                        return (<tr key={id}>{elem}<td className='table-basket' title='Удалить эту запись'>
                            {basketSVG}
                        </td></tr>)
                    }) : null}

                    <tr>
                        <td id='table-new' align='center' colSpan={5}>
                            <button type='button' title='Добавить новую запись'>+</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className='table-footer'>
                        {tableNamesFooter[finance].map((elem, id) => {
                            return (<>
                                <td key={id}>{elem}</td>
                                <td>{amount}</td>
                            </>)
                        })}
                        {finance === 'debts' ? <td></td> : <><td></td><td></td><td></td></>}
                    </tr>
                </tfoot>
            </table>
        </>
    );
}
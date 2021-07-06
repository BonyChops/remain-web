import '../../resources/Table/table.css';

const Table = (props) => (
    <div className="border-t-2 border-b-2 text-sm md:text-lg mx-auto w-72 md:w-96 mt-5 md:mt-10">
        {props.rows.map(row => (
            <div className="tr px-3 md:px-6 py-1 md:py-2 flex">
                <div className="flex w-18">{`${props.hall}${props.floor}${row.room.toString().padStart(2, '0')}号室`}</div>
                <div className="flex w-18 pl-3 md:pl-6">{row.name}</div>
                <div className="flex-1 flex pl-3 md:pl-6">{row.result}</div>
            </div>
        ))}
    </div>
);
export default Table;
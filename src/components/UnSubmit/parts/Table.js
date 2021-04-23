import '../../resources/Table/table.css';

const Table = (props) => (
    <div className="border-t-2 border-b-2 text-sm md:text-lg mx-auto w-48 md:w-64 mt-5 md:mt-10">
        {props.rows.map(row => (
            <div className="tr px-5 md:px-10 py-1 md:py-2 flex">
                <div className="flex w-18">{row.roomId}号室</div>
                <div className="flex w-18 pl-3 md:pl-6">{row.name}</div>
            </div>
        ))}
    </div>
);
export default Table;
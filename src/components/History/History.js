import Heading from '../resources/Heading/Heading';
import './History.css';

import Table from './parts/Table';

const History = (props) => {
    const rows = [
        {
            roomId: "0001",
            name: "鈴木颯太",
            result: "在寮確認済"
        },
        {
            roomId: "0003",
            name: "川原隼平",
            result: "外泊中"
        },
    ];

    return (
        <div className="flex flex-col h-screen">
            <Heading content="0号館0階" />
            <Table rows={rows} />
            <div className="flex-1"></div> {/* 余白 */}
            <button className="w-36 md:w-48 focus:outline-none py-2 mx-auto rounded-2xl border-2 shadow-lg md:text-lg">提出</button>
            <div className="h-24 md:h-32"></div> {/* 余白 */}
        </div>
    );
}

export default History;
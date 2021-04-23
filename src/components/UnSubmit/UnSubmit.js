import Table from "./parts/Table";
import Heading from "../resources/Heading/Heading";

const UnSubmit = (props) => {
    const rows = [
        {
            roomId: 2,
            name: "一柳壮綱",
        },
    ];
    const hall = 1;
    const floor = 1;

    return (
        <div className="flex flex-col">
            <Heading content={`${hall}号館 ${floor}階`} />
            <Table rows={rows} hall={hall} floor={floor} />
        </div>
    );
}
export default UnSubmit;
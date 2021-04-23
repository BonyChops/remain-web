import Table from "./parts/Table";
import Heading from "../resources/Heading/Heading";

const UnSubmit = (props) => {
    const rows = [
        {
            roomId: "0002",
            name: "一柳壮綱",
        },
    ];

    return (
        <div className="flex flex-col">
            <Heading content="0号館0階" />
            <Table rows={rows} />
        </div>
    );
}
export default UnSubmit;
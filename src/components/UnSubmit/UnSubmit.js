import Table from "./parts/Table";
import Heading from "../resources/Heading/Heading";
import React from "react";

export default class UnSubmit extends React.Component {
    constructor() {
        this.people = [
            {
                room: 2,
                name: "一柳壮綱",
            },
        ];
        this.hall = 1;
        this.floor = 1;
    }

    render() {
        return (
            <div className="flex flex-col">
                <Heading content={`${this.hall}号館 ${this.floor}階`} />
                <Table rows={this.people} hall={this.hall} floor={this.floor} />
            </div>
        );
    }
}
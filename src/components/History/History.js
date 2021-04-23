import React from 'react';
import Heading from '../resources/Heading/Heading';
import './History.css';

import Table from './parts/Table';

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.people = [
            {
                room: 1,
                name: "EEE",
                result: "在寮確認済"
            },
            {
                room: 3,
                name: "",
                result: "外泊中"
            },
        ];
        this.hall = 1;
        this.floor = 1;
    }

    render() {
        return (
            <div className="flex flex-col h-screen">
                <Heading content={`${this.hall}号館 ${this.floor}階`} />
                <Table rows={this.people} hall={this.hall} floor={this.floor} />
                <div className="flex-1"></div> {/* 余白 */}
                <button className="w-36 md:w-48 focus:outline-none py-2 mx-auto rounded-2xl border-2 shadow-lg md:text-lg">提出</button>
                <div className="h-24 md:h-32"></div> {/* 余白 */}
            </div>
        );
    }
}
import XIcon from "../../resources/x";
import CheckIcon from "../../resources/check";
import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.room = 2;
        this.name = "一柳壮綱";
        this.hall = 1;
        this.floor = 1;

        this.displayList = {
            notSubmitted: {
                Icon: XIcon,
                message: "点呼する",
                bgColor: "bg-red-300"
            },
            submitted: {
                Icon: CheckIcon,
                message: "点呼完了",
                bgColor: "bg-green-300"
            }
        }
        this.state = { display: this.displayList.notSubmitted }
    }

    submit = () => {
        this.setState({ display: this.displayList.submitted })
    }

    render() {
        return (
            <div className="flex justify-center items-center h-screen">
                <div>
                    <button className={`${this.state.display.bgColor} focus:outline-none md:w-64 md:h-64 w-40 h-40 border-2 shadow-xl rounded-full text-white text-sm md:text-xl`} onClick={() => this.submit()}>
                        <this.state.display.Icon className="w-20 h-20 mx-auto" />
                        {this.state.display.message}
                    </button>
                    <div className="text-base md:text-2xl mt-3 md:mt-6">
                        <span>{`${this.hall}${this.floor}${this.room.toString().padStart(2, '0')}号室`}</span>
                        <span className="pl-2 md:pl-4">{this.name}</span>
                    </div>
                </div>
            </div>
        )
    }
}
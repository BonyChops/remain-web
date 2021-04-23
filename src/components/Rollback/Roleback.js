import XIcon from "../../resources/x";
import CheckIcon from "../../resources/check";
import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);
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
                    <div className="text-base mt-2 md:text-2xl md:mt-3">0001号室</div>
                </div>
            </div>
        )
    }
}
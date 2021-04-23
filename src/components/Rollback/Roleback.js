import XIcon from "../../resources/x";
import CheckIcon from "../../resources/check";
import React from "react";

export default class extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            Icon: XIcon,
            message: "点呼する"
        }
    }

    submit = () => {
        // バックエンド処理
        this.setState({
            Icon: CheckIcon,
            message : "点呼完了"
        })
    }

    render() {
        return (
            <div className="py-auto">
                <div className="text-xl">0001号室</div>
                <div className="px-auto py-auto h-full">
                    <button className="mx-auto w-48 h-48 my-auto border border-2 shadow-xl rounded-full" onClick={() => this.submit()}>
                        <this.state.Icon className="w-20 h-20 mx-auto" />
                        {this.state.message}
                    </button>
                </div>
            </div>
        )
    }
}
import './History.css';

export default (props) => (
    <div className="flex flex-col">
        <div className="text-3xl mt-10">0号館0階</div>
        <div className="mx-auto w-72 mt-10">
            <div className="tb text-sm">
                <div className="tr px-2 py-1 flex"><span className="flex w-18">0001号室</span><span className="flex w-18 pl-3">鈴木颯太</span>　<span className="flex-1 flex pl-3">在寮確認済</span></div>
                <div className="tr px-2 py-1 flex"><span className="flex w-18">0003号室</span><span className="flex w-18 pl-3">川原隼平</span>　<span className="flex-1 flex pl-3">外泊中</span></div>
            </div>
        </div>
        <button className="px-3 py-2 mt-10 mx-auto rounded-xl border-2 shadow-sm">点呼提出</button>
    </div>
)
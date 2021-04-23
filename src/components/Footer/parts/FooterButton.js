import { Link } from 'react-router-dom'

const FooterButton = (props) => {
    return (
        <Link className={`relative mx-auto ${props.isCurrent ? 'text-gray-700' : 'text-gray-400'} `} to={props.to}>
            <props.icon className={`w-10 h-10 mx-2 `} />
            {props.name}
            {props.to === "/unSubmit" && (
                <div className="z-10 absolute top-0 right-0 w-5 h-5 text-sm rounded-full text-gray-100 bg-red-400">{props.unSubmitNum}</div>
            )}
        </Link>
    )
}

export default FooterButton;
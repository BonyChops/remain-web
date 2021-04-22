import {Link} from 'react-router-dom'

const FooterButton = (props) => {
    return(
        <Link className={"mx-auto"} to={props.to}>
            <props.icon className="w-10 h-10 mx-2"/>
            {props.name}
        </Link>
    )
}

export default FooterButton;
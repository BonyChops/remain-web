import FooterButton from "./parts/FooterButton";
import UsersIcon from '../../resources/users';
import CheckIcon from '../../resources/check_circle';
import XIcon from '../../resources/x_circle';
import CollectionIcon from '../../resources/collection'
import { withRouter } from "react-router";

const Footer = (props) => {
    return (
        <footer className="fixed flex bottom-0 w-full h-16 bg-white rounded-t-full border border-t-2 border-gray-300">
            <FooterButton name={"点呼"} to={"/"} icon={props.isSubmit ?  CheckIcon : XIcon} isCurrent={props.location.pathname === "/"} />
            <FooterButton name={"点呼履歴"} to={"/history"} icon={CollectionIcon} isCurrent={props.location.pathname === "/history"} />
            <FooterButton name={"未提出者"} to={"/unSubmit"} icon={UsersIcon} isCurrent={props.location.pathname === "/unSubmit"} count={6} />
        </footer>
    )
}
export default withRouter(Footer);
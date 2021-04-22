import FooterButton from "./parts/FooterButton";
import ChartIcon from '../../resources/chart'
const Footer = (props) => {
    return(
        <footer className="fixed flex bottom-0 w-full h-16 bg-white rounded-t-full border border-t-2 border-gray-300">
            <FooterButton name={"aaa"} to={"/"} icon={ChartIcon}/>
            <FooterButton name={"bbb"} to={"/test"} icon={ChartIcon}/>
            <FooterButton name={"xxx"} to={"/unko"} icon={ChartIcon}/>
        </footer>
    )
}
export default Footer;
import FooterButton from "./parts/FooterButton";

const Footer = (props) => {
    return(
        <footer className="fixed bottom-0 w-full h-16 bg-white rounded-t-full border border-t-2">
            <FooterButton name={"aaa"}/>
            <FooterButton name={"bbb"}/>
            <FooterButton name={"xxx"}/>
        </footer>
    )
}

export default Footer;
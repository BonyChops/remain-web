import ChartIcon from '../../../resources/chart'

const FooterButton = (props) => {
    return(
        <button>
            <ChartIcon className="w-10 h-10 mx-2"/>
            {props.name}
        </button>
    )
}

export default FooterButton;
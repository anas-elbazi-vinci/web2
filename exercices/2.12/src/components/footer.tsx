interface FooterProps{
    urlLogo : string;
    children : React.ReactNode;
}

const Footer = (props : FooterProps)=>{
    return (
        <div>
            <img src={props.urlLogo} alt="logo" />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Footer;
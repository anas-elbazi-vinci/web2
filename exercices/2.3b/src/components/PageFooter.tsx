interface PageFooterProps{
    footerText : string;
}

const Footer = (props : PageFooterProps)=>{
    return <footer>{props.footerText}</footer>
}

export default Footer;
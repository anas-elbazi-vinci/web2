interface FooterProps { urlLogo: string; children: React.ReactNode; }

const Footer = (props: FooterProps) => {
    return (
        <footer className="site-footer row">
            <img className="logo-small" src={props.urlLogo} alt="logo" />
            <div className="footer-content">{props.children}</div>
        </footer>
    );
};

export default Footer;
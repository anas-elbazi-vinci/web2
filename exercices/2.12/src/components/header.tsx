interface HeaderProps { urlLogo: string; children?: React.ReactNode; }

const Header = (props: HeaderProps) => {
    return (
        <div className="site-header">
            <img className="logo" src={props.urlLogo} alt="logo" />
            <div className="header-content">{props.children}</div>
        </div>
    );
};

export default Header;
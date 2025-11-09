interface HeaderProps{
    urlLogo : string;
    children : React.ReactNode;
}

const Header = (props : HeaderProps) =>{
    return (
        <div>
            <img src={props.urlLogo} alt="logo" />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Header;
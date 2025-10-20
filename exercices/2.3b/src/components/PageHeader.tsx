interface PageHeaderPros{
    urlLogo : string;
    children : React.ReactNode;
}

const PageHeader = (props : PageHeaderPros ) =>{
    return (
    <header className="header">
      <img src={props.urlLogo} alt="logo" className="logo" />
      <div>{props.children}</div>
    </header>
  );
}

export default PageHeader;
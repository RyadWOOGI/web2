import "./header.css"

interface HeaderProps {
    urlLogo: string;
    children: React.ReactNode;
}

const Header = (props: HeaderProps) =>  {
    return(
        <footer className="header">
            <img src={props.urlLogo} className="logoHeader"/>
            <div>{props.children}</div>
        </footer>
    );
};

export default Header;
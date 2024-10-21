import "./footer.css"

interface FooterProps {
    urlLogo: string;
    children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
    return (
        <footer className="footer">
        <div>{props.children}</div>
        <img src={props.urlLogo} className="logoFooter"/>
        </footer>
    );
};

export default Footer;
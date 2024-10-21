interface footerTextProps {
    footerText: string;
}

const FooterText = (props: footerTextProps) => <footer>{props.footerText}</footer>

export default FooterText;
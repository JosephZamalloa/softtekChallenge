import footerLogo from "../../assets/Logo_rimac_white.svg";
import "./styles.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={footerLogo} alt="footerLogoRimac" className="footer__logo" />
        <p className="footer__paragraph">© 2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  );
};

export default Footer;

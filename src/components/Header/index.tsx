import headerLogo from "../../assets/Logo_rimac_red.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import "./styles.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img src={headerLogo} alt="headerLogoRimac" className="header__logo" />
        <div className="header__text">
          <p className="header__paragraph">¡Compra por este medio!</p>
          <div className="header__contact">
            <img src={phoneIcon} alt="phoneIcon" />
            <p>(01) 411 6001</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

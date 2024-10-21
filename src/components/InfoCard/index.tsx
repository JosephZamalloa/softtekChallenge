import familyIcon from "../../assets/gl_family-24x24.svg";
import "./styles.scss";

const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="info-card__content">
        <div className="info-card__header">
          <p className="info-card__subtitle">PRECIOS CALCULADOS PARA:</p>
          <div className="info-card__user">
            <img src={familyIcon} alt="family-icon" />
            <p className="info-card__user-name">rocio miranda diaz</p>
          </div>
        </div>
        <div className="info-card__body">
          <div className="info-card__data">
            <p className="info-card__sub">Responsable de pago</p>
            <p className="info-card__text">DNI: </p>
            <p className="info-card__text">Celular: </p>
          </div>
          <div className="info-card__data">
            <p className="info-card__sub">Plan elegido</p>
            <p className="info-card__text">asdasd</p>
            <p className="info-card__text">asdasdasdsd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

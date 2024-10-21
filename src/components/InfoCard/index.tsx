import familyIcon from "../../assets/gl_family-24x24.svg";
import useUserStore from "../../stores/store";
import "./styles.scss";

const InfoCard = () => {
  const { userData } = useUserStore();
  return (
    <div className="info-card">
      <div className="info-card__content">
        <div className="info-card__header">
          <p className="info-card__subtitle">PRECIOS CALCULADOS PARA:</p>
          <div className="info-card__user">
            <img src={familyIcon} alt="family-icon" />
            <p className="info-card__user-name">
              {userData.userName} {userData.userLastname}
            </p>
          </div>
        </div>
        <div className="info-card__body">
          <div className="info-card__data">
            <p className="info-card__sub">Responsable de pago</p>
            <p className="info-card__text">
              {userData.documentType.toUpperCase()}: {userData.documentNumber}{" "}
            </p>
            <p className="info-card__text">Celular: {userData.phone} </p>
          </div>
          <div className="info-card__data">
            <p className="info-card__sub">Plan elegido</p>
            <p className="info-card__text">{userData.selectedPlan}</p>
            <p className="info-card__text">
              Costo del Plan: ${userData.cost} al mes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

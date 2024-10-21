import homeIcon from "../../assets/IcHomeLight.svg";
import hospitalIcon from "../../assets/IcHospitalLight.svg";

import "./styles.scss";
interface IPlanCard {
  type: string;
  description: string[];
  cost: number;
  recommended: boolean;
}

const PlanCard = ({ type, description, cost, recommended }: IPlanCard) => {
  return (
    <div className="plan-card">
      {recommended && (
        <p className="plan-card__recommended">Plan recomendado</p>
      )}
      <div className="plan-card__header">
        <div className="plan-card__header-text">
          <h2 className="plan-card__title">{type}</h2>
          <p className="plan-card__text">COSTO DEL PLAN</p>
          <p className="plan-card__cost">${cost} al mes</p>
          <span className="plan-card__line"></span>
        </div>
        <img
          src={cost < 99 ? homeIcon : hospitalIcon}
          alt="type-icon"
          className="plan-card__img"
        />
      </div>
      <ul className="plan-card__description-list">
        {description.map((item) => {
          return <li className="plan-card__description">{item}</li>;
        })}
      </ul>
      <button className="plan-card__button">Seleccionar Plan</button>
    </div>
  );
};

export default PlanCard;

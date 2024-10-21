import { BackButton, InfoCard } from "../../components";
import "./styles.scss";
const InfoContainer = () => {
  return (
    <div className="info-container">
      <div className="info-container__back">
        <BackButton page="/plans" />
      </div>
      <h1 className="info-container__title">Resumen del seguro</h1>
      <InfoCard />
    </div>
  );
};

export default InfoContainer;

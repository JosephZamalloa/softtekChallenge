import { BackButton, SelectionCard } from "../../components";
import forMeIcon from "../../assets/IcProtectionLight.svg";
import forSomeoneIcon from "../../assets/IcAddUserLight.svg";
import "./styles.scss";
const SelectionUserContainer = () => {
  const data = [
    {
      icon: forMeIcon,
      title: "Para mí",
      value: "for-me",
      description:
        "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    },
    {
      icon: forSomeoneIcon,
      title: "Para alguien más",
      value: "for-someone",
      description:
        "Realiza una cotización para uno de tus familiares o cualquier persona.",
    },
  ];
  return (
    <div className="selection-container">
      <div className="selection-container__back">
        <BackButton page="/" />
      </div>
      <div className="selection-container__text">
        <h1>¿Para quién deseas cotizar?</h1>
        <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
      </div>
      <div className="selection-container__cards">
        {data.map((item) => {
          return (
            <SelectionCard
              description={item.description}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectionUserContainer;

import "./styles.scss";
interface ISelectionCard {
  icon: string;
  title: string;
  description: string;
  value: string;
  onValueChange: (value: string) => void;
}
const PlanCard = ({
  icon,
  title,
  description,
  value,
  onValueChange,
}: ISelectionCard) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };
  return (
    <div className="selection-card">
      <input
        name="user-type"
        type="radio"
        className="selection-card__radius"
        onChange={handleOnChange}
        value={value}
      />
      <div className="selection-card__content">
        <div className="selection-card__name">
          <img src={icon} alt="type-icon" className="selection-card__img" />
          <h4 className="selection-card__title">{title}</h4>
        </div>
        <p className="selection-card__description">{description}</p>
      </div>
    </div>
  );
};

export default PlanCard;

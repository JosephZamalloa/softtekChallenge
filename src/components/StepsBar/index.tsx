import line from "../../assets/line.svg";
import "./styles.scss";
interface IStepsBar {
  currentStep: number;
}
const StepsBar = ({ currentStep }: IStepsBar) => {
  return (
    <div className="stepbar">
      <div className="stepbar__step">
        <span
          className={`stepbar__number ${
            currentStep === 1 && "stepbar__number--selected"
          }`}
        >
          1
        </span>
        <p
          className={`stepbar__text ${
            currentStep === 1 && "stepbar__text--selected"
          }`}
        >
          Planes y coberturas
        </p>
      </div>
      <img src={line} alt="step-line" className="stepbar__line" />
      <div className="stepbar__step">
        <span
          className={`stepbar__number ${
            currentStep === 2 && "stepbar__number--selected"
          }`}
        >
          2
        </span>
        <p
          className={`stepbar__text ${
            currentStep === 2 && "stepbar__text--selected"
          }`}
        >
          Resumen
        </p>
      </div>
    </div>
  );
};

export default StepsBar;

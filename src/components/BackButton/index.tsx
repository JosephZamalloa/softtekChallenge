import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/GlDown.svg";
import "./styles.scss";

interface IBackButton {
  page: string;
}
const BackButton = ({ page }: IBackButton) => {
  const navigate = useNavigate();
  return (
    <button className="back" onClick={() => navigate(page)}>
      <span className="back__icon">
        <img src={backIcon} className="back__image"></img>
      </span>
      Volver
    </button>
  );
};

export default BackButton;

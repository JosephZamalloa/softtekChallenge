import HeroImage from "../../assets/HeroImage.webp";
import { HeroForm } from "../../components";
import "./styles.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__image">
        <img src={HeroImage} alt="RimacHeroImage" />
      </div>
      <div className="hero__form">
        <HeroForm />
      </div>
    </div>
  );
};

export default Hero;

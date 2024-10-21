import "./styles.scss";
import { useNavigate } from "react-router-dom";
import familyImg from "../../assets/HeroImage.webp";
import useUserStore from "../../stores/store";
import { useState } from "react";
import { fetchUser } from "../../api";

const HeroForm = () => {
  const navigation = useNavigate();
  const { userData, updateUserData } = useUserStore();
  const [documentType, setDocumentType] = useState(userData.documentType);
  const [documentNumber, setDocumentNumber] = useState(userData.documentNumber);
  const [phone, setPhone] = useState(userData.phone);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await fetchUser();
      updateUserData({
        documentType,
        documentNumber,
        phone,
        userName: data.name,
        userLastname: data.lastName,
        birthday: data.birthDay,
      });
      navigation("/plans");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="hero-form">
      <div className="hero-form__header-mobile">
        <div>
          <p className="hero-form__subtitle">Seguro Salud Flexible</p>
          <p className="hero-form__title">Creado para ti y tu familia</p>
        </div>
        <img
          src={familyImg}
          alt="hero-img"
          className="hero-form__image-mobile"
        />
      </div>
      <div className="hero-form__header">
        <p className="hero-form__subtitle">Seguro Salud Flexible</p>
        <p className="hero-form__title">Creado para ti y tu familia</p>
      </div>
      <p className="hero-form__description">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>
      {/*    seccion formulario */}
      <form className="hero-form__form" onSubmit={handleSubmit}>
        <div className="hero-form__identification">
          <select
            name="identification"
            id="identification"
            className="hero-form__select"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            required
          >
            <option value="dni">DNI</option>
            <option value="carnet">Carnet de extranjería</option>
          </select>
          <div className="hero-form__input-container">
            <label className="hero-form__input-label">Nro. de documento</label>
            <input
              name="identification-input"
              type="number"
              className="hero-form__input"
              maxLength={10}
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="hero-form__input-container hero-form__input--phone">
          <label className="hero-form__input-label">Celular</label>
          <input
            name="phone"
            type="number"
            className="hero-form__input "
            maxLength={12}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="hero-form__checkbox-container">
          <div className="hero-form__checkbox-option">
            <input type="checkbox" className="hero-form__checkbox" required />
            <label className="hero-form__input-label">
              Acepto la Política de Privacidad
            </label>
          </div>
          <div className="hero-form__checkbox-option">
            <input type="checkbox" className="hero-form__checkbox" required />
            <label className="hero-form__input-label">
              Acepto la Política Comunicaciones Comerciales
            </label>
          </div>
        </div>
        <p className="hero-form__terms">Aplican Términos y Condiciones.</p>
        <button type="submit" className="hero-form__button">
          Cotiza aquí
        </button>
      </form>
    </div>
  );
};

export default HeroForm;

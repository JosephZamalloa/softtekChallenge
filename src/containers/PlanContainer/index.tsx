import { useEffect, useState } from "react";
import { IPlan } from "../../api/types/types";
import useUserStore from "../../stores/store";
import { fetchPlans } from "../../api";
import { BackButton, SelectionCard, StepsBar } from "../../components";
import PlanCardContainer from "../PlanCardContainer";
import { data } from "./data";
import "./styles.scss";

const PlanContainer = () => {
  const [plans, setPlans] = useState<IPlan[]>([]);
  const { userData, updateUserData } = useUserStore();
  useEffect(() => {
    const getPlans = async () => {
      const data = await fetchPlans();
      setPlans(data.list);
    };
    getPlans();
  }, []);

  const [userType, setUserType] = useState(userData.userType);

  const handleValueChange = (value: string) => {
    setUserType(value);
    updateUserData({ userType });
  };
  return (
    <div>
      <StepsBar currentStep={1} backPage="/" />
      <div className="selection-container">
        <div className="selection-container__back">
          <BackButton page="/" />
        </div>
        <div className="selection-container__text">
          <h1>{userData.userName} ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </div>
        <div className="selection-container__cards">
          {data.map((item, id) => {
            return (
              <SelectionCard
                key={id}
                description={item.description}
                icon={item.icon}
                title={item.title}
                value={item.value}
                onValueChange={handleValueChange}
              />
            );
          })}
        </div>
      </div>
      {userType && <PlanCardContainer data={plans} userType={userType} />}
    </div>
  );
};

export default PlanContainer;

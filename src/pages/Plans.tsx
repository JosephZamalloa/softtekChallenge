import { useEffect, useState } from "react";
import { StepsBar } from "../components";
import { PlanCardContainer, SelectionUserContainer } from "../containers";
import { fetchPlans } from "../api";
import { IPlan } from "../api/types/types";

const Plans = () => {
  const [plans, setPlans] = useState<IPlan[]>([]);

  useEffect(() => {
    const getPlans = async () => {
      const data = await fetchPlans();
      setPlans(data.list);
    };
    getPlans();
  }, []);

  return (
    <div className="plans-page">
      <StepsBar currentStep={1} backPage="/" />
      <SelectionUserContainer />
      <PlanCardContainer data={plans} />
    </div>
  );
};

export default Plans;

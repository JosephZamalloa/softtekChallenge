import React from "react";
import { PlanCard } from "../../components";
import "./styles.scss";

interface IPlan {
  price: number;
  description: string[];
  name: string;
}

interface IPlanCardContainer {
  data: IPlan[];
}

const PlanCardContainer: React.FC<IPlanCardContainer> = ({ data }) => {
  return (
    <div className="card-container">
      {data.slice(0, 3).map((item) => (
        <PlanCard
          key={item.name}
          cost={item.price}
          description={item.description}
          recommended
          type={item.name}
        />
      ))}
    </div>
  );
};

export default PlanCardContainer;

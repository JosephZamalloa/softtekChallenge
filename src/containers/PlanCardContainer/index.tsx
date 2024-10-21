import React from "react";
import { PlanCard } from "../../components";
import "./styles.scss";
import useUserStore from "../../stores/store";
import useAge from "../../hooks/useAge";

interface IPlan {
  price: number;
  description: string[];
  name: string;
  age: number;
}

interface IPlanCardContainer {
  data: IPlan[];
  userType: string;
}

const PlanCardContainer: React.FC<IPlanCardContainer> = ({
  data,
  userType,
}) => {
  const { userData } = useUserStore();
  const age = useAge(userData.birthday);
  return (
    <div className="card-container">
      {data
        .filter((item) => item.age > age)
        .map((item, id) => (
          <PlanCard
            key={id}
            cost={
              userType === "for-someone"
                ? item.price - item.price * 0.05
                : item.price
            }
            description={item.description}
            recommended={item.price > 50 ? true : false}
            type={item.name}
          />
        ))}
    </div>
  );
};

export default PlanCardContainer;

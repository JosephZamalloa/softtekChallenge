import StepsBar from "../components/StepsBar";

import InfoContainer from "../containers/InfoContainer";

const Resume = () => {
  return (
    <div>
      <StepsBar currentStep={2} backPage="/plans" />
      <InfoContainer />
    </div>
  );
};

export default Resume;

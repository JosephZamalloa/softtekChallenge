import { useState, useEffect } from "react";

const useAge = (birthday: string) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const nowsAge = () => {
      const today = new Date();
      const getBirthday = new Date(birthday);

      let calcAge = today.getFullYear() - getBirthday.getFullYear();
      const mes = today.getMonth() - getBirthday.getMonth();

      // Ajuste por meses y días
      if (mes < 0 || (mes === 0 && today.getDate() < getBirthday.getDate())) {
        calcAge--;
      }

      setAge(calcAge);
    };

    nowsAge();
  }, [birthday]);

  return age;
};

export default useAge;

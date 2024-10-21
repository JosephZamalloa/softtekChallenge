const API_URL = "https://rimac-front-end-challenge.netlify.app/api";
export const fetchSteps = async () => {
  try {
    const response = await fetch(`${API_URL}/steps`);
    if (!response.ok) {
      throw new Error("Error al obtener los pasos");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchPlans = async () => {
  try {
    const response = await fetch(`${API_URL}/plans.json`);
    if (!response.ok) {
      throw new Error("Error al obtener los planes");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const API_URL = "https://rimac-front-end-challenge.netlify.app/api";

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

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; 

export async function getRecipes(q = "") {
  const response = await axios.get(`${API_URL}receitas`, {
    params: { q },
  });
  return response.data; 
}

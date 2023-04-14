import axios from "axios";
export const getCountriesApi = async (form) => {  
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response
} 


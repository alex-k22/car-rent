import axios from "axios";

export const getCars = async () => {
  const { data } = await axios.get("https://64a0f7c30079ce56e2dab5c2.mockapi.io/auto");
  return data;
};

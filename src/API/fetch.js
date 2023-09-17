import axios from "axios";

const BASE_URL = "https://64a0f7c30079ce56e2dab5c2.mockapi.io/auto";

export const getCars = async () => {
  const { data } = await axios.get(`${BASE_URL}`);

  return data;
};

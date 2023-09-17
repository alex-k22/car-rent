import axios from "axios";

const BASE_URL = "https://64a0f7c30079ce56e2dab5c2.mockapi.io/auto";

export const getCars = async (page = 1) => {
  const { data } = await axios.get(`${BASE_URL}`, {
    params: {
      l: 8,
      p: page,
    },
  });

  return data;
};

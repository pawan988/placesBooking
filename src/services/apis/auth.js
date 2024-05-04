import { BASE_URL } from "../../constants/constant";
import axios from "axios";

export const loginApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `${BASE_URL}/dashboard/login/`,
    data,
    config
  );

  return response;
};

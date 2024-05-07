import { BASE_URL } from "../../constants/constant";
import { get_token } from "../../constants/constant";
import axios from "axios";

export const getPlacesApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${get_token()}`,
    },
  };

  const response = await axios.get(
    `${BASE_URL}/dashboard/place-home/?page=${data}`,
    config
  );

  return response;
};

export const postPlacesApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${get_token()}`,
    },
  };

  const response = await axios.post(`${BASE_URL}/data/city/`, data, config);

  return response;
};

export const searchPlacesApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${get_token()}`,
    },
  };

  const response = await axios.get(
    `${BASE_URL}/dashboard/place-home/?name=${data}`,
    config
  );

  return response;
};

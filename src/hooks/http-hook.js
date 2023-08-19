import axios from "axios";
import { useCallback } from "react";

const baseUrl = "http://localhost:4001/api/v1";

export const useHttpClient = () => {
  const sendRequest = useCallback(
    async (url, method = "get", body = null) => {
      try {
        const response = await axios[method](baseUrl + url, body);
        return response;
      } catch (err) {
        throw err;
      }
    },
    []
  );

  return { sendRequest };
};

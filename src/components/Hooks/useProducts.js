import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const addUsers = (products) => {
  return axios.post("http://127.0.0.1:3003/products", products);
};

export const useProducts = () => {
  const queryClient = useQueryClient();
  return useMutation((products) => addUsers(products), {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
};

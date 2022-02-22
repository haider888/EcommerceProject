import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const addToCart = (id) => {
  console.log("idid", id);
  return axios.add(`http://127.0.0.1:3003/Products/${id}`);
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation(addToCart, {
    onSuccess: () => {
      queryClient.invalidateQueries("product");
    },
  });
};

import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const removeProducts = (id) => {
  console.log("idid", id);
  return axios.delete(`http://127.0.0.1:3003/products/${id}`);
};

export const useRemoveProducts = () => {
  const queryClient = useQueryClient();
  return useMutation(removeProducts, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
};

import { useQuery } from "react-query";
import axios from "axios";

const fetchProducts = () => {
   return axios.get("http://127.0.0.1:3003/Products");

   
};


export const useProductList = () => {
  return useQuery("products", fetchProducts);
};

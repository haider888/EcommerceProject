import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const addUsers = (users) => {
  return axios.post("http://127.0.0.1:3003/users", users);
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation((users) => addUsers(users), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};

// export const useRegister = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addUsers,{
//     onSuccess: () => {
//       queryClient.invalidateQueries("users");
//     },
//   });
// };

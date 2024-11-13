import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";
import { saveState } from "../../config/store";

export const useCreateUsers = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
    onSuccess: (data) => {
      saveState("userData", data);
    },
    onError: () => {
    },
  });
};

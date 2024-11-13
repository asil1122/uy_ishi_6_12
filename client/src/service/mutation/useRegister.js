import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";
import { saveState } from "../../config/store";

export const useRegister = () => {
    return useMutation({
        mutationFn: (data) =>
            request.post("/register", data).then((res) => res.data),
    });
};

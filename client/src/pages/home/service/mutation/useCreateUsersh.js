import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { saveState } from "../../../../config/store";

export const useCreateUsers = () => {
   const client = useQueryClient()
   return useMutation({
      mutationFn: (data) => request.post('/client',data).then((res) => res.data),
      onSuccess: (data) => {
         client.invalidateQueries(['users'])
      }
   })  
}
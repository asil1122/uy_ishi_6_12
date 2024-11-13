import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useGetUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => request.get('/client').then((res) => res.data)
    })
}

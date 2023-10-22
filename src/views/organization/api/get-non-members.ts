import { UserDto } from "@/@core/dto/userDto";
import api from "@/configs/api";
import { useQuery } from "react-query";

interface Response {
    nonMembers: UserDto;
}

const getNonMembers = (organizationId: string) => api.get<Response>(`/organization-users/get-non-members/${organizationId}`);

export const useNonMembers = (organizationId?: string) => {
    return useQuery(["non-members", organizationId], () => getNonMembers(organizationId!), {
        enabled: !!organizationId
    });
}
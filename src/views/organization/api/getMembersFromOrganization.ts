import { UserDto } from "@/@core/dto/userDto";
import api from "@/configs/api";
import { useQuery } from "react-query";

interface Response {
    users: UserDto[];
}

const getMembersFromOrganization = (organizationId: string) => api.get<Response>(`organization-users/get-members/${organizationId}`);

export const useMembersFromOrganization = (organizationId: string | undefined) => useQuery(["organization/members", organizationId!], () => getMembersFromOrganization(organizationId), {
    enabled: !!organizationId
});

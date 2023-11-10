import { OrganizationDto } from "@/@core/dto/organizationDto";
import api from "@/configs/api";
import { useQuery } from "react-query";

interface Response {
    organization: OrganizationDto;
}

const getOrganization = (organizationId: string) => api.get<Response>(`organizations/${organizationId}`);

export const useOrganization = (organizationId?: string) => {
    return useQuery(["organization", organizationId], () => getOrganization(organizationId!), {
        enabled: !!organizationId
    });
}
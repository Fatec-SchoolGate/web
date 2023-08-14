import { useMutation, useQuery } from "react-query";
import api from "@/configs/api";
import { OrganizationDto } from "@/@core/dto/organizationDto";

interface GetOrganizationsResponse {
    organizations: OrganizationDto[]
}

const getOrganizations = () => api.get<GetOrganizationsResponse>("/organizations");

export const useOrganizations = () => {
    return useQuery("organizations", getOrganizations);
}
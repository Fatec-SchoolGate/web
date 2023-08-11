import { useMutation } from "react-query";
import api from "@/configs/api";
import { OrganizationDto } from "@/@core/dto/organizationDto";

const createOrganization = (organizationDto: OrganizationDto) => api.post("/organizations", organizationDto);

export const useCreateOrganization = () => {
    return useMutation(createOrganization);
}
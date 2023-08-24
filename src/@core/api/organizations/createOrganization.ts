import { useIsMutating, useMutation } from "react-query";
import { CreateOrganizationDto } from "@/@core/dto/organization/createOrganizationDto";
import api from "@/configs/api";

const createOrganization = (organizationDto: CreateOrganizationDto) => api.post("/organizations", organizationDto);

const mutationKey = "create/organization";

export const useIsCreatingOrganization = () => useIsMutating({ mutationKey }) > 0;

export const useCreateOrganization = () => useMutation(createOrganization, {
    mutationKey
});
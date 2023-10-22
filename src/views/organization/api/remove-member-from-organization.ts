import api from "@/configs/api";
import { useMutation } from "react-query";

const removeMemberFromOrganization = (params: { organizationId: string, memberId: string }) => api.delete(`/organization-users/${params.organizationId}/remove-member/${params.memberId}`);

export const useRemoveMemberFromOrganization = () => {
    return useMutation(removeMemberFromOrganization);
}
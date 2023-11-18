import api from "@/configs/api";
import { useMutation } from "react-query";

const acceptInvite = async (inviteId: string) => await api.post("schedules/accept-invite", {
    inviteId
});

export const useAcceptInvite = () => useMutation(acceptInvite);
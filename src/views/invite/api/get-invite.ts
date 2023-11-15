import { InviteDto } from "@/@core/dto/invite-dto";
import api from "@/configs/api";
import { useQuery } from "react-query";

interface Response {
    invite: InviteDto;
}

const getInvite = (inviteId: string) => api.get<Response>(`schedules/invite/${inviteId}`);

export const useInvite = (inviteId?: string) => {
    return useQuery(["invite", inviteId], () => getInvite(inviteId!), {
        enabled: !!inviteId
    });
}
import { InviteDto } from "@/@core/dto/invite-dto";
import api from "@/configs/api";
import { useMutation } from "react-query";

const createInvite = (scheduleId: string) => api.post<InviteDto>(`schedules/create-invite`, {
    scheduleId
});

export const useCreateInvite = () => {
    return useMutation(createInvite);
}
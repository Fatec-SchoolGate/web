import api from "@/configs/api";
import { ScheduleDto } from "@/views/subject/dto/schedule.dto";
import { useQuery } from "react-query";

interface Response {
    schedules: ScheduleDto[];
}

const getSchedulesByOrganization = (organizationId: string) => api.get<Response>(`schedules`, { params: { organizationId } });

export const useSchedulesByOrganization = (organizationId: string) => {
    return useQuery(["schedules", "organization", organizationId], () => getSchedulesByOrganization(organizationId), {
        enabled: !!organizationId
    });
}
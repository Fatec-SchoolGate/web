import api from "@/configs/api";
import { useQuery } from "react-query";
import { SubjectDto } from "../dto/subjectDto";
import { useRouter } from "next/router";

interface Response {
    subjects: SubjectDto[];
}

const getSubjects = (organizationId: string) => api.get<Response>(`subjects`, { params: { organizationId } });

export const useSubjects = () => {
    const router = useRouter();
    const { organizationId } = router.query;

    return useQuery(["subjects", organizationId], () => getSubjects(organizationId! as string), {
        enabled: !!organizationId
    });
}

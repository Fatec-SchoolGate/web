import api from "@/configs/api";
import { useQuery } from "react-query";

export interface Response {
    subject: Subject
}

export interface Subject {
    id: string
    name: string
    description: string
    displayImage: any
    backgroundImage: any
    createdAt: string
    updatedAt: string
}

const getSubject = (subjectId: string) => api.get<Response>(`subjects/${subjectId}`);

export const useSubject = (subjectId?: string) => useQuery(["subject", subjectId], () => getSubject(subjectId!), {
    enabled: !!subjectId
});
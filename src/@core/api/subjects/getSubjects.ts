import { SubjectDto } from "@/@core/dto/subject/subjectDto";
import api from "@/configs/api";
import { useQuery } from "react-query";

interface Response {
    subjects: SubjectDto[];
}

const getSubjects = () => api.get<Response>(`subjects`);

export const useSubjects = () => useQuery(["subjects"], getSubjects);
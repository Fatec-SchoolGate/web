import api from "@/configs/api";
import { useQuery } from "react-query";
import { SubjectDto } from "../dto/subjectDto";

interface Response {
    subjects: SubjectDto[];
}

const getSubjects = () => api.get<Response>(`subjects`);

export const useSubjects = () => useQuery(["subjects"], getSubjects);

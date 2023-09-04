import { CreateSubjectDto } from "./createSubjectDto";

export type UpdateSubjectDto = {
    id: string;
} & CreateSubjectDto;
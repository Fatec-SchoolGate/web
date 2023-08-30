export type CreateSubjectDto = {
    name: string;
    description?: string;
    displayImage?: File | null;
    backgroundImage?: File | null;
}

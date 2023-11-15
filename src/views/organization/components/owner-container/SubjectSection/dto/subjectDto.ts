export type SubjectDto = {
    id: string;
    name: string;
    description?: string;
    displayImage?: string;
    backgroundImage?: string;
    currentUserRole?: string;
    adminUserId: string;
    organizationSubject?: {
        organizationId: string;
        subjectId: string;
    }
}
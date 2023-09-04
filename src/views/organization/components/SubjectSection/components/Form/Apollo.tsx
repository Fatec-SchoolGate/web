
import { useSubject } from "../../api/getSubject";
import { CreateSubjectDto } from "../../dto/createSubjectDto";
import { UpdateSubjectDto } from "../../dto/updateSubjectDto";
import { useSubjectSectionStore } from "../../store";
import Logic from "./Logic";

const Apollo = () => {
    const { subjectId } = useSubjectSectionStore();

    const { data: response, isLoading } = useSubject(subjectId!);
    const subject = response?.data.subject;

    const defaultValues: CreateSubjectDto | UpdateSubjectDto = {
        ...(subject?.id && { id: subject.id }),
        description: subject?.description ?? "",
        name: subject?.name ?? ""
    };
    console.log(defaultValues);
    return (
        <Logic
            defaultValues={defaultValues}
        />
    );
}

export default Apollo;
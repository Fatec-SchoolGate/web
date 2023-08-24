import { CreateSubjectDto } from "@/@core/dto/subject/createSubjectDto";
import Logic from "./Logic";

const Apollo = () => {
    const defaultValues: CreateSubjectDto = {
        description: "",
        name: ""
    };

    return (
        <Logic
            defaultValues={defaultValues}
        />
    );
}

export default Apollo;
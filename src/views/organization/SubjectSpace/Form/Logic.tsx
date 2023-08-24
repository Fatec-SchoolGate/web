import { useForm } from "react-hook-form";
import { mixed, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateSubjectDto } from "@/@core/dto/subject/createSubjectDto";
import View from "./View";
import { useCreateSubject } from "@/@core/api/subjects/createSubject";

const schema = object().shape({
    name: string().required("nameRequired"),
    description: string(),
    displayImage: mixed<File>(),
    backgroundImage: mixed<File>()
});

interface Props {
    defaultValues: CreateSubjectDto;
}

const Logic = (props: Props) => {
    const {
        defaultValues
    } = props;

    const { mutate: createSubject, isLoading } = useCreateSubject();

    const form = useForm<CreateSubjectDto>({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (subject: CreateSubjectDto) => {
        if (isLoading) return;
        
        createSubject(subject);
    }

    return (
        <View
            form={form}
            onSubmit={handleSubmit}
        />
    );
}

export default Logic;
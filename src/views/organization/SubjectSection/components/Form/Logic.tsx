import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { mixed, object, string } from "yup";
import { useCreateSubject } from "../../api/createSubject";
import { useSubjects } from "../../api/getSubjects";
import { CreateSubjectDto } from "../../dto/createSubjectDto";
import { UpdateSubjectDto } from "../../dto/updateSubjectDto";
import View from "./View";
import { useUpdateSubject } from "../../api/updateSubject";
import { useEffect } from "react";

const schema = object().shape({
    name: string().required("nameRequired"),
    description: string(),
    // displayImage: mixed<File>(),
    // backgroundImage: mixed<File>()
});

interface Props {
    defaultValues: CreateSubjectDto | UpdateSubjectDto;
}

const Logic = (props: Props) => {
    const { defaultValues } = props;

    const { mutate: createSubject, isLoading: isCreating } = useCreateSubject();
    const { mutate: updateSubject, isLoading: isUpdating } = useUpdateSubject();
    const { refetch } = useSubjects();

    const isLoading = isCreating || isUpdating;

    const form = useForm<CreateSubjectDto | UpdateSubjectDto>({
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (subject: CreateSubjectDto | UpdateSubjectDto) => {
        if (isLoading) return;
        if ("id" in subject) {
            updateSubject(subject, { onSuccess: () => refetch() });
        } else {
            createSubject(subject, { onSuccess: () => refetch() });
        } 
    }

    useEffect(() => form.reset(defaultValues), [defaultValues]);

    return (
        <View
            form={form}
            onSubmit={handleSubmit}
        />
    );
}

export default Logic;
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ExampleDto } from "../dto/exampleDto";
import { useCreateExample } from "../api/createExample";
import View from "./View";

const schema = object().shape({
    foo: string().required()
});

interface Props {
    defaultValues: ExampleDto;
}

const Logic = (props: Props) => {
    const {
        defaultValues
    } = props;

    const { mutate: createExample, isLoading } = useCreateExample();

    const form = useForm<ExampleDto>({
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (exampleDto: ExampleDto) => {
        if (isLoading) return;
        createExample(exampleDto);
    }

    return (
        <View
            form={form}
            onSubmit={handleSubmit}
        />
    );
}

export default Logic;
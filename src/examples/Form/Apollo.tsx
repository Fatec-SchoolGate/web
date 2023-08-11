import { ExampleDto } from "../dto/exampleDto";
import Logic from "./Logic";

const Apollo = () => {
    const defaultValues: ExampleDto = {
        foo: ""
    };

    return (
        <Logic
            defaultValues={defaultValues}
        />
    );
}

export default Apollo;
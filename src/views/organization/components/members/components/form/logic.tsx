import { useFormContext } from "react-hook-form";
import View from "./view"
import { AddMembersDto } from "../dto/add-members-dto";

const Logic = () => {
    const { handleSubmit } = useFormContext<AddMembersDto>();

    const onSubmit = (addMembersDto: AddMembersDto) => {
        console.log(a);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <View/>
        </form>
    );
}

export default Logic;
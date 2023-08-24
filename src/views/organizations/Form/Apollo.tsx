import { CreateOrganizationDto } from "@/@core/dto/organization/createOrganizationDto";
import Logic from "./Logic";

const Apollo = () => {
    const defaultValues: CreateOrganizationDto = {
        address: "",
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
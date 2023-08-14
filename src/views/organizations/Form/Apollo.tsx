import { OrganizationDto } from "@/@core/dto/organizationDto";
import Logic from "./Logic";

const Apollo = () => {
    const defaultValues: OrganizationDto = {
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
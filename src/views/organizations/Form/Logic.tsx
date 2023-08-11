import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import View from "./View";
import { OrganizationDto } from "@/@core/dto/organizationDto";
import { useCreateOrganization } from "@/@core/api/organizations/createOrganization";

const schema = object().shape({
    
});

interface Props {
    defaultValues: OrganizationDto;
}

const Logic = (props: Props) => {
    const {
        defaultValues
    } = props;

    const { mutate: createOrganization, isLoading } = useCreateOrganization();

    const form = useForm<OrganizationDto>({
        defaultValues: defaultValues,
        // resolver: yupResolver(schema)
    });

    const handleSubmit = async (organizationDto: OrganizationDto) => {
        if (isLoading) return;
        createOrganization(organizationDto);
    }

    return (
        <View
            form={form}
            onSubmit={handleSubmit}
        />
    );
}

export default Logic;
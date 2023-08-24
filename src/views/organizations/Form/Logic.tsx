import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import View from "./View";
import { useCreateOrganization } from "@/@core/api/organizations/createOrganization";
import { CreateOrganizationDto } from "@/@core/dto/organization/createOrganizationDto";
import { useOrganizations } from "@/@core/api/organizations/getOrganizations";
import { useOrganizationStore } from "@/stores/organizations/useOrganization";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const schema = object().shape({
    name: string().required("nameRequired"),
    address: string(),
    description: string()
});

interface Props {
    defaultValues: CreateOrganizationDto;
}

const Logic = (props: Props) => {
    const {
        defaultValues
    } = props;

    const { t } = useTranslation();
    const { mutate: createOrganization, isLoading } = useCreateOrganization();
    const { refetch } = useOrganizations();
    const { closeForm } = useOrganizationStore();

    const form = useForm<CreateOrganizationDto>({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (organizationDto: CreateOrganizationDto) => {
        if (isLoading) return;
        createOrganization(organizationDto, {
            onSuccess: () => {
                toast.success(t("organizationCreationSuccess"));
                refetch();
                closeForm();
            }
        });
    }

    return (
        <View
            form={form}
            onSubmit={handleSubmit}
        />
    );
}

export default Logic;
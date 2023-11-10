import { useFormContext } from "react-hook-form";
import View from "./view"
import { AddMembersDto, AddMembersFormDto } from "../../dto/add-members-dto";
import { useRouter } from "next/router";
import { useAddMembers } from "@/views/organization/api/add-members";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useMembersFromOrganization } from "@/views/organization/api/getMembersFromOrganization";
import { useMembersSection } from "../../store";

const Logic = () => {
    const { t } = useTranslation();

    const { handleSubmit } = useFormContext<AddMembersFormDto>();

    const router = useRouter();
    const { organizationId } = router.query;

    const { mutateAsync: addMembers } = useAddMembers();
    const { refetch } = useMembersFromOrganization(organizationId as string);

    const { closeForm } = useMembersSection();

    const onSubmit = (addMembersFormDto: AddMembersFormDto) => {
        if (!organizationId) return;

        const addMembersDto: AddMembersDto = {
            organizationId: organizationId as string,
            userIds: addMembersFormDto.userIds
        };

        toast.promise(addMembers(addMembersDto, {
            onSuccess: () => {
                refetch();
                closeForm();
            }
        }), {
            error: t("addMembersError"),
            success: t("addMembersSuccess"),
            loading: t("addingMembers")
        });
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
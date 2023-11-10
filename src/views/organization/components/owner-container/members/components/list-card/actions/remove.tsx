import { useMembersFromOrganization } from "@/views/organization/api/getMembersFromOrganization";
import { useRemoveMemberFromOrganization } from "@/views/organization/api/remove-member-from-organization";
import { MenuItem } from "@mui/material"
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next"

interface RemoveActionProps {
    userId: string;
}

const Remove = (props: RemoveActionProps) => {
    const { userId } = props;

    const router = useRouter();
    const { organizationId } = router.query;

    const { t } = useTranslation();

    const { mutateAsync: removeMember } = useRemoveMemberFromOrganization();
    const { refetch } = useMembersFromOrganization(organizationId as string);

    const handleRemoval = () => {
        if (!organizationId || Array.isArray(organizationId)) return;

        toast.promise(removeMember({
            organizationId,
            memberId: userId
        }, {
            onSuccess: () => {
                refetch();
            }
        }), {
            success: t("userRemovalSuccess"),
            error: t("userRemovalError"),
            loading: t("userRemovalLoading")
        });
    }

    return (
        <MenuItem
            onClick={handleRemoval}
        >
            {t("remove")}
        </MenuItem>
    );
}

export default Remove;
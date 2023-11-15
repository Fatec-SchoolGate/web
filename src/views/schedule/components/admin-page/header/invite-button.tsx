import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton } from "@mui/material";
import { useCreateInvite } from "@/views/schedule/api/create-invite";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const InviteButton = () => {
    const { t } = useTranslation();

    const router = useRouter();
    const { scheduleId } = router.query;

    const { mutateAsync: createInvite } = useCreateInvite();

    const handleCreateInvite = () => {
        toast.promise(createInvite(scheduleId as string, {
            onSuccess: ({ data }) => {
                navigator.clipboard.writeText(`${window.location.origin}/s-invite/${data?.id}`);
            }
        }), {
            success: t("inviteCopiedToClipboard"),
            error: t("errorGeneratingInvite"),
            loading: t("creatingInvite")
        });
    }

    return (
        <IconButton onClick={handleCreateInvite}>
            <Icon icon={"material-symbols:person-add"}/>
        </IconButton>
    );
}

export default InviteButton;
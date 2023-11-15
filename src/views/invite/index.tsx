import { Box, Button, Card, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useInvite } from "./api/get-invite";
import { useTranslation } from "react-i18next";
import LogoIcon from "@/@core/components/logo";
import toast from "react-hot-toast";
import { useAcceptInvite } from "./api/accept-invite";
import { useSettingsStore } from "@/@core/stores/settingsStore";

const InviteContainer = () => {
    const { t } = useTranslation();
    
    const router = useRouter();
    const { inviteId } = router.query;

    const { data: response, isLoading } = useInvite(inviteId as string);

    const invite = response?.data.invite;
    
    const { mutateAsync: acceptInvite } = useAcceptInvite(); 

    const { appTitle } = useSettingsStore();

    const handleAccept = () => {
        toast.promise(acceptInvite(inviteId as string, {
            onSuccess: () => {
                const scheduleRoute = `/organizations/${invite?.schedule?.subject?.organizationSubject?.organizationId}/subjects/${invite?.schedule?.subjectId}/schedule/${invite?.scheduleId}`;
                setTimeout(() => router.replace(scheduleRoute), 1000);
            }
        }), {
            loading: t("acceptingInvite"),
            success: t("inviteAccepted"),
            error: t("failedToAcceptInvite")
        });
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
                height: "100vh"
            }}
        >
            <Card
                sx={{
                    width: {
                        xs: "100%",
                        sm: 400
                    },
                    height: {
                        xs: "100%",
                        sm: 300
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: 20,
                    p: 4,
                    pt: 10
                }}
            >
                <div>
                    <Box
                        sx={{
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            display: {
                                xs: "flex",
                                vs: "none"
                            }
                        }}
                    >
                        <LogoIcon width={30} height={30}/>
                        <Typography variant={"h4"}>{appTitle}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                vs: "inherit"
                            }
                        }}
                    >
                        <LogoIcon width={100} height={100}/>
                    </Box>
                    <Typography>{t("acceptInviteTitle", { subjectTitle: invite?.schedule?.subject?.name })}</Typography>
                </div>
                <Button variant={"contained"} onClick={handleAccept}>
                    {t("continue")}
                </Button>
            </Card>
        </Box>
    );
}

export default InviteContainer;
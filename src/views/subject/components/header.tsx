import { useSubject } from "@/views/organization/components/SubjectSection/api/getSubject";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Header = () => {
    const router = useRouter();
    const { subjectId } = router.query;

    const { t } = useTranslation();

    const { data: response, isLoading } = useSubject(subjectId as string);
    const subject = response?.data.subject;

    if (isLoading) return <>...</>;

    return (
        <Box
            sx={{
                p: (theme) => theme.spacing(4)
            }}
        >
            <Typography variant={"h4"}>
                {subject?.name}
            </Typography>
            <Typography>
                <span style={{ fontWeight: 700 }}>{t("description")}</span>: {subject?.description}
            </Typography>
        </Box>
    );
}

export default Header;
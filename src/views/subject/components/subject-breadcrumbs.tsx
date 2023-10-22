import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SubjectBreadcrumbs = () => {
    const { t } = useTranslation();

    return (
        <Breadcrumbs>
            <Link href={"/organizations"}>
                Organizations
            </Link>
            <Typography color={"primary"}>{t("subjects")}</Typography>
        </Breadcrumbs>
    );
}

export default SubjectBreadcrumbs;
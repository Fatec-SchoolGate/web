import { useMembersFromOrganization } from "@/views/organization/api/getMembersFromOrganization";
import { useRouter } from "next/router";
import ListCard from "../list-card";
import { Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const MembersList = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { organizationId } = router.query;

    const { data: response, isLoading } = useMembersFromOrganization(organizationId as string);
    const users = response?.data?.users ?? [];

    if (isLoading) {
        return (
            <Skeleton
                variant={"rectangular"}
                height={100}
                sx={{ borderRadius: 1 }} 
            />
        );
    }

    if (users.length === 0) {
        return <Typography variant={"h4"}>{t("noUsersFound")}</Typography>
    }

    return (
        <div>
            {users.map((user) => (
                <ListCard
                    user={user}
                    key={user.id}
                />
            ))}
        </div>
    );
}

export default MembersList;
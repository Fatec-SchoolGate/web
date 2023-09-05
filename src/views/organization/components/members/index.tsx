import { Box, Card } from "@mui/material"
import { useMembersFromOrganization } from "../../api/getMembersFromOrganization";
import { useRouter } from "next/router";
import ListItemCard from "@/@core/components/ui/ListItemCard";

const MembersList = () => {

    const router = useRouter();
    const { organizationId } = router.query;

    const { data: response, isLoading } = useMembersFromOrganization(organizationId as string);
    const users = response?.data?.users ?? [];

    return (
        <Card
            sx={{
                p: (theme) => theme.spacing(4)
            }}
        >
            {users?.map((user) => (
                <ListItemCard
                    id={user.id}
                    key={user.id}
                    title={user.name}
                    subInformations={[
                        { text: user.email, icon: "ic:baseline-email" }
                    ]}
                />
            ))}
        </Card>
    );
}

export default MembersList;
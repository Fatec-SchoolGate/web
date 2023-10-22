import { Box } from "@mui/material"
import { useMembersFromOrganization } from "../../api/getMembersFromOrganization";
import { useRouter } from "next/router";
import ListItemCard from "@/@core/components/ui/ListItemCard";
import Header from "./components/header";
import ListCard from "./components/list-card";

const MembersList = () => {

    const router = useRouter();
    const { organizationId } = router.query;

    const { data: response, isLoading } = useMembersFromOrganization(organizationId as string);
    const users = response?.data?.users ?? [];

    return (
        <Box
            sx={{
                p: (theme) => theme.spacing(4)
            }}
        >
            <Header/>
            <Box>
                {users.map((user) => (
                    <ListCard
                        user={user}
                        key={user.id}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default MembersList;

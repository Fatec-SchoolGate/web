import { useRouter } from "next/router";
import { useOrganization } from "./api/get-organization";
import MemberContainer from "./components/member-container";
import OwnerContainer from "./components/owner-container";
import { CircularProgress } from "@mui/material";
import Loading from "./components/loading.";
import OrganizationHeader from "./components/organization-header";

const OrganizationContainer = () => {

    const router = useRouter();
    const { organizationId } = router.query;

    const { data: response, isLoading } = useOrganization(organizationId as string);
    const organization = response?.data.organization;

    if (!isLoading && !organization) router.replace("/organizations");

    if (isLoading) return <Loading/>;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}
        >
            <OrganizationHeader organization={organization!}/>
            {organization?.userRole == "owner" && (<OwnerContainer/>)}
            {organization?.userRole == "member" && (<MemberContainer/>)}
        </div>
    );
}

export default OrganizationContainer;

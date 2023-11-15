import InviteContainer from "@/views/invite"
import { NextPage } from "next";

const InvitePage = () => {
    return <InviteContainer/>;
}

InvitePage.getLayout = (page: NextPage) => <>{page}</>;

export default InvitePage;
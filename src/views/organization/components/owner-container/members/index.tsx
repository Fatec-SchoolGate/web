import { Box } from "@mui/material";
import Header from "./components/header";
import MembersList from "./components/list";

const Members = () => {
    return (
        <Box
            sx={{
                p: (theme) => theme.spacing(4),
                display: "flex",
                flexDirection: "column",
                gap: 4
            }}
        >
            <Header/>
            <MembersList/>
        </Box>
    );
}

export default Members;

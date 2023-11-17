import { Box } from "@mui/material";
import Header from "./components/header";
import List from "./components/list";
import QrCodeModal from "./components/schedule-card/qr-code-button/modal";

const ScheduleSection = () => {
    return (
        <Box>
            <Header/>
            <List/>
            {/* <QrCodeModal/> */}
        </Box>
    );
}

export default ScheduleSection;
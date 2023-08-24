import { useOrganizationStore } from "@/stores/organizations/useOrganization";
import { Drawer, LinearProgress } from "@mui/material";
import Apollo from "./Apollo";

const Form = () => {
    const {
        formOpen,
        closeForm
    } = useOrganizationStore();

    return (
        <Drawer
            anchor={"right"}
            open={formOpen}
            onClose={closeForm}
        >
            {/* <LinearProgress
                sx={{
                    position: "sticky"
                }}
            /> */}
            <Apollo/>
        </Drawer>
    );
}

export default Form;
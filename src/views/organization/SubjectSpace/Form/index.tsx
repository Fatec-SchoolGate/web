import { useOrganizationStore } from "@/stores/organizations/useOrganization";
import { Drawer } from "@mui/material";
import Apollo from "./Apollo";
import { useOrganizationPageStore } from "@/stores/organization/useOrganizationPageStore";

const Form = () => {
    const {
        isFormOpen,
        closeForm
    } = useOrganizationPageStore();

    return (
        <Drawer
            anchor={"right"}
            open={isFormOpen}
            onClose={closeForm}
        >
            <Apollo/>
        </Drawer>
    );
}

export default Form;
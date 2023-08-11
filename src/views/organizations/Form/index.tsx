import { useOrganizationStore } from "@/stores/organizations/useForm";
import { Drawer } from "@mui/material";
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
            <Apollo/>
        </Drawer>
    );
}

export default Form;
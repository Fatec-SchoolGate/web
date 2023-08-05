import { Drawer } from "@mui/material";
import Apollo from "./Apollo";
import { useFormStore } from "@/stores/organizations/useForm";

const Form = () => {
    const {
        open,
        closeDrawer
    } = useFormStore();

    return (
        <Drawer
            anchor={"right"}
            open={open}
            onClose={closeDrawer}
        >
            <Apollo/>
        </Drawer>
    );
}

export default Form;
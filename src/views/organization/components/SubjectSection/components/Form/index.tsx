import { Drawer } from "@mui/material";
import Apollo from "./apollo";
import { useSubjectSectionStore } from "../../store";

const Form = () => {
    const {
        isFormOpen,
        closeForm
    } = useSubjectSectionStore();

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

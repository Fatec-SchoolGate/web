import { Drawer } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useMembersSection } from "../../store";
import { FormProvider, useForm } from "react-hook-form";
import Apollo from "./apollo";

const Form = () => {
    const form = useForm();

    const { formOpen, closeForm } = useMembersSection();
    
    return (
        <FormProvider {...form}>
            <Drawer
                anchor={"right"}
                open={formOpen}
                onClose={closeForm}
            >
                <Apollo/>
            </Drawer>
        </FormProvider>
    );
}

export default Form;
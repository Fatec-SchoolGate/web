import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useMembersSection } from "../../store";
import { FormProvider, useForm } from "react-hook-form";
import Apollo from "./apollo";
import { Icon } from "@iconify/react";
import { AddMembersDto } from "../dto/add-members-dto";
import { yupResolver } from "@hookform/resolvers/yup";
import { addMembersSchema } from "./schema";

const Form = () => {
    const form = useForm<AddMembersDto>({
        resolver: yupResolver(addMembersSchema)
    });

    const { t } = useTranslation();

    const { formOpen, closeForm } = useMembersSection();
    
    return (
        <FormProvider {...form}>
            <Drawer
                anchor={"right"}
                open={formOpen}
                onClose={closeForm}
                PaperProps={{
                    sx: {
                        width: 400
                    }
                }}
            >
                <Box
                    px={4}
                    pt={2}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Typography variant={"h4"} >{t("addMembers")}</Typography>
                    <IconButton onClick={closeForm}>
                        <Icon icon={"material-symbols:close"} />
                    </IconButton>
                </Box>
                <Apollo/>
            </Drawer>
        </FormProvider>
    );
}

export default Form;
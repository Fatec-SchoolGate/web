import { Box } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ExampleDto } from "../dto/exampleDto";
import FormTextField from "@/@core/components/form/FormTextField";

interface Props {
    form: UseFormReturn<ExampleDto>;
    onSubmit: (data: ExampleDto) => void;
}

const View = (props: Props) => {
    const {
        form,
        onSubmit
    } = props;

    const { control, handleSubmit } = form;
    const { t } = useTranslation();

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                m: (theme) => theme.spacing(4),
                display: "flex",
                flexDirection: "column",
                gap: 4
            }}
        >
            <FormTextField
                control={control}
                label={t("example") ?? ""}
                name={"example"}
            />
        </Box>
    );
}

export default View;
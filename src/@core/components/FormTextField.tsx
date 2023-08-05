import { SxProps, TextField, Theme } from "@mui/material";
import { ReactNode } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props {
    control: Control<FieldValues>;
    name: string;
    placeholder?: string;
    label?: ReactNode;
    fullWidth?: boolean;
    sx?: SxProps<Theme> | undefined;
}

const FormTextField = (props: Props) => {
    const {
        name,
        control,
        label,
        placeholder,
        sx,
        fullWidth = true
    } = props;
    
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error }
            }) => (
                <TextField
                    helperText={error ? error.message : null}
                    size={"small"}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth={fullWidth}
                    label={label}
                    placeholder={placeholder}
                    variant={"outlined"}
                    sx={sx}
                />
            )}
        />
    );
}

export default FormTextField;
import { IconButton, InputAdornment, SxProps, TextField, Theme } from "@mui/material";
import { HTMLInputTypeAttribute, ReactNode, useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { Icon } from "@iconify/react";

interface Props {
    control: Control<FieldValues> | Control<any>;
    name: string;
    placeholder?: string;
    label?: ReactNode;
    fullWidth?: boolean;
    sx?: SxProps<Theme> | undefined;
    type?: HTMLInputTypeAttribute;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}

const FormTextField = (props: Props) => {
    const {
        name,
        control,
        label,
        placeholder,
        sx,
        type = "text",
        startAdornment,
        endAdornment,
        fullWidth = true
    } = props;
    
    const [isVisible, setIsVisible] = useState(true);
    
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error }
            }) => (
                <TextField
                    size={"small"}
                    variant={"outlined"}
                    helperText={error ? error.message : null}
                    error={!!error}
                    value={value}
                    fullWidth={fullWidth}
                    label={label}
                    placeholder={placeholder}
                    sx={sx}
                    type={(type === "password") ? (isVisible ? "password" : "text") : type}
                    onChange={onChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">{startAdornment}</InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment
                                position={"end"}
                            >
                                {type === "password" ? (
                                    <IconButton
                                        size={"small"}
                                        onClick={toggleVisibility}
                                    >
                                        <Icon
                                            icon={isVisible ? "mdi:hide" : "mdi:eye"}
                                        />
                                    </IconButton>
                                ) : endAdornment}
                            </InputAdornment>
                        )
                    }}
                />
            )}
        />
    );
}

export default FormTextField;
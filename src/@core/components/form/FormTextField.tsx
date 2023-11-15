import { IconButton, InputAdornment, SxProps, TextField, TextFieldProps, Theme } from "@mui/material";
import { HTMLInputTypeAttribute, ReactNode, useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface CustomProps {
    control: Control<FieldValues> | Control<any>;
    name: string;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
};

type Props = CustomProps & TextFieldProps;

const FormTextField = (props: Props) => {
    const {
        name,
        control,
        startAdornment,
        endAdornment,
        type,
    } = props;
    
    const [isVisible, setIsVisible] = useState(true);
    
    const { t } = useTranslation();

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
                    helperText={error ? t(error.message ?? "") : null}
                    error={!!error}
                    value={value}
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
                    {...props}
                    type={(type === "password") ? (isVisible ? "password" : "text") : type}
                />
            )}
        />
    );
}

export default FormTextField;
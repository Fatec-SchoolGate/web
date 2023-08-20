import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Button, ButtonBase, ButtonBaseProps } from "@mui/material";
import { ChangeEvent, MouseEvent, MouseEventHandler, useRef } from "react";
import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";

const fileToBase64 = async (file: File) => (new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
}));

interface Props {
    watch: UseFormWatch<any>;
    setValue: UseFormSetValue<any>;
    register: UseFormRegister<any>;
    name: string;
    width: number;
    height: number;
}

const FormImageField = (props: Props) => {
    const {
        watch,
        setValue,
        register,
        name,
        width,
        height
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const image = watch(name);

    const onSubmitImage = async (event: ChangeEvent<HTMLInputElement>) => {
        const {
            files
        } = event.target;
        
        if (!files || files.length == 0) return;
        
        const file = files[0];
        const base64Image = await fileToBase64(file) as string;
        
        setValue(name, base64Image);
        return base64Image;
    }

    const onClick = () => {
        if (ref == null) return;

        ref.current!.click();
    }

    const resetImage = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setValue(name, null);
    }
    
    return (
        <Box
            component={ButtonBase}
            onClick={onClick}
            sx={{
                width,
                height,
                borderRadius: 1,
                backgroundImage: `url("${image}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: (theme) => theme.palette.customColors.bodyBgAccent,
            }}
        >
            <ButtonBase
                onClick={resetImage}
                variant={"contained"}
                color={"primary"}
                sx={{
                    position: "absolute",
                    width: 30,
                    height: 30,
                    minWidth: 0,
                    top: -10,
                    right: -10,
                    borderRadius: 1,
                    bgcolor: (theme) => theme.palette.primary.main,
                }}
            >
                <Icon width={15} height={15} icon={"material-symbols:close"}/>
            </ButtonBase>
            <input
                // onChange={(event) => {
                //     onChange((event));
                // }}
                {...register(name, {
                    onChange: onSubmitImage,
                })}
                ref={ref}
                type={"file"}
                hidden
            />
        </Box>
    );
}

export default FormImageField;
import { ThemeOptions } from "@mui/material";
import MenuOverride from "./menu";

const overrides = (): ThemeOptions["components"] => {
    return {
        ...MenuOverride()
    };
}

export default overrides;
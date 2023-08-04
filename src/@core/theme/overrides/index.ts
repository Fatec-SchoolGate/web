import { ThemeOptions } from "@mui/material";
import MenuOverride from "./menu";
import ButtonBaseOverride from "./buttonBase";
import TabsOverride from "./tabs";
import ChipOverride from "./chip";
import ButtonOverride from "./button";

const overrides = (): ThemeOptions["components"] => {
    return {
        ...MenuOverride(),
        ...ButtonBaseOverride(),
        ...ButtonOverride(),
        ...TabsOverride(),
        ...ChipOverride(),
    };
}

export default overrides;
import { ThemeOptions } from "@mui/material";
import MenuOverride from "./menu";
import ButtonBaseOverride from "./buttonBase";
import TabsOverride from "./tabs";
import ChipOverride from "./chip";
import ButtonOverride from "./button";
import ListOverride from "./list";

const overrides = (): ThemeOptions["components"] => {
    return {
        ...MenuOverride(),
        ...ButtonBaseOverride(),
        ...ButtonOverride(),
        ...TabsOverride(),
        ...ChipOverride(),
        ...ListOverride()
    };
}

export default overrides;
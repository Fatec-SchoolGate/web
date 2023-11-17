import { ThemeOptions } from "@mui/material";
import MenuOverride from "./menu";
import ButtonBaseOverride from "./buttonBase";
import TabsOverride from "./tabs";
import ChipOverride from "./chip";
import ButtonOverride from "./button";
import ListOverride from "./list";
import DrawerOverride from "./drawer";
import BreadcrumbsOverride from "./breadcrumbs";
import DataGridOverrides from "./datagrid";

const overrides = (): ThemeOptions["components"] => {
    return {
        ...MenuOverride(),
        ...ButtonBaseOverride(),
        ...ButtonOverride(),
        ...TabsOverride(),
        ...ChipOverride(),
        ...ListOverride(),
        ...DrawerOverride(),
        ...BreadcrumbsOverride(),
        ...DataGridOverrides()
    };
}

export default overrides;
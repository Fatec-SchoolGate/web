import { defaultPaletteLight } from "./default-palette-light";
import { defaultPalette } from "./default-palette";
import { serikaDark } from "./serika-dark";
import { Palette } from "@mui/material";

export type PaletteKeys = "defaultPalette" | "defaultPaletteLight" | "serikaDark";

type Palettes =  {
  [key in PaletteKeys]: Partial<Palette>
}

const palettes: Palettes = {
  defaultPalette,
  defaultPaletteLight,
  serikaDark
}

export default palettes;
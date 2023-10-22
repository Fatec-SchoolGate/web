import { Box, Button } from "@mui/material"
import MembersSelect from "./members-select"

const View = () => {
    return (
        <Box
            sx={{
                p: (theme) => theme.spacing(4)
            }}
        >
            <MembersSelect name={"userIds"}/>
            <Button
                variant={"contained"}
                type={"submit"}
            >
                Adicionar
            </Button>
        </Box>
    );
}

export default View;
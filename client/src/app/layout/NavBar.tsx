import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}

export default function NavBar({toggleDarkMode, darkMode} : Props) {
    
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6"sx={{ flexGrow: 1 }}>
                    eCommerce
                </Typography>
                <IconButton onClick={toggleDarkMode}> 
                    {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}}/>}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
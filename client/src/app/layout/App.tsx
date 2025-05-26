import { useState } from "react";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const palleteType = darkMode ? 'dark' : 'light';
  
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === 'dark' ? '#121212' : '#eaeaea'
      }
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Box 
        sx={{minHeight: '100vh',
        background: darkMode 
        ? 'radial-gradient(circle, #1e3aba 0%, #111b27 100%)'
        : 'radial-gradient(circle, #baecf9 0%, #f0f9ff 100%)',
        py: 6}}>
        <Container maxWidth="xl" sx={{mt: 8, mb: 8}}>
           <Outlet /> {/* This is substituted with component the URL is registered to in the router. */}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App

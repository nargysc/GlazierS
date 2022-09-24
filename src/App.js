import "./App.css";
import { Container, Typography, Box, Stack } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Wrapper from "./components/wrapper";
import Products from "./components/products";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import { useEffect } from "react";
import Contact from "./components/contact";
function App() {
  useEffect(() => {
    document.title = "Glazier.";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <Wrapper />
            <Promotions />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Collection</Typography>
            </Box>
            <Products />
            <Contact /> 
            <Footer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;

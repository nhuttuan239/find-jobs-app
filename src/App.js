import React, { useState } from "react";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Switch from "@mui/material/Switch";
import CssBaseline from "@mui/material/CssBaseline";
import SearchAppBar from "./components/SearchAppBar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function App() {
  const [mode, setMode] = useState("light");
  const customTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <SearchAppBar />
        <ListItemButton>
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />
          <ListItemText primary="Switch mode" />
        </ListItemButton>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<DetailPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;

import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@app/store/store";
import { HomePage } from "@pages/HomePage";
import { Header } from "@widgets/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: '"HONOR VF", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Глобальный сброс стилей */}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

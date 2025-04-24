import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@app/store/store";
import { HomePage } from "@pages/HomePage";
import { EventPage } from '@pages/EventPage'
import { Header } from "@widgets/Header";
import { Footer } from '@widgets/Footer'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event/:id" element={<EventPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "@pages/HomePage";
import EventPage from '@pages/EventPage';
import { Header } from "@widgets/Header";
import { Footer } from '@widgets/Footer';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import EventsPage from '@pages/EventsPage';
import { ProfilePage } from '@pages/ProfilePage';
import { Box } from "@mui/material";
import { ChatPage } from '@pages/ChatPage'

const theme = createTheme({
  typography: {
    fontFamily: '"Inter-Variable", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Box component="main" flexGrow={1}>
            {!isAuthenticated ? (
              <HomePage />
            ) : (
              <Routes>
                <Route path="/" element={<EventsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/messages" element={<ChatPage />} />
              </Routes>
            )}
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

import React from "react";
import { Box, Container, Typography, Link, Stack, Divider } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#f8f9fa", mt: 6, pt: 4, pb: 2 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Typography variant="h6" color="textPrimary" fontWeight="bold">
            Логотип
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link href="#" color="textSecondary" underline="hover">
              О нас
            </Link>
            <Link href="#" color="textSecondary" underline="hover">
              Контакты
            </Link>
            <Link href="#" color="textSecondary" underline="hover">
              Политика конфиденциальности
            </Link>
          </Stack>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2" color="textSecondary" textAlign="center">
          © {new Date().getFullYear()} Название компании — Все права защищены.
        </Typography>
      </Container>
    </Box>
  );
};

import { Box } from "@mui/material";

const GradientIcon = ({ IconComponent }: { IconComponent: React.ElementType }) => (
  <Box
    sx={{
      background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 40,
    }}
  >
    <IconComponent sx={{ fontSize: 40, fill: '#BE1FEA' }} />
  </Box>
);

export default GradientIcon;
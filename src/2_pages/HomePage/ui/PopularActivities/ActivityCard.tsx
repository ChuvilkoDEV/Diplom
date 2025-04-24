import { Grid, Paper, Typography, Box } from "@mui/material";
import GradientIcon from "./GradientIcon";

type Props = {
  title: string;
  icon: React.ElementType;
};

const ActivityCard = ({ title, icon }: Props) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper
      elevation={0}
      sx={{
        p: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        borderRadius: 4,
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.4)", // прозрачный белый
        boxShadow: `
          0 0 8px rgba(223, 25, 216, 0.6),
          0 0 16px rgba(153, 34, 255, 0.6),
          0 0 24px rgba(223, 25, 216, 0.6)
        `, // неоновая тень
        backdropFilter: "blur(1px)", // добавим немного размытия
      }}
    >
      <GradientIcon IconComponent={icon} />
      <Typography variant="body1" sx={{ color: "#fff", fontWeight: 600, fontSize: '22px', lineHeight: '25px' }}>
        {title}
      </Typography>
    </Paper>
  </Grid>
);

export default ActivityCard;

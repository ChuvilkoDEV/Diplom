import { Grid, Paper, Typography } from "@mui/material";
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
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        borderRadius: 4,
        height: "100%",
        backgroundColor: "white",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 0 12px rgba(223, 25, 216, 0.25), 0 4px 8px rgba(120, 115, 245, 0.15)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 0 16px rgba(223, 25, 216, 0.35), 0 6px 12px rgba(120, 115, 245, 0.25)",
        },
      }}
    >
      <GradientIcon IconComponent={icon} />
      <Typography sx={{
        fontWeight: 500,
        color: "black",
        fontSize: '18px',
        lineHeight: '24px'
      }}>
        {title}
      </Typography>
    </Paper>
  </Grid>
);

export default ActivityCard;

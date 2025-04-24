import { Grid, Paper, Typography } from "@mui/material";
import GradientIcon from "./GradientIcon";

type Props = {
  title: string;
  icon: React.ElementType;
};

const ActivityCard = ({ title, icon }: Props) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper
      elevation={3}
      sx={{
        p: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        borderRadius: 4,
        height: "100%",
      }}
    >
      <GradientIcon IconComponent={icon} />
      <Typography variant="body1">{title}</Typography>
    </Paper>
  </Grid>
);

export default ActivityCard;

import { Grid } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { activities } from "./data";

const ActivitiesGrid = () => (
  <Grid container spacing={3} justifyContent="center">
    {activities.map((activity, index) => (
      <ActivityCard key={index} {...activity} />
    ))}
  </Grid>
);

export default ActivitiesGrid;

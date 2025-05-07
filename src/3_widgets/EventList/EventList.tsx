// import React, { useState, useMemo } from "react";
// import { Grid, Box, Typography } from "@mui/material";
//
// import {EventCard} from '@entities/EventCard';
// import {EventFilters} from '@features/EventFilter/ui/EventFilters'
// import {Event} from '@entities/EventCard/model/types'
//
// interface Props {
//   events: Event[];
//   categories: { id: string; name: string }[];
// }
//
// export const EventList: React.FC<Props> = ({ events, categories }) => {
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//
// // и toggleCategory тоже изменить:
//   const toggleCategory = (id: string) => {
//     setSelectedCategories((prev) =>
//       prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id]
//     );
//   };
//
//
//   const filteredEvents = useMemo(() => {
//     if (selectedCategories.length === 0) return events;
//     return events.filter((event) =>
//       event.categories.some((cat) => selectedCategories.includes(cat.id))
//     );
//   }, [events, selectedCategories]);
//
//   return (
//     <Box>
//       <EventFilters
//         categories={categories}
//         // selectedCategoryIds={selectedCategories}
//         onSelectCategory={toggleCategory}
//       />
//
//       {filteredEvents.length === 0 ? (
//         <Typography variant="body1">Нет событий по выбранным фильтрам.</Typography>
//       ) : (
//         <Grid container spacing={3}>
//           {filteredEvents.map((event) => (
//             <Grid item xs={12} sm={6} md={4} key={event.id}>
//               <EventCard {...event} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Box>
//   );
// };

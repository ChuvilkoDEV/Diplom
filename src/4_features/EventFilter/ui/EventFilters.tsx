import { Box, Chip, Typography } from "@mui/material";

interface Category {
  id: string;
  name: string;
}

interface Props {
  // categories: Category[];
  // selectedCategoryIds: string[];
  // onSelectCategory: (id: string) => void;
}

export const EventFilters: React.FC<Props> = ({}) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="subtitle1" sx={{ mb: 1 }}>
      Категории:
    </Typography>
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>

    </Box>
  </Box>
);

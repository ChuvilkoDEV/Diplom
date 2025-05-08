// components/FilterModal.tsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
  Box,
} from '@mui/material';

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
  selectedCategories: string[];
  onApply: (categories: string[]) => void;
}

const categoryOptions = ['Спорт', 'Образование', 'Тусовка', 'Работа'];

export const FilterModal: React.FC<FilterModalProps> = ({
                                                          open,
                                                          onClose,
                                                          selectedCategories,
                                                          onApply,
                                                        }) => {
  const [localCategories, setLocalCategories] = React.useState<string[]>(selectedCategories);

  const handleChange = (event: any) => {
    setLocalCategories(event.target.value);
  };

  const handleApply = () => {
    onApply(localCategories);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Фильтр по интересам</DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Категории</InputLabel>
          <Select
            multiple
            value={localCategories}
            onChange={handleChange}
            input={<OutlinedInput label="Категории" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {categoryOptions.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button variant="contained" onClick={handleApply}>Применить</Button>
      </DialogActions>
    </Dialog>
  );
};

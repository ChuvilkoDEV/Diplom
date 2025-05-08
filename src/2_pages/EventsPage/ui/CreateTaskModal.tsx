import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  OutlinedInput,
  Chip,
  Box,
} from '@mui/material';

interface CreateTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const categoryOptions = ['Спорт', 'Образование', 'Тусовка', 'Работа'];
const cityOptions = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург'];

export const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    categoriesIds: [] as string[],
    location: 'Москва',
  });

  const handleChange = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      ...form,
      dateOfCreation: Date.now(),
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Создание задачи</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
        <TextField
          label="Название"
          value={form.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
        <TextField
          label="Описание"
          value={form.description}
          onChange={(e) => handleChange('description', e.target.value)}
          multiline
          rows={3}
        />
        <FormControl>
          <InputLabel>Категории</InputLabel>
          <Select
            multiple
            value={form.categoriesIds}
            onChange={(e) => handleChange('categoriesIds', e.target.value)}
            input={<OutlinedInput label="Категории" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {(selected as string[]).map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {categoryOptions.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Город</InputLabel>
          <Select
            value={form.location}
            onChange={(e) => handleChange('location', e.target.value)}
            input={<OutlinedInput label="Город" />}
          >
            {cityOptions.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handleSubmit} variant="contained">Создать</Button>
      </DialogActions>
    </Dialog>
  );
};

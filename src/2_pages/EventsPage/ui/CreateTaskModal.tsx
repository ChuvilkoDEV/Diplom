import React, { useEffect, useState } from 'react';
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
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material';
import { useAppDispatch } from '@app/store/hooks';
import { createTaskThunk, fetchInterestsThunk } from '@pages/EventsPage/model/thunk';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import { Interest } from '@pages/EventsPage/model/types';

interface CreateTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

const cityOptions = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург'];
const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const dayToNumber: Record<string, number> = {
  'Пн': 1,
  'Вт': 2,
  'Ср': 3,
  'Чт': 4,
  'Пт': 5,
  'Сб': 6,
  'Вс': 0,
};

export const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ open, onClose, onSubmit }) => {
  const dispatch = useAppDispatch();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const interests = useSelector((state: RootState) => state.interests.items as Interest[]);

  useEffect(() => {
    dispatch(fetchInterestsThunk());
  }, [dispatch]);

  const [form, setForm] = useState({
    title: '',
    description: '',
    categoriesIds: [] as string[],
    location: 'Москва',
    isRecurring: false,
    selectedDays: [] as string[],
    selectedDates: [] as string[],
  });

  const handleChange = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleValueInArray = (key: 'selectedDays' | 'selectedDates', value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const getNext7Days = () => {
    const days: { label: string; value: string }[] = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const label = date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
        weekday: 'short',
      });
      const value = date.toISOString().split('T')[0];
      days.push({ label, value });
    }
    return days;
  };

  const handleSubmit = async () => {
    const now = Date.now();
    const payload = {
      title: form.title,
      description: form.description,
      imageUrl: '3123123',
      categoriesIds: form.categoriesIds,
      dateOfEventType: form.isRecurring ? 'looped' : 'target',
      datesOfTheEvent: form.isRecurring
        ? form.selectedDays.map((day) => dayToNumber[day])
        : form.selectedDates.map((date) => new Date(date).getTime()),
      dateOfCreation: now,
      location: form.location,
      coordinates: '11, 11',
      creatorId: userId,
      participantsIds: [],
    };

    try {
      await dispatch(createTaskThunk(payload)).unwrap();
      onSubmit?.(payload);
      onClose();
    } catch (error) {
      console.error('Ошибка при создании задачи:', error);
    }
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
                {(selected as string[]).map((id) => {
                  const name = interests.find((i) => i.id === id)?.name || id;
                  return <Chip key={id} label={name} />;
                })}
              </Box>
            )}
          >
            {interests.map((interest) => (
              <MenuItem key={interest.id} value={interest.id}>
                {interest.name}
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

        <FormControlLabel
          control={
            <Checkbox
              checked={form.isRecurring}
              onChange={(e) => handleChange('isRecurring', e.target.checked)}
            />
          }
          label="Повторяющееся мероприятие"
        />

        {form.isRecurring ? (
          <>
            <Typography variant="body2">Выберите дни недели:</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {daysOfWeek.map((day) => (
                <Button
                  key={day}
                  variant={form.selectedDays.includes(day) ? 'contained' : 'outlined'}
                  onClick={() => toggleValueInArray('selectedDays', day)}
                  size="small"
                >
                  {day}
                </Button>
              ))}
            </Box>
          </>
        ) : (
          <>
            <Typography variant="body2">Выберите даты:</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {getNext7Days().map((d) => (
                <Button
                  key={d.value}
                  variant={form.selectedDates.includes(d.value) ? 'contained' : 'outlined'}
                  onClick={() => toggleValueInArray('selectedDates', d.value)}
                  size="small"
                >
                  {d.label}
                </Button>
              ))}
            </Box>
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handleSubmit} variant="contained">
          Создать
        </Button>
      </DialogActions>
    </Dialog>
  );
};

import React, { useEffect, useState } from 'react';
import EventsList from '@features/EventsList';
import { fetchEvents } from '@entities/EventCard/model/api/fetchEvents';
import { Event } from '@entities/EventCard/model/types';
import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import { CreateTaskModal } from '@pages/EventsPage/ui/CreateTaskModal'

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('Москва');
  const [openCreateModal, setOpenCreateModal] = useState(false);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(() => setError("Ошибка при загрузке событий"))
      .finally(() => setLoading(false));
  }, []);

  const handleCityChange = (event: SelectChangeEvent) => {
    setSelectedCity(event.target.value);
    // TODO: добавить фильтрацию по городу
  };

  const handleOpenFilters = () => {
    // TODO: открыть фильтры
    alert('Открытие фильтров');
  };

  const handleCreateTask = () => {
    setOpenCreateModal(true);
  };

  const handleSubmitTask = (data: Event) => {
    console.log('Создана задача:', data);
    setEvents(prev => [...prev, data]); // можно заменить на refetch
  };

  return (
    <Box sx={{ width: "100vw", py: 4, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: "lg", width: "100%", px: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleCreateTask}
          >
            Создать задачу
          </Button>

          <Select
            value={selectedCity}
            onChange={handleCityChange}
            size="small"
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="Москва">Москва</MenuItem>
            <MenuItem value="Санкт-Петербург">Санкт-Петербург</MenuItem>
            <MenuItem value="Новосибирск">Новосибирск</MenuItem>
            <MenuItem value="Екатеринбург">Екатеринбург</MenuItem>
          </Select>

          <Button
            variant="outlined"
            startIcon={<FilterAltIcon />}
            onClick={handleOpenFilters}
          >
            Фильтры
          </Button>
        </Box>

        <EventsList events={events} loading={loading} error={error} />

          <CreateTaskModal
            open={openCreateModal}
            onClose={() => setOpenCreateModal(false)}
            onSubmit={handleSubmitTask}
          />
      </Box>
    </Box>
  );
};

export default EventsPage;

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
  Stack,
  Typography
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import { CreateTaskModal } from '@pages/EventsPage/ui/CreateTaskModal';
import { FilterModal } from '@pages/EventsPage/ui/FilterModal';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';

const EVENTS_PER_PAGE = 10;

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('Москва');
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    document.title = `Страница ${currentPage}`;
  }, [currentPage]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchEvents(currentPage, EVENTS_PER_PAGE)
      .then(setEvents)
      .catch(() => setError("Ошибка при загрузке событий"))
      .finally(() => setLoading(false));
  }, [currentPage]);

  const handleCityChange = (event: SelectChangeEvent) => {
    setSelectedCity(event.target.value);
    // TODO: фильтрация по городу
  };

  const handleOpenFilters = () => {
    setOpenFilterModal(true);
  };

  const handleApplyFilters = (categories: string[]) => {
    setSelectedCategories(categories);
    // TODO: применить фильтрацию к списку событий
    console.log('Применены категории:', categories);
  };

  const handleSubmitTask = (data: Event) => {
    console.log('Создана задача:', data);
    setEvents(prev => [...prev, data]);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <>
      <Header />
      <Box sx={{ width: "100vw", py: 4, display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: "lg", width: "100%", px: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpenCreateModal(true)}
              className={'gradient default-btn'}
            >
              Создать событие
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
              className={'gradient default-btn'}
              onClick={handleOpenFilters}
            >
              Фильтры
            </Button>
          </Box>

          <EventsList events={events} loading={loading} error={error} />

          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
            <Button
              variant="outlined"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Предыдущая
            </Button>
            <Typography>Страница {currentPage}</Typography>
            <Button
              variant="outlined"
              onClick={handleNextPage}
              disabled={events.length < EVENTS_PER_PAGE}
            >
              Следующая
            </Button>
          </Stack>

          <CreateTaskModal
            open={openCreateModal}
            onClose={() => setOpenCreateModal(false)}
            onSubmit={handleSubmitTask}
          />

          <FilterModal
            open={openFilterModal}
            onClose={() => setOpenFilterModal(false)}
            selectedCategories={selectedCategories}
            onApply={handleApplyFilters}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default EventsPage;

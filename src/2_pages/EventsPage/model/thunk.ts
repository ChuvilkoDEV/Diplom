import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '@shared/api';

export const createTaskThunk = createAsyncThunk(
  'tasks/create',
  async (taskData: any, { rejectWithValue }) => {
    try {
      const response = await api.post('/events', taskData);

      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || 'Ошибка';
      return rejectWithValue(message);
    }
  }
);

export const fetchInterestsThunk = createAsyncThunk(
  'interests/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/interests');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
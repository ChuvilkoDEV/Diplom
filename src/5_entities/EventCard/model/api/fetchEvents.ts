import api from "@shared/api";
import { Event } from "../types";

export const fetchEvents = async (
  offset: number = 0,
  limit: number = 10
): Promise<Event[]> => {
  const token = localStorage.getItem("accessToken");

  const response = await api.get<Event[]>("/events", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      offset,
      limit,
    },
  });

  return response.data;
};

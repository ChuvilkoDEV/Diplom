// src/pages/EventPage/model/eventService.ts
import api from "@shared/api";
import { Event } from "./types";

export async function fetchEventById(eventId: string): Promise<Event> {
  const token = localStorage.getItem("accessToken");
  const response = await api.get(`/events/${eventId}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
  return response.data;
}

export async function joinEvent(eventId: string | undefined): Promise<void> {
  const userId = localStorage.getItem("userId");
  if (!userId) throw new Error("User ID не найден");

  await api.post('/events/join', null, {
    params: {
      eventId,
      userId,
    },
  });
}

// export async function joinEvent(eventId: string | undefined): Promise<void> {
//   const userId = localStorage.getItem("userId");
//   if (!userId) throw new Error("User  ID не найден");
//
//   await api.post('/events/join', {
//     eventId,
//     userId,
//   });
// }
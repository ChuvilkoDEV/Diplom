import api from "@shared/api";

const OLD_START_TIMESTAMP = "01.01.2000 00:00:00"; // 2000-01-01T00:00:00Z в миллисекундах

export const fetchChats = async (token: string) => {
  const response = await api.get("/chat", {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
  return response.data;
};

export const fetchMessages = async (chatId: number, token: string, startTime: string = OLD_START_TIMESTAMP) => {
  const response = await api.post(
    `/chat/messages/${chatId}?startTime=${startTime}`,
    null,
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    }
  );
  return response.data;
};

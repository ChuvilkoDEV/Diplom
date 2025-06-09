import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { Header } from '@widgets/Header';
import { fetchChats, fetchMessages } from "./model/chatModel";

const OLD_START_TIMESTAMP = "01.01.2000 00:00:00";

function formatDate(date: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    pad(date.getDate()) +
    "." +
    pad(date.getMonth() + 1) +
    "." +
    date.getFullYear() +
    " " +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds())
  );
}

export const ChatPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [messagesByChat, setMessagesByChat] = useState<Record<number, any[]>>({});
  const [chats, setChats] = useState<{ id: number; name: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollingRef = useRef<boolean>(false);

  const loadChats = async () => {
    const token = localStorage.getItem("accessToken") || '';
    const chatsData = await fetchChats(token);
    setChats(chatsData);
  };

  const loadMessages = async (chatId: number) => {
    const token = localStorage.getItem("accessToken") || '';
    const messagesData = await fetchMessages(chatId, token, OLD_START_TIMESTAMP);
    setMessagesByChat((prev) => ({
      ...prev,
      [chatId]: messagesData,
    }));
  };

  const pollNewMessages = async (chatId: number) => {
    pollingRef.current = true;
    const token = localStorage.getItem("accessToken") || '';

    while (pollingRef.current && selectedChat === chatId) {
      let lastMessages = messagesByChat[chatId] || [];
      let lastTime = OLD_START_TIMESTAMP;
      if (lastMessages.length > 0) {
        const lastMsg = lastMessages[lastMessages.length - 1];
        const date = new Date(lastMsg.createdAt || lastMsg.date || Date.now());
        lastTime = formatDate(date);
      }

      try {
        const newMessages = await fetchMessages(chatId, token, lastTime);
        if (newMessages.length > 0) {
          setMessagesByChat((prev) => ({
            ...prev,
            [chatId]: [...(prev[chatId] || []), ...newMessages],
          }));
        }
      } catch {
        // Игнорируем ошибки
      }
      await new Promise((r) => setTimeout(r, 1000));
    }
  };

  const handleSend = async () => {
    if (!selectedChat || input.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: input.trim(),
      fromMe: true,
      createdAt: new Date().toISOString(),
    };

    setMessagesByChat((prev) => ({
      ...prev,
      [selectedChat]: [...(prev[selectedChat] || []), newMessage],
    }));

    setInput("");
  };

  useEffect(() => {
    loadChats();
  }, []);

  useEffect(() => {
    if (selectedChat) {
      loadMessages(selectedChat);
      pollNewMessages(selectedChat);
    }
    return () => {
      pollingRef.current = false; // Останавливаем опрос при смене чата
    };
  }, [selectedChat]);

  const messagesLength = selectedChat !== null ? messagesByChat[selectedChat]?.length ?? 0 : 0;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesLength]);

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        sx={{ height: "calc(100vh - 88px)" }}
      >
        <Paper
          sx={{
            display: "flex",
            flex: 1,
            maxWidth: "1200px",
            width: "100%",
            boxShadow: 0,
          }}
        >
          <Box
            width="300px"
            borderRight="1px solid #e0e0e0"
            bgcolor="#f7f7f7"
            p={2}
            overflow="auto"
          >
            <Typography variant="h6" gutterBottom>
              Чаты
            </Typography>
            <List>
              {chats.map((chat) => (
                <ListItemButton
                  key={chat.id}
                  selected={chat.id === selectedChat}
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <ListItemText primary={chat.name} />
                </ListItemButton>
              ))}
            </List>
          </Box>
          <Box flex={1} p={2} display="flex" flexDirection="column">
            <Typography variant="h6" gutterBottom>
              {selectedChat ? `Чат ${selectedChat}` : "Выберите чат"}
            </Typography>
            <Box flex={1} overflow="auto" display="flex" flexDirection="column">
              {selectedChat &&
                messagesByChat[selectedChat]?.map((message) => (
                  <Typography
                    key={message.id}
                    align={message.fromMe ? "right" : "left"}
                  >
                    {message.text}
                  </Typography>
                ))}
              <div ref={messagesEndRef} />
            </Box>
            <Box display="flex" mt={2}>
              <TextField
                value={input}
                onChange={(e) => setInput(e.target.value)}
                fullWidth
                placeholder="Введите сообщение..."
              />
              <Button onClick={handleSend} variant="contained" color="primary">
                Отправить
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

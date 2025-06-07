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
import api from "@shared/api"; // Импортируйте ваш API

export const ChatPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [messagesByChat, setMessagesByChat] = useState<Record<number, any[]>>({});
  const [chats, setChats] = useState<{ id: number; name: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Функция для получения чатов
  const fetchChats = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.get("/chats", {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      setChats(response.data);
    } catch (error) {
      console.error("Ошибка при получении чатов:", error);
    }
  };

  // Функция для получения сообщений
  const fetchMessages = async (chatId: number) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.get(`/message/${chatId}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      setMessagesByChat((prev) => ({
        ...prev,
        [chatId]: response.data,
      }));
    } catch (error) {
      console.error("Ошибка при получении сообщений:", error);
    }
  };

  const handleSend = async () => {
    if (!selectedChat || input.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: input.trim(),
      fromMe: true,
    };

    setMessagesByChat((prev) => ({
      ...prev,
      [selectedChat]: [...(prev[selectedChat] || []), newMessage],
    }));

    setInput("");

    // Здесь вы можете отправить сообщение на сервер, если это необходимо
  };

  useEffect(() => {
    fetchChats(); // Получаем чаты при монтировании компонента
  }, []);

  useEffect(() => {
    if (selectedChat) {
      fetchMessages(selectedChat); // Получаем сообщения при выборе чата
    }
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

          <Box display="flex" flexDirection="column" flex={1}>
            <Box
              flex={1}
              p={2}
              overflow="auto"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {selectedChat !== null && messagesByChat[selectedChat] ? (
                <>
                  {messagesByChat[selectedChat]?.map((msg) => (
                    <Box
                      key={msg.id}
                      alignSelf={msg.fromMe ? "flex-end" : "flex-start"}
                      bgcolor={msg.fromMe ? "#cfe9ff" : "#f1f1f1"}
                      borderRadius={2}
                      p={1}
                      m={0.5}
                      maxWidth="70%"
                    >
                      {msg.text}
                    </Box>
                  ))}
                  <div ref={messagesEndRef} />
                </>
              ) : (
                <Typography variant="body1">Выберите чат</Typography>
              )}
            </Box>

            <Box display="flex" p={2} borderTop="1px solid #e0e0e0">
              <TextField
                fullWidth
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введите сообщение"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
              />
              <Button onClick={handleSend} variant="contained" sx={{ ml: 2 }} className={'gradient'}>
                Отправить
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};



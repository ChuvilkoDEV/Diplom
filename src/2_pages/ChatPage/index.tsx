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

const chatsMock = [
  { id: 1, name: "Чат 1" },
  { id: 2, name: "Чат 2" },
  { id: 3, name: "Чат 3" },
];

const messagesMock: Record<number, { id: number; text: string; fromMe: boolean }[]> = {
  1: [
    { id: 1, text: "Привет!", fromMe: false },
    { id: 2, text: "Как дела?", fromMe: true },
  ],
  2: [
    { id: 1, text: "Здесь другой чат", fromMe: false },
  ],
  3: [
    { id: 1, text: "Привет из третьего чата", fromMe: true },
  ],
};

export const ChatPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [input, setInput] = useState("");
  const [messagesByChat, setMessagesByChat] = useState(messagesMock);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messages = selectedChat ? messagesByChat[selectedChat] || [] : [];

  const handleSend = () => {
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
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

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
              {chatsMock.map((chat) => (
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
              {selectedChat ? (
                <>
                  {messages.map((msg) => (
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
              <Button onClick={handleSend} variant="contained" sx={{ ml: 2 }}>
                Отправить
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

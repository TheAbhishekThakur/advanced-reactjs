import { useEffect, useState } from "react";
import ChatMessage from "./chatMessage";

const CHAT_MESSAGES_LIMIT = 100;

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Abhishek",
      message: "abc",
      photo:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
  ]);

  const fetchData = async () => {
    const data = await fetch("");
    const json = data.json();
    setMessages((messages) => {
      let newMessages = [...json, ...messages];
      newMessages.splice(0, CHAT_MESSAGES_LIMIT);
      return newMessages;
    });
  };

  useEffect(() => {
    const interval = setInterval(fetchData, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-[315px] border border-black m-5 overflow-y-scroll flex-col-reverse">
      {messages.map((msg) => (
        <ChatMessage key={msg.name} {...msg} />
      ))}
    </div>
  );
};
export default ChatWindow;

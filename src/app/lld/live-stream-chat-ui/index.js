import ChatWindow from "./chatWindow";
import VideoStream from "./videoStream";

const LiveChat = () => {
  return (
    <div className="flex">
      <VideoStream />
      <ChatWindow />
    </div>
  );
};
export default LiveChat;

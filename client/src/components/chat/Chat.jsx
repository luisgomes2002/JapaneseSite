import { ChatArea } from "./ChatStyle";

const Chat = () => {
  return (
    <ChatArea>
      <h1>User To Chat</h1>
      <p>Mensagesn</p>
      <div>
        <input type="text" />
        <button>Enviar</button>
      </div>
    </ChatArea>
  );
};

export default Chat;

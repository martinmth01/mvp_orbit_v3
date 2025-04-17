
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
  };
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src="/assets/bot-avatar.png" alt="AI Assistant" />
          <AvatarFallback className="bg-primary text-white">OP</AvatarFallback>
        </Avatar>
      )}
      
      <div className={`chat-bubble ${isUser ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
        <p>{message.content}</p>
        <div className={`text-xs mt-1 ${isUser ? 'text-primary-foreground/70' : 'text-secondary-foreground/70'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {isUser && (
        <Avatar className="h-8 w-8 ml-2">
          <AvatarImage src="/assets/user-avatar.png" alt="User" />
          <AvatarFallback className="bg-muted text-muted-foreground">U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;

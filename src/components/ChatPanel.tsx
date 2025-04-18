import { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage from "./ChatMessage";
import { cn } from "@/lib/utils";

// Create a proper type for our messages
type Message = {
  id: string;
  content: string;
  sender: 'bot' | 'user';
  timestamp: Date;
};

interface ChatPanelProps {
  className?: string;
}

// Update the initialMessages to use our new Message type and French content
const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Bonjour ! Je suis votre assistant financier personnel. Comment puis-je vous aider aujourd\'hui ?',
    sender: 'bot',
    timestamp: new Date(Date.now() - 60000),
  },
];

const ChatPanel = ({ className }: ChatPanelProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response after 1 second
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Merci pour votre question. J'analyse les données financières pour vous fournir la réponse la plus précise. Quel aspect spécifique de la finance personnelle souhaitez-vous explorer davantage ?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="bg-card border-b p-4">
        <h2 className="text-xl font-semibold">Assistant Financier</h2>
        <p className="text-sm text-muted-foreground">Posez-moi n'importe quelle question sur vos finances</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t bg-card">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Posez votre question financière..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="rounded-full"
          />
          <Button variant="outline" size="icon" className="rounded-full">
            <Mic className="h-5 w-5" />
          </Button>
          <Button 
            className="rounded-full bg-primary"
            onClick={handleSendMessage}
            disabled={inputValue.trim() === ''}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-2 text-xs text-center text-muted-foreground">
          Vos conversations sont chiffrées et privées
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;

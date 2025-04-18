import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MessageSquare, 
  Settings, 
  User, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  HelpCircle,
  FileText,
  Bell,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ collapsed, toggleSidebar }: SidebarProps) => {
  const [activeConversation, setActiveConversation] = useState('1');
  
  // Mock conversations
  const conversations = [
    { id: '1', title: 'Planification de Retraite', date: "Aujourd'hui", unread: true },
    { id: '2', title: "Stratégie d'Investissement", date: 'Hier', unread: false },
    { id: '3', title: 'Optimisation Fiscale', date: 'Il y a 3 jours', unread: false },
  ];

  return (
    <div className={`h-full flex flex-col bg-sidebar border-r transition-all duration-300 ${collapsed ? 'w-20' : 'w-72'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && (
          <div className="flex items-center">
            <span className="text-xl font-serif font-bold text-primary">Orbit</span>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleSidebar} 
          className={`${collapsed ? 'mx-auto' : ''}`}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      <div className="p-4 border-b">
        {collapsed ? (
          <Avatar className="h-10 w-10 mx-auto">
            <AvatarImage src="https://randomuser.me/api/portraits/men/42.jpg" alt="Utilisateur" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        ) : (
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src="https://randomuser.me/api/portraits/men/42.jpg" alt="Utilisateur" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Jean Dupont</div>
              <div className="text-xs text-muted-foreground">jean.dupont@example.com</div>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          {!collapsed && <h3 className="text-sm font-medium mb-2">Conversations Récentes</h3>}
          <div className="space-y-1">
            {conversations.map((conversation) => (
              <Button
                key={conversation.id}
                variant={activeConversation === conversation.id ? "secondary" : "ghost"}
                className={`w-full justify-start relative ${collapsed ? 'px-2' : ''}`}
                onClick={() => setActiveConversation(conversation.id)}
              >
                <MessageSquare className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
                {!collapsed && (
                  <>
                    <span className="truncate">{conversation.title}</span>
                    {conversation.unread && (
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                    )}
                  </>
                )}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        <div className="p-4">
          {!collapsed && <h3 className="text-sm font-medium mb-2">Outils</h3>}
          <div className="space-y-1">
            <Button variant="ghost" className={`w-full justify-start ${collapsed ? 'px-2' : ''}`}>
              <Calendar className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
              {!collapsed && <span>Calendrier Financier</span>}
            </Button>
            <Button variant="ghost" className={`w-full justify-start ${collapsed ? 'px-2' : ''}`}>
              <FileText className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
              {!collapsed && <span>Documents</span>}
            </Button>
            <Button variant="ghost" className={`w-full justify-start ${collapsed ? 'px-2' : ''}`}>
              <Bell className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
              {!collapsed && <span>Notifications</span>}
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="space-y-1">
          <Link to="/dashboard/profile">
            <Button variant="ghost" className={`w-full justify-start ${collapsed ? 'px-2' : ''}`}>
              <User className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
              {!collapsed && <span>Profil</span>}
            </Button>
          </Link>
          <Button variant="ghost" className={`w-full justify-start ${collapsed ? 'px-2' : ''}`}>
            <Settings className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
            {!collapsed && <span>Paramètres</span>}
          </Button>
          <Button variant="ghost" className={`w-full justify-start ${collapsed ? 'px-2' : ''}`}>
            <HelpCircle className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
            {!collapsed && <span>Aide & Support</span>}
          </Button>
          <Button variant="ghost" className={`w-full justify-start text-destructive ${collapsed ? 'px-2' : ''}`}>
            <LogOut className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
            {!collapsed && <span>Déconnexion</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

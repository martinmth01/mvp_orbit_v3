
import { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import ChatPanel from "@/components/ChatPanel";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-card h-16 border-b flex items-center px-6">
          <h1 className="text-2xl font-serif font-bold">Tableau de Bord</h1>
        </header>
        
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-xl p-6 border shadow-sm h-96">
                <h2 className="text-xl font-semibold mb-4">Aperçu Financier</h2>
                <p className="text-muted-foreground">Emplacement pour les graphiques et données du tableau de bord financier</p>
                <div className="mt-4 h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg bg-muted/30">
                  <p className="text-muted-foreground">Les graphiques et analyses apparaîtront ici</p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Activité Récente</h2>
                <p className="text-muted-foreground">Emplacement pour les transactions et actions récentes</p>
                <div className="mt-4 h-32 flex items-center justify-center border-2 border-dashed border-muted rounded-lg bg-muted/30">
                  <p className="text-muted-foreground">Le fil d'activité apparaîtra ici</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 bg-card rounded-xl border shadow-sm overflow-hidden h-full flex flex-col">
              <ChatPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import ChatPanel from "@/components/ChatPanel";
import { FinancialOverview } from "@/components/dashboard/FinancialOverview";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

// Feature flag pour les widgets (à activer quand les graphiques seront prêts)
const showWidgets = false;

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showWidgets, setShowWidgets] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-card h-16 border-b flex items-center justify-between px-6">
          <h1 className="text-2xl font-serif font-bold">Tableau de Bord</h1>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2"
            onClick={() => setShowWidgets(!showWidgets)}
          >
            <Settings className="h-4 w-4" />
            {showWidgets ? 'Masquer les widgets' : 'Afficher les widgets'}
          </Button>
        </header>
        
        <main className="flex-1 overflow-auto p-6">
          {showWidgets ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              <div className="lg:col-span-2 space-y-6">
                <FinancialOverview />
                <RecentActivity />
              </div>
              
              <div className="lg:col-span-1 bg-card rounded-xl border shadow-sm overflow-hidden h-full flex flex-col">
                <ChatPanel />
              </div>
            </div>
          ) : (
            <div className="h-full">
              <div className="h-full bg-card rounded-xl border shadow-sm overflow-hidden">
                <ChatPanel className="h-full" />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

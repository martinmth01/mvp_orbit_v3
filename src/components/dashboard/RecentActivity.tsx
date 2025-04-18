/* eslint-disable @typescript-eslint/no-unused-vars */
export const RecentActivity = () => {
  return (
    <div className="bg-card rounded-xl p-6 border shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Activité Récente</h2>
      <p className="text-muted-foreground">Emplacement pour les transactions et actions récentes</p>
      <div className="mt-4 h-32 flex items-center justify-center border-2 border-dashed border-muted rounded-lg bg-muted/30">
        <p className="text-muted-foreground">Le fil d'activité apparaîtra ici</p>
      </div>
    </div>
  );
}; 
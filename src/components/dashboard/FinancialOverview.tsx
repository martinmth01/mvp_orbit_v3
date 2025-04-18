/* eslint-disable @typescript-eslint/no-unused-vars */
export const FinancialOverview = () => {
  return (
    <div className="bg-card rounded-xl p-6 border shadow-sm h-96">
      <h2 className="text-xl font-semibold mb-4">Aperçu Financier</h2>
      <p className="text-muted-foreground">Emplacement pour les graphiques et données du tableau de bord financier</p>
      <div className="mt-4 h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg bg-muted/30">
        <p className="text-muted-foreground">Les graphiques et analyses apparaîtront ici</p>
      </div>
    </div>
  );
}; 
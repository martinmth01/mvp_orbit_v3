import { ShieldCheck, Clock, Bot, TrendingUp, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featuresData = [
  {
    icon: <Bot className="h-10 w-10 feature-icon-gradient" />,
    title: "Assistant Propulsé par l'IA",
    description: "Obtenez des réponses instantanées à vos questions financières grâce à notre conseiller chatbot intelligent."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 feature-icon-gradient" />,
    title: "Sécurisé & Privé",
    description: "Vos données financières sont chiffrées et protégées par des mesures de sécurité de niveau entreprise."
  },
  {
    icon: <TrendingUp className="h-10 w-10 feature-icon-gradient" />,
    title: "Perspectives Intelligentes",
    description: "Recevez des recommandations d'investissement personnalisées basées sur vos objectifs et votre profil de risque."
  },
  {
    icon: <Clock className="h-10 w-10 feature-icon-gradient" />,
    title: "Disponibilité 24/7",
    description: "Accédez à vos outils de gestion de patrimoine et à votre conseiller à tout moment, de n'importe où."
  },
  {
    icon: <Users className="h-10 w-10 feature-icon-gradient" />,
    title: "Support d'Experts",
    description: "Conseils assistés par IA avec la possibilité de vous connecter à des conseillers financiers humains en cas de besoin."
  },
  {
    icon: <Lightbulb className="h-10 w-10 feature-icon-gradient" />,
    title: "Ressources Éducatives",
    description: "Développez vos connaissances financières avec notre contenu sélectionné et des parcours d'apprentissage personnalisés."
  }
];

const Features = () => {
  return (
    <section className="section bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Solutions Intelligentes de Gestion de Patrimoine</h2>
          <p className="text-xl text-muted-foreground">
            Notre plateforme combine une technologie de pointe avec une expertise financière pour vous fournir les outils nécessaires à votre réussite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="card-hover border border-border/50">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

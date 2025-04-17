
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const testimonialsData = [
  {
    name: "Sophie Martin",
    role: "Entrepreneuse",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "Orbit Patrimoine a complètement transformé ma façon de gérer les finances de mon entreprise. L'assistant IA fournit des insights instantanés qui auraient pris des jours à obtenir auprès des conseillers traditionnels.",
    rating: 5
  },
  {
    name: "Thomas Dubois",
    role: "Enseignant à la retraite",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    quote: "En tant que personne approchant de la retraite, j'avais besoin de conseils clairs pour optimiser mon épargne. Le chatbot m'aide à comprendre des concepts financiers complexes en termes simples.",
    rating: 5
  },
  {
    name: "Amelia Chen",
    role: "Ingénieure Logiciel",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Les recommandations d'investissement sont parfaites et adaptées à ma tolérance au risque. J'ai constaté une augmentation de 12% de mon portefeuille depuis que j'utilise Orbit Patrimoine.",
    rating: 4
  },
  {
    name: "Jean-Pierre Moreau",
    role: "Médecin",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    quote: "Avec mon emploi du temps chargé, j'apprécie de pouvoir obtenir des conseils financiers à tout moment de la journée. La plateforme est intuitive et le chatbot répond avec une précision remarquable.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="section bg-gradient-to-b from-white to-secondary/30 dark:from-background dark:to-secondary/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce Que Disent Nos Clients</h2>
          <p className="text-xl text-muted-foreground">
            Découvrez comment Orbit Patrimoine aide les gens à atteindre leurs objectifs financiers.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">{currentTestimonial.name}</h3>
                <p className="text-muted-foreground">{currentTestimonial.role}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote>
                  <p className="text-xl italic leading-relaxed">"{currentTestimonial.quote}"</p>
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background shadow-md"
              onClick={prevTestimonial}
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background shadow-md"
              onClick={nextTestimonial}
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

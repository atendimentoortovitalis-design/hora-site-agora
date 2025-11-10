import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";

const testimonials = [
  {
    text: "Meu site ficou pronto no mesmo dia!",
    author: "Camila",
    location: "SP"
  },
  {
    text: "Amei o design e o atendimento, super rápido!",
    author: "Marcos",
    location: "GO"
  },
  {
    text: "Paguei só depois que aprovei. Atendimento nota 10!",
    author: "Rafaela",
    location: "DF"
  }
];

const Testimonials = () => {
  const whatsappLink = "https://wa.me/5562985706191?text=Quero%20meu%20site%20profissional%20em%201%20hora";

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold px-2">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-gold text-gold" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-3 sm:space-y-4 hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-base sm:text-lg italic text-foreground">"{testimonial.text}"</p>
              
              <div className="pt-3 sm:pt-4 border-t border-border">
                <p className="font-semibold text-sm sm:text-base text-foreground">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-[var(--glow-green)] transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
              Quero o meu também
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

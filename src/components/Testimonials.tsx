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
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-lg italic text-foreground">"{testimonial.text}"</p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-[var(--glow-green)] transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6 mr-2" />
              Quero o meu também
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

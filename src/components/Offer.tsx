import { Button } from "@/components/ui/button";
import { MessageCircle, Flame, CheckCircle } from "lucide-react";

const benefits = [
  "Você só paga depois de aprovar",
  "Instalação e publicação gratuita",
  "Suporte pós-entrega incluso"
];

const Offer = () => {
  const whatsappLink = "https://wa.me/5562985706191?text=Quero%20meu%20site%20profissional%20em%201%20hora";

  return (
    <section className="py-20 px-4 bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-gradient-to-br from-card to-secondary border-2 border-gold rounded-3xl p-8 md:p-12 space-y-8 shadow-2xl">
          <div className="flex items-center justify-center gap-3 text-gold">
            <Flame className="w-8 h-8 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Oferta por tempo limitado
            </h2>
            <Flame className="w-8 h-8 animate-pulse" />
          </div>

          <div className="text-center space-y-6">
            <div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Criação completa do seu site profissional por apenas
              </p>
              <div className="inline-block relative">
                <p className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">
                  R$197
                </p>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-gold/20 blur-2xl -z-10" />
              </div>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-xl px-12 py-7 rounded-full shadow-[var(--glow-green)] transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-2" />
                Garantir meu site agora
              </a>
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            ⚡ Resposta rápida • 💬 Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;

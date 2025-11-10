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
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-gradient-to-br from-card to-secondary border-2 border-gold rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8 shadow-2xl">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-gold flex-wrap">
            <Flame className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
              Oferta por tempo limitado
            </h2>
            <Flame className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse flex-shrink-0" />
          </div>

          <div className="text-center space-y-4 sm:space-y-6">
            <div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-4 px-2">
                Criação completa do seu site profissional por apenas
              </p>
              <div className="inline-block relative">
                <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">
                  R$197
                </p>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-gold/20 blur-2xl -z-10" />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 max-w-md mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 text-left">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-6 sm:py-7 rounded-full shadow-[var(--glow-green)] transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                Garantir meu site agora
              </a>
            </Button>
          </div>

          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            ⚡ Resposta rápida • 💬 Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;

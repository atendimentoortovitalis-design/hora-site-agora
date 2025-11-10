import { Button } from "@/components/ui/button";
import { MessageCircle, Zap } from "lucide-react";

const FinalCTA = () => {
  const whatsappLink = "https://wa.me/5562985706191?text=Quero%20meu%20site%20profissional%20em%201%20hora";

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-t from-secondary/50 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 text-gold mb-2 sm:mb-4">
          <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Transforme seu negócio hoje</span>
          <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight px-2">
          Seu site profissional pronto{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">
            em 1 hora
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
          Aproveite a oferta e transforme seu negócio hoje mesmo.
        </p>

        <Button 
          size="lg"
          className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 rounded-full shadow-[var(--glow-green)] transition-all duration-300 hover:scale-105"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2 sm:mr-3 flex-shrink-0" />
            Falar no WhatsApp agora
          </a>
        </Button>

        <div className="pt-6 sm:pt-8 border-t border-border mt-8 sm:mt-12">
          <p className="text-xs sm:text-sm text-muted-foreground px-2">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 inline text-gold" /> Seu site pronto em 1 hora • Pague só depois de aprovar
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-2">
            📱 Atendimento direto no WhatsApp: <a href="tel:+5562985706191" className="text-primary hover:text-primary/80 font-semibold">(62) 98570-6191</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

import { Button } from "@/components/ui/button";
import { AlertTriangle, MessageCircle } from "lucide-react";

const Problem = () => {
  const whatsappLink = "https://wa.me/5562985706191?text=Quero%20meu%20site%20profissional%20em%201%20hora";

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-destructive/10 border border-destructive/20 mb-2 sm:mb-4">
          <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-destructive" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold px-2">
          Seu negócio ainda vende{" "}
          <span className="text-gold">só pelo Instagram?</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
          Você está perdendo clientes todos os dias.
          <br className="hidden sm:block" />
          <span className="block sm:inline"> </span>Ter um site profissional faz seu negócio parecer{" "}
          <span className="text-foreground font-semibold">sério, confiável e pronto para crescer</span>.
        </p>

        <Button 
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
            Falar com especialista no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Problem;

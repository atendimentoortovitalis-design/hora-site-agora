import { Button } from "@/components/ui/button";
import { AlertTriangle, MessageCircle } from "lucide-react";

const Problem = () => {
  const whatsappLink = "https://wa.me/5562985706191?text=Quero%20meu%20site%20profissional%20em%201%20hora";

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 border border-destructive/20 mb-4">
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold">
          Seu negócio ainda vende{" "}
          <span className="text-gold">só pelo Instagram?</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Você está perdendo clientes todos os dias.
          <br />
          Ter um site profissional faz seu negócio parecer{" "}
          <span className="text-foreground font-semibold">sério, confiável e pronto para crescer</span>.
        </p>

        <Button 
          variant="outline"
          size="lg"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com especialista no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Problem;

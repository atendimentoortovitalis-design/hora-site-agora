import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Gift } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => {
  const whatsappLink = "https://wa.me/5562985706191?text=Quero%20meu%20site%20profissional%20em%201%20hora";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 text-gold text-sm font-medium">
              <Gift className="w-4 h-4" />
              <span>Instalação e publicação do site grátis + Suporte pós-entrega</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Crio seu site profissional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">
                em 1 hora
              </span>
            </h1>

            <div className="space-y-3">
              <p className="text-2xl md:text-3xl text-gold font-semibold">
                Você só paga depois de aprovar.
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Sem mensalidade obrigatória.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Site rápido e responsivo",
                "Design moderno e profissional",
                "Link pronto para divulgar nas redes"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg md:text-xl text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-[var(--glow-green)] transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-2" />
                Quero meu site agora
              </a>
            </Button>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src={heroMockup} 
                alt="Mockup de site profissional em notebook e celular"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-gold/20 rounded-3xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

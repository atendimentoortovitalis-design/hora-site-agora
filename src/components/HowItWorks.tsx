import { MessageCircle, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Me chama no WhatsApp",
    description: "Conte sobre seu negócio e o que você precisa"
  },
  {
    icon: Zap,
    title: "Eu crio seu site em até 1 hora",
    description: "Design moderno, responsivo e profissional"
  },
  {
    icon: CheckCircle2,
    title: "Você aprova → só então paga",
    description: "Sem risco. Você decide se está perfeito"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold px-2">
            Como funciona
          </h2>
          <p className="text-lg sm:text-xl text-gold font-semibold">
            3 passos simples
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center space-y-4 sm:space-y-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 border-2 border-primary text-primary group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold flex items-center justify-center font-bold text-xl sm:text-2xl text-gold-foreground shadow-lg">
                  {index + 1}
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold px-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 space-y-2 px-2">
          <p className="text-lg sm:text-xl font-semibold text-foreground">Sem risco. Sem enrolação.</p>
          <p className="text-base sm:text-lg text-muted-foreground">Simples e rápido, como deve ser.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

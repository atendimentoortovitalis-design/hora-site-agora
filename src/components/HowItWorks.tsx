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
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Como funciona
          </h2>
          <p className="text-xl text-gold font-semibold">
            3 passos simples
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary text-primary group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center font-bold text-2xl text-gold-foreground shadow-lg">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-2">
          <p className="text-xl font-semibold text-foreground">Sem risco. Sem enrolação.</p>
          <p className="text-lg text-muted-foreground">Simples e rápido, como deve ser.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

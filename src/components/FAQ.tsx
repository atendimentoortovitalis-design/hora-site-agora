import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Posso pagar depois?",
    answer: "Sim! Você só paga após o site estar pronto e aprovado. Sem risco nenhum para você."
  },
  {
    question: "Tem mensalidade?",
    answer: "Não. A manutenção é opcional e só se você quiser suporte contínuo no futuro."
  },
  {
    question: "Serve pra qualquer tipo de negócio?",
    answer: "Sim! Criamos sites para lojas, prestadores de serviço, autônomos e pequenas empresas de todos os segmentos."
  }
];

const FAQ = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold px-2">
            Perguntas frequentes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Tire suas dúvidas
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg sm:rounded-xl px-4 sm:px-6 data-[state=open]:border-primary transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold hover:text-primary hover:no-underline py-4 sm:py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground pb-4 sm:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

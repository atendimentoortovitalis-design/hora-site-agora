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
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-semibold hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-muted-foreground pb-6">
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is included in the Discord server setup service?",
    answer: "Our service includes complete server structure setup, role hierarchy configuration, security settings, bot integration, and customized welcome messages based on your chosen plan."
  },
  {
    question: "How long does the setup process take?",
    answer: "The setup process typically takes 2-3 days depending on the complexity of your requirements and chosen plan."
  },
  {
    question: "Do you provide ongoing support after setup?",
    answer: "Yes, we provide basic support for 30 days after setup to ensure everything is working as intended."
  },
  {
    question: "Can you help with existing Discord servers?",
    answer: "Absolutely! We offer audit services for existing servers and can help optimize your current setup."
  }
];

export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="text-2xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border rounded-lg px-4"
          >
            <AccordionTrigger className="py-4 text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
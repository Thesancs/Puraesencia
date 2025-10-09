import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
    { 
      q: "¿CUANTO TIEMPO ME TOMARÁ COMPLETAR EL CURSO?", 
      a: "El tiempo para completar el curso puede variar según tu ritmo de aprendizaje, pero está diseñado para ser flexible. Puedes avanzar a tu propio ritmo y revisar el contenido según sea necesario." 
    },
    { 
      q: "¿NECESITO EXPERIENCIA PREVIA PARA TOMAR ESTE CURSO?", 
      a: "No se requiere experiencia previa. El curso está estructurado para principiantes y aquellos con alguna experiencia. Las Ebooks están diseñados para ser accesibles y fáciles de seguir, sin importar tu nivel inicial." 
    },
    { 
      q: "¿COMO PUEDO ACCEDER AL CONTENIDO DEL CURSO DESPUÉS DE LA COMPRA?", 
      a: "Una vez realizada la compra recibirás de Inmediato un correo electrónico con el acceso al contenido del curso a través de una plataforma en línea. Puedes acceder desde cualquier dispositivo con conexión a internet." 
    },
    { 
      q: "¿QUÉ MATERIALES NECESITO PARA TOMAR EL CURSO?", 
      a: "Dentro del curso te especificamos que materiales necesitarás, te entregamos material de apoyo y te mostraremos dónde conseguirlos." 
    },
    { 
      q: "¿CUÁNTO TIEMPO TENDRÉ ACCESO AL CURSO UNA VEZ LO COMPRE?", 
      a: "Tendrás acceso ilimitado al curso una vez comprado. Puedes revisar el contenido tantas veces como desees, incluso después de completar todas las lecciones." 
    },
    { 
      q: "¿CUÁLES SON LOS MÉTODOS DE PAGO?", 
      a: "Puedes usar CUALQUIER TARJETA DE DEBITO O CREDITO (si tu tarjeta es de débito, deberás seleccionar la opción “Tarjeta de crédito”) y también PAYPAL." 
    },
    {
      q: "¿EL PAGO ES SEGURO?",
      a: "Si, el pago es realizado a través de Hotmart, la plataforma de infoproductos digitales más importante del Mundo y está protegida mediante encriptación SSL , siendo uno de los procesadores de pago más importantes del mundo que opera en más de 160 países"
    }
];

export function FaqSection() {
    console.log('[FaqSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-muted/30">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center">
                     <HelpCircle className="w-12 h-12 mx-auto text-primary" />
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Preguntas Frecuentes</h2>
                </div>
                <Accordion type="single" collapsible className="w-full mt-12 space-y-4">
                    {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="p-2 transition-all duration-300 bg-card rounded-lg shadow-sm border-border hover:shadow-md">
                        <AccordionTrigger className="px-4 py-2 text-lg font-semibold text-left hover:no-underline">{faq.q}</AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-base text-muted-foreground whitespace-pre-line">
                        {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

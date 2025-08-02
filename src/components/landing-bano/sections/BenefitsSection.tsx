import { Check } from "lucide-react";

const newBenefits = [
    "Al terminar el curso, sabrás mucho más que hacer sales de baño. Vas a dominar la formulación natural con propósito — mezclas que conectan con el cuerpo, la mente y las emociones, y hacen que tus clientas se enamoren y compren más.",
    "Vas a lanzar tu primera línea de productos sin sentirte perdida, con un paso a paso claro para crear desde cero, sin rodeos.",
    "Tendrás acceso a una lista actualizada de proveedores por país, con buenos precios y buena calidad, para que no pierdas tiempo buscando dónde comprar.",
    "Vas a crear productos que tus clientas quieran volver a comprar, gracias a 30 fórmulas exclusivas que se pueden personalizar para ofrecer experiencias únicas.",
    "Tus mezclas no solo huelen rico: ofrecen beneficios reales desde el primer uso — alivian dolor, estrés, insomnio, ansiedad, piel seca y mucho más.",
    "Vas a reducir errores y desperdicios en la producción, gracias a técnicas prácticas que te ahorran materia prima y aumentan tus ganancias.",
    "No necesitas máquinas caras para destacar. Te voy a mostrar cómo presentar tus productos de forma profesional para vender desde ferias hasta Instagram.",
    "Vas a aprender cómo diferenciarte y dejar de competir por precio. Tus productos no serán *mezclas más*: serán soluciones reales que generan valor.",
    "Y lo mejor: no necesitas experiencia, ni cursos largos, ni inversión en equipos. Solo ganas de aprender y aplicar."
];

export function BenefitsSection() {
    console.log('[BenefitsSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">
              LO QUE LOGRARÁS CON EL KIT DE EBOOKS DEL MÉTODO ‘PURA ESENCIA™’
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 mt-8 sm:mt-12 md:grid-cols-2">
              {newBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-2">
                  <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                  <p className="text-base text-gray-700 sm:text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
}

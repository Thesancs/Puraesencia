import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const kitParaTiSi = [
    {
        regular: "QUIERES GANAR DINERO, PERO",
        bold: "NO PUEDES PERMITIRTE",
        end: "GRANDES INVERSIONES."
    },
    {
        regular: "PROBASTE CON PRODUCTOS ARTESANALES, PERO",
        bold: "NO LOGRAN DESTACAR",
        end: "COMO ESPERABAS."
    },
    {
        regular: "VIVÍS CON",
        bold: "TENSIÓN Y DOLOR FÍSICO",
        end: "QUE TE IMPIDEN DISFRUTAR Y DESCANSAR COMO MERECÉS."
    },
    {
        regular: "TIENES",
        bold: "POCO TIEMPO",
        end: "Y NECESITÁS UN PLAN QUE FUNCIONE TODO EL AÑO, SIN COMPLICACIONES."
    },
    {
        regular: "TE APASIONA LO NATURAL, PERO",
        bold: "NO SABES CÓMO VENDERLO CON ÉXITO",
        end: "Y GENERAR INGRESOS REALES."
    }
];

export function BenefitsSection() {
    console.log('[BenefitsSection] rendered');
    return (
        <section className="px-4 py-16 sm:py-24 bg-muted/30">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                ESTE KIT ES PARA TI SI...
              </h2>
            </div>
            <div className="flex flex-col gap-4 mt-12">
              {kitParaTiSi.map((item, index) => (
                <Card key={index} className="transition-transform duration-300 transform bg-card hover:scale-105 hover:shadow-xl">
                  <CardContent className="flex items-center p-4">
                    <Plus className="w-6 h-6 mr-4 text-primary shrink-0" />
                    <p className="text-base text-muted-foreground">
                        {item.regular}{' '}
                        <span className="p-1 font-bold rounded-md text-accent-foreground bg-accent">{item.bold}</span>
                        {' '}{item.end}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    );
}
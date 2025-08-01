
import Image from "next/image";
import {
  AlertTriangle,
  Award,
  BadgeCheck,
  Check,
  ChevronDown,
  DollarSign,
  HeartHandshake,
  Home,
  Lock,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CtaButton from "@/components/landing-bano/CtaButton";

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

const problemas = [
    "Dolores musculares y articulares",
    "Ansiedad, insomnio y estrés",
    "Agotamiento mental",
    "Piel seca, deshidratada y sin vida"
];

const courseContent = [
  { emoji: "🌿", title: "Módulo 1: La Alquimia de las Sales" },
  { emoji: "💰", title: "Módulo 2: Tu Marca Magnética" },
  { emoji: "🚀", title: "Módulo 3: Ventas y Redes Sociales" },
  { emoji: "📦", title: "Módulo 4: Empaque y Envíos" },
  { emoji: "✨", title: "Módulo 5: Magia para Fidelizar Clientes" },
];

const bonuses = [
    { emoji: "💬", title: "Comunidad VIP de Alumnas", description: "Conecta y aprende con otras emprendedoras." },
    { emoji: "🏷️", title: "Pack de Etiquetas Editables", description: "Diseños listos para imprimir y usar." },
    { emoji: "🚚", title: "Lista de Proveedores Secretos", description: "Ahorra tiempo y dinero con nuestros contactos." },
    { emoji: "📊", title: "Calculadora de Costos y Precios", description: "Asegura tu rentabilidad desde el día uno." },
    { emoji: "📸", title: "Masterclass de Fotografía con Celular", description: "Crea fotos que venden tus productos." },
    { emoji: "🧘‍♀️", title: "Guía de Meditación y Rituales", description: "Potencia el valor de tus sales de baño." },
];

const faqs = [
    { q: "¿Necesito experiencia previa?", a: "No, en absoluto. El curso está diseñado para llevarte desde cero hasta crear tu primera colección de sales de baño. Te guiaremos en cada paso." },
    { q: "¿Cuánto dinero necesito para empezar?", a: "La belleza de este negocio es su bajo costo inicial. Te mostraremos cómo empezar con una inversión mínima, utilizando ingredientes fáciles de encontrar." },
    { q: "¿En cuánto tiempo veré resultados?", a: "Puedes crear tu primer producto en un fin de semana y empezar a vender inmediatamente. Tu dedicación marcará la velocidad de tu crecimiento." },
    { q: "¿El curso es online?", a: "Sí, el curso es 100% online y con acceso de por vida. Aprende a tu propio ritmo, desde cualquier lugar del mundo y en cualquier momento." },
    { q: "¿Qué pasa si no me gusta?", a: "Tu satisfacción es nuestra prioridad. Tienes una garantía de 7 días. Si sientes que no es para ti, te devolvemos el 100% de tu dinero, sin preguntas." },
    { q: "¿Tendré soporte?", a: "¡Claro que sí! Tendrás acceso a nuestra comunidad privada de alumnas, donde podrás hacer preguntas y conectar con compañeras y conmigo." },
];


export default function LandingBanoPage() {
    console.log('[LandingBano] Page rendered');

  return (
    <div className="bg-white text-[#2C2C2C] font-body">
      <div className="bg-green-600 text-white p-2 text-center text-sm font-bold flex items-center justify-center">
        <AlertTriangle className="h-4 w-4 mr-2" />
        <span>ATENCIÓN: DESCUENTO RELÁMPAGO + 6 BONOS GRATIS PARA LAS PRIMERAS INSCRITAS</span>
      </div>
      <main className="isolate">
        {/* Hero Section */}
        <section className="relative flex justify-center px-4 pt-12 text-center sm:pt-32 lg:items-center">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl font-headline">
                Empieza desde cero y arma tu propia línea de sales de baño terapéuticas que nadie más tiene, usando el método “PURA ESENCIA™” para vender el triple sin complicarte.
                </h1>
                <p className="max-w-2xl mx-auto text-lg leading-8 text-gray-600">
                Te enseño cómo hacer mezclas que realmente ayudan, cómo ahorrar en ingredientes sin perder calidad y cómo hacer que cada sal que preparas sea tan buena que tus clientas van a querer repetir la compra sin pensarlo.                </p>
                <div className="relative mx-auto w-full max-w-xl aspect-[4/3] mt-6">
                    <Image 
                        src="/images/foto 1 pagina.webp"
                        alt="Mujer creando sales de baño terapéuticas en su cocina"
                        fill
                        className="object-cover rounded-lg shadow-lg border-4 border-amber-800/50"
                        data-ai-hint="bath salts entrepreneur"
                    />
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">
              LO QUE LOGRARÁS CON EL KIT DE EBOOKS DEL MÉTODO ‘PURA ESENCIA™’
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 mt-12 md:grid-cols-2">
              {newBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-2">
                  <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                  <p className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: benefit.replace(/\*(.*?)\*/g, '<span class="font-semibold text-gray-900">$1</span>') }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-24">
            <div className="relative mx-auto w-full max-w-3xl aspect-video">
                <Image 
                    src="/images/foto 2 pagina.webp"
                    alt="Placeholder para video o imagen de producto"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    data-ai-hint="product lifestyle"
                />
            </div>
        </section>

        {/* Personal Story Section */}
        <section className="px-4 py-16 sm:py-24">
            <div className="max-w-3xl mx-auto text-left space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline text-center">
                ✨ MÉTODO PURA ESENCIA™
                </h2>
                <p className="text-lg text-gray-700 text-center">
                    Crea, con ingredientes naturales, tu propia línea de sales terapéuticas que fideliza clientes, genera ventas constantes y posiciona tu marca como una referencia en bienestar.
                </p>
                <p className="text-lg text-gray-700">
                    Todo empezó en una etapa que no le deseo a nadie.
                </p>
                <p className="text-lg text-gray-700">
                    Estaba agotada, sin dinero, estresada con todo, y mi cabeza no paraba ni un segundo. La rutina me asfixiaba y solo quería una salida. Algo que pudiera hacer desde casa, con sentido, que me ayudara a recuperar mi paz… y mis ingresos.
                </p>
                <p className="text-lg text-gray-700">
                    Un día, navegando entre recetas naturales, encontré una fórmula casera de sales de baño. La hice sin esperar mucho. La probé. Se la regalé a unas personas cercanas. Y entonces pasó algo inesperado: a todos les encantó.
                </p>
                <p className="text-lg text-gray-700">
                    Empezaron a pedirme más. Querían otros aromas, otros efectos, más frascos. Querían comprar.
                </p>
                <p className="text-lg text-gray-700">
                    Ahí entendí que tenía algo grande entre manos. Me lancé de lleno. Estudié Aromaterapia, aprendí formulación artesanal y comencé a crear mezclas reales, pensadas para aliviar problemas que yo misma sufría — y que veía a muchas personas a mi alrededor enfrentar:
                </p>
                <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                    {problemas.map((problema, index) => (
                        <div key={index} className="flex items-start p-2">
                            <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                            <p className="text-lg text-gray-700">{problema}</p>
                        </div>
                    ))}
                </div>
                <p className="text-lg text-gray-700">
                    No estaba creando solo un producto. Estaba creando alivio. Conexión. Bienestar real.
                </p>
                <p className="text-lg text-gray-700">
                    Y hoy, con el método PURA ESENCIA™, quiero enseñarte cómo transformar una idea sencilla en una línea de productos naturales que enamoran, venden y posicionan tu marca con propósito.
                </p>
            </div>
        </section>
        
        {/* Course Content Section */}
        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">Contenido del Curso</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">Un viaje paso a paso para convertirte en una experta.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
                    {courseContent.map((item, index) => (
                        <div key={index} className="p-6 bg-white rounded-2xl shadow-sm">
                            <p className="text-3xl">{item.emoji}</p>
                            <p className="mt-4 text-lg font-semibold">{item.title}</p>
                        </div>
                    ))}
                     <div className="p-6 bg-white rounded-2xl shadow-sm md:col-span-2">
                        <p className="text-3xl">🚀</p>
                        <p className="mt-4 text-lg font-semibold">¡Y mucho más contenido práctico y directo al grano!</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Bonus Section */}
        <section className="px-4 py-16 sm:py-24">
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">Recibirás También Estos Bonos de Regalo</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">Acceso inmediato a estas herramientas para acelerar tu éxito.</p>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
                    {bonuses.map((bonus, index) => (
                        <div key={index} className="flex items-center p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                            <span className="text-3xl">{bonus.emoji}</span>
                            <div className="ml-4">
                                <p className="font-semibold">{bonus.title}</p>
                                <p className="text-sm text-gray-600">{bonus.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Guarantee & Access Section */}
        <section className="px-4 py-16 sm:py-24 bg-gray-900 text-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <BadgeCheck className="w-16 h-16 mx-auto text-accent" />
                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl font-headline">Tu Inversión es 100% Segura</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">Tu tranquilidad es nuestra prioridad. Empieza sin riesgos.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-12 text-center md:grid-cols-3">
                    <div className="space-y-2">
                        <h3 className="font-bold">Acceso Inmediato y Para Siempre</h3>
                        <p className="text-gray-400">Compra ahora y empieza a aprender en minutos. El curso es tuyo para siempre.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold">Pago 100% Seguro</h3>
                        <p className="text-gray-400">Usamos la mejor tecnología para proteger tu pago. Aceptamos Tarjeta y Pix.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold">7 Días de Garantía Total</h3>
                        <p className="text-gray-400">Si no es lo que esperabas, te devolvemos tu dinero. Sin preguntas.</p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <CtaButton />
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16 sm:py-24">
            <div className="max-w-3xl mx-auto">
                <div className="text-center">
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">Preguntas Frecuentes</h2>
                </div>
                <Accordion type="single" collapsible className="w-full mt-12">
                    {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-b">
                        <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-base text-gray-700">
                        {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
      </main>
    </div>
  );
}

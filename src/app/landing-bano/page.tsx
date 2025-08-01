import {
  AlertTriangle,
  Award,
  BadgeCheck,
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

const benefits = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    text: "Genera ingresos desde tu hogar",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    text: "Bajo costo inicial para empezar",
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    text: "Crea productos que sanan y relajan",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    text: "Conviértete en tu propia jefa",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    text: "Únete a una comunidad de emprendedoras",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    text: "Flexibilidad de tiempo para tu familia",
  },
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
        <section className="relative flex justify-center px-4 pt-12 text-center sm:pt-32 lg:min-h-screen lg:items-center lg:pt-0">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl font-headline">
                Empieza desde cero y arma tu propia línea de sales de baño terapéuticas que nadie más tiene, usando el método “PURA ESENCIA™” para vender el triple sin complicarte.
                </h1>
                <p className="max-w-2xl mx-auto text-lg leading-8 text-gray-600">
                Descubre el método exacto para lanzar tu propio negocio de bienestar, incluso si empiezas desde cero. Ayuda a otras mujeres a encontrar su momento de paz y crea la vida que siempre soñaste.
                </p>
                <CtaButton />
            </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">
                Todo lo que Lograrás
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center p-6 text-center bg-white rounded-2xl shadow-sm">
                  {benefit.icon}
                  <p className="mt-4 text-lg font-semibold">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="px-4 py-16 sm:py-24">
            <div className="max-w-3xl mx-auto text-center">
                <Quote className="w-16 h-16 mx-auto text-primary" />
                <blockquote className="mt-6 text-xl italic leading-8 text-gray-700">
                "Yo también estuve ahí, buscando una salida. Atrapada en una rutina que no me llenaba, soñaba con crear algo mío, algo con alma. Descubrí en las sales de baño más que un producto: encontré una misión. Hoy, quiero compartirte el camino que me permitió construir un negocio próspero desde mi cocina. Si yo pude, tú también puedes."
                </blockquote>
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

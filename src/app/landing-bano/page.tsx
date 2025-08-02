
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
  Rocket,
  ArrowRight,
  FlaskConical,
  Leaf,
  Package,
  Brain,
  ShieldAlert,
  ShieldCheck,
  Gift,
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
    { 
        title: "BONO 1: Lista de Proveedores Verificada", 
        description: "Acceso directo a proveedores confiables que ofrecen ingredientes de alta calidad a buen precio. Olvídate de perder tiempo buscando o de arriesgarte con malas compras. Aquí encontrarás todo lo que necesitas: sales minerales puras, aceites esenciales certificados, envases ecológicos y más.", 
        callout: "HOY GRATIS",
        imageUrl: "https://placehold.co/300x200.png"
    },
    { 
        title: "BONO 2: Plantillas de Etiquetas Profesionales", 
        description: "Haz que tus productos luzcan increíbles desde el primer día, sin saber diseño ni pagar a un profesional. Incluye plantillas editables listas para imprimir, personalizar y elevar el valor percibido de tu marca. Ideal para lanzar rápido, con una imagen limpia, moderna y profesional.", 
        callout: "HOY GRATIS",
        imageUrl: "https://placehold.co/300x200.png"
    },
    { 
        title: "BONO 3: Acompañamiento Exclusivo en Plataforma Privada", 
        description: "No estarás sola. Tendrás acceso a soporte directo y personalizado paso a paso, para avanzar con confianza mientras creas tu línea.", 
        callout: "HOY GRATIS",
        imageUrl: "https://placehold.co/300x200.png"
    },
    { 
        title: "BONO 4: Guía Práctica: Empaques que Enamoran", 
        description: "Aprende a crear empaques artesanales y profesionales sin gastar mucho. Te enseño materiales ecológicos, combinaciones de colores, formas y detalles que hacen que tu marca destaque y transmita calidad.", 
        callout: "HOY GRATIS",
        imageUrl: "/images/empaques que enamoran.png"
    },
    { 
        title: "BONO 5: Muestras que Venden: Tus Primeras Fórmulas", 
        description: "Accede a 5 fórmulas simples, efectivas y de alta demanda, ideales para crear muestras pequeñas, conquistar tus primeras clientas y empezar a vender rápido.", 
        callout: "HOY GRATIS",
        imageUrl: "/images/tus primeras.png"
    },
    { 
        title: "BONO 6: Guía para Crear tu Primer Kit de Regalo Artesanal", 
        description: "Aprende a combinar, presentar y vender tus sales como regalos irresistibles para fechas especiales. Incluye estrategias para kits temáticos, empaques atractivos y precios que aumentan tu ticket promedio. Ideal para Día de la Madre, Navidad, ferias o lanzamientos.", 
        callout: "HOY GRATIS",
        imageUrl: "https://placehold.co/300x200.png"
    }
];

const loQueObtienes = [
    "Curso completo Paso a Paso: Aprende a Crear 30 fórmulas de Sales de Baño Terapéuticas Únicas. Cada una con un Propósito Terapéutico Claro (Relajación, Sueño, Dolor, Energía, Enfoque, etc.).",
    "Guia Practica de Presentación y Empaque : Para que tus productos luzcan Profesionales desde el Primer Día.",
    "Fórmulas Personalizadas con el Método «Esencia Activa™» : Aprende a combinar Aromas de forma Armónica para crear Productos únicos que cautiven a tus clientes y se Diferencien en el Mercado.",
    "Estrategias para Para Fidelizar a tus Clientes: Con Muestras, Storytelling y Experiencia Sensorial.",
    "Plan de Producción Sin Desperdicios: Optimiza tus tiempos y materiales con técnicas que te ayudarán a Producir más Rápido, evitando errores costosos.",
    "Acceso de por vida y actualizaciones: Podrás consultar el contenido siempre que lo necesites, y recibirás cualquier actualización futura Sin Costo Adicional."
];

const bonosGratis = [
    "BONO 1 : Lista de Proveedores Verificada de Ingredientes de Alta Calidad y Buen Precio.",
    "BONO 2 : Plantillas de Etiquetas Profesionales Listas para Imprimir.",
    "BONO 3 : Acompañamiento Exclusivo en Nuestra Plataforma Virtual.",
    "BONO 4 : Guía Practica : Empaques Ecológicos que Enamoran , Etiquetas con Estilo y Detalles que hacen que Tu marca destaque",
    "BONO 5 : Muestras que Venden: Tus Primeras Fórmulas para Ganar Clientes en Tiempo Record.",
    "BONO 6 : Guía para Crear tu Primer Kit de Regalo Artesanal."
];


const faqs = [
    { q: "¿Necesito experiencia previa?", a: "No, en absoluto. El curso está diseñado para llevarte desde cero hasta crear tu primera colección de sales de baño. Te guiaremos en cada paso." },
    { q: "¿Cuánto dinero necesito para empezar?", a: "La belleza de este negocio es su bajo costo inicial. Te mostraremos cómo empezar con una inversión mínima, utilizando ingredientes fáciles de encontrar." },
    { q: "¿En cuánto tiempo veré resultados?", a: "Puedes crear tu primer producto en un fin de semana y empezar a vender inmediatamente. Tu dedicación marcará la velocidad de tu crecimiento." },
    { q: "¿El curso es online?", a: "Sí, el curso es 100% online y con acceso de por vida. Aprende a tu propio ritmo, desde cualquier lugar del mundo y en cualquier momento." },
    { q: "¿Qué pasa si no me gusta?", a: "Tu satisfacción es nuestra prioridad. Tienes una garantía de 7 días. Si sientes que no es para ti, te devolvemos el 100% de tu dinero, sin preguntas." },
    { q: "¿Tendré soporte?", a: "¡Claro que sí! Tendrás acceso a nuestra comunidad privada de alumnas, donde podrás hacer preguntas y conectar con compañeras y conmigo." },
];

const metodoIncluye = [
    "<b>30 fórmulas listas para usar</b>, cada una diseñada con un <b>objetivo terapéutico claro</b>: relajación, descanso, alivio, enfoque, energía y más.",
    "<b>Guías paso a paso</b> sobre <b>ingredientes, proporciones, combinaciones y beneficios</b> — explicado de forma <b>sencilla y directa</b>.",
    "<b>Manual práctico de empaque y presentación</b>, para que tu producto <b>destaque</b> y se vea <b>profesional desde el primer día</b>.",
    "<b>Estrategias para fidelizar clientas</b>, usando <b>muestras, experiencia sensorial y storytelling que conecta de verdad</b>.",
    "Y lo mejor: <b>sin máquinas caras, sin experiencia previa y sin perder tiempo en cursos eternos</b>."
];

const comoAplicar = [
    { icon: FlaskConical, text: "<b>Propiedades reales de los ingredientes</b>" },
    { icon: Leaf, text: "<b>Formulación consciente y con propósito</b>" },
    { icon: Package, text: "<b>Presentación atractiva que vende sola</b>" },
    { icon: Brain, text: "<b>Venta con enfoque emocional</b>" }
];

const galleryItems = [
    {
        title: "Recetas para el Alivio del Dolor Muscular y Articular",
        imageUrl: "/images/fotogrid (1).webp",
        aiHint: "bath salts jars"
    },
    {
        title: "Recetas para Reducción del Estrés y la Ansiedad",
        imageUrl: "/images/fotogrid (2).webp",
        aiHint: "lavender chamomile bath salts"
    },
    {
        title: "Recetas para Dormir y Combatir el Insomnio",
        imageUrl: "/images/fotogrid (3).webp",
        aiHint: "woman mixing ingredients"
    },
    {
        title: "Recetas para Hidratación y Cuidado de la Piel",
        imageUrl: "/images/fotogrid (4).webp",
        aiHint: "skincare flatlay"
    },
    {
        title: "Recetas para Mejora de la Concentración y Claridad Mental",
        imageUrl: "/images/fotogrid (5).webp",
        aiHint: "natural remedy bottles"
    },
    {
        title: "Recetas para Recuperación Post-Entrenamiento",
        imageUrl: "/images/fotogrid (6).webp",
        aiHint: "woman foot bath"
    }
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
                        className="object-cover rounded-lg shadow-lg border-4 border-green-600/50"
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
                  <p className="text-lg text-gray-700">{benefit}</p>
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
                <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl font-headline text-center">
                MÉTODO PURA ESENCIA™
                </h2>
                <p className="text-lg text-center font-bold">
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

        {/* Why Pura Esencia Section */}
        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
            <div className="max-w-3xl mx-auto text-left space-y-6">
                <div className="flex items-center justify-center text-center">
                    <Rocket className="w-8 h-8 mr-3 text-primary shrink-0" />
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">¿POR QUÉ “PURA ESENCIA™” ES DIFERENTE?</h2>
                </div>
                <p className="text-lg text-gray-700">
                    Ya no basta con hacer <b>"una sal que huele rico"</b>.
                </p>
                <p className="text-lg text-gray-700">
                    El mercado está lleno de <b>productos lindos... pero vacíos</b>. Cosas que se ven bien, pero <b>no hacen nada real</b>. Por eso nació el método <b>PURA ESENCIA™</b>, un sistema creado para que tú desarrolles una <b>línea de sales terapéuticas auténticas</b>, que tus clientas <b>amen</b>, <b>recuerden</b>… y <b>quieran volver a comprar</b>.
                </p>
                <div className="flex items-center">
                    <ArrowRight className="w-6 h-6 mr-3 text-primary shrink-0" />
                    <p className="text-lg font-semibold text-gray-900">
                        <b>Aquí no se trata de copiar recetas de internet</b>. Se trata de <b>crear con intención</b>.
                    </p>
                </div>
                <p className="text-lg font-bold text-gray-800"><b>El método incluye:</b></p>
                <div className="space-y-4">
                    {metodoIncluye.map((item, index) => (
                        <div key={index} className="flex items-start p-2">
                            <Check className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                            <p className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: item }}></p>
                        </div>
                    ))}
                </div>
                <p className="text-lg font-bold text-gray-800">Además, te enseño cómo aplicar:</p>
                <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                    {comoAplicar.map((item, index) => (
                        <div key={index} className="flex items-start p-2">
                            <item.icon className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                            <p className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                        </div>
                    ))}
                </div>
                <div className="p-4 mt-6 bg-green-100 border-l-4 border-green-500">
                     <div className="flex">
                        <div className="shrink-0">
                            <ShieldAlert className="w-6 h-6 text-green-700"/>
                        </div>
                        <div className="ml-3">
                            <p className="text-lg font-bold text-green-800"><b>Y SI ERES EMPRENDEDORA DE VERDAD...</b></p>
                            <p className="mt-2 text-lg text-green-700">
                            <b>No basta con hacer algo bonito</b>.<br/>
                            <b>Tu producto tiene que funcionar, emocionar y dejar huella.</b><br/>
                            <b>Eso es lo que vas a lograr con PURA ESENCIA™.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Gallery Section */}
        <section className="px-4 py-16 sm:py-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl font-headline">
                    ¡AQUÍ TE LO ENSEÑAMOS TODO!
                </h2>
                <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4">
                            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                            <div className="relative w-48 h-48 overflow-hidden rounded-full shadow-lg">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={item.aiHint}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Pre-launch Price Section */}
        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl font-headline">¿Cuánto Vale Para Ti Todo Esto?</h2>
                <p className="mt-6 text-xl font-bold text-primary">VOY A CELEBRAR EL PRE LANZAMIENTO DE MI CURSO CONTIGO</p>
                <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
                    Por eso podrás acceder al Curso Completo para Crear Sales de Baño Terapéuticas Únicas con el Método «Esencia Activa™” a un Super Precio de Pre Lanzamiento.
                </p>
                <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-800 font-semibold">
                    Pero Apurate porque este Increible Precio es solo para las ¡Primeras Inscritas y los cupos son Limitados!
                </p>
            </div>
        </section>

        <section className="flex justify-center px-4 py-16 sm:py-24">
            <div className="relative w-full max-w-[800px] aspect-square">
                <Image 
                    src="https://placehold.co/800x800.png"
                    alt="Placeholder para imagen de producto"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    data-ai-hint="product mockup"
                />
            </div>
        </section>
        
        <section 
            className="relative px-4 py-8 sm:py-12 bg-[#F0F8F0] bg-cover bg-center"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3e%3cpath fill='%23F0F8F0' fill-opacity='1' d='M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,170.7C672,160,768,192,864,208C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3e%3c/path%3e%3c/svg%3e")`
            }}
            >
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-sm font-semibold text-gray-700 uppercase">
                    ¡ACCEDE HOY MISMO! CON EL PRECIO DE PRE LANZAMIENTO DESDE CUALQUIER PARTE DEL MUNDO, PAGANDO EN DOLARES O SU EQUIVALENTE EN TU MONEDA LOCAL
                </p>
                <p className="mt-6 text-lg font-bold">PRECIO REGULAR</p>
                <p className="text-5xl font-bold text-gray-500 line-through">$49.90</p>
                <p className="mt-4 text-2xl font-bold text-red-600">PRECIO RELÁMPAGO POR PRE LANZAMIENTO</p>
                <p className="mt-2 text-8xl font-bold text-green-600">$9.90</p>
                <p className="text-3xl font-semibold text-green-600">DÓLARES</p>
                <p className="mt-4 text-xl font-bold text-red-600">UNICO PAGO</p>
                <p className="text-xl font-bold text-red-600">SOLO PARA LAS PRIMERAS INSCRITAS</p>
                <div className="flex justify-center mt-4">
                    <ChevronDown className="w-12 h-12 text-blue-400 animate-bounce" />
                </div>
                <div className="mt-6">
                    <CtaButton />
                </div>
                <div className="mt-8 space-y-6">
                    <p className="font-bold text-red-600 uppercase">IMPORTANTE: NUESTRO SISTEMA HACE EL CAMBIO A TU MONEDA LOCAL AUTOMÁticAMENTE A UNA TASA DE CAMBIO PREFERENCIAL ANTES DE TU REGISTRO</p>
                    <p className="font-semibold text-green-700 uppercase">ACCESO VITALICIO A LA PLATAFORMA EDUCATIVA</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="flex items-center gap-2 p-2 bg-white rounded-md shadow">
                            <ShieldCheck className="w-8 h-8 text-red-600" />
                            <span className="font-bold text-red-600">COMPRA 100% SEGURA</span>
                        </div>
                        <span className="font-bold">VISA</span>
                        <span className="font-bold">MasterCard</span>
                        <span className="font-bold">AMERICAN EXPRESS</span>
                        <span className="font-bold">PayPal</span>
                        <span className="font-bold">DISCOVER</span>
                    </div>
                    <p className="text-xl font-bold uppercase">Disponible para todo el mundo</p>
                    <div className="relative flex flex-col items-center justify-center pt-8">
                        <div className="relative flex items-center justify-center w-40 h-40">
                            <ShieldCheck className="absolute w-full h-full text-green-500" />
                            <Check className="absolute w-20 h-20 text-white" />
                        </div>
                        <p className="absolute text-2xl font-bold text-white bg-green-600 px-4 py-2 rounded-lg -bottom-4 z-10">COMPRA 100% SEGURA</p>
                    </div>

                    <p className="max-w-md mx-auto font-semibold pt-8">
                        REALIZA TU COMPRA CON TOTAL CONFIANZA, RAPIDEZ, SEGURIDAD Y SIN COMPLICACIONES CON NUESTRA PLATAFORMA DE PAGO PROTEGIDA MEDIANTE ENCRIPTACIÓN SSL Y RESPALDADA POR VISA. MASTERCARD, AMERICAN EXPRESS Y PAYPAL
                    </p>
                     <p className="font-bold uppercase text-red-600">IMPORTANTE:</p>
                    <p className="max-w-md mx-auto font-semibold">
                        AL FINALIZAR TU COMPRA, RECIBIRÁS DE FORMA AUTOMÁTICA TODOS LOS ACCESOS A LA PLATAFORMA EDUCATIVA MEDIANTE CORREO ELECTRÓNICO
                    </p>
                </div>
            </div>
        </section>

        {/* Bonus Section */}
        <section className="px-4 py-16 sm:py-24">
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl font-headline">ADEMÁS SI ERES DE LAS PRIMERAS PERSONAS EN INSCRIBIRSE AL CURSO RECIBES ESTOS BONOS ADICIONALES TOTALMENTE GRATIS</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">Acceso inmediato a estas herramientas para acelerar tu éxito.</p>
                </div>
                <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2">
                    {bonuses.map((bonus, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                            <div className="relative w-full max-w-xs h-48 mb-4">
                                <Image
                                    src={bonus.imageUrl}
                                    alt={`Mockup para ${bonus.title}`}
                                    fill
                                    className="object-contain rounded-lg"
                                    data-ai-hint="ebook cover"
                                />
                            </div>
                            <div className="flex-1 text-center">
                                <p className="font-bold text-lg text-primary">{bonus.title}</p>
                                <p className="mt-2 text-gray-700">{bonus.description}</p>
                                <p className="mt-3 font-bold text-red-600">{bonus.callout}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="px-4 py-16 sm:py-24 bg-gray-50/50">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="flex items-center justify-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-headline">
                    <Gift className="w-8 h-8 mr-3 text-primary shrink-0" />
                    TODO LO QUE RECIBIRÁS POR SOLO $9.90 DÓLARES
                </h2>
                <p className="text-lg text-gray-700">
                    Imagina tener tu propia línea de sales de baño terapéuticas, sin cometer errores ni perder material.
                    Eso es exactamente lo que te llevarás con el curso completo paso a paso.
                </p>
                <p className="text-lg font-semibold text-primary">
                    Aumenta tus ventas con el método “PURA ESENCIA™”.
                </p>
            </div>
        </section>

        <section className="flex justify-center px-4 py-16 sm:py-24">
            <div className="relative w-full max-w-[800px] aspect-square">
                <Image 
                    src="https://placehold.co/800x800.png"
                    alt="Placeholder para imagen de producto"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    data-ai-hint="product mockup"
                />
            </div>
        </section>

        <section className="px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl font-headline">
              ESTO ES LO QUE OBTIENES AL INSCRIBIRTE
            </h2>
            <div className="grid grid-cols-1 gap-10 mt-12 md:grid-cols-1">
              <div className="space-y-4">
                {loQueObtienes.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 mt-1 mr-3 text-green-500 shrink-0" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center tracking-tight text-gray-900 font-headline">
                  🎁 Y además te llevas estos BONOS GRATIS:
                </h3>
                {bonosGratis.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Sparkles className="w-6 h-6 mt-1 mr-3 text-yellow-500 shrink-0" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section 
            className="relative px-4 py-8 sm:py-12 bg-[#F0F8F0] bg-cover bg-center"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3e%3cpath fill='%23F0F8F0' fill-opacity='1' d='M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,170.7C672,160,768,192,864,208C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3e%3c/path%3e%3c/svg%3e")`
            }}
            >
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-sm font-semibold text-gray-700 uppercase">
                    ¡ACCEDE HOY MISMO! CON EL PRECIO DE PRE LANZAMIENTO DESDE CUALQUIER PARTE DEL MUNDO, PAGANDO EN DOLARES O SU EQUIVALENTE EN TU MONEDA LOCAL
                </p>
                <p className="mt-6 text-lg font-bold">PRECIO REGULAR</p>
                <p className="text-5xl font-bold text-gray-500 line-through">$49.90</p>
                <p className="mt-4 text-2xl font-bold text-red-600">PRECIO RELÁMPAGO POR PRE LANZAMIENTO</p>
                <p className="mt-2 text-8xl font-bold text-green-600">$9.90</p>
                <p className="text-3xl font-semibold text-green-600">DÓLARES</p>
                <p className="mt-4 text-xl font-bold text-red-600">UNICO PAGO</p>
                <p className="text-xl font-bold text-red-600">SOLO PARA LAS PRIMERAS INSCRITAS</p>
                <div className="flex justify-center mt-4">
                    <ChevronDown className="w-12 h-12 text-blue-400 animate-bounce" />
                </div>
                <div className="mt-6">
                    <CtaButton />
                </div>
                <div className="mt-8 space-y-6">
                    <p className="font-bold text-red-600 uppercase">IMPORTANTE: NUESTRO SISTEMA HACE EL CAMBIO A TU MONEDA LOCAL AUTOMÁticAMENTE A UNA TASA DE CAMBIO PREFERENCIAL ANTES DE TU REGISTRO</p>
                    <p className="font-semibold text-green-700 uppercase">ACCESO VITALICIO A LA PLATAFORMA EDUCATIVA</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="flex items-center gap-2 p-2 bg-white rounded-md shadow">
                            <ShieldCheck className="w-8 h-8 text-red-600" />
                            <span className="font-bold text-red-600">COMPRA 100% SEGURA</span>
                        </div>
                        <span className="font-bold">VISA</span>
                        <span className="font-bold">MasterCard</span>
                        <span className="font-bold">AMERICAN EXPRESS</span>
                        <span className="font-bold">PayPal</span>
                        <span className="font-bold">DISCOVER</span>
                    </div>
                    <p className="text-xl font-bold uppercase">Disponible para todo el mundo</p>
                    <div className="relative flex flex-col items-center justify-center pt-8">
                        <div className="relative flex items-center justify-center w-40 h-40">
                            <ShieldCheck className="absolute w-full h-full text-green-500" />
                            <Check className="absolute w-20 h-20 text-white" />
                        </div>
                        <p className="absolute text-2xl font-bold text-white bg-green-600 px-4 py-2 rounded-lg -bottom-4 z-10">COMPRA 100% SEGURA</p>
                    </div>

                    <p className="max-w-md mx-auto font-semibold pt-8">
                        REALIZA TU COMPRA CON TOTAL CONFIANZA, RAPIDEZ, SEGURIDAD Y SIN COMPLICACIONES CON NUESTRA PLATAFORMA DE PAGO PROTEGIDA MEDIANTE ENCRIPTACIÓN SSL Y RESPALDADA POR VISA. MASTERCARD, AMERICAN EXPRESS Y PAYPAL
                    </p>
                     <p className="font-bold uppercase text-red-600">IMPORTANTE:</p>
                    <p className="max-w-md mx-auto font-semibold">
                        AL FINALIZAR TU COMPRA, RECIBIRÁS DE FORMA AUTOMÁTICA TODOS LOS ACCESOS A LA PLATAFORMA EDUCATIVA MEDIANTE CORREO ELECTRÓNICO
                    </p>
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

    
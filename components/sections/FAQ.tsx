'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const faqs = [
  {
    question: '¿Kipo es gratis?',
    answer:
      'Sí, Kipo es 100% gratis. El Coach IA tiene límites en la versión gratuita (50 mensajes/mes), pero todas las funciones principales son gratuitas para siempre.',
  },
  {
    question: '¿Necesito conectar mis cuentas bancarias?',
    answer:
      'No. Kipo no se conecta a tus bancos. Tú ingresas manualmente tus transacciones, lo que te da control total sobre tu privacidad.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer:
      'Absolutamente. Usamos encriptación de nivel bancario para proteger tus datos. Lee nuestra política de privacidad para más detalles.',
  },
  {
    question: '¿Cuándo estará disponible?',
    answer:
      'Planeamos lanzar en marzo de 2026. Únete a la lista de espera para ser de los primeros en acceder.',
  },
  {
    question: '¿Está disponible en mi país?',
    answer:
      'Kipo está disponible en cualquier país donde puedas descargar apps de iOS o Android. Soportamos MXN, USD y EUR.',
  },
  {
    question: '¿El Coach IA realmente entiende español?',
    answer:
      'Sí, el Coach IA está entrenado específicamente para entender términos financieros en español y el contexto cultural latinoamericano.',
  },
  {
    question: '¿Puedo usar Kipo sin internet?',
    answer:
      'Puedes ver tus datos sin conexión, pero necesitas internet para sincronizar y usar el Coach IA.',
  },
  {
    question: '¿Ofrecen una versión premium?',
    answer:
      'Planeamos ofrecer una versión premium con mensajes ilimitados del Coach IA y funciones avanzadas. Los detalles se anunciarán pronto.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-black">
      <div className="container mx-auto container-padding">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Preguntas <span className="text-zinc-500">Frecuentes</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Todo lo que necesitas saber sobre Kipo
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="px-8 py-2 rounded-2xl border border-zinc-900 bg-zinc-950/30 hover:border-zinc-800 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline text-white font-medium py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-500 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-zinc-500 mb-4">¿Tienes más preguntas?</p>
            <a
              href="mailto:soporte@kipo.app"
              className="text-white hover:text-zinc-300 underline"
            >
              Contacta a nuestro equipo de soporte
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

'use client'

import { Receipt, Wallet, Target, CreditCard, Sparkles } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    icon: Receipt,
    title: 'Seguimiento de Gastos',
    description:
      'Añade transacciones rápidamente con categorías inteligentes. Ve exactamente a dónde va tu dinero con gráficas visuales y detalladas.',
    mockup: '/frames/activity-mockup.png',
  },
  {
    icon: Wallet,
    title: 'Presupuestos con Sobres',
    description:
      'El método de sobres virtuales te ayuda a asignar tu dinero antes de gastarlo. Recibe alertas cuando te acercas a tu límite.',
    mockup: '/frames/budgets-mockup.png',
  },
  {
    icon: Target,
    title: 'Metas de Ahorro',
    description:
      'Define metas claras y sigue tu progreso. Desde un fondo de emergencia hasta las vacaciones de tus sueños.',
    mockup: '/frames/goals-mockup.png',
  },
  {
    icon: CreditCard,
    title: 'Recordatorios de Tarjetas',
    description:
      'Rastrea tus tarjetas de crédito y recibe recordatorios antes de la fecha de pago. Evita intereses y comisiones.',
    mockup: '/frames/cards-mockup.png',
  },
  {
    icon: Sparkles,
    title: 'Coach IA Personalizado',
    description:
      'Recibe consejos personalizados basados en tus hábitos de gasto. Pregunta lo que quieras y obtén respuestas al instante.',
    mockup: '/frames/coach-mockup.png',
  },
]

export function Features() {
  return (
    <section id="caracteristicas" className="section-padding relative bg-black">
      <div className="container mx-auto container-padding">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Todo lo que necesitas para{' '}
              <span className="text-zinc-500">controlar tu dinero</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Herramientas poderosas diseñadas para ayudarte a tomar mejores decisiones financieras
            </p>
          </div>
        </ScrollReveal>

        {/* Features with mockups - alternating layout */}
        <div className="space-y-32 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? 4 : -4 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <feature.icon className="w-12 h-12 text-zinc-400" />
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-lg text-zinc-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Mockup with enhanced effects */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex justify-center`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      y: -12,
                      rotateY: index % 2 === 0 ? 5 : -5
                    }}
                    className="relative group"
                    style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                  >
                    {/* Animated glow behind mockup */}
                    <motion.div
                      className="absolute inset-0 flex justify-center items-center -z-10"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-[400px] h-[400px] bg-gradient-to-r from-white/10 to-zinc-500/20 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Rim light on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[60px] pointer-events-none"
                         style={{
                           background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.08) 100%)',
                           mixBlendMode: 'overlay'
                         }}
                    />

                    <Image
                      src={feature.mockup}
                      alt={`${feature.title} - Mockup`}
                      width={1419}
                      height={2796}
                      className="w-auto h-[650px] md:h-[700px] object-contain transition-transform duration-300"
                      style={{
                        filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.05))'
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

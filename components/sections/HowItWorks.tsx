'use client'

import { Download, UserPlus, PlusCircle, MessageCircle, Trophy } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Descarga la app',
    description: 'Disponible en iOS y Android',
  },
  {
    number: '02',
    icon: UserPlus,
    title: 'Crea tu perfil',
    description: 'Configura tu ingreso mensual y preferencias',
  },
  {
    number: '03',
    icon: PlusCircle,
    title: 'Registra transacciones',
    description: 'Añade tus primeros gastos e ingresos',
  },
  {
    number: '04',
    icon: MessageCircle,
    title: 'Recibe consejos del Coach IA',
    description: 'Obtén recomendaciones personalizadas',
  },
  {
    number: '05',
    icon: Trophy,
    title: 'Alcanza tus metas',
    description: 'Mejora tus finanzas mes a mes',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding relative overflow-hidden bg-black">
      <div className="container mx-auto container-padding relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Empieza en <span className="text-zinc-500">minutos</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Configura tu cuenta y comienza a mejorar tus finanzas hoy mismo
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-6 p-8 rounded-2xl border border-zinc-900 bg-zinc-950/30 hover:border-zinc-800 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-zinc-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <span className="text-4xl font-bold text-zinc-900">{step.number}</span>
                    </div>
                    <p className="text-zinc-500">{step.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

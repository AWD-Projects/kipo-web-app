'use client'

import { Gift, Shield, Languages, Bot, Unplug, Smartphone } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: Gift,
    title: '100% Gratis',
    description: 'Sin cargos ocultos',
  },
  {
    icon: Shield,
    title: 'Privado y Seguro',
    description: 'Tus datos encriptados y protegidos',
  },
  {
    icon: Languages,
    title: 'En Español',
    description: 'Diseñado para hispanohablantes',
  },
  {
    icon: Bot,
    title: 'Coach IA Ilimitado',
    description: 'Respuestas instantáneas 24/7',
  },
  {
    icon: Unplug,
    title: 'Sin Conexión Bancaria',
    description: 'Tú controlas qué datos ingresas',
  },
  {
    icon: Smartphone,
    title: 'Multiplataforma',
    description: 'iOS, Android, y pronto en web',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="min-h-screen flex items-center section-padding bg-black">
      <div className="container mx-auto container-padding">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              ¿Por qué elegir <span className="text-zinc-500">Kipo?</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Diseñado pensando en ti y en tu privacidad
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-8 rounded-2xl border border-zinc-900 bg-zinc-950/30 hover:border-zinc-800 transition-colors text-center"
              >
                <benefit.icon className="w-10 h-10 text-zinc-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-500 text-sm">{benefit.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

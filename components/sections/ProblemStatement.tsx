'use client'

import { motion } from 'framer-motion'
import { CircleDollarSign, TrendingDown, HelpCircle, Languages } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const problems = [
  {
    icon: CircleDollarSign,
    title: 'No sé a dónde va mi dinero',
    description: 'Cada mes terminas preguntándote en qué gastaste tu salario',
  },
  {
    icon: TrendingDown,
    title: 'Mis presupuestos no funcionan',
    description: 'Intentas ahorrar pero siempre terminas gastando de más',
  },
  {
    icon: HelpCircle,
    title: 'Necesito ayuda financiera',
    description: 'Quieres consejos pero no sabes en quién confiar',
  },
  {
    icon: Languages,
    title: 'Las apps están en inglés',
    description: 'Los términos financieros en inglés son confusos',
  },
]

export function ProblemStatement() {
  return (
    <section id="problema" className="snap-scroll-section flex items-center section-padding relative overflow-hidden bg-black">
      <div className="container mx-auto container-padding relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              ¿Te suena <span className="text-zinc-500">familiar?</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Sabemos lo frustrante que es perder el control de tus finanzas personales
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <ScrollReveal key={problem.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-8 rounded-2xl border border-zinc-900 bg-zinc-950/30 hover:border-zinc-800 transition-colors"
              >
                <problem.icon className="w-10 h-10 text-zinc-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{problem.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

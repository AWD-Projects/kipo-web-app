'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, CheckCircle2, Mail, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { joinWaitlist } from '@/app/actions/waitlist'
import { REFERRAL_SOURCES } from '@/lib/constants'

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  referralSource: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await joinWaitlist(data)

      if (result.success) {
        setIsSuccess(true)
        reset()
        toast.success(result.message || '¡Te has unido a la lista correctamente!')
      } else {
        toast.error(result.error || 'Algo salió mal')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Error al unirse. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="waitlist" className="snap-scroll-section flex items-center section-padding relative overflow-hidden bg-black">
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Únete a la <span className="text-zinc-500">lista de espera</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Sé de los primeros en probar Kipo. Sin compromiso, 100% gratis.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              // Success state
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-12 rounded-2xl border border-zinc-900 bg-zinc-950/30 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full border border-green-900 bg-green-950/30 flex items-center justify-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">¡Gracias! Estás en la lista</h3>
                <p className="text-zinc-400 mb-8">
                  Te enviaremos un email cuando estemos listos para lanzar
                </p>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  Añadir otro email
                </button>
              </motion.div>
            ) : (
              // Form state
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 md:p-10 rounded-2xl border border-zinc-900 bg-zinc-950/30"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name input */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white text-sm">
                      Nombre completo
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="Tu nombre"
                        className={`pl-11 h-12 bg-black border-zinc-800 text-white placeholder:text-zinc-600 focus:border-zinc-700 rounded-xl ${
                          errors.name ? 'border-red-900' : ''
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email input */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white text-sm">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="tu@email.com"
                        className={`pl-11 h-12 bg-black border-zinc-800 text-white placeholder:text-zinc-600 focus:border-zinc-700 rounded-xl ${
                          errors.email ? 'border-red-900' : ''
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Referral source */}
                  <div className="space-y-2">
                    <Label htmlFor="referralSource" className="text-white text-sm">
                      ¿Cómo nos conociste? (opcional)
                    </Label>
                    <select
                      id="referralSource"
                      {...register('referralSource')}
                      className="w-full h-12 px-4 bg-black border border-zinc-800 rounded-xl text-white text-sm focus:border-zinc-700 focus:ring-0 transition-colors outline-none"
                    >
                      <option value="">Selecciona una opción</option>
                      {REFERRAL_SOURCES.map((source) => (
                        <option key={source.value} value={source.value}>
                          {source.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-white hover:bg-zinc-100 text-black font-medium rounded-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Uniéndote...
                      </>
                    ) : (
                      'Unirme a la lista'
                    )}
                  </Button>

                  <p className="text-xs text-center text-zinc-600">
                    Al unirte, aceptas recibir emails sobre el lanzamiento de Kipo.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

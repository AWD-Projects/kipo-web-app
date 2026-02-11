'use server'

import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

const waitlistSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  referralSource: z.string().optional(),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>

export async function joinWaitlist(data: WaitlistFormData) {
  try {
    const validatedData = waitlistSchema.parse(data)
    const supabase = await createClient()

    const { error } = await supabase.from('waitlist').insert({
      name: validatedData.name,
      email: validatedData.email,
      referral_source: validatedData.referralSource || null,
    })

    if (error) {
      if (error.code === '23505') {
        return {
          success: false,
          error: '¡Ya estás en la lista! Te contactaremos pronto.',
        }
      }
      throw error
    }

    return {
      success: true,
      message: '¡Gracias por unirte! Te notificaremos cuando Kipo esté listo.',
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    console.error('Waitlist error:', error)
    return {
      success: false,
      error: 'Algo salió mal. Por favor intenta de nuevo.',
    }
  }
}

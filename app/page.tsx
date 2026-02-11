import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProblemStatement } from '@/components/sections/ProblemStatement'
import { Features } from '@/components/sections/Features'
import { Benefits } from '@/components/sections/Benefits'
import { Waitlist } from '@/components/sections/Waitlist'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <ProblemStatement />
      <Features />
      <Benefits />
      <Waitlist />
      <Footer />
    </div>
  )
}

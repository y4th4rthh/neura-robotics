import { Navigation } from './components/navigation'
import { Hero } from './components/hero'
import { DomainShowcase } from './components/domain-showcase'
import { Features } from './components/features'
import { CTA } from './components/cta'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DomainShowcase />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}

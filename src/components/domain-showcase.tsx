'use client'

import { Cpu, Gauge, BrainCircuit, Heart, Target, BarChart3 } from 'lucide-react'
import { RoboticsCard } from './robotics-card'
import { RehabilitationCard } from './rehabilitation-card'

const roboticsProducts: {
  icon: typeof Cpu
  title: string
  description: string
  specs: [string, string][]
}[] = [
  {
    icon: Cpu,
    title: 'Atlas-X Biped',
    description:
      'A full-body humanoid research platform for locomotion and balance studies, built for rapid iteration in lab settings.',
    specs: [
      ['Degrees of freedom', '32'],
      ['Payload', '15 kg'],
      ['Runtime', '~4 hrs'],
    ],
  },
  {
    icon: Gauge,
    title: 'Astra Arm',
    description:
      'A collaborative robotic arm module for precision handling tasks, designed to bolt onto mobile or fixed platforms.',
    specs: [
      ['Degrees of freedom', '7'],
      ['Reach', '850 mm'],
      ['Repeatability', '±0.05 mm'],
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Sentinel Vision',
    description:
      'A perception and navigation stack combining depth sensing and SLAM for safe operation in dynamic, human-occupied spaces.',
    specs: [
      ['Detection range', '0.1–12 m'],
      ['Latency', '< 40 ms'],
      ['Update rate', '60 Hz'],
    ],
  },
]

const rehabProducts: {
  icon: typeof Heart
  title: string
  description: string
  specs: [string, string][]
}[] = [
  {
    icon: Heart,
    title: 'HandFlex Exo',
    description:
      'A robotic hand exoskeleton that assists finger extension and grip training for stroke survivors, at clinic or home.',
    specs: [
      ['Degrees of freedom', '5'],
      ['Therapy focus', 'Grip & release'],
      ['Setting', 'Clinic + home'],
    ],
  },
  {
    icon: Target,
    title: 'GaitTrainer Pro',
    description:
      'A lower-limb gait rehabilitation system that supports body weight while guiding natural walking patterns.',
    specs: [
      ['Degrees of freedom', '4'],
      ['Therapy focus', 'Gait & balance'],
      ['Setting', 'Clinic'],
    ],
  },
  {
    icon: BarChart3,
    title: 'NeuroGrip',
    description:
      'A sensor glove for fine motor therapy, tracking finger-level movement to guide exercises and chart recovery over time.',
    specs: [
      ['Degrees of freedom', '6'],
      ['Therapy focus', 'Fine motor control'],
      ['Setting', 'Home'],
    ],
  },
]

export function DomainShowcase() {
  return (
    <>
      <section
        id="robotics"
        className="relative scroll-mt-20 py-20 sm:py-32"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(91, 141, 239, 0.12) 40%, transparent)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <div className="eyebrow mb-3.5" style={{ color: '#8fb3ff' }}>
              <span className="dot animate-pulse" style={{ background: '#5b8def', boxShadow: '0 0 10px #5b8def' }} />
              Domain 01 — Humanoid Robotics
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-[42px] mb-4">
              Platforms for the physical world
            </h2>
            <p className="text-base sm:text-[16px]" style={{ color: '#8d97ab' }}>
              From full-body research humanoids to modular arms and perception stacks, built to
              operate safely alongside people.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {roboticsProducts.map((p) => (
              <RoboticsCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="rehab"
        className="relative scroll-mt-20 py-20 sm:py-32"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(255, 154, 98, 0.12) 40%, transparent)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <div className="eyebrow mb-3.5" style={{ color: '#ffc08a' }}>
              <span className="dot animate-pulse" style={{ background: '#ff9a62', boxShadow: '0 0 10px #ff9a62' }} />
              Domain 02 — Rehabilitation Devices
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-[42px] mb-4">
              Systems for the road to recovery
            </h2>
            <p className="text-base sm:text-[16px]" style={{ color: '#8d97ab' }}>
              Wearable and clinical devices built with therapists, giving patients measurable,
              motivating progress at every session.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {rehabProducts.map((p) => (
              <RehabilitationCard key={p.title} {...p} />
            ))}
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-3 border-t border-border pt-16">
            <div className="text-center">
              <div className="font-display text-4xl font-bold" style={{ color: '#8fb3ff' }}>50+</div>
              <p className="mt-2" style={{ color: '#8d97ab' }}>Robotic Deployments</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold grad-text">10K+</div>
              <p className="mt-2" style={{ color: '#8d97ab' }}>Patient Lives Improved</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold" style={{ color: '#ffc08a' }}>15+</div>
              <p className="mt-2" style={{ color: '#8d97ab' }}>Global Partners</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

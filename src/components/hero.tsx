import { ArrowRight, BrainCircuit } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-16 sm:pt-20">
      <div className="text-center px-6 pb-14">
        <div className="eyebrow-center mb-4">Neura Robotics — Next-Generation Technology</div>

        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[58px]">
          One core technology.
          <br />
          <span className="grad-text">Two frontiers: motion &amp; recovery.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: '#8d97ab' }}>
          Revolutionizing two distinct domains with cutting-edge humanoid robotics and
          rehabilitation devices that empower industries and improve lives.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center items-center">
          <a href="#robotics" className="cta-button">
            Explore Solutions
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#converge" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[56vh] border-t border-border">
        <div className="spine hidden lg:block">
          <div className="pulse p1" />
          <div className="pulse p2" />
          <div className="spine-node">
            <BrainCircuit/>
          </div>
        </div>

        <a
          href="#robotics"
          className="relative flex flex-col justify-center px-8 py-16 sm:px-12 sm:py-[72px] border-b md:border-b-0 md:border-r border-border"
          style={{ background: 'radial-gradient(circle at 85% 20%, rgba(91, 141, 239, 0.12), transparent 60%)' }}
        >
          <div className="side-eyebrow mb-4" style={{ color: '#8fb3ff' }}>
            <span className="dot animate-pulse" style={{ background: '#5b8def', boxShadow: '0 0 12px #5b8def' }} />
            Humanoid Robotics
          </div>
          <h2 className="max-w-[420px] mb-4 text-2xl sm:text-3xl font-semibold leading-snug">
            Machines built to move the way we do.
          </h2>
          <p className="max-w-sm text-[15px] mb-7" style={{ color: '#8d97ab' }}>
            Bipedal platforms, manipulation arms, and perception systems engineered for
            logistics, service, and research environments where human-like dexterity matters.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <span className="chip" style={{ borderColor: 'rgba(91,141,239,0.3)' }}>15 kg payload</span>
            <span className="chip" style={{ borderColor: 'rgba(91,141,239,0.3)' }}>4 hr runtime</span>
          </div>
        </a>

        <a
          href="#rehab"
          className="relative flex flex-col justify-center px-8 py-16 sm:px-12 sm:py-[72px]"
          style={{ background: 'radial-gradient(circle at 15% 80%, rgba(255, 154, 98, 0.12), transparent 60%)' }}
        >
          <div className="side-eyebrow mb-4" style={{ color: '#ffc08a' }}>
            <span className="dot animate-pulse" style={{ background: '#ff9a62', boxShadow: '0 0 12px #ff9a62' }} />
            Rehabilitation Devices
          </div>
          <h2 className="max-w-[420px] mb-4 text-2xl sm:text-3xl font-semibold leading-snug">
            Devices built to help people move again.
          </h2>
          <p className="max-w-sm text-[15px] mb-7" style={{ color: '#8d97ab' }}>
            Wearable exoskeletons and therapy systems for stroke and spinal-injury recovery,
            designed with clinicians for use in hospitals and at home.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <span className="chip" style={{ borderColor: 'rgba(255,154,98,0.3)' }}>Clinic + home use</span>
            <span className="chip" style={{ borderColor: 'rgba(255,154,98,0.3)' }}>FDA approved</span>
          </div>
        </a>
      </div>
    </section>
  )
}

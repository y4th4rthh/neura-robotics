export function CTA() {
  return (
    <section id="contact" className="border-t border-border py-20 sm:py-[110px] text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight sm:text-[44px] mb-5">
          Building for motion, in every direction.
        </h2>
        <p className="mx-auto mb-9 max-w-md" style={{ color: '#8d97ab' }}>
          Whether you're deploying humanoids or fitting a patient for their first
          exoskeleton session, we'd like to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:yatharthpatel014@gmail.com" className="cta-button">
            Contact us
          </a>
          <a href="#robotics" className="btn-secondary">
            Explore products
          </a>
        </div>
      </div>
    </section>
  )
}

export function Features() {
  const rows = [
    {
      left: 'Locomotion & manipulation',
      leftImpl: 'Applied in Humanoid Robotics',
      core: 'Actuation',
      right: 'Assisted joint movement',
      rightImpl: 'Applied in Rehabilitation Devices',
    },
    {
      left: 'Obstacle & scene awareness',
      leftImpl: 'Applied in Humanoid Robotics',
      core: 'Sensing & AI',
      right: 'Patient motion tracking',
      rightImpl: 'Applied in Rehabilitation Devices',
    },
    {
      left: 'Balance & task planning',
      leftImpl: 'Applied in Humanoid Robotics',
      core: 'Control Software',
      right: 'Adaptive therapy protocols',
      rightImpl: 'Applied in Rehabilitation Devices',
    },
  ]

  return (
    <section id="converge" className="relative py-24 sm:py-[130px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-xl text-center sm:mb-[72px]">
          <div className="eyebrow-center mb-4">Shared Engineering Core</div>
          <h2 className="text-3xl font-semibold sm:text-[42px] mb-4">One core, two frontiers</h2>
          <p style={{ color: '#8d97ab' }}>
            Robotics and rehabilitation aren't separate businesses at Neura Robotics. They
            share the same actuation, sensing, and control foundations, tuned for two very
            different jobs.
          </p>
        </div>

        <div className="stack">
          {rows.map((row) => (
            <div className="stack-row" key={row.core}>
              <div className="stack-cell left">
                <h4>{row.left}</h4>
                <span className="impl">{row.leftImpl}</span>
              </div>
              <div className="stack-core">
                <span className="label">Core</span>
                <span className="name">{row.core}</span>
              </div>
              <div className="stack-cell right">
                <h4>{row.right}</h4>
                <span className="impl">{row.rightImpl}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

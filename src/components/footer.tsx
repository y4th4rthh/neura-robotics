import { BrainCircuit, Mail, Phone } from 'lucide-react'
import { FaGithub, FaPaperPlane } from 'react-icons/fa6'

export function Footer() {
  return (
    <footer className="border-t border-border py-9 sm:pt-12 sm:pb-9">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div
              className="p-2 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #5b8def 0%, #ff9a62 100%)' }}
            >
              <BrainCircuit size={20} className="text-white" />
            </div>
            <div className="logo-two-tone">
              <h1 className="header-title">
                <span className="a">Neura</span> <span className="b">Robotics</span>
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-7 text-[13px]" style={{ color: '#8d97ab' }}>
            <a href="#robotics" className="hover:text-foreground transition-colors">
              Humanoid Robotics
            </a>
            <a href="#rehab" className="hover:text-foreground transition-colors">
              Rehabilitation Devices
            </a>
            <a href="#converge" className="hover:text-foreground transition-colors">
              Technology
            </a>
            <a href="mailto:yatharthpatel014@gmail.com" className="hover:text-foreground transition-colors">
              yatharthpatel014@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-6 text-xs" style={{ color: '#5c6478' }}>
          <a href="mailto:yatharthpatel014@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Mail className="h-3.5 w-3.5" /> yatharthpatel014@gmail.com
          </a>
          <a href="tel:+919510749226" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Phone className="h-3.5 w-3.5" /> +91 95107 49226
          </a>
          <a
            href="https://github.com/y4th4rthh/neura-robotics"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <FaGithub className="h-3.5 w-3.5" /> Github
          </a>
          <a
            href="https://drive.google.com/file/d/1XacQ37ozxMsk08ev6QD9E8u_AR6QxS4o/view?usp=sharing"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <FaPaperPlane className="h-3.5 w-3.5" /> About Myself
          </a>
        </div>

        <div className="mt-7 text-center text-xs" style={{ color: '#5c6478' }}>
          © {new Date().getFullYear()} XIBOTIX ROBOTICS. Vellore, Tamil Nadu.
        </div>
      </div>
    </footer>
  )
}

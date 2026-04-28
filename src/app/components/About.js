import Image from 'next/image'
import SectionWrapper from './SectionWrapper'
import AnimatedCounter from './AnimatedCounter'
import info from '@/data/information.json'

const { stats, specializations, heading, paragraphs } = info.about
const { name, title, tagline, location, photo } = info.personal

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 font-mono text-sm mb-12">// about me</p>

        {/* Top: photo + identity | bio */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">

          {/* Left — photo + identity card */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/40 to-violet-500/20 blur-sm" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src={photo}
                  alt={name}
                  width={768}
                  height={1376}
                  className="w-56 h-auto block"
                  priority
                />
              </div>
            </div>

            {/* Name + designation */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-1">{name}</h2>
              <p className="text-indigo-400 font-medium text-base mb-1">{title}</p>
              <p className="text-slate-500 text-sm font-mono mb-3">{tagline}</p>
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <span>📍</span>
                {location}
              </div>
            </div>
          </div>

          {/* Right — bio + specializations */}
          <div>
            <h3 className="text-2xl font-bold mb-6 leading-tight">
              {heading.split('everywhere, always.')[0]}
              <span className="text-gradient">everywhere, always.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">{paragraphs[0]}</p>
            <p className="text-slate-400 leading-relaxed mb-8">{paragraphs[1]}</p>

            <div className="flex flex-wrap gap-2">
              {specializations.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs rounded-lg border border-indigo-500/20 bg-indigo-500/8 text-indigo-300 font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom — stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl border border-white/8 bg-[#16161d] text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

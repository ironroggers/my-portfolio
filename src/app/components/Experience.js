import SectionWrapper from './SectionWrapper'
import info from '@/data/information.json'

const experiences = info.experience

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-24 px-6 bg-[#16161d]/50">
      <div className="max-w-4xl mx-auto">
        <p className="text-indigo-400 font-mono text-sm mb-4">// experience</p>
        <h2 className="text-4xl font-bold mb-16">Where I&apos;ve worked</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent ml-[7px] hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-10 relative">
                {/* Dot */}
                <div className="hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-500 bg-[#0f0f13]" />

                <div className="p-6 rounded-2xl border border-white/8 bg-[#16161d] card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <p className="text-indigo-400 text-sm font-mono">{exp.subtitle}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/8 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400">
                        <span className="text-indigo-500 mt-0.5 shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/8 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

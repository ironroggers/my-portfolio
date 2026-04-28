import SectionWrapper from './SectionWrapper'
import info from '@/data/information.json'

const achievements = info.achievements

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-indigo-400 font-mono text-sm mb-4">// achievements</p>
        <h2 className="text-4xl font-bold mb-12">Recognition</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="p-6 rounded-2xl border border-white/8 bg-[#16161d] card-hover text-center"
            >
              <div className="text-4xl mb-4">{a.icon}</div>
              <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                {a.badge}
              </span>
              <h3 className="font-semibold text-white mt-3 mb-2 text-sm leading-snug">{a.title}</h3>
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">{a.description}</p>
              <span className="text-xs font-mono text-slate-600">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

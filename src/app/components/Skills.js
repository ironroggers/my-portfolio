import SectionWrapper from './SectionWrapper'
import info from '@/data/information.json'

const skillGroups = info.skills

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 px-6 bg-[#16161d]/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 font-mono text-sm mb-4">// skills</p>
        <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
        <p className="text-slate-400 mb-12 max-w-xl">
          Depth across the full stack — from on-device ML to distributed backend systems.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl border border-white/8 bg-[#16161d] card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-semibold text-white text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 text-slate-400 border border-white/8 font-mono hover:border-indigo-500/30 hover:text-indigo-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

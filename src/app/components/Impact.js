import SectionWrapper from './SectionWrapper'
import AnimatedCounter from './AnimatedCounter'
import info from '@/data/information.json'

const impacts = info.impact

export default function Impact() {
  return (
    <SectionWrapper id="impact" className="py-24 px-6 bg-[#16161d]/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 font-mono text-sm mb-4">// impact</p>
        <h2 className="text-4xl font-bold mb-4">By the Numbers</h2>
        <p className="text-slate-400 mb-12 max-w-xl">
          Every metric here is from production systems. Real users, real scale, real outcomes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impacts.map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-2xl border border-white/8 bg-[#16161d] card-hover group"
            >
              <div className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm">{item.label}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

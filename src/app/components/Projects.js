'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import info from '@/data/information.json'

const { items: projects, categories } = info.projects

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <SectionWrapper id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 font-mono text-sm mb-4">// projects</p>
        <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
        <p className="text-slate-400 mb-10 max-w-xl">
          Production systems and R&D projects — each with a clear problem, solution, and measurable outcome.
        </p>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/8 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl border border-white/8 bg-[#16161d] card-hover group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.emoji}</span>
                    <div>
                      <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-3 mb-5">
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Problem</span>
                    <p className="text-sm text-slate-400 mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Solution</span>
                    <p className="text-sm text-slate-400 mt-1">{project.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Impact</span>
                    <p className="text-sm text-white mt-1 font-medium">{project.impact}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center p-2 rounded-lg bg-white/3 border border-white/5">
                      <div className="text-lg font-bold text-gradient">{m.value}</div>
                      <div className="text-xs text-slate-600 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-500 font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

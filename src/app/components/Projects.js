'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import info from '@/data/information.json'

const { items: projects, categories } = info.projects

export default function Projects() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null) // { proofs, index }

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  const openLightbox = (proofs, index) => setLightbox({ proofs, index })
  const closeLightbox = () => setLightbox(null)
  const step = (dir) =>
    setLightbox((prev) =>
      prev
        ? { ...prev, index: (prev.index + dir + prev.proofs.length) % prev.proofs.length }
        : prev
    )

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

                {/* Proofs */}
                {project.proofs && project.proofs.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-white/8">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 block">
                      Proof
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.proofs.map((proof, i) => (
                        <button
                          key={proof.src}
                          onClick={() => openLightbox(project.proofs, i)}
                          className="relative w-20 h-14 rounded-lg overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-colors group/thumb"
                        >
                          {proof.type === 'video' ? (
                            <>
                              <video
                                src={proof.src}
                                className="w-full h-full object-cover"
                                muted
                                playsInline
                              />
                              <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/thumb:bg-black/10 transition-colors">
                                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 drop-shadow">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </span>
                            </>
                          ) : (
                            <Image
                              src={proof.src}
                              alt={proof.caption || project.title}
                              fill
                              sizes="80px"
                              className="object-cover group-hover/thumb:scale-105 transition-transform"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-10"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 bg-[#16161d]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {lightbox.proofs.length > 1 && (
                <>
                  <button
                    onClick={() => step(-1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                    aria-label="Previous"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => step(1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                    aria-label="Next"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}

              <div className="flex items-center justify-center bg-black max-h-[70vh]">
                {lightbox.proofs[lightbox.index].type === 'video' ? (
                  <video
                    key={lightbox.proofs[lightbox.index].src}
                    src={lightbox.proofs[lightbox.index].src}
                    className="max-h-[70vh] w-auto"
                    controls
                    autoPlay
                  />
                ) : (
                  <img
                    key={lightbox.proofs[lightbox.index].src}
                    src={lightbox.proofs[lightbox.index].src}
                    alt={lightbox.proofs[lightbox.index].caption || ''}
                    className="max-h-[70vh] w-auto object-contain"
                  />
                )}
              </div>

              {lightbox.proofs[lightbox.index].caption && (
                <div className="px-5 py-3 border-t border-white/8 text-sm text-slate-400">
                  {lightbox.proofs[lightbox.index].caption}
                  {lightbox.proofs.length > 1 && (
                    <span className="ml-2 text-slate-600 font-mono text-xs">
                      {lightbox.index + 1}/{lightbox.proofs.length}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}

'use client'

import { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import info from '@/data/information.json'

const { email, linkedin, github, resumeUrl } = info.personal
const { heading, subheading } = info.contact

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send — wire up to your preferred email service
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <SectionWrapper id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-indigo-400 font-mono text-sm mb-4">// contact</p>
        <h2 className="text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-slate-400 mb-12 max-w-xl">{subheading}</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Links */}
          <div className="space-y-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-[#16161d] hover:border-indigo-500/30 transition-all duration-200 group"
            >
              <span className="text-2xl">✉️</span>
              <div>
                <div className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">Email</div>
                <div className="text-xs text-slate-500">{email}</div>
              </div>
            </a>
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-[#16161d] hover:border-indigo-500/30 transition-all duration-200 group"
            >
              <span className="text-2xl">💼</span>
              <div>
                <div className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">LinkedIn</div>
                <div className="text-xs text-slate-500">{linkedin.handle}</div>
              </div>
            </a>
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-[#16161d] hover:border-indigo-500/30 transition-all duration-200 group"
            >
              <span className="text-2xl">🐙</span>
              <div>
                <div className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">GitHub</div>
                <div className="text-xs text-slate-500">{github.handle}</div>
              </div>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/8 hover:bg-indigo-500/15 transition-all duration-200 group"
            >
              <span className="text-2xl">📄</span>
              <div>
                <div className="text-sm font-medium text-indigo-300">View Resume</div>
                <div className="text-xs text-slate-500">PDF · Updated 2025</div>
              </div>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-500 mb-1.5">Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-[#16161d] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-500 mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-[#16161d] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-500 mb-1.5">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-xl bg-[#16161d] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-medium text-sm transition-all duration-200"
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}

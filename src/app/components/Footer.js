import info from '@/data/information.json'

const { name, github, linkedin, resumeUrl } = info.personal

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-slate-600">
          © {new Date().getFullYear()} {name}
        </span>
        <div className="flex items-center gap-6">
          <a href={github.url} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-white transition-colors">
            GitHub
          </a>
          <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-white transition-colors">
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}

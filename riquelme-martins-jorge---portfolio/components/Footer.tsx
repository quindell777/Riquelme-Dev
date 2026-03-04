'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold font-display text-slate-200 mb-2">Riquelme Martins Jorge</h3>
          <p className="text-slate-500 text-sm">Desenvolvedor Pleno & Head de Desenvolvimento de Sistemas</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="mailto:riquelmem077@gmail.com"
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-5xl mt-8 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Riquelme Martins Jorge. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

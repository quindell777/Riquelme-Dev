'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown, Terminal, Database, Cloud, Code2, Server } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const navItems = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Formação', href: '#formacao' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-[-1]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
        >
          <Terminal size={14} />
          <span>Disponível para novas oportunidades</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-display"
        >
          Riquelme <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Martins Jorge</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10"
        >
          Desenvolvedor Pleno & Head de Desenvolvimento de Sistemas. Especialista em arquitetura Back-end, ecossistema .NET e infraestrutura Azure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="mailto:riquelmem077@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <Mail size={18} />
            Entrar em Contato
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-colors border border-slate-700"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-colors border border-slate-700"
          >
            <Github size={18} />
            GitHub
          </a>
        </motion.div>

        {/* Navigation Menu */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 md:gap-6 p-2 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-all"
            >
              {item.name}
            </a>
          ))}
        </motion.nav>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
      >
        <a href="#sobre" aria-label="Scroll down">
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}

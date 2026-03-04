'use client';

import { motion } from 'motion/react';
import { User } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
            <User size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Resumo Profissional</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-invert prose-lg max-w-none text-slate-300"
        >
          <p className="leading-relaxed">
            Desenvolvedor Pleno e Head de Desenvolvimento de Sistemas com sólida vivência em arquitetura Back-end, modelagem de banco de dados e integrações via APIs REST.
          </p>
          <p className="leading-relaxed">
            Experiência comprovada no desenho e implementação de sistemas em produção para os setores governamental, financeiro, de saúde e educacional, garantindo segurança, escalabilidade e alta disponibilidade.
          </p>
          <p className="leading-relaxed">
            Forte capacidade de diagnóstico e resolução de problemas estruturais, com domínio do ecossistema <strong className="text-blue-400 font-semibold">.NET / C#</strong> e ampla infraestrutura em nuvem (<strong className="text-blue-400 font-semibold">Azure</strong>).
          </p>
        </motion.div>
      </div>
    </section>
  );
}

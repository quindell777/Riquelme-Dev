'use client';

import { motion } from 'motion/react';
import { Code, Database, Cloud, Layout, Cpu, Shield } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Linguagens e Frameworks',
      icon: <Code size={20} />,
      skills: ['C# 12', '.NET 8', 'ASP.NET Core', 'Web APIs', 'Java', 'Node.js', 'TypeScript']
    },
    {
      title: 'Banco de Dados',
      icon: <Database size={20} />,
      skills: ['SQL Server', 'Entity Framework Core', 'Azure SQL', 'Modelagem Relacional']
    },
    {
      title: 'Ecossistema Azure & IA',
      icon: <Cloud size={20} />,
      skills: ['App Service', 'Blob/Archive Storage', 'Entra ID', 'Logic Apps', 'Azure AI (Speech, Vision OCR, Bot Service)', 'OpenAI Service']
    },
    {
      title: 'Arquitetura e Integrações',
      icon: <Layout size={20} />,
      skills: ['APIs REST', 'Clean Architecture', 'Design Patterns', 'Background Services']
    },
    {
      title: 'Competências Comportamentais',
      icon: <Shield size={20} />,
      skills: ['Autonomia técnica', 'Liderança de equipe', 'Responsabilidade em produção governamental e corporativa']
    }
  ];

  return (
    <section id="habilidades" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
            <Cpu size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Habilidades Técnicas</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-900 group-hover:bg-blue-500/10 text-blue-400 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-200">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

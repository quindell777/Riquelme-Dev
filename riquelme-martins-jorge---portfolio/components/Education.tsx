'use client';

import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function Education() {
  return (
    <section id="formacao" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold font-display">Formação Acadêmica</h2>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-xl font-bold text-slate-100 mb-2">Bacharelado em Engenharia da Computação</h3>
              <p className="text-blue-400 font-medium mb-4">Universidade Federal do Maranhão (UFMA)</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
                <BookOpen size={14} />
                <span>Previsão de conclusão: 2027</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Award size={24} />
              </div>
              <h2 className="text-3xl font-bold font-display">Cursos e Especializações</h2>
            </div>

            <div className="space-y-4">
              {[
                'Desenvolvimento de Soluções para o Microsoft Azure – Microsoft',
                'Construção de APIs e Aplicações Web com ASP.NET Core – Microsoft',
                'Modelagem de Dados e Entity Framework Core – Microsoft',
                'Fundamentos de Inteligência Artificial do Microsoft Azure – Microsoft'
              ].map((course, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-colors">
                  <div className="mt-1 text-blue-500">
                    <Award size={18} />
                  </div>
                  <p className="text-slate-300">{course}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

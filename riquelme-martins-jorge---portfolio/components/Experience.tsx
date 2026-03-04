'use client';

import { motion } from 'motion/react';
import { Briefcase, Calendar, Building2, Server, Globe, Activity, Database, ShieldCheck, Code2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Head de Desenvolvimento de Sistemas',
      company: 'TED IA',
      period: '[Mês/Ano de início] – o momento',
      icon: <Building2 size={20} />,
      projects: [
        {
          title: 'Ecossistema Digital da ALEMA',
          description: 'Arquitetura e desenvolvimento de soluções governamentais em nuvem Azure. Construção de APIs em ASP.NET Core (C#) para sistemas LMS e de Gestão Documental (GED), utilizando Azure SQL Database, App Service e Blob/Archive Storage. Implementação de segurança granular e conformidade com a LGPD via Microsoft Entra ID.',
          icon: <Server size={18} className="text-blue-400" />
        },
        {
          title: 'Automação e IA (ALEMA)',
          description: 'Integração de serviços cognitivos para transcrição de taquigrafia utilizando Azure Speech (customizado para jargão legislativo) e Azure OpenAI Service. Automação de fluxos de protocolo e assinaturas eletrônicas via Azure Logic Apps, com desenvolvimento de assistente virtual em Azure AI Bot Service.',
          icon: <Globe size={18} className="text-blue-400" />
        },
        {
          title: 'Sistema de Gestão Eleitoral e Financeira (SGEF)',
          description: 'Modelagem arquitetural e operacionalização de plataforma SaaS para 3.000 usuários em Clean Architecture. Desenvolvimento de Monólito Modular em contêineres utilizando .NET 8 (C# 12), ASP.NET Core e Entity Framework Core, orquestrando rotinas em background para conciliação financeira e automação jurídica.',
          icon: <Database size={18} className="text-blue-400" />
        },
        {
          title: 'Sistema de Saúde de São Mateus',
          description: 'Arquitetura e desenvolvimento do sistema de saúde do município. Implementação utilizando AWS Healthlake para estruturação, armazenamento e consulta de dados críticos do setor em ambiente de produção de alta disponibilidade.',
          icon: <Activity size={18} className="text-blue-400" />
        },
        {
          title: 'Projeto PoliFin',
          description: 'Liderança técnica e desenvolvimento de back-end para um dashboard financeiro de alta precisão. Arquitetura estruturada no ecossistema Azure para suportar múltiplas operações simultâneas e processamento seguro de volumes expressivos de dados via APIs RESTful.',
          icon: <ShieldCheck size={18} className="text-blue-400" />
        }
      ]
    },
    {
      id: 2,
      role: 'Desenvolvedor Pleno',
      company: 'Instituto Iluses',
      period: '[Mês/Ano de início] – [Mês/Ano de término]',
      icon: <Code2 size={20} />,
      projects: [
        {
          title: 'Portal Institucional e Sistema Central',
          description: 'Desenvolvimento integral do portal institucional e do sistema central de gestão e controle de alunos de intercâmbio. Estruturação de banco de dados para controle de perfis, matrículas e documentações. Construção de APIs REST para integração de serviços e implementação das lógicas de validação e regras de negócio no back-end. Entrega de uma solução funcional e otimizada para o uso diário da operação do instituto.',
          icon: <Server size={18} className="text-blue-400" />
        }
      ]
    }
  ];

  return (
    <section id="projetos" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
            <Briefcase size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Experiência & Projetos</h2>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line for mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:hidden" />
              
              <div className="md:grid md:grid-cols-12 gap-8 items-start">
                {/* Left column: Role & Company */}
                <div className="md:col-span-4 mb-8 md:mb-0 md:sticky md:top-24">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 absolute -left-5 md:relative md:left-0">
                      {exp.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  </div>
                  <div className="ml-0 md:ml-13">
                    <p className="text-blue-400 font-medium mb-1">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Right column: Projects */}
                <div className="md:col-span-8 space-y-6">
                  {exp.projects.map((project, pIndex) => (
                    <motion.div
                      key={pIndex}
                      whileHover={{ y: -2 }}
                      className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/30 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 p-2 rounded-lg bg-slate-900 group-hover:bg-blue-500/10 transition-colors">
                          {project.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-200 mb-2">{project.title}</h4>
                          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

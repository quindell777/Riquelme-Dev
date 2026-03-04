'use client';

import { motion } from 'motion/react';
import { Mail, BookOpen } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-5xl">
        <Link 
          href="/" 
          className="text-xl font-bold font-display tracking-tight text-slate-100 hover:text-blue-400 transition-colors"
        >
          R<span className="text-blue-500">MJ.</span>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-6">
          
          <button
            onClick={() => alert('O Blog está em desenvolvimento. Em breve novidades!')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 rounded-lg text-sm font-medium transition-all hover:scale-105 active:scale-95"
          >
            <BookOpen size={16} />
            Blog
          </button>
        </div>
      </div>
    </motion.header>
  );
}

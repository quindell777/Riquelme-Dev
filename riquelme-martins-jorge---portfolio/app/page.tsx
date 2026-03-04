import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}

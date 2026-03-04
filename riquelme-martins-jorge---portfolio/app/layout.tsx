import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Riquelme Martins Jorge | Portfolio',
  description: 'Desenvolvedor Pleno e Head de Desenvolvimento de Sistemas',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="bg-slate-950 text-slate-50 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

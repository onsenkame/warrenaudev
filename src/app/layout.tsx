import '@/styles/globals.css';
import { Rubik } from 'next/font/google';
import { cn } from '@/lib/utils'
import Providers from '@/components/Providers'
import Navbar from '@/components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
    lang='en'
      className={cn('bg-white text-slate-900 antialiased', rubik.className)}>
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/globals.css';
import { Rubik } from 'next/font/google';
import { cn } from '@/lib/utils'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
      <body>
        <main>
          <nav>
            <Link href="/">
            <Image
              src={"./turtle mono.svg"}
              alt='/'
              width='100'
              height='100'
            />
            Warren Au
            </Link>
            <Link href="/work">
              Projects
            </Link>
            <Link href="/fun">
              Travels
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/warren-au/">
              <FaLinkedinIn />
            </Link>
            <Link target="_blank" href="https://github.com/onsenkame">
              <FaGithub />
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
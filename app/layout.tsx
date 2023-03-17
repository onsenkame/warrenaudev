import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
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
            <Link href="/projects">
              Projects
            </Link>
            <Link href="/travels">
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
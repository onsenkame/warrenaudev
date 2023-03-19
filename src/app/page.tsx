import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warren Au Portfolio | Home',
  description: 'A place for Warren Au to share his projects and travels',
}


export default function HomePage() {
    return (
      <div className='relative h-screen flex items-center justify-center'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
            Hello, I'm Warren
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            Software Developer <br />Traveller <br />Teacher & <br />Student
            <div className='flex items-center justify-between max-w-[360px] m-auto py-4 gap-4'>
            <a
              href='https://www.linkedin.com/in/warren-au/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-light-gold p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/onsenkame'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-light-gold p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-light-gold p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-light-gold p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
          </Paragraph>

          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow fill'
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/masksq.jpg'
              alt='Warren Au'
            />
          </div>
        </div>
      </div>
    </div>
    );
  }
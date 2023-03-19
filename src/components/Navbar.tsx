import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'
import { buttonVariants } from './ui/Button'

const Navbar = async () => {

  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
        <div className='flex gap-4'>
        <Link href='/'>
        <Image
              className='align-left dark:invert'
              width={40}
              height={100}
              src='/onyumesenlogo.png'
              alt='onyumesen logo'
            />
        </Link>

        <Link href='/' className={buttonVariants({ variant: 'link' }) + 'align-right'}>
          Warren Au
        </Link>

        </div>
        
        <div className='flex gap-2'>
        <ThemeToggle />
          <Link
            href='/projects'
            className={buttonVariants({ variant: 'ghost' })}>
            Work
          </Link>
          <Link
            href='/fun'
            className={buttonVariants({ variant: 'ghost' })}>
            Fun
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
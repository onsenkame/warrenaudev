'use client'

import { ThemeProvider } from 'next-themes'
import type { FC, ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider themes={['light', 'dark', 'vacay']} attribute='class' defaultTheme='system' enableSystem>
    {children}
    </ThemeProvider>
  )
}

export default Providers
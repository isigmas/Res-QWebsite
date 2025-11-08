import type { Metadata } from 'next'
import HomeContent from './home_context' 

export const metadata: Metadata = {
  title: 'Res-Q', 
  description: 'Res-Q - Your Ultimate Off-Grid Emergency Locator Device',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Home() {
  return (
    <HomeContent /> 
  )
}

import HomeSection from "./components/modules/homepage";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome to SembarkShop ',
  description: 'Home page',
}
export default function Home() {
  return <HomeSection />
}

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Story from '@/components/Story'
import Tea from '@/components/Tea'
import Menu from '@/components/Menu'
import Atmosphere from '@/components/Atmosphere'
import Visit from '@/components/Visit'
import Footer from '@/components/Footer'
import { getTeas, getMenuItems } from '@/lib/data'

export default async function Home() {
  const [teas, menuItems] = await Promise.all([getTeas(), getMenuItems()])

  return (
    <main>
      <Navigation />
      <Hero />
      <Marquee />
      <Story />
      <Tea teas={teas} />
      <Menu items={menuItems} />
      <Atmosphere />
      <Visit />
      <Footer />
    </main>
  )
}

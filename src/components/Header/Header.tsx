import { Brands } from "./HeroSection/Brands"
import { HeroSection } from "./HeroSection/HeroSection"
import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="bg-bg-secondary py-10 ">
      <NavBar />
      <HeroSection />
      <Brands />
    </header>
  )
}

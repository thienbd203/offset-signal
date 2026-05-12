import { Navbar, Hero, Marquee, BrandIdentity, Services, Projects, Principles, CTA, Footer } from './components/Layout';

export default function App() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <BrandIdentity />
      <Services />
      <Projects />
      <Principles />
      <CTA />
      <Footer />
    </div>
  );
}


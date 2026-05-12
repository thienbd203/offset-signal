import { cn } from '@/src/lib/utils';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-primary bg-surface px-6 md:px-12">
      <div className="font-h3 text-primary tracking-tighter">■ OFFSET SIGNAL</div>
      
      <div className="hidden items-center gap-6 md:flex">
        <a className="bg-secondary-container px-2 font-label-sm text-primary transition-colors hover:bg-secondary-container" href="#">
          ■ SERVICES
        </a>
        <a className="px-2 font-label-sm text-on-surface-variant transition-colors hover:bg-secondary-container" href="#">
          ■ WORK
        </a>
        <a className="px-2 font-label-sm text-on-surface-variant transition-colors hover:bg-secondary-container" href="#">
          ■ STUDIO
        </a>
        <a className="px-2 font-label-sm text-on-surface-variant transition-colors hover:bg-secondary-container" href="#">
          ■ VALUES
        </a>
      </div>

      <button className="border border-primary bg-surface px-6 py-1 font-label-sm text-primary transition-all hover:bg-secondary-container active:bg-primary active:text-on-primary">
        ■ START PROJECT
      </button>
    </nav>
  );
}

export function Hero() {
  return (
    <header className="grid min-h-[calc(100vh-64px)] grid-cols-1 border-b border-primary md:grid-cols-[1fr_1fr_64px]">
      <div className="flex flex-col justify-center p-12 md:border-r md:border-primary md:p-20">
        <span className="mb-6 inline-block font-label-sm">■ AI RESEARCH WORKSPACE</span>
        <h1 className="font-h1 mb-12 italic">Design systems for human-machine work.</h1>
        <p className="font-body-lg mb-20 max-w-lg">
          We craft technical schemas and editorial brand experiences for the next generation of artificial intelligence startups and legacy heavy-industry conglomerates.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="border border-primary bg-primary px-12 py-3 font-label-sm text-on-primary transition-all hover:bg-secondary-container hover:text-primary">
            ■ OUR CAPABILITIES
          </button>
          <button className="border border-primary bg-surface px-12 py-3 font-label-sm text-primary transition-all hover:bg-secondary-container">
            VIEW PORTFOLIO ↗
          </button>
        </div>
      </div>
      
      <div className="relative flex items-center justify-center overflow-hidden border-t border-primary bg-secondary-container md:border-r md:border-t-0 md:border-primary">
        <img 
          alt="Hero Illustration" 
          className="h-full w-full object-cover" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uhgN-_2zIpAdOsiuJIIFnh1_6EalNRFDnXcVSXhIxnWUoAnSnBKwxW98fvG_XwkyphzoGt49xDWn0xoybgi1_oYzVL0iFUxIMXQz8TBEFY425qrRJe5DiNpBmvghKLNZHoGM0e79IX1d1MQqxecmh2Ro8QILDWfOxWOgAhAEGDpLEUcphOphrI5uWhdllefAD9c7nZELJNSkyXFmKofk8OHAel5Hry7SMvOJBYYpupL3Fw-NLPm0m5tZnM" 
        />
      </div>

      <div className="hidden flex-col items-center justify-center gap-20 bg-surface py-12 md:flex">
        <span className="rotate-90 whitespace-nowrap font-label-sm">01 HUMAN FIRST</span>
        <span className="rotate-90 whitespace-nowrap font-label-sm">02 MACHINE READY</span>
        <span className="rotate-90 whitespace-nowrap font-label-sm">03 SIGNAL ORIENTED</span>
      </div>
    </header>
  );
}

export function Marquee() {
  const items = [
    "EDITORIAL DESIGN", "■", "BRAND SYSTEMS", "■", "AI INTERFACES", "■", 
    "HUMAN-MACHINE PRODUCTS", "■", "DESIGN INTELLIGENCE", "■"
  ];
  
  return (
    <section className="overflow-hidden border-b border-primary bg-primary py-3 whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className={cn(
              "mx-3 font-label-sm",
              item === "■" ? "text-secondary-container" : "text-on-primary"
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export function BrandIdentity() {
  return (
    <section className="grid grid-cols-1 border-b border-primary md:grid-cols-12">
      <div className="bg-surface-container-low p-12 md:col-span-4 md:border-r md:border-primary">
        <h2 className="font-h2 italic leading-tight">
          Editorial.<br />Bold.<br />Intelligent.<br />Graphic.<br />Human.
        </h2>
      </div>
      
      <div className="flex flex-col justify-between p-12 md:col-span-4 md:border-r md:border-primary">
        <div>
          <span className="mb-12 block font-label-sm">■ PALETTE.SYSTEM</span>
          <div className="grid grid-cols-2 gap-[1px] border border-primary bg-primary">
            <div className="flex aspect-square items-end bg-[#F6F2EA] p-1"><span className="font-label-sm text-[10px]">#F6F2EA</span></div>
            <div className="flex aspect-square items-end bg-[#0D0D0D] p-1"><span className="font-label-sm text-[10px] text-white">#0D0D0D</span></div>
            <div className="flex aspect-square items-end bg-[#EBE949] p-1"><span className="font-label-sm text-[10px]">#EBE949</span></div>
            <div className="flex aspect-square items-end bg-[#B6CACE] p-1"><span className="font-label-sm text-[10px]">#B6CACE</span></div>
          </div>
        </div>
        <p className="mt-12 font-label-sm">VISUAL DNA STABILIZATION ACTIVE</p>
      </div>

      <div className="flex flex-col gap-12 p-12 md:col-span-4">
        <div>
          <span className="mb-1 block font-label-sm underline decoration-1">Who We Are</span>
          <p className="font-body-md text-on-surface-variant">An autonomous design collective focused on structural clarity and brutalist efficiency.</p>
        </div>
        <div>
          <span className="mb-1 block font-label-sm underline decoration-1">What We Do</span>
          <p className="font-body-md text-on-surface-variant">We translate complex algorithmic logic into intuitive, print-inspired digital interfaces.</p>
        </div>
        <div>
          <span className="mb-1 block font-label-sm underline decoration-1">Our Approach</span>
          <p className="font-body-md text-on-surface-variant">Rigid grids, high contrast, and zero fluff. Every pixel must justify its existence.</p>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    { id: "01", category: "BRANDING", title: "Identity Systems", description: "Comprehensive brand books, logo marks, and visual frameworks for high-growth tech." },
    { id: "02", category: "INTERFACE", title: "Technical UI", description: "Complex dashboard design and software interfaces built on precision grid systems." },
    { id: "03", category: "PRODUCT", title: "UX Mapping", description: "Flow optimization and interaction design that bridges the human-AI gap." },
    { id: "04", category: "STRATEGY", title: "Design Ops", description: "Scaling design systems and workflow automation for technical teams." },
  ];

  return (
    <section className="border-b border-primary">
      <div className="grid grid-cols-1 border-b border-primary md:grid-cols-2">
        <div className="p-12 md:border-r md:border-primary md:p-20">
          <h2 className="font-h1 italic">We design clarity from complexity.</h2>
        </div>
        <div className="flex items-end p-12 md:p-20">
          <p className="font-body-lg">
            Our service matrix covers the entire lifecycle of technical design, from initial brand architecture to final machine-compatible implementation.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={cn(
              "group p-12 transition-colors hover:bg-secondary-container",
              index !== services.length - 1 && "border-r border-primary",
              index < 2 ? "border-b border-primary sm:border-b" : "border-b border-primary lg:border-b-0",
              index === 2 && "border-b border-primary sm:border-b-0"
            )}
          >
            <span className="mb-6 block font-label-sm">{service.id} {service.category}</span>
            <h3 className="font-h3 mb-6">{service.title}</h3>
            <p className="font-body-md text-on-surface-variant">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Aether AI",
      category: "BRAND ARCHITECTURE / 2024",
      bg: "bg-secondary-container",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOZanql9_jCM5N0SXV45K_MRtKxTLQYkyMsFCPdu7m8ndGFKyHoHc5dh8-vX97bs9QIJUMHTj7-eeShin5K9L8X_mrtfglGC190QFnaEyf2jDxl2uxjQZYrd_AzVcs6FCExNsW2rH1VkFlQTZp055MTg-gOT122UEKsqsvWPRJshzRifvq4PzVOGSKrzUpVAEsuYgMydk-4Md7xSyZK4GQPlPdt_uSDCTP_yofyF1IVklJmvRlMjcxtHSEPZjgQiXTctSk8owCPVfj",
      textColor: "text-primary"
    },
    {
      title: "Signal Flow",
      category: "INTERFACE DESIGN / 2024",
      bg: "bg-primary text-on-primary",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWtTVLgTReioG3VfIi0-udE16mWOP11e22oSPnvPFylG5sNZh0IbfIo38AmcIx3hQ1YoP7v8gqhvquUtuTTU3xhKVdpWYGSUgxjKI-EtenWkK-XLUJnNNO2nKlwDeBLelCMASpRPH9jB7NeG54-3MdKd-ZZVL_lVM0tmi7nHxyZi-L7IF40mZFi2X88ytfQRbekUceigKu9ki_1K61711XKcP6IMwYfanQpnASan3aGbYqeDcZvgDPck26W0ylgM9QauGya5DQDhmJ",
      textColor: "text-on-primary",
      imgClass: "grayscale"
    },
    {
      title: "Kinesis OS",
      category: "PRODUCT SYSTEM / 2023",
      bg: "bg-secondary-fixed-dim",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRtRySD2viieFRZ72QKmIDw0wjuDYygJ0R1sYu2zJZxPDuO2IK0lKy11wRzTabtOmdUYPWb5PAdXLYGKT5eyt-VLACZqQ9WOMOSab244dxAYaXE9ziKITbAKryPZowR5IF2DQcNkFkdSuhKGJfm9i_9ydnMbQAkyifPOOYXSKWhCNkLiBZQ2FChrfj0JwUt3QNzWppzoLwhBrQZsYgJ2CZK9TJ5f2LxzvwV5Lk_Y4pznOU1elKh3JU1Y-buDcjq_C94AKIX4CwZ_sw",
      textColor: "text-primary"
    }
  ];

  return (
    <section className="border-b border-primary">
      <div className="flex items-end justify-between border-b border-primary p-12">
        <span className="font-label-sm">■ SELECTED WORK</span>
        <a className="font-label-sm hover:underline" href="#">VIEW ALL PROJECTS ↗</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((project, i) => (
          <div 
            key={project.title} 
            className={cn(
              "flex min-h-[500px] flex-col justify-between p-12",
              project.bg,
              i !== projects.length - 1 && "border-b border-primary md:border-b-0 md:border-r"
            )}
          >
            <div>
              <h3 className={cn("font-h3 mb-1 italic", project.textColor)}>{project.title}</h3>
              <p className={cn("font-label-sm", i === 1 ? "opacity-60" : "")}>{project.category}</p>
            </div>
            <div className={cn(
              "relative aspect-video w-full border overflow-hidden",
              i === 1 ? "border-surface" : "border-primary"
            )}>
              <img 
                alt={project.title} 
                className={cn("h-full w-full object-cover", project.imgClass)} 
                src={project.img} 
              />
            </div>
            <a className={cn("mt-6 inline-block font-label-sm underline decoration-1", project.textColor)} href="#">Open Project ↗</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section className="grid grid-cols-1 border-b border-primary md:grid-cols-2">
      <div className="p-12 md:border-r md:border-primary md:p-20">
        <h3 className="mb-12 font-label-sm">■ PRINCIPLES: DO</h3>
        <ul className="flex flex-col gap-6">
          <li className="font-h3 flex items-center gap-3 italic">
            <span className="text-primary">✓</span> High Contrast
          </li>
          <li className="font-h3 flex items-center gap-3 italic">
            <span className="text-primary">✓</span> Rigid Grid
          </li>
          <li className="font-h3 flex items-center gap-3 italic">
            <span className="text-primary">✓</span> Editorial Typography
          </li>
        </ul>
      </div>
      <div className="bg-surface-container p-12 md:p-20">
        <h3 className="mb-12 font-label-sm">■ PRINCIPLES: DON'T</h3>
        <ul className="flex flex-col gap-6 opacity-40">
          <li className="font-h3 flex items-center gap-3 italic">
            <span className="">✕</span> No Soft Gradients
          </li>
          <li className="font-h3 flex items-center gap-3 italic">
            <span className="">✕</span> No Rounded Corners
          </li>
          <li className="font-h3 flex items-center gap-3 italic">
            <span className="">✕</span> No Visual Clutter
          </li>
        </ul>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="grid h-auto grid-cols-1 border-b border-primary md:h-80 md:grid-cols-12">
      <div className="flex flex-col justify-between p-12 md:col-span-3 md:border-r md:border-primary">
        <span className="font-label-sm">■ START A PROJECT</span>
        <p className="font-body-md">We are currently accepting new collaborative inquiries for Q3 2024.</p>
      </div>
      <div className="flex flex-col justify-center p-12 md:col-span-6 md:border-r md:border-primary">
        <h2 className="font-h2 mb-6 italic">Let's build what's next.</h2>
        <div className="flex flex-wrap gap-6">
          <a className="font-label-sm underline decoration-1" href="mailto:hello@offsetsignal.com">HELLO@OFFSETSIGNAL.COM</a>
          <a className="font-label-sm underline decoration-1" href="#">TWITTER / X ↗</a>
          <a className="font-label-sm underline decoration-1" href="#">ARE.NA ↗</a>
        </div>
      </div>
      <div className="group relative flex cursor-pointer items-center justify-center bg-secondary-container p-12 md:col-span-3">
        <div className="flex h-24 w-24 items-center justify-center bg-primary transition-transform group-hover:scale-110">
          <span className="text-5xl text-surface">↗</span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="grid w-full grid-cols-1 gap-px border-t border-primary bg-surface p-12 md:grid-cols-12">
      <div className="mb-12 md:col-span-6 md:mb-0">
        <div className="font-h2 font-bold text-primary">■ OFFSET SIGNAL</div>
        <p className="mt-6 font-label-sm">STAY RIGID. STAY SIGNALED.</p>
      </div>
      <div className="flex flex-col gap-3 md:col-span-3">
        <a className="font-label-sm text-on-surface-variant underline decoration-1 hover:no-underline" href="#">INSTAGRAM ↗</a>
        <a className="font-label-sm text-on-surface-variant underline decoration-1 hover:no-underline" href="#">ARE.NA ↗</a>
        <a className="font-label-sm text-on-surface-variant underline decoration-1 hover:no-underline" href="#">LINKEDIN ↗</a>
        <a className="font-label-sm text-on-surface-variant underline decoration-1 hover:no-underline" href="#">PRIVACY</a>
      </div>
      <div className="flex flex-col justify-between items-end md:col-span-3">
        <div className="bg-primary p-1 font-label-sm text-[10px] text-on-primary">VER: 4.0.1_STABLE</div>
        <p className="mt-12 text-right font-label-sm">© 2024 OFFSET SIGNAL ■ BUILT FOR THE SIGNAL</p>
      </div>
    </footer>
  );
}

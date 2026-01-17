import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CircleDot, Watch, Waves, Disc3, Menu, ArrowDown, Instagram, MessageCircle } from 'lucide-react';

export default function OmegaLanding() {
  const [showMobileStaticBg, setShowMobileStaticBg] = useState(false);
  const [showPcStaticBg, setShowPcStaticBg] = useState(false);
  const mobileVideoRef = useRef(null);
  const pcVideoRef = useRef(null);
  const mobileStaticBgRef = useRef(null);
  const pcStaticBgRef = useRef(null);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    // Cargar GSAP y ScrollToPlugin desde CDN
    const loadScripts = async () => {
      // Cargar GSAP
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      gsapScript.async = true;
      document.body.appendChild(gsapScript);

      await new Promise((resolve) => {
        gsapScript.onload = resolve;
      });

      // Cargar ScrollToPlugin
      const scrollToScript = document.createElement('script');
      scrollToScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js';
      scrollToScript.async = true;
      document.body.appendChild(scrollToScript);

      await new Promise((resolve) => {
        scrollToScript.onload = resolve;
      });

      // Timer para móvil - 7 segundos
      setTimeout(() => {
        if (window.gsap && mobileVideoRef.current) {
          // Fade out del video
          window.gsap.to(mobileVideoRef.current, {
            opacity: 0,
            duration: 1.8,
            ease: 'power2.inOut',
            onStart: () => {
              setShowMobileStaticBg(true);
            }
          });

          // Fade in del fondo estático con delay
          setTimeout(() => {
            if (mobileStaticBgRef.current) {
              window.gsap.fromTo(mobileStaticBgRef.current,
                { opacity: 0, scale: 1.05 },
                { 
                  opacity: 1, 
                  scale: 1,
                  duration: 2,
                  ease: 'power2.out'
                }
              );
            }
          }, 500);
        }
      }, 7000);

      // Timer para PC - 7 segundos
      setTimeout(() => {
        if (window.gsap && pcVideoRef.current) {
          // Fade out del video
          window.gsap.to(pcVideoRef.current, {
            opacity: 0,
            duration: 1.8,
            ease: 'power2.inOut',
            onStart: () => {
              setShowPcStaticBg(true);
            }
          });

          // Fade in del fondo estático con delay
          setTimeout(() => {
            if (pcStaticBgRef.current) {
              window.gsap.fromTo(pcStaticBgRef.current,
                { opacity: 0, scale: 1.05 },
                { 
                  opacity: 1, 
                  scale: 1,
                  duration: 2,
                  ease: 'power2.out'
                }
              );
            }
          }, 500);
        }
      }, 7000);
    };

    loadScripts();
  }, []);

  const handleMenuClick = (e) => {
    e.preventDefault();
    const button = e.currentTarget;
    
    // Vibración
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Animación de color con GSAP
    if (window.gsap) {
      window.gsap.to(button, {
        color: '#e4002b',
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
  };

  const handleInactiveLinkClick = (e) => {
    e.preventDefault();
    const link = e.currentTarget;
    
    // Vibración
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Animación de color con GSAP
    if (window.gsap) {
      window.gsap.to(link, {
        color: '#e4002b',
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
  };

  const handleReadMoreClick = (e) => {
    e.preventDefault();
    if (window.gsap && nextSectionRef.current) {
      window.gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: nextSectionRef.current, offsetY: 0 },
        ease: 'power2.inOut'
      });
    }
  };

  const handleDiscoverClick = (e) => {
    e.preventDefault();
    if (window.gsap && nextSectionRef.current) {
      window.gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: nextSectionRef.current, offsetY: 0 },
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      <style>{`
        :root {
          --brand-red: #e4002b;
        }
      `}</style>

      {/* HERO SECTION */}
      <div className="h-screen w-full relative overflow-hidden flex flex-col">
        
        {/* FONDO MÓVIL */}
        <div className="lg:hidden">
          {/* Video animado móvil */}
          <div 
            ref={mobileVideoRef}
            className="absolute inset-0 z-0 transition-opacity"
            style={{ 
              backgroundImage: 'url(/img/reloj-mobil-animado.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 1
            }}
          />
          
          {/* Imagen estática móvil */}
          {showMobileStaticBg && (
            <div 
              ref={mobileStaticBgRef}
              className="absolute inset-0 z-0"
              style={{ 
                backgroundImage: 'url(/img/fondo-mobil.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0
              }}
            />
          )}
        </div>

        {/* FONDO PC */}
        <div className="hidden lg:block">
          {/* Video animado PC */}
          <div 
            ref={pcVideoRef}
            className="absolute inset-0 z-0 transition-opacity"
            style={{ 
              backgroundImage: 'url(/img/reloj-pc-animado.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 1
            }}
          />
          
          {/* Imagen estática PC */}
          {showPcStaticBg && (
            <div 
              ref={pcStaticBgRef}
              className="absolute inset-0 z-0"
              style={{ 
                backgroundImage: 'url(/img/fondo.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0
              }}
            />
          )}
        </div>

        {/* DISEÑO PC */}
        <div className="hidden lg:contents">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="text-[20vw] font-bold text-white/[0.07] uppercase tracking-tighter leading-none select-none"></span>
          </div>

          <div className="absolute left-0 bottom-10 flex-col items-center gap-10 z-50 w-20 flex">
            <span 
              onClick={handleInactiveLinkClick}
              className="rotate-[-90deg] text-[10px] font-bold tracking-[0.4em] text-gray-500 cursor-pointer hover:text-white transition-colors"
            >
              PL
            </span>
            <div className="flex flex-col items-center gap-2">
              <span className="rotate-[-90deg] text-[10px] font-bold tracking-[0.4em] text-white pb-1" style={{ borderBottom: '2px solid var(--brand-red)' }}>DE</span>
            </div>
            <div className="w-[1px] h-24 bg-white/10 mt-4"></div>
          </div>

          <header className="relative z-50 flex justify-between items-start">
            <div className="w-15 h-14 flex items-center justify-center" style={{ backgroundColor: 'var(--brand-red)' }}>
              <span className="text-4xl font-serif">Ω</span>
            </div>
            
            <nav className="flex gap-12 p-12 text-[11px] font-bold tracking-[0.3em] uppercase text-gray-200">
              <a href="#" onClick={handleInactiveLinkClick} className="hover:text-white transition-all">Collection</a>
              <a href="#" onClick={handleInactiveLinkClick} className="hover:text-white transition-all">Heritage</a>
              <a href="#" onClick={handleInactiveLinkClick} className="hover:text-white transition-all">Apollo</a>
              <a href="#" onClick={handleInactiveLinkClick} className="hover:text-white transition-all">Production</a>
              <button onClick={handleMenuClick} className="flex flex-col gap-1.5 ml-4 justify-center items-end group transition-colors">
                <div className="w-6 h-[2px] bg-white transition-colors" style={{ '--hover-color': 'var(--brand-red)' }}></div>
                <div className="w-4 h-[2px] bg-white transition-colors" style={{ '--hover-color': 'var(--brand-red)' }}></div>
              </button>
            </nav>
          </header>

          <main className="flex-1 flex items-center px-24 relative z-10">
            <div className="grid grid-cols-12 w-full items-center gap-0">
              <div className="col-span-8 text-left mb-30">
                <span className="text-[12px] tracking-[0.7em] text-gray-400 uppercase font-bold mb-4 block">
                  Speedmaster
                </span>
                <h1 className="text-7xl font-bold leading-[0.8] mb-8 tracking-tighter">
                  Moonwatch
                </h1>
                <p className="text-gray-400 text-[13px] leading-relaxed max-w-[340px] mb-10">
                  The Apollo 8 astronauts were the first people to see the dark side of the moon with their own eyes. 
                  The black ceramic Co-Axial Speedmaster salutes their pioneering spirit and pays homage to the 
                  Speedmaster Professional chronographs worn by every Apollo astronaut.
                </p>
                <button 
                  onClick={handleReadMoreClick}
                  className="px-6 py-4 flex items-center gap-6 text-[9px] font-bold tracking-[0.2em] uppercase cursor-pointer transition-all"
                  style={{ backgroundColor: 'var(--brand-red)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c4001b'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-red)'}
                >
                  Read More
                  <ArrowRight size={14} />
                </button>
              </div>
              <div className="col-span-4 flex justify-center items-center"></div>
            </div>
          </main>

          <div className="absolute bottom-[0px] right-10 flex flex-col items-end z-40 gap-10">
            <div className="text-right mb-10">
              <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase block mb-1 font-bold">Price</span>
              <span className="text-5xl font-light tracking-tighter">9900$</span>
            </div>
            
            {/* Botón Contact - WhatsApp */}
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-28 h-40 flex flex-col justify-center items-center group cursor-pointer shadow-2xl transition-all"
              style={{ backgroundColor: 'var(--brand-red)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c4001b'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-red)'}
            >
              <MessageCircle size={24} className="mb-2" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Contact</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3">Us</span>
              <div className="w-12 h-[1px] bg-white/30 my-2"></div>
              <span className="text-[9px] opacity-40 font-bold">WhatsApp</span>
            </a>
          </div>

          <div className="absolute bottom-0 right-0 flex justify-end items-end pb-0 z-50">
            <div className="bg-white/3 backdrop-blur-xl border border-white/5 py-4 px-4 flex gap-10">
              <div className="flex items-center gap-5">
                <CircleDot className="text-gray-500" size={32} strokeWidth={1} />
                <div className="text-left">
                  <p className="text-sm font-bold tracking-tight">Shaphire</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Glass material</p>
                </div>
              </div>
              <div className="flex items-center gap-5 border-l border-white/10 pl-16">
                <Watch className="text-gray-500" size={32} strokeWidth={1} />
                <div className="text-left">
                  <p className="text-sm font-bold tracking-tight">Ceramic</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Case material</p>
                </div>
              </div>
              <div className="flex items-center gap-5 border-l border-white/10 pl-16">
                <Waves className="text-gray-500" size={32} strokeWidth={1} />
                <div className="text-left">
                  <p className="text-sm font-bold tracking-tight">5 bar</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Water resistance</p>
                </div>
              </div>
              <div className="flex items-center gap-5 border-l border-white/10 pl-16">
                <Disc3 className="text-gray-500" size={32} strokeWidth={1} />
                <div className="text-left">
                  <p className="text-sm font-bold tracking-tight">Caliber 9300</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Automatic movement</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DISEÑO MÓVIL */}
        <div className="lg:hidden flex flex-col h-full relative">
          {/* Overlay oscuro sutil */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0"></div>

          {/* Header móvil mejorado */}
          <div className="relative z-50 flex justify-between items-center p-6">
            <div className="flex items-center gap-3">
              <div className="text-4xl" style={{ fontFamily: 'Didot, serif' }}>Ω</div>
              <div className="flex flex-col">
                <span className="text-sm font-light tracking-[0.2em]" style={{ fontFamily: 'Cinzel, serif' }}>OMEGA</span>
                <span className="text-[7px] tracking-[0.3em] text-gray-500">GENÈVE</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white transition-colors"
                style={{ '--hover-color': 'var(--brand-red)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-red)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                <Instagram size={20} />
              </a>
              <button onClick={handleMenuClick} className="text-white transition-colors">
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Contenido fullscreen */}
          <div className="flex-1 flex flex-col justify-end p-6 relative z-10">
            {/* Título gigante */}
            <div className="mb-auto pt-20">
              <h1 className="text-7xl font-bold leading-[0.85] tracking-tighter mb-3">
                Moon<br/>watch
              </h1>
              <div className="w-20 h-[2px]" style={{ backgroundColor: 'var(--brand-red)' }}></div>
            </div>

            {/* Info inferior */}
            <div className="space-y-6">
              {/* Precio destacado */}
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[8px] tracking-[0.5em] text-gray-500 uppercase block mb-1">
                    Speedmaster Collection
                  </span>
                  <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase">
                    Limited Edition
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-light tracking-tight">$9900</div>
                  <div className="text-xs text-gray-500">USD</div>
                </div>
              </div>

              {/* CTA */}
              <button 
                onClick={handleDiscoverClick}
                className="w-full py-5 text-[10px] font-bold tracking-[0.3em] uppercase flex items-center justify-between px-6"
                style={{ backgroundColor: 'var(--brand-red)' }}
              >
                <span>Discover More</span>
                <ArrowRight size={16} />
              </button>

              {/* Swipe hint */}
              <div className="flex items-center justify-center gap-3 py-2 opacity-40">
                <ArrowDown size={14} className="animate-bounce" />
                <span className="text-[8px] tracking-[0.3em] uppercase">Swipe Up</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEXT SECTION - Para testing del scroll */}
      <div ref={nextSectionRef} className="min-h-screen bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-24 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header de sección */}
            <div className="mb-16">
              <span className="text-[10px] tracking-[0.6em] text-gray-500 uppercase font-bold block mb-4">
                Heritage
              </span>
              <h2 className="text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tighter mb-6">
                A Legacy of<br/>Precision
              </h2>
              <div className="w-24 h-[2px]" style={{ backgroundColor: 'var(--brand-red)' }}></div>
            </div>

            {/* Contenido */}
            <div className="space-y-8 text-gray-400">
              <p className="text-base lg:text-lg leading-relaxed">
                Since 1848, OMEGA has been at the forefront of watchmaking excellence. The Speedmaster 
                collection represents our unwavering commitment to precision, innovation, and timeless design.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed">
                Chosen by NASA for all manned space missions, the Speedmaster became the first watch worn 
                on the Moon in 1969. This historic achievement earned it the legendary title of "Moonwatch."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                <div className="pl-6" style={{ borderLeft: '2px solid var(--brand-red)' }}>
                  <h3 className="text-3xl font-bold text-white mb-2">1969</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500">Moon Landing</p>
                </div>
                <div className="pl-6" style={{ borderLeft: '2px solid var(--brand-red)' }}>
                  <h3 className="text-3xl font-bold text-white mb-2">6</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500">Moon Missions</p>
                </div>
                <div className="pl-6" style={{ borderLeft: '2px solid var(--brand-red)' }}>
                  <h3 className="text-3xl font-bold text-white mb-2">∞</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500">Legacy</p>
                </div>
              </div>

              <div className="pt-12">
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all flex items-center gap-4">
                  Explore Collection
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
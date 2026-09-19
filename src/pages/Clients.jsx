import { useState, useEffect, useCallback } from 'react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { clientsData } from '../data/clients';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollLock } from '../hooks/useScrollLock';

export const Clients = () => {
  const [activeClient, setActiveClient] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useScrollLock(Boolean(activeClient));

  const handleOpenModal = (client) => {
    setActiveClient(client);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setActiveClient(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = useCallback(() => {
    if (!activeClient || !activeClient.screenshots?.length) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? activeClient.screenshots.length - 1 : prev - 1
    );
  }, [activeClient]);

  const handleNextImage = useCallback(() => {
    if (!activeClient || !activeClient.screenshots?.length) return;
    setCurrentImageIndex((prev) => 
      prev === activeClient.screenshots.length - 1 ? 0 : prev + 1
    );
  }, [activeClient]);

  // Reliable Auto-Slideshow: advances image every 3 seconds while modal is open
  useEffect(() => {
    if (!activeClient || !activeClient.screenshots || activeClient.screenshots.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const total = activeClient.screenshots.length;
        return prev + 1 >= total ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [activeClient]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeClient) return;
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeClient, handleNextImage, handlePrevImage]);

  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading 
          badge="Track Record"
          title="Enterprise Partnerships"
          subtitle="A selection of businesses leveraging our software architecture, digital products, and e-commerce platforms to scale operations."
        />

        {/* Grid with Visible Background Screenshot Cards and Color-Synced Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {clientsData.map((client) => {
            const bgImage = client.screenshots && client.screenshots.length > 0 
              ? client.screenshots[0] 
              : null;

            return (
              <div 
                key={client.id}
                onClick={() => handleOpenModal(client)}
                className="group relative p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-300/60 hover:border-brand-purple/70 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-80 cursor-pointer overflow-hidden"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenModal(client);
                  }
                }}
              >
                {/* Background Screenshot Image (Visible and Vibrant) */}
                {bgImage && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={bgImage} 
                      alt="" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  </div>
                )}

                {/* Color-Synced Smooth Dark Gradient Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none" />

                {/* Top Row: Logo, Badges & Action Arrow */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-extrabold block drop-shadow-md">
                        {client.category}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-300 font-semibold drop-shadow-sm">
                        View Showcase ({client.screenshots?.length || 0})
                      </span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Row with Color-Synced Glassmorphism Box */}
                <div className="relative z-10 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors drop-shadow-md">
                    {client.name}
                  </h3>
                  <div className="mt-2.5 pt-2.5 border-t border-white/20 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-300 font-medium drop-shadow-sm">Outcome Delivered:</span>
                    <span className="font-bold text-brand-accent tracking-wide drop-shadow-sm">{client.impact}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Showcase Lightbox Modal */}
      {activeClient && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeClient.name} Showcase`}
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-brand-dark/85 backdrop-blur-md transition-opacity" 
            onClick={handleCloseModal} 
          />

          {/* Modal Card with max viewport boundaries and custom scrollbar */}
          <div className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-brand-dark border border-zinc-800 rounded-3xl shadow-2xl flex flex-col text-white overflow-hidden">
            
            {/* Modal Header (pinned to top) */}
            <div className="flex-shrink-0 flex items-center justify-between px-5 sm:px-6 py-4 border-b border-zinc-800 bg-brand-dark">
              <div className="flex items-center gap-3 min-w-0">
                <img 
                  src={activeClient.logo} 
                  alt="" 
                  className="w-8 h-8 rounded-lg object-contain bg-white p-1 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-base font-bold tracking-tight text-white truncate">
                    {activeClient.name}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400 truncate">
                    {activeClient.category} • {activeClient.impact}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                <span className="text-xs font-mono text-brand-accent font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 whitespace-nowrap">
                  {currentImageIndex + 1} / {activeClient.screenshots.length}
                </span>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Center Body with Styled Scrollbar */}
            <div className="flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#3f3f46_#18181b] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-zinc-900 [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
              
              {/* Slider Viewport */}
              <div className="relative w-full h-[48vh] sm:h-[56vh] lg:h-[62vh] bg-black flex items-center justify-center overflow-hidden">
                <img 
                  key={currentImageIndex}
                  src={activeClient.screenshots[currentImageIndex]} 
                  alt={`${activeClient.name} preview slide ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain select-none p-2 sm:p-4 transition-opacity duration-300"
                />

                {/* Prev / Next Arrows */}
                <button
                  onClick={handlePrevImage}
                  aria-label="Previous screenshot"
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-brand-accent text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition z-10"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={handleNextImage}
                  aria-label="Next screenshot"
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-brand-accent text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition z-10"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

            </div>

            {/* Thumbnail Navigation Bar (pinned to bottom) */}
            <div className="flex-shrink-0 px-4 sm:px-6 py-3.5 bg-zinc-900/95 border-t border-zinc-800 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {activeClient.screenshots.map((shot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-16 h-10 sm:w-20 sm:h-12 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                    currentImageIndex === index 
                      ? 'border-brand-accent scale-105 shadow-md ring-1 ring-brand-accent/50' 
                      : 'border-transparent opacity-50 hover:opacity-90'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <img 
                    src={shot} 
                    alt="" 
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
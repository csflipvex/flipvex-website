import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { clientsData } from '../../data/clients';
import { ArrowUpRight, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollLock } from '../../hooks/useScrollLock';

export const HomeClientsSection = () => {
  const [activeClient, setActiveClient] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock body scroll when modal is active
  useScrollLock(Boolean(activeClient));

  // Slice first 3 clients for the home preview
  const previewClients = clientsData.slice(0, 3);
  const hasMore = clientsData.length > 3;

  const handleOpenModal = (client) => {
    setActiveClient(client);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setActiveClient(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = useCallback(() => {
    if (!activeClient) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? activeClient.screenshots.length - 1 : prev - 1
    );
  }, [activeClient]);

  const handleNextImage = useCallback(() => {
    if (!activeClient) return;
    setCurrentImageIndex((prev) => 
      prev === activeClient.screenshots.length - 1 ? 0 : prev + 1
    );
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
    <section className="w-full py-16 md:py-24 bg-zinc-50 border-b border-zinc-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <SectionHeading 
            badge="Trusted Partnerships"
            title="Our Work & Projects"
            subtitle="Explore high-volume e-commerce storefronts, ERP engines, and digital applications built for our enterprise partners."
            className="mb-0 max-w-2xl"
          />

          {hasMore && (
            <Link
              to="/our-clients"
              className="hidden md:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-brand-purple hover:text-brand-accent transition py-2 px-4 rounded-full border border-zinc-300 hover:border-brand-accent bg-white shadow-xs"
            >
              <span>See More ({clientsData.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* 3-Column Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewClients.map((client) => (
            <div 
              key={client.id}
              onClick={() => handleOpenModal(client)}
              className="group p-8 rounded-3xl bg-white border border-zinc-200 hover:border-brand-purple/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-72 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenModal(client);
                }
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200/80 p-1.5 flex items-center justify-center overflow-hidden shadow-xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="w-full h-full object-contain rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block">
                      {client.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      View Showcase ({client.screenshots?.length || 0})
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-brand-purple group-hover:border-brand-purple/40 transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-dark tracking-tight group-hover:text-brand-purple transition-colors">
                  {client.name}
                </h3>
                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500">Outcome Delivered:</span>
                  <span className="font-bold text-brand-purple">{client.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile See More Button */}
        {hasMore && (
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/our-clients"
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full bg-brand-dark text-white font-semibold text-xs uppercase tracking-wider hover:bg-zinc-800 transition"
            >
              <span>See All Clients ({clientsData.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </Container>

      {/* Modal Viewport */}
      {activeClient && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeClient.name} Showcase`}
        >
          <div 
            className="fixed inset-0 bg-brand-dark/85 backdrop-blur-md transition-opacity" 
            onClick={handleCloseModal} 
          />

          <div className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-brand-dark border border-zinc-800 rounded-3xl shadow-2xl flex flex-col text-white overflow-hidden">
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

            <div className="flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#3f3f46_#18181b]">
              <div className="relative w-full h-[48vh] sm:h-[56vh] lg:h-[62vh] bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src={activeClient.screenshots[currentImageIndex]} 
                  alt={`${activeClient.name} preview slide ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain select-none p-2 sm:p-4"
                />

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

            <div className="flex-shrink-0 px-4 sm:px-6 py-3.5 bg-zinc-900/95 border-t border-zinc-800 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto [scrollbar-width:none]">
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
    </section>
  );
};
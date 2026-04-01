import { motion } from 'framer-motion';

export default function Galeri() {
  // Daftar foto dan video
  const fotoList = [
    { id: 1, src: "2.jpeg", title: "Design Topologi Jaringan" },
    { id: 2, src: "1.jpeg", title: "Boarding Pass Lion Air" },
    { id: 3, src: "6.jpeg", title: "Kampus AMIK" },
    { id: 4, src: "3.jpeg", title: "4G Team" },
    { id: 5, src: "4.mp4", title: "Selebrasi Paskah 2025" },
    { id: 6, src: "5.jpeg", title: "Sosialisasi di SD Warukapas Minut" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 relative overflow-hidden">
      <div className="emerald-spotlight"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Galeri */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Digital <span className="text-em-accent">Gallery</span>
          </h1>
          <p className="text-em-muted mt-2 font-medium">Dokumentasi perjalanan dan aktivitas.</p>
        </motion.div>

        {/* Grid Foto & Video */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotoList.map((foto, index) => (
            <motion.div
              key={foto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
            >
              {/* Overlay Glow saat Hover */}
              <div className="absolute inset-0 bg-em-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              
              {/* Gambar atau Video */}
              <div className="aspect-video overflow-hidden">
                {foto.src.endsWith('.mp4') ? (
                  <video 
                    src={foto.src} 
                    title={foto.title}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                ) : (
                  <img 
                    src={foto.src} 
                    alt={foto.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                )}
              </div>

              {/* Label Foto */}
              <div className="p-4 bg-neutral-900/80 backdrop-blur-md border-t border-white/5 relative z-20">
                <p className="text-[10px] font-bold text-em-accent uppercase tracking-[0.2em]">
                  {foto.title}
                </p>
              </div>

              {/* Efek Garis Menyala di Bawah */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-em-accent group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';

export default function Certificate() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="emerald-spotlight"></div>
      
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div variants={itemVariants} className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Sertifikasi & <span className="text-em-accent">Pencapaian</span>
          </h1>
          <p className="text-em-muted mt-3 font-medium max-w-2xl mx-auto md:mx-0">
            Bukti validasi keahlian dan kelulusan dari akademi teknologi terpercaya.
          </p>
        </motion.div>

        {/* SERTIFIKAT DICODING (Tampilan Kartu Besar Horizontal) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -10 }} 
          className="bg-neutral-900/40 backdrop-blur-3xl border border-em-accent/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-300 group flex flex-col md:flex-row"
        >
          {/* Area Gambar Sertifikat */}
          <div className="md:w-1/2 h-72 md:h-auto bg-neutral-950 relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-em-accent/10 blur-3xl group-hover:bg-em-accent/20 transition-all"></div>
            {/* Pastikan file sertifikat-dicoding.png sudah ada di folder public */}
            <img 
              src="/sertifikat-dicoding.png" 
              alt="Sertifikat Dicoding" 
              className="relative z-10 h-full w-full object-cover rounded-xl border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "serifikat.png";
              }}
            />
          </div>

          {/* Area Teks & Tombol */}
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold text-em-bg bg-em-accent px-4 py-1.5 rounded-full uppercase tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  Sertifikasi Resmi
                </span>
                <div className="text-xs text-em-muted font-bold tracking-widest uppercase">
                  Dicoding Academy
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-em-secondary transition-colors leading-tight">
                Lulusan Kelas Pemrograman Web
              </h2>
              <p className="text-em-muted text-sm leading-relaxed mb-10">
                Sertifikat kelulusan resmi sebagai bukti validasi penguasaan fundamental web development dan kesiapan membangun aplikasi modern secara profesional.
              </p>
            </div>
            
            {/* Tombol Menuju Link Asli Dicoding */}
            <a 
              href="https://www.dicoding.com/dicodingassets/coursecertificate/46b8dbcc54a5a394b576532023378287ba4989ed/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center px-6 py-3.5 bg-neutral-950 hover:bg-em-accent text-white hover:text-em-bg font-bold rounded-xl text-sm transition-all border border-white/10 hover:border-em-accent flex items-center justify-center gap-2"
            >
              Verifikasi Sertifikat Asli 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
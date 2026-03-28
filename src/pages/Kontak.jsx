import { motion } from 'framer-motion';

export default function Kontak() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 15, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden flex items-center">
      <div className="emerald-spotlight"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="bg-neutral-900/40 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12" >
          
          {/* KOLOM KIRI (MUNCUL BERTURUT-TURUT) */}
          <motion.div variants={itemVariants} className="md:w-5/12 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Mari Berkolaborasi.</h1>
              <p className="text-em-muted text-sm leading-relaxed mb-8">Diskusikan ide proyek pengembangan web atau konsultasi UI/UX. Pesan kamu akan saya balas secepatnya.</p>
              <div className="space-y-6">
                {[ { emoji: '📧', label: 'Email', value: 'febri.diamanti@gmail.com' }, { emoji: '📍', label: 'Lokasi', value: 'Manado, Sulawesi Utara' } ].map(item => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-neutral-800/80 border border-white/5 rounded-xl flex items-center justify-center text-em-accent group-hover:bg-em-accent/10 transition-all"> {item.emoji} </div>
                    <div><p className="text-[10px] text-em-muted uppercase font-bold tracking-widest mb-1">{item.label}</p><p className="text-white font-medium text-sm">{item.value}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN FORMULIR (MUNCUL SEBAGAI SATU KESATUAN) */}
          <motion.div variants={itemVariants} className="md:w-7/12">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 md:p-8">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {[ { label: 'Nama Lengkap', placeholder: 'Nama' }, { label: 'Email', placeholder: 'febri@email.com' } ].map(field => (
                  <div key={field.label} className="space-y-1.5">
                    <label className="text-[11px] font-bold text-em-muted tracking-wider uppercase ml-1">{field.label}</label>
                    {/* INPUT DENGAN EFEK FOCUS GLOW TINGGI */}
                    <input type="text" placeholder={field.placeholder} className="w-full bg-neutral-900/80 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-em-muted/40 focus:outline-none focus:border-em-accent/60 focus:ring-1 focus:ring-em-accent/30 transition-all shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] focus:shadow-[0_0_20px_rgba(16,185,129,0.1)]"/>
                  </div>
                ))}
                <button type="submit" className="w-full py-3.5 mt-2 bg-em-accent hover:bg-em-secondary text-em-bg font-bold rounded-lg transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]">Kirim Pesan</button>
              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
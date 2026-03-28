import { motion } from 'framer-motion';

export default function Portofolio() {
  // Container & Item variants (sama seperti Biodata)
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };

  const skills = [ { name: 'PHP & Laravel', val: '90%' }, { name: 'React.js', val: '85%' }, { name: 'JavaScript', val: '80%' }, { name: 'UI/UX Design', val: '75%' } ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="emerald-spotlight"></div>
      
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER (ITEM 1) */}
        <motion.div variants={itemVariants} className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-whitetracking-tight">
            Featured <span className="text-em-accent">Projects</span>
          </h1>
          <p className="text-em-muted mt-3 font-medium max-w-2xl mx-auto md:mx-0">
            Eksplorasi solusi digital dan karya pengembangan web yang berfokus pada inovasi dan pengalaman pengguna.
          </p>
        </motion.div>

        {/* GRID (ITEM 2-4 AKAN MUNCUL BERTURUT-TURUT) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* PROYEK UTAMA: BAKOS (ITEM 2) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.01 }} // Efek Hover Lift yang dramatiss
            className="md:col-span-2 bg-neutral-900/40 backdrop-blur-3xl border border-white/5 rounded-2xl p-7 hover:border-em-accent/30 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold text-em-accent bg-em-accent/5 px-4 py-1 rounded-full uppercase">Featured Project</span>
                <div className="flex gap-2 text-xs text-em-muted"> <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>Development</div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-em-secondary transition-colors">BAKOS App</h2>
              <p className="text-em-muted text-sm leading-relaxed mb-8 max-w-xl">Platform inovatif untuk pencarian boarding house (kos). Dibangun dengan arsitektur modern untuk pengalaman pengguna yang mulus.</p>
            </div>
            <button className="px-6 py-2.5 bg-em-accent hover:bg-em-secondary text-em-bg font-bold rounded-lg text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">Lihat Detail</button>
          </motion.div>

          {/* EXPERTISE (ITEM 3) */}
          <motion.div variants={itemVariants} className="bg-neutral-900/40 backdrop-blur-3xl border border-white/5 rounded-2xl p-7 hover:border-em-accent/30 transition-all group">
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2"><span className="w-1 h-4 bg-em-accent rounded-full"></span> Expertise</h3>
            <div className="space-y-6 flex-grow flex flex-col justify-center">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-2.5"> <span className="text-slate-200">{skill.name}</span> <span className="text-em-accent font-bold">{skill.val}</span> </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                    {/* Progress Bar Animate-In (Baru mengisi saat kartu expertise muncul) */}
                    <motion.div initial={{ width: 0 }} animate={{ width: skill.val }} transition={{ duration: 1.5, delay: 1 + index * 0.1 }} className="h-full bg-em-accent" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ENVIRONMENT (ITEM 4) */}
          <motion.div variants={itemVariants} className="md:col-span-3 bg-neutral-900/40 backdrop-blur-3xl border border-white/5 rounded-2xl p-6 hover:border-em-accent/30 transition-all">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3"> <div className="text-3xl p-3 bg-white/5 rounded-xl">💻</div> <div><h3 className="text-white font-bold text-lg">Development Environment</h3><p className="text-em-muted text-sm mt-0.5">Laragon & Windows</p></div> </div>
              <div className="flex gap-3"><div className="px-4 py-2 bg-neutral-950 border border-white/5 rounded-lg text-xs text-em-accent font-bold uppercase tracking-widest">OS: Windows</div><div className="px-4 py-2 bg-neutral-950 border border-white/5 rounded-lg text-xs text-em-accent font-bold uppercase tracking-widest">Server: Laragon</div></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
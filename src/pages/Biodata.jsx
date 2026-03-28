import { motion } from 'framer-motion';

export default function Biodata() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="emerald-spotlight"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full bg-neutral-900/40 backdrop-blur-3xl border border-emerald-500/10 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)] relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }} 
              transition={{ duration: 3, repeat: Infinity }} 
              className="absolute -inset-2 bg-em-accent/20 rounded-full blur-xl"
            ></motion.div>
            <img 
              src="/profil.jpg" 
              alt="Febri" 
              className="relative w-40 h-40 rounded-full object-cover border border-em-accent/30"
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Febrisio <span className="text-em-accent">Diamanti</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-em-secondary font-mono mt-3 tracking-[0.2em] text-xs uppercase">
              Management Informatics Student
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 group hover:border-em-accent/20 transition-all">
                <p className="text-[10px] text-em-muted uppercase font-bold tracking-widest">Education</p>
                <p className="text-sm font-medium text-white">AMIK Manado</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 group hover:border-em-accent/20 transition-all">
                <p className="text-[10px] text-em-muted uppercase font-bold tracking-widest">Location</p>
                <p className="text-sm font-medium text-white">Manado, North Sulawesi</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BAGIAN YANG ERROR SUDAH DIPERBAIKI DI BAWAH INI */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center md:justify-start gap-2">
          {['Laravel', 'React', 'Tailwind CSS', 'PHP', 'MySQL', 'Push rank'].map((tag) => (
            <motion.span 
              key={tag}
              whileHover={{ scale: 1.1, backgroundColor: '#10b981', color: '#050505', borderColor: '#10b981' }} 
              className="px-4 py-1.5 bg-neutral-950 border border-em-accent/20 text-em-accent rounded-md text-[10px] font-bold uppercase tracking-widest cursor-default transition-all"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div> 
        {/* PASTIKAN PENUTUPNYA ADALAH </motion.div> SEPERTI DI ATAS */}

      </motion.div>
    </div>
  );
}
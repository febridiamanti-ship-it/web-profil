import { motion } from 'framer-motion';

export default function Biodata() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Data keahlian Expertise & Skills
  const skills = [ 
    { name: 'PHP & Laravel', val: '1.90%' }, 
    { name: 'React.js', val: '1.85%' }, 
    { name: 'JavaScript', val: '1.80%' }, 
    { name: 'UI/UX Design', val: '1.75%' }, 
    { name: 'Vibe Coding', val: '100%' } 
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="emerald-spotlight"></div>
      
      {/* Container Utama */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full space-y-6 relative z-10"
      >
        
        {/* KARTU 1: PROFIL UTAMA */}
        <motion.div variants={itemVariants} className="bg-neutral-900/40 backdrop-blur-3xl border border-emerald-500/10 rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)]">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative shrink-0">
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

              {/* full stuck */}
              <motion.p variants={itemVariants} className="text-xl text-white font-semibold mt-2 tracking-wide flex items-center gap-x-1 justify-center md:justify-start">
                <span>full</span>
                <span className="line-through text-slate-500">stack</span> 
                <span>stuck developer</span>
              </motion.p>
              
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
        </motion.div>

        {/* KARTU 2: EXPERTISE & SKILLS */}
        <motion.div variants={itemVariants} className="bg-neutral-900/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-1.5 h-5 bg-em-accent rounded-full"></span> 
            Expertise & Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs mb-3"> 
                  <span className="text-slate-300 font-medium tracking-wide">{skill.name}</span> 
                  <span className="text-em-accent font-bold">{skill.val}</span> 
                </div>
                <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: skill.val }} 
                    transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "easeOut" }} 
                    className="h-full bg-em-accent relative"
                  >
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
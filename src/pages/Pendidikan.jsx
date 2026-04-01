import { motion } from 'framer-motion';

export default function Pendidikan() {
  const riwayatSekolah = [
    {
      tahun: "2024 — Sekarang",
      jenjang: "Perguruan Tinggi",
      nama: "AMIK Manado",
      jurusan: "Manajemen Informatika",
      status: "Mahasiswa Aktif"
    },
    {
      tahun: "2017 — 2020",
      jenjang: "Sekolah Menengah Kejuruan",
      nama: "SMK Negeri 2 Manado", 
      jurusan: "Otomotif",
      status: "Lulus"
    },
    {
      tahun: "2014 — 2017",
      jenjang: "Sekolah Menengah Pertama",
      nama: "SMP Negeri 3 Manado",
      jurusan: "",
      status: "Lulus"
    },
    {
      tahun: "2008 — 2014",
      jenjang: "Sekolah Menengah Pertama",
      nama: "SD Negeri 25 Manado",
      jurusan: "",
      status: "Lulus"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 relative overflow-hidden">
      <div className="emerald-spotlight"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Academic <span className="text-em-accent">Timeline</span>
          </h1>
          <p className="text-em-muted mt-2 font-medium">Rekam jejak edukasi dan pengembangan diri Febri.</p>
        </motion.div>

        <div className="relative border-l-2 border-emerald-500/20 ml-4 md:ml-8">
          {riwayatSekolah.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-em-bg border-2 border-em-accent shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
              
              <div className="bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:border-em-accent/30 transition-all duration-500 group">
                <span className="text-[10px] font-bold text-em-accent tracking-[0.2em] uppercase">
                  {item.tahun}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-em-secondary transition-colors">
                  {item.jenjang}
                </h3>
                {/* DI SINI TADI YANG ERROR */}
                <p className="text-em-text font-semibold mt-1 italic opacity-80">
                  {item.nama}
                </p> 
                
                {item.jurusan && (
                  <p className="text-sm text-em-muted mt-2 font-poppins">
                    Jurusan: <span className="text-slate-300 font-medium">{item.jurusan}</span>
                  </p>
                )}
                <div className="mt-4 inline-block px-3 py-1 bg-em-accent/10 border border-em-accent/20 rounded-lg text-[9px] font-bold text-em-accent uppercase tracking-widest">
                  {item.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
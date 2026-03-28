import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Biodata from './pages/Biodata';
import Portofolio from './pages/Portofolio';
import Galeri from './pages/Galeri';
import Pendidikan from './pages/Pendidikan';
import Kontak from './pages/Kontak';

// 1. Kita buat pembungkus animasi universal untuk semua halaman
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: "blur(5px)" }} // Posisi awal (pudar, turun sedikit, ngeblur)
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}  // Saat halaman muncul (jelas, naik)
      exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}   // Saat pindah halaman (pudar, naik ke atas, ngeblur)
      transition={{ duration: 0.4, ease: "easeInOut" }}    // Durasi animasi 0.4 detik
    >
      {children}
    </motion.div>
  );
};

// 2. Kita pisahkan Routes agar bisa mendeteksi perubahan lokasi (URL)
function AnimatedRoutes() {
  const location = useLocation();

  return (
    // AnimatePresence mode="wait" akan menunggu halaman lama menghilang sebelum halaman baru muncul
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Biodata /></PageTransition>} />
        <Route path="/portofolio" element={<PageTransition><Portofolio /></PageTransition>} />
        <Route path="/galeri" element={<PageTransition><Galeri /></PageTransition>} />
        <Route path="/pendidikan" element={<PageTransition><Pendidikan /></PageTransition>} />
        <Route path="/kontak" element={<PageTransition><Kontak /></PageTransition>} />
        <Route path="*" element={<PageTransition><Biodata /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

// 3. Komponen Utama App
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
    </Router>
  );
}

export default App;
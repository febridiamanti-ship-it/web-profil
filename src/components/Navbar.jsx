import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/galeri' },
    { name: 'Education', path: '/pendidikan' },
    { name: 'Project', path: '/portofolio' },
    { name: 'Contact', path: '/kontak' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center bg-black/60 backdrop-blur-xl border border-white/5 p-1.5 rounded-xl shadow-2xl">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-5 py-2 rounded-lg text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
              location.pathname === link.path 
                ? 'bg-em-accent text-em-bg shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                : 'text-em-muted hover:text-em-secondary'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
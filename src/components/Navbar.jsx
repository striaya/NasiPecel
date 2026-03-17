import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Sun, Moon, Leaf } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, cartCount, onCartOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-glass
        ${scrolled ? 'shadow-lg shadow-bark-200/30 dark:shadow-espresso-800/50' : ''}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-leaf-600 to-leaf-800 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-5 h-5 text-cream-100" />
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-lg text-espresso-800 dark:text-cream-100 block leading-none">
                Pecel
              </span>
              <span className="font-accent text-xs text-bark-500 italic tracking-widest">
                Nusantara
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-body text-sm font-medium text-espresso-800 dark:text-cream-200 hover:text-bark-600 dark:hover:text-bark-400 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bark-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-cream-100 dark:bg-espresso-800 text-bark-600 dark:text-cream-200 hover:bg-bark-100 dark:hover:bg-espresso-900 transition-all duration-300"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onCartOpen}
              className="relative p-2 rounded-xl bg-cream-100 dark:bg-espresso-800 text-bark-600 dark:text-cream-200 hover:bg-bark-100 transition-all duration-300"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-leaf-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href="https://wa.me/6281234567890?text=Halo%20Pecel%20Nusantara%2C%20saya%20mau%20pesan!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-leaf-600 to-leaf-700 hover:from-leaf-500 hover:to-leaf-600 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              Pesan Sekarang
            </a>

            <button
              className="md:hidden p-2 rounded-xl text-espresso-800 dark:text-cream-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-4 pb-4 space-y-2 border-t border-cream-200 dark:border-espresso-800 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-body text-sm font-medium text-espresso-800 dark:text-cream-200 py-2 px-3 rounded-lg hover:bg-cream-100 dark:hover:bg-espresso-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890"
            className="flex items-center justify-center gap-2 bg-leaf-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl mt-2"
          >
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

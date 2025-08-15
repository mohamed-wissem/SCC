import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "#home" },
    { name: "Qui sommes-nous?", href: "#about" },
    { name: "Références", href: "#portfolio" },
    { name: "Partenaires", href: "#partners" },
    { name: "Services", href: "#services" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img
                  src="https://cdn.builder.io/o/assets%2F76a93d8b94f64730bbb85e13816b0ace%2F3b280a77dada48af95fe736c95a59767?alt=media&token=fb1039ef-40db-468b-a38c-d0fb33c61040&apiKey=76a93d8b94f64730bbb85e13816b0ace"
                  alt="SCC Logo"
                  className="h-10 w-auto"
                />
                <div className="hidden sm:block">
                  <div className="text-white font-semibold text-lg">SCC</div>
                  <div className="text-xs text-gray-300 -mt-1">
                    Conseils Et communications
                  </div>
                  <div className="text-xs text-tech-cyan font-medium">
                    التش��ور والاتصالات
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-primary text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                className="btn-primary text-white block w-full text-center px-6 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

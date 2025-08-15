import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Qui sommes-nous?", href: "#about" },
    { name: "Partenaires", href: "#partners" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const usefulLinks = [
    { name: "Technologie", href: "#tech" },
    { name: "Ressources", href: "#resources" },
    { name: "iOS & Android", href: "#mobile" },
    { name: "Service logiciel", href: "#software" },
    { name: "Aide & soutien", href: "#support" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

      {/* Testimonials Section */}
      <div className="relative z-10 py-16 border-b border-scc-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* World Map with Testimonials */}
          <div className="relative">
            {/* Simulated world map background */}
            <div className="w-full h-64 bg-gradient-to-br from-navy-800 to-navy-700 rounded-2xl relative overflow-hidden">
              {/* Map pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 800 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="map-dots"
                      patternUnits="userSpaceOnUse"
                      width="20"
                      height="20"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="1"
                        fill="#007BFF"
                        opacity="0.3"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-dots)" />

                  {/* Continents outline simulation */}
                  <path
                    d="M100,150 Q200,140 300,160 Q400,150 500,170 Q600,160 700,180"
                    stroke="#007BFF"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                  />
                  <path
                    d="M150,200 Q250,190 350,210 Q450,200 550,220"
                    stroke="#00E5FF"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Testimonial Cards positioned on map */}
              <div className="absolute top-8 left-8">
                <div className="service-card p-4 rounded-lg max-w-xs">
                  <p className="text-white text-sm mb-2">
                    "Dui id ornare arcu odio ut sem, quis risus vulputate"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-scc-blue-500 to-tech-cyan flex items-center justify-center">
                      <span className="text-white text-sm">👨</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Paul Gober
                      </p>
                      <p className="text-gray-400 text-xs">Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-16">
                <div className="service-card p-4 rounded-lg max-w-xs">
                  <p className="text-white text-sm mb-2">
                    "Dui id ornare arcu odio ut sem, quis risus vulputate"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue to-tech-cyan flex items-center justify-center">
                      <span className="text-white text-sm">👩</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Anna Hazeco
                      </p>
                      <p className="text-gray-400 text-xs">Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/3">
                <div className="bg-gradient-to-br from-scc-blue-500 to-electric-blue p-4 rounded-lg max-w-xs">
                  <p className="text-white text-sm mb-2">
                    "Dui id ornare arcu odio ut sem, quis risus vulputate"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-sm">👩</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Marrea</p>
                      <p className="text-white/80 text-xs">Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 right-8">
                <div className="service-card p-4 rounded-lg max-w-xs">
                  <p className="text-white text-sm mb-2">
                    "Dui id ornare arcu odio ut sem, quis risus vulputate"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-tech-cyan to-scc-blue-500 flex items-center justify-center">
                      <span className="text-white text-sm">👩</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Ryan Olggs
                      </p>
                      <p className="text-gray-400 text-xs">Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 right-12">
                <div className="service-card p-4 rounded-lg max-w-xs">
                  <p className="text-white text-sm mb-2">
                    "Dui id ornare arcu odio ut sem, quis risus vulputate"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-scc-blue-600 to-electric-blue flex items-center justify-center">
                      <span className="text-white text-sm">👨</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Juwita</p>
                      <p className="text-gray-400 text-xs">Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient
                    id="connection-line"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#007BFF" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1E88E5" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M100,100 Q200,80 300,120 Q400,140 500,100 Q600,80 700,120"
                  stroke="url(#connection-line)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-circuit-flow"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="https://cdn.builder.io/o/assets%2F76a93d8b94f64730bbb85e13816b0ace%2F3b280a77dada48af95fe736c95a59767?alt=media&token=fb1039ef-40db-468b-a38c-d0fb33c61040&apiKey=76a93d8b94f64730bbb85e13816b0ace"
                  alt="SCC Logo"
                  className="h-12 w-auto"
                />
                <div>
                  <div className="text-white font-semibold text-lg">SCC</div>
                  <div className="text-xs text-gray-300 -mt-1">
                    Conseils Et communications
                  </div>
                  <div className="text-xs text-tech-cyan font-medium">
                    التشاور والاتصالات
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Donec viverra accumsan cursus ut lorem justo vehicula nequat
                ornare donec. Maecenas pharetra eros nulla consequat venenatis
                in condimentum sit tortor vehicula.
              </p>

              <div className="space-y-2">
                <p className="text-white font-medium text-sm">Suivez-nous</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-navy-800 hover:bg-scc-blue-500 rounded-lg flex items-center justify-center transition-colors duration-200 hover:tech-glow"
                      aria-label={social.label}
                    >
                      <social.icon
                        size={18}
                        className="text-gray-300 hover:text-white"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Company
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-scc-blue-500 to-tech-cyan"></div>
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-scc-blue-500 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Liens utiles
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-scc-blue-500 to-tech-cyan"></div>
              </h3>
              <ul className="space-y-3">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-scc-blue-500 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Contact
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-scc-blue-500 to-tech-cyan"></div>
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium text-sm mb-1">
                    Address:
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tunis Sfax social - Centre El Maek - D & F 1973 -
                    Montpellier - Tunisie - Tunisie
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-scc-blue-500" />
                  <span className="text-gray-300 text-sm">
                    scc@scc-tunisie.com
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-scc-blue-500" />
                  <span className="text-gray-300 text-sm">+216 71 561 877</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-scc-blue-500/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SCC. All rights reserved.
            </p>
            <p className="text-tech-cyan text-sm font-medium">
              Développé avec ❤️ par SCC Team
            </p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-20 left-20 w-32 h-32 border border-scc-blue-500/10 rounded-full"></div>
      <div className="absolute top-20 right-20 w-24 h-24 border border-tech-cyan/10 rounded-full"></div>
    </footer>
  );
};

export default Footer;

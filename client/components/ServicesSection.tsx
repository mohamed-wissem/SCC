import { Wifi, Shield, Phone, Database } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Installation Fibre Optique",
      description:
        "Notre équipe experte en installation de fibre optique assure des connexions ultra-rapides pour répondre à vos besoins en débit.",
      Icon: Wifi,
      gradient: "from-indigo-500 to-cyan-400",
    },
    {
      title: "Security Electronique",
      description:
        "Avec nos solutions de sécurité électronique de pointe, vous pouvez dormir tranquille en sachant que vos biens sont protégés 24 heures sur 24, 7 jours",
      Icon: Shield,
      gradient: "from-purple-500 to-rose-400",
    },
    {
      title: "Téléphonie sur IP",
      description:
        "Dites adieu aux coûts élevés de communication et bonjour à la téléphonie sur IP. Notre service de téléphonie sur IP vous offre une communication claire et fluide",
      Icon: Phone,
      gradient: "from-green-500 to-teal-400",
    },
    {
      title: "Réseau Informatique VDI",
      description:
        "Optimisez l'efficacité de votre infrastructure informatique avec notre solution VDI. Grâce à cette technologie innovante, centralisez la gestion",
      Icon: Database,
      gradient: "from-orange-500 to-red-400",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-navy-800/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Nos <span className="text-gradient">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Card */}
              <div className="service-card p-8 rounded-2xl h-full transition-all duration-300 hover:transform hover:scale-105 hover:tech-glow">
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mx-auto flex items-center justify-center group-hover:animate-pulse-glow`}
                  >
                    <service.Icon size={40} className="text-white" />
                  </div>
                  {/* Floating dots around icon */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-tech-cyan rounded-full animate-pulse-glow"></div>
                  <div
                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-scc-blue-500 rounded-full animate-pulse-glow"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center">
                  {service.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-scc-blue-500/10 to-tech-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>

              {/* Background glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-scc-blue-500/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-tech-cyan/20 rounded-full"></div>

        {/* Circuit patterns */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit-dots"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
            >
              <circle cx="20" cy="20" r="1" fill="#007BFF" />
              <circle cx="0" cy="0" r="1" fill="#00E5FF" />
              <circle cx="40" cy="40" r="1" fill="#1E88E5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-dots)" />
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;

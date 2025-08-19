import { Server, Palette, TestTube, Code, CheckCircle, Shield, Globe, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Réseau de Télécommunications',
      description: 'Systèmes téléphoniques PABX (jusqu\'à 1000 ports), VoIP, réseaux VDI Catégorie 5e/6/7, WiFi et fibres optiques',
      icon: Server,
      gradient: 'from-blue-500 to-cyan-400',
      iconBg: '📞',
    },
    {
      title: 'Sécurité Électronique',
      description: 'Vidéosurveillance CCTV (analogique & IP), contrôle d\'accès, systèmes anti-intrusion et détection incendie',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-400',
      iconBg: '🔒',
    },
    {
      title: 'Salles Informatiques',
      description: 'Conception, installation d\'onduleurs, monitoring et supervision de l\'environnement des salles serveurs',
      icon: TestTube,
      gradient: 'from-emerald-500 to-cyan-400',
      iconBg: '🏢',
    },
    {
      title: 'Solutions Intégrées',
      description: 'Solutions globales de communication unifiées, GTC et intégration complète des systèmes',
      icon: Code,
      gradient: 'from-amber-500 to-red-400',
      iconBg: '⚙️',
    },
  ];

  const qualityFeatures = [
    'Agrément Catégorie 2 - Intégrateur Télécoms',
    'Laboratoire équipé pour maintenance',
    'Équipements conformes aux normes internationales',
    'Service technique avec 4 véhicules',
    'Télémaintenance via RTC, VPN & TCP/IP',
    'Matériel de test et certification réseaux',
  ];

  const projects = [
    {
      title: 'Infrastructure Cloud',
      category: 'Cloud Computing',
      image: '☁️',
      description: 'Migration complète vers le cloud pour une entreprise de 500+ employés',
    },
    {
      title: 'Application Mobile',
      category: 'Développement Mobile',
      image: '📱',
      description: 'Application mobile e-commerce avec 100k+ téléchargements',
    },
    {
      title: 'Sécurité Réseau',
      category: 'Cybersécurité',
      image: '🔒',
      description: 'Implémentation de solutions de sécurité avancées',
    },
    {
      title: 'IA & Analytics',
      category: 'Intelligence Artificielle',
      image: '🤖',
      description: 'Solutions d\'analyse de données et intelligence artificielle',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Our </span>
            <span className="text-blue-600">Service</span>
            <span className="text-gray-900">.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            SCC propose une gamme complète de services couvrant l'ensemble des composantes
            de la réalisation des installations réseaux VDI, télécommunications,
            sécurité électronique et vidéosurveillance.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="service-card p-8 rounded-2xl h-full transition-all duration-300 hover:transform hover:scale-105 hover:white-glow border border-white/20">
                  {/* 3D Style Icon */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 relative">
                      {/* 3D Container */}
                      <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${service.gradient} p-4 flex items-center justify-center transform rotate-3 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                        <div className="text-4xl">{service.iconBg}</div>
                      </div>
                      {/* Shadow effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-30 blur-sm transform translate-x-2 translate-y-2 -z-10`}></div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {service.description}
                  </p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Quality Technology Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Professional Image */}
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden tech-glow">
                <div className="w-full h-full bg-gradient-to-br from-blue-700 to-blue-600 flex items-center justify-center relative">
                  {/* Professional working scene */}
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-6xl">💻</span>
                    </div>
                    <p className="text-white text-lg font-medium">Professional Development</p>
                    <p className="text-blue-200 text-sm">Advanced Technology Solutions</p>
                  </div>

                  {/* Tech overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 left-6 w-4 h-4 bg-cyan-400 rounded-full animate-pulse-glow"></div>
                  <div className="absolute top-12 right-12 w-3 h-3 bg-emerald-400 rounded-full animate-pulse-glow"></div>
                  <div className="absolute bottom-8 left-12 w-5 h-5 bg-purple-400 rounded-full animate-pulse-glow"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                High <span className="text-blue-400">Quality</span> Technology
                <br />
                Service Solutions.
              </h2>
              
              <p className="text-blue-100 leading-relaxed mb-8">
                SCC dispose d'agréments du Ministère des Technologies de Communications,
                d'un laboratoire équipé pour la maintenance, et de certifications pour
                assurer un service de qualité dans le marché tunisien.
              </p>

              {/* Quality Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={16} className="text-blue-900" />
                    </div>
                    <span className="text-blue-100 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduce Our Project Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Introduce Our <span className="text-blue-600">Project</span>.
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Découvrez nos réalisations et projets qui démontrent notre expertise 
              dans le domaine des technologies de l'information.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center relative overflow-hidden">
                  {/* Project Image/Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-blue-200 text-sm mb-2">{project.category}</p>
                    <p className="text-blue-100 text-xs">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <span className="text-lg font-bold">💬</span>
              </div>
              <span className="text-sm font-medium">TALK & ACTION</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <span className="text-lg font-bold">☁️</span>
              </div>
              <span className="text-sm font-medium">Sky 1st Cloud.</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <span className="text-lg font-bold">🚀</span>
              </div>
              <span className="text-sm font-medium">JUMPKINS</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <span className="text-lg font-bold">👣</span>
              </div>
              <span className="text-sm font-medium">WALK AWAY</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <span className="text-lg font-bold">⭕</span>
              </div>
              <span className="text-sm font-medium">TOTB+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  How Can we <span className="text-blue-400">Help</span> you?
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. 
                  Duis ut diam quam nulla porttitor massa id neque. Mauris nunc congue nisi 
                  vitae suscipit tellus mauris nunc pulvinar sapien et ligula.
                </p>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Your message (optional)"
                    className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none backdrop-blur-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-lg font-medium text-lg transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Side - Office Locations */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Our Offices</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="service-card p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🇮🇩</span>
                      <h4 className="text-lg font-bold text-gray-900">INA</h4>
                    </div>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <p>99 Th Oellink Street 12 As</p>
                      <p>Pekanbaru, (CA.) 12333</p>
                    </div>
                  </div>

                  <div className="service-card p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🇮🇹</span>
                      <h4 className="text-lg font-bold text-gray-900">ITALY</h4>
                    </div>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <p>102 Th San Lezamo Street</p>
                      <p>Venice, IT TA, (EUR) 12300</p>
                    </div>
                  </div>

                  <div className="service-card p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🇺🇸</span>
                      <h4 className="text-lg font-bold text-gray-900">USA</h4>
                    </div>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <p>99 Th Morgan Street 12 As</p>
                      <p>Pekanbaru, (CA.) 12333</p>
                    </div>
                  </div>

                  <div className="service-card p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🇦🇺</span>
                      <h4 className="text-lg font-bold text-gray-900">AUSTRALIA</h4>
                    </div>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <p>102 Th Pearl Street Venice, IT</p>
                      <p>TA, (AUS) 12300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

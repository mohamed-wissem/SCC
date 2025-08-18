import { Building2, Handshake, Globe, Award } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'Microsoft',
      category: 'Technologie Cloud',
      description: 'Partenaire Microsoft certifié pour les solutions Azure et Office 365',
      logo: '🏢',
      status: 'Gold Partner',
    },
    {
      name: 'Cisco',
      category: 'Infrastructure Réseau',
      description: 'Solutions de réseau et sécurité informatique avancées',
      logo: '🌐',
      status: 'Certified Partner',
    },
    {
      name: 'VMware',
      category: 'Virtualisation',
      description: 'Expert en solutions de virtualisation et cloud computing',
      logo: '☁️',
      status: 'Professional Partner',
    },
    {
      name: 'Dell Technologies',
      category: 'Infrastructure IT',
      description: 'Solutions matérielles et services pour entreprises',
      logo: '💻',
      status: 'Authorized Partner',
    },
    {
      name: 'HPE',
      category: 'Serveurs & Stockage',
      description: 'Infrastructure serveurs et solutions de stockage',
      logo: '🔧',
      status: 'Silver Partner',
    },
    {
      name: 'Fortinet',
      category: 'Cybersécurité',
      description: 'Solutions de sécurité réseau et protection avancée',
      logo: '🛡️',
      status: 'Expert Partner',
    },
  ];

  const statistics = [
    { number: '25+', label: 'Partenaires Certifiés', icon: Handshake },
    { number: '150+', label: 'Projets Collaboratifs', icon: Building2 },
    { number: '12+', label: 'Années de Partenariat', icon: Award },
    { number: '5', label: 'Continents', icon: Globe },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Nos </span>
            <span className="text-blue-600">Partenaires</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ensemble, nous construisons l'avenir de la technologie en Tunisie. 
            Découvrez nos partenaires stratégiques qui nous permettent d'offrir 
            des solutions IT de classe mondiale.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="service-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Partenaires <span className="text-blue-600">Stratégiques</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Nos collaborations avec les leaders mondiaux de la technologie 
              nous permettent d'offrir des solutions innovantes et fiables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="service-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 hover:white-glow border border-white/20"
              >
                {/* Partner Logo */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-4xl">
                    {partner.logo}
                  </div>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {partner.status}
                  </div>
                </div>

                {/* Partner Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">
                    {partner.category}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Pourquoi Nos <span className="text-blue-600">Partenariats</span> Font la Différence
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Certifications Officielles
                    </h3>
                    <p className="text-gray-600">
                      Nos certifications avec les leaders technologiques garantissent 
                      la qualité et la fiabilité de nos solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Support Technique Mondial
                    </h3>
                    <p className="text-gray-600">
                      Accès direct au support technique des fabricants pour 
                      une résolution rapide des problèmes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Solutions Intégrées
                    </h3>
                    <p className="text-gray-600">
                      Combinaison optimale de technologies compatibles pour 
                      des solutions complètes et performantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Partnership Network Visualization */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Handshake size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Réseau Global
                  </h3>
                  <p className="text-gray-700">
                    Connectés aux leaders mondiaux de la technologie
                  </p>
                </div>

                {/* Floating Partner Icons */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center text-2xl">
                  🏢
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center text-2xl">
                  🌐
                </div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center text-2xl">
                  ☁���
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center text-2xl">
                  🛡️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Bénéficier de Nos Partenariats?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour découvrir comment nos partenariats stratégiques 
            peuvent propulser votre entreprise vers de nouveaux sommets technologiques.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Démarrer un Projet
          </a>
        </div>
      </section>
    </main>
  );
};

export default Partners;

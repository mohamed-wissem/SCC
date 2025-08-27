import { Building2, Camera, Shield, MapPin } from 'lucide-react';

interface Reference {
  client: string;
  location: string;
  category: string;
  systems: string;
  description: string;
  icon: string;
  logo?: string;
  sector: string;
}

const References = () => {
  const references = [
    {
      client: 'Hotel Movenpick Gammarth',
      location: 'Tunis',
      category: 'Hôtellerie',
      systems: '125 Caméras',
      description: 'Système de vidéosurveillance CCTV complet pour hôtel de luxe',
      icon: '🏨',
      logo: 'https://cdn.builder.io/api/v1/image/assets%2F76a93d8b94f64730bbb85e13816b0ace%2Fefa40a9160124fc0968f986e8e3420dc?format=webp&width=800',
      sector: 'Tourisme',
    },
    {
      client: 'SONOBRA-Heineken',
      location: 'Grombalia',
      category: 'Industrie',
      systems: '50 Caméras + 10 Contrôles d\'accès',
      description: 'Sécurisation complète de l\'usine de brasserie',
      icon: '🏭',
      sector: 'Agroalimentaire',
    },
    {
      client: 'Figeac AERO',
      location: 'El Mghira, Tunis',
      category: 'Aéronautique',
      systems: '120 Caméras',
      description: 'Sécurité haute technologie pour l\'industrie aéronautique',
      icon: '✈️',
      sector: 'Aéronautique',
    },
    {
      client: 'Nestlé-IKEL',
      location: 'Tunis',
      category: 'Agroalimentaire',
      systems: '48 Caméras + 6 Contrôles d\'accès',
      description: 'Solutions de sécurité pour l\'industrie alimentaire',
      icon: '🍼',
      sector: 'Agroalimentaire',
    },
    {
      client: 'Assurance Maghrebia',
      location: 'Tunis',
      category: 'Services Financiers',
      systems: '40 Caméras + 20 Contrôles d\'accès',
      description: 'Sécurisation du siège social et des agences',
      icon: '🏦',
      sector: 'Finance',
    },
    {
      client: 'SOFIMA-Ufifilter',
      location: 'Ben Arous',
      category: 'Industrie',
      systems: '100 Caméras',
      description: 'Surveillance industrielle pour usine de filtres',
      icon: '⚙️',
      sector: 'Industrie',
    },
    {
      client: 'Ministère des Affaires Sociales',
      location: 'Tunis',
      category: 'Secteur Public',
      systems: '42 Caméras + 8 Contrôles d\'accès',
      description: 'Sécurisation des bâtiments ministériels',
      icon: '🏛️',
      sector: 'Public',
    },
    {
      client: 'STEG',
      location: 'Tunis & Ben Arous',
      category: 'Services Publics',
      systems: '70 Caméras',
      description: 'Sécurisation des installations électriques',
      icon: '⚡',
      sector: 'Énergie',
    },
    {
      client: 'Tunisair Handling',
      location: 'Aéroport Tunis',
      category: 'Aviation',
      systems: '40 Caméras',
      description: 'Surveillance du service bagages à l\'aéroport',
      icon: '🛫',
      sector: 'Aviation',
    },
    {
      client: 'Pierre Fabre',
      location: 'Tunis & Jbal Jloud',
      category: 'Pharmaceutique',
      systems: '60 Caméras',
      description: 'Sécurisation des sites de production pharmaceutique',
      icon: '💊',
      sector: 'Santé',
    },
    {
      client: 'Hôpital El Hourouk',
      location: 'Ben Arous',
      category: 'Santé',
      systems: '50 Caméras',
      description: 'Surveillance spécialisée pour centre de grands brûlés',
      icon: '🏥',
      sector: 'Santé',
    },
    {
      client: 'ZITOUNA Takaful',
      location: 'Berges du Lac + Sousse + Sfax',
      category: 'Finance',
      systems: '36 Caméras + 28 Contrôles d\'accès',
      description: 'Sécurisation des bureaux d\'assurance',
      icon: '🛡️',
      sector: 'Assurance',
    },
  ];

  const sectors = [
    { name: 'Industrie', count: 15, icon: '🏭', color: 'from-blue-500 to-blue-600' },
    { name: 'Finance', count: 8, icon: '🏦', color: 'from-green-500 to-green-600' },
    { name: 'Santé', count: 6, icon: '🏥', color: 'from-red-500 to-red-600' },
    { name: 'Public', count: 12, icon: '🏛️', color: 'from-purple-500 to-purple-600' },
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
            <span className="text-blue-600">Références</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre portfolio de projets réalisés avec succès à travers 
            différents secteurs en Tunisie. Plus de 30 clients nous font confiance.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="service-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${sector.color} rounded-full flex items-center justify-center text-2xl`}>
                  {sector.icon}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{sector.count}+</div>
                <p className="text-gray-700 font-medium">{sector.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Projets <span className="text-blue-600">Réalisés</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Une sélection de nos réalisations majeures en vidéosurveillance 
              et contrôle d'accès à travers la Tunisie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((reference, index) => (
              <div
                key={index}
                className="service-card p-6 rounded-2xl group hover:scale-105 transition-all duration-300 hover:white-glow border border-white/20"
              >
                {/* Client Icon */}
                <div className="text-center mb-6">
                  <div className={`mx-auto mb-4 rounded-2xl flex items-center justify-center overflow-hidden ${
                    reference.logo
                      ? 'w-24 h-24 bg-transparent'
                      : 'w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-3xl'
                  }`}>
                    {reference.logo ? (
                      <img
                        src={reference.logo}
                        alt={`${reference.client} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      reference.icon
                    )}
                  </div>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {reference.sector}
                  </div>
                </div>

                {/* Client Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {reference.client}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <MapPin size={14} className="text-blue-600" />
                    <p className="text-blue-600 font-medium text-sm">
                      {reference.location}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Camera size={14} className="text-gray-600" />
                    <p className="text-gray-600 font-medium text-sm">
                      {reference.systems}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reference.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Agréments</span> & Certifications
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              SCC dispose des agréments officiels du Ministère des Technologies 
              de Communications de Tunisie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <Shield size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Agrément Catégorie 2</h3>
                  <p className="text-blue-600 font-medium">Intégrateur Services Télécommunications</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Terminaux Téléphoniques & VoIP
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Réseaux VDI d'Entreprises
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Réseau Fibre Optique
                </li>
              </ul>
            </div>

            <div className="service-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Building2 size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Agrément Catégorie 1</h3>
                  <p className="text-blue-600 font-medium">Intégrateur Télécommunications Radio</p>
                </div>
              </div>
              <p className="text-gray-700">
                Ces agréments permettent à SCC de se positionner dans le marché tunisien 
                des télécommunications privé et publique et d'assurer un service de qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Faites confiance à notre expertise prouvée avec plus de 30 projets réalisés 
            avec succès dans différents secteurs d'activité.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Demander un Devis
          </a>
        </div>
      </section>
    </main>
  );
};

export default References;

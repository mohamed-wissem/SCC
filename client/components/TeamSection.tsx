import { Shield, Clock, Briefcase, Cpu } from 'lucide-react';

const TeamSection = () => {
  const teamStats = [
    { number: '70', suffix: '+', label: 'Rating Client', icon: '⭐' },
    { number: '379', suffix: '+', label: 'Projects realise', icon: '📊' },
  ];

  const services = [
    {
      title: 'Guarantee',
      description: 'Why Choose us semper risus in hendrerit gravida rutrum quisque.',
      icon: Shield,
      buttonText: 'READ MORE',
      color: 'from-scc-blue-500 to-electric-blue',
    },
    {
      title: 'Daily Update',
      description: 'Why Choose us semper risus in hendrerit gravida rutrum quisque.',
      icon: Clock,
      buttonText: 'READ MORE',
      color: 'from-electric-blue to-tech-cyan',
    },
    {
      title: 'Job Details',
      description: 'Why Choose us semper risus in hendrerit gravida rutrum quisque.',
      icon: Briefcase,
      buttonText: 'READ MORE',
      color: 'from-tech-cyan to-scc-blue-500',
    },
    {
      title: 'Advanced Tech',
      description: 'Why Choose us semper risus in hendrerit gravida rutrum quisque.',
      icon: Cpu,
      buttonText: 'READ MORE',
      color: 'from-scc-blue-600 to-electric-blue',
    },
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
          {/* Professional image area */}
          <div className="absolute left-0 top-0 w-1/2 h-full opacity-40">
            <div className="w-full h-full bg-gradient-to-r from-scc-blue-500/20 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Professional Image */}
          <div className="relative">
            {/* Professional working image */}
            <div className="w-full h-96 rounded-2xl overflow-hidden tech-glow">
              <div className="w-full h-full bg-gradient-to-br from-navy-700 to-navy-600 flex items-center justify-center relative">
                {/* Simulated professional image */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-scc-blue-500 to-tech-cyan flex items-center justify-center">
                    <span className="text-4xl text-white">👩‍💻</span>
                  </div>
                  <p className="text-white text-lg font-medium">Dedicated IT Professional</p>
                  <p className="text-gray-300 text-sm">Leading Technology Solutions</p>
                </div>

                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                
                {/* Floating elements */}
                <div className="absolute top-6 left-6 w-4 h-4 bg-tech-cyan rounded-full animate-pulse-glow"></div>
                <div className="absolute top-12 right-12 w-3 h-3 bg-electric-blue rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-8 left-12 w-5 h-5 bg-scc-blue-500 rounded-full animate-pulse-glow"></div>
              </div>
            </div>

            {/* Stats Cards Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-4">
              {teamStats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card flex-1 p-4 rounded-xl text-center"
                >
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {stat.number}<span className="text-scc-blue-500">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-300 text-xs">{stat.label}</p>
                  <div className="text-lg">{stat.icon}</div>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-cyan rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-scc-blue-500 rounded-full animate-pulse-glow"></div>
          </div>

          {/* Right Side - Content and Services */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Dedicated Team
                <br />
                Take the <span className="text-gradient">Responsibility</span>.
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                Why Choose us semper risus in hendrerit gravida rutrum quisque. Pulvinar 
                neque laoreet suspendisse interdum nibh tortor id aliquet lectus proin.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card p-6 rounded-xl group hover:tech-glow transition-all duration-300 hover:scale-105"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 flex items-center justify-center group-hover:animate-pulse-glow`}>
                      <service.icon size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Button */}
                  <button className="text-scc-blue-500 text-sm font-medium hover:text-tech-cyan transition-colors duration-200 flex items-center gap-2 group">
                    📖 {service.buttonText}
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-scc-blue-500/20 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-tech-cyan/20 rounded-full animate-pulse-glow"></div>
      
      {/* Circuit patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="team-circuit" patternUnits="userSpaceOnUse" width="60" height="60">
            <circle cx="30" cy="30" r="2" fill="#007BFF" />
            <path d="M30 15v10M30 35v10M15 30h10M35 30h10" stroke="#007BFF" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#team-circuit)" />
      </svg>
    </section>
  );
};

export default TeamSection;

import { Calendar, CheckSquare } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "UI/UX Design",
      country: "USA",
      date: "JAN 2021",
      description:
        "Why Choose us semper risus in hendrerit gravida rutrum quisque. Pulvinar neque laoreet suspendisse interdum nibh tortor",
      status: "completed",
      image: "🎨",
    },
    {
      title: "Loyalty System",
      country: "USA",
      date: "APR 2021",
      description:
        "Why Choose us semper risus in hendrerit gravida rutrum quisque. Pulvinar neque laoreet suspendisse interdum nibh tortor",
      status: "completed",
      image: "💳",
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
        {/* Circuit overlay */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Project Cards */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="service-card p-6 rounded-xl group hover:tech-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 border-2 border-scc-blue-500 rounded flex items-center justify-center">
                      <CheckSquare size={16} className="text-scc-blue-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="text-2xl">{project.image}</div>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-tech-cyan text-sm font-medium">
                        {project.country}
                      </span>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 h-1 bg-navy-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-scc-blue-500 to-tech-cyan rounded-full w-full"></div>
                  </div>
                  <span className="text-tech-cyan text-xs font-medium">
                    100%
                  </span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-scc-blue-500/5 to-tech-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}

            {/* Additional decorative card */}
            <div className="service-card p-6 rounded-xl text-center group hover:tech-glow transition-all duration-300">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-white mb-2">
                More Projects
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                View our complete portfolio of successful implementations
              </p>
              <button className="btn-primary text-white px-6 py-2 rounded-lg text-sm font-medium">
                View All Projects
              </button>
            </div>
          </div>

          {/* Right Side - Professional Working Image */}
          <div className="relative">
            {/* Main working image */}
            <div className="w-full h-96 rounded-2xl overflow-hidden tech-glow">
              <div className="w-full h-full bg-gradient-to-br from-navy-700 to-navy-600 flex items-center justify-center relative">
                {/* Simulated laptop working scene */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-scc-blue-500 to-tech-cyan flex items-center justify-center">
                    <span className="text-6xl text-white">💻</span>
                  </div>
                  <p className="text-white text-lg font-medium">
                    Development in Progress
                  </p>
                  <p className="text-gray-300 text-sm">
                    Creating Digital Solutions
                  </p>
                </div>

                {/* Code overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>

                {/* Floating code elements */}
                <div className="absolute top-8 left-8 text-tech-cyan text-xs font-mono opacity-60">
                  &lt;div className="portfolio"&gt;
                </div>
                <div className="absolute top-16 right-8 text-scc-blue-500 text-xs font-mono opacity-60">
                  function createApp() {"{"}
                </div>
                <div className="absolute bottom-16 left-8 text-electric-blue text-xs font-mono opacity-60">
                  return &lt;Portfolio /&gt;;
                </div>
                <div className="absolute bottom-8 right-8 text-tech-cyan text-xs font-mono opacity-60">
                  {"}"}&lt;/div&gt;
                </div>

                {/* Floating tech dots */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-tech-cyan rounded-full animate-pulse-glow"></div>
                <div className="absolute top-12 right-12 w-4 h-4 bg-electric-blue rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-12 left-12 w-2 h-2 bg-scc-blue-500 rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-4 right-4 w-5 h-5 bg-tech-cyan rounded-full animate-pulse-glow"></div>
              </div>
            </div>

            {/* Technology stack indicators */}
            <div className="absolute -top-4 -right-4 flex flex-col gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-scc-blue-500 to-tech-cyan rounded-lg flex items-center justify-center text-white text-xs font-bold">
                JS
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-scc-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                TS
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 flex gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-tech-cyan to-electric-blue rounded-lg flex items-center justify-center text-white text-xs font-bold">
                CSS
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-scc-blue-600 to-tech-cyan rounded-lg flex items-center justify-center text-white text-xs font-bold">
                HTML
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 -left-8 w-16 h-16 border border-scc-blue-500/30 rounded-full animate-pulse-glow"></div>
            <div className="absolute bottom-20 -right-8 w-12 h-12 border border-tech-cyan/30 rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-scc-blue-500/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-tech-cyan/20 rounded-full"></div>

      {/* Animated circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="portfolio-circuit"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#007BFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#007BFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 Q300,200 600,250 T1200,200"
          stroke="url(#portfolio-circuit)"
          strokeWidth="2"
          fill="none"
          className="animate-circuit-flow"
        />
      </svg>
    </section>
  );
};

export default PortfolioSection;

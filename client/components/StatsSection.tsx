import { useEffect, useState, useRef } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clientReturns: 0,
    experience: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: "Projects Realise", value: 359, suffix: "+" },
    { label: "Client Returns", value: 63, suffix: "%" },
    { label: "Années d'expérience", value: 12, suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateValue = (
        start: number,
        end: number,
        duration: number,
        setter: (value: number) => void,
      ) => {
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const current = start + (end - start) * easeOutCubic;

          setter(Math.floor(current));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      };

      const delay = 300;
      setTimeout(() => {
        animateValue(0, 359, 2000, (value) =>
          setAnimatedStats((prev) => ({ ...prev, projects: value })),
        );
      }, delay);

      setTimeout(() => {
        animateValue(0, 63, 1800, (value) =>
          setAnimatedStats((prev) => ({ ...prev, clientReturns: value })),
        );
      }, delay + 200);

      setTimeout(() => {
        animateValue(0, 12, 1500, (value) =>
          setAnimatedStats((prev) => ({ ...prev, experience: value })),
        );
      }, delay + 400);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Image Simulation */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 relative">
          {/* Tech Professional Background */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
            <div className="w-full h-full bg-gradient-to-l from-scc-blue-500/20 to-transparent"></div>
          </div>

          {/* Circuit overlay */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats Cards */}
          <div className="space-y-6">
            {/* Top paragraph */}
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Skill Set us semper risus in hendrerit gravida rutrum quisque.
              Pulvinar neque laoreet suspendisse interdum nibh tortor id aliquet
              lectus proin.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Projects Stat */}
              <div className="stat-card p-6 rounded-2xl text-center group hover:tech-glow transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {animatedStats.projects}
                  <span className="text-scc-blue-500">+</span>
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  Projects Realise
                </p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-tech-cyan rounded-full animate-pulse-glow"></div>
              </div>

              {/* Client Returns Stat */}
              <div className="stat-card p-6 rounded-2xl text-center group hover:tech-glow transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {animatedStats.clientReturns}
                  <span className="text-scc-blue-500">%</span>
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  Client Returns
                </p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-electric-blue rounded-full animate-pulse-glow"></div>
              </div>

              {/* Experience Stat */}
              <div className="stat-card p-6 rounded-2xl text-center group hover:tech-glow transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {animatedStats.experience}
                  <span className="text-scc-blue-500">+</span>
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  Années d'expérience
                </p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-tech-cyan rounded-full animate-pulse-glow"></div>
              </div>

              {/* Call to Action Card */}
              <div className="bg-gradient-to-br from-scc-blue-500 to-electric-blue p-6 rounded-2xl text-center group hover:tech-glow transition-all duration-300 hover:scale-105">
                <h3 className="text-white font-bold text-lg mb-3">
                  Commencez avec la technologie et développez votre entreprise
                </h3>
                <button className="btn-secondary text-white px-6 py-2 rounded-lg font-medium text-sm">
                  Contactez-nous
                </button>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/30 rounded-full animate-pulse-glow"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Image Area */}
          <div className="relative">
            {/* Professional working on VR/AR */}
            <div className="w-full h-96 rounded-2xl overflow-hidden tech-glow">
              <div className="w-full h-full bg-gradient-to-br from-navy-700 to-navy-600 flex items-center justify-center relative">
                {/* Simulated professional image */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-scc-blue-500 to-tech-cyan flex items-center justify-center">
                    <span className="text-6xl text-white">🥽</span>
                  </div>
                  <p className="text-white text-lg font-medium">
                    VR/AR Technology Expert
                  </p>
                  <p className="text-gray-300 text-sm">
                    Future of IT Solutions
                  </p>
                </div>

                {/* Tech overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-scc-blue-500/20 to-transparent"></div>

                {/* Floating tech elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-tech-cyan rounded-full animate-pulse-glow"></div>
                <div className="absolute top-8 right-8 w-4 h-4 bg-electric-blue rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-scc-blue-500 rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-4 right-4 w-5 h-5 bg-tech-cyan rounded-full animate-pulse-glow"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-scc-blue-500 rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-tech-cyan rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-scc-blue-500/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-tech-cyan/20 rounded-full"></div>
    </section>
  );
};

export default StatsSection;

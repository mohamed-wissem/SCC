import { useEffect, useState, useRef } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    analytics: 0,
    webDev: 0,
    problemSolutions: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      name: "Analytic Data",
      value: 90,
      color: "from-scc-blue-500 to-tech-cyan",
    },
    {
      name: "Web Development",
      value: 85,
      color: "from-electric-blue to-scc-blue-600",
    },
    {
      name: "Problem Solutions",
      value: 95,
      color: "from-tech-cyan to-electric-blue",
    },
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
      const timer = setTimeout(() => {
        skills.forEach((skill, index) => {
          const duration = 2000;
          const steps = 50;
          const increment = skill.value / steps;
          let currentValue = 0;

          const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= skill.value) {
              currentValue = skill.value;
              clearInterval(interval);
            }

            setAnimatedValues((prev) => ({
              ...prev,
              [index === 0
                ? "analytics"
                : index === 1
                  ? "webDev"
                  : "problemSolutions"]: Math.round(currentValue),
            }));
          }, duration / steps);
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Quote */}
          <div className="relative">
            {/* Professional Image Placeholder */}
            <div className="relative rounded-2xl overflow-hidden tech-glow">
              <div className="w-full h-96 bg-gradient-to-br from-navy-700 to-navy-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-scc-blue-500 to-tech-cyan flex items-center justify-center">
                    <span className="text-4xl text-white font-bold">👨‍💻</span>
                  </div>
                  <p className="text-white text-lg font-medium">
                    Professional IT Expert
                  </p>
                </div>
              </div>

              {/* Quote Card */}
              <div className="absolute bottom-4 left-4 right-4 service-card p-4 rounded-xl">
                <p className="text-gray-300 text-sm mb-2">
                  "Aliquet porttitor lacus accumsan tortor posuere rutrum
                  scelerisque"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-scc-blue-500 to-tech-cyan"></div>
                  <div>
                    <p className="text-white text-sm font-medium">
                      Hendrik Morella
                    </p>
                    <p className="text-tech-cyan text-xs">FOUNDER</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-cyan rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-scc-blue-500 rounded-full animate-pulse-glow"></div>
          </div>

          {/* Right Side - Content and Progress Bars */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Network <span className="text-gradient">Software</span>
                <br />
                Your Business Solutions.
              </h2>

              <div className="space-y-4 text-gray-100">
                <p className="text-lg">
                  <strong className="text-white">IT Service Providers</strong>,
                  ellentesque elit eget gravida cum. Cursus euismod quis viverra
                  nibh cras.
                </p>
                <p>
                  Bibendum at varius vel pharetra vel turpis. Bibendum at varius
                  vel pharetra vel turpis nunc. Posuere ac ut consequat semper
                  viverra.
                </p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const animatedValue =
                  index === 0
                    ? animatedValues.analytics
                    : index === 1
                      ? animatedValues.webDev
                      : animatedValues.problemSolutions;

                return (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-scc-blue-500 font-bold">
                        {animatedValue}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-2 bg-navy-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ width: `${animatedValue}%` }}
                        >
                          <div className="absolute right-0 top-0 h-full w-4 bg-white/30 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-scc-blue-500/20 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-tech-cyan/20 rounded-full animate-pulse-glow"></div>

      {/* Circuit background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circuit-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007BFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#007BFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q200,100 400,150 T800,100"
          stroke="url(#circuit-line)"
          strokeWidth="1"
          fill="none"
          className="animate-circuit-flow"
        />
      </svg>
    </section>
  );
};

export default AboutSection;

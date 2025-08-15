import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 circuit-animation"></div>

        {/* Interactive Light Effects */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 bg-gradient-radial from-scc-blue-500 to-transparent"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease",
          }}
        ></div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse-glow"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-indigo-500 rounded-full animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-5 h-5 bg-emerald-400 rounded-full animate-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Circuit Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="circuit-gradient"
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
            d="M0,50 Q250,50 500,100 T1000,50"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-circuit-flow"
          />
          <path
            d="M0,150 Q250,150 500,200 T1000,150"
            stroke="url(#circuit-gradient)"
            strokeWidth="1"
            fill="none"
            className="animate-circuit-flow"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
          <span className="text-white">La </span>
          <span className="text-gradient">principale</span>
          <span className="text-white"> société de</span>
          <br />
          <span className="text-white">services informatiques en</span>
          <br />
          <span className="text-gradient">Tunisie.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Renforcez vos données grâce à la technologie et à la technologie.
          Réseau
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="btn-primary text-white px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center gap-2 group"
          >
            <span>📞</span>
            CONTACTEZ-NOUS
          </a>
          <a
            href="#services"
            className="btn-secondary text-white px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center gap-2 group"
          >
            SAVOIR PLUS
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-indigo-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-indigo-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

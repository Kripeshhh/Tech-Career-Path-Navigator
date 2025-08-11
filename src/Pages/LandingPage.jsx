import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const textElements = textRef.current?.children || [];
    const cardElements = cardsRef.current;

    [...textElements].forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
    });

    cardElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px) scale(0.9)";
    });

    [...textElements].forEach((el, index) => {
      setTimeout(() => {
        el.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 200);
    });

    cardElements.forEach((card, index) => {
      setTimeout(() => {
        card.style.transition = "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";
      }, 800 + index * 150);
    });

    return () => {
      cardsRef.current = [];
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const options = [
    {
      title: "Web Development",
      path: "/web-development",
      icon: "🌐",
      description: "Frontend & Backend",
    },
    {
      title: "Software Development",
      path: "/software-development",
      icon: "💻",
      description: "Applications & Systems",
    },
    {
      title: "Data & AI",
      path: "/data-ai",
      icon: "🤖",
      description: "Analytics & Machine Learning",
    },
    {
      title: "Cybersecurity",
      path: "/cybersecurity",
      icon: "🔒",
      description: "Security & Protection",
    },
    {
      title: "UI/UX Design",
      path: "/ui-ux",
      icon: "🎨",
      description: "User Experience Design",
    },
    {
      title: "Mobile App Development",
      path: "/mobile-app-development",
      icon: "📱",
      description: "iOS & Android Apps",
    },
    {
      title: "Game Development",
      path: "/game-development",
      icon: "🎮",
      description: "Interactive Entertainment",
    },
    {
      title: "Cloud Computing & DevOps",
      path: "/cloud-devops",
      icon: "☁️",
      description: "Scalable Infrastructure",
    },
    {
      title: "Blockchain Development",
      path: "/blockchain",
      icon: "⛓️",
      description: "Decentralized Apps",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-gray-800 dark:text-white overflow-hidden">
      <div ref={textRef} className="text-center mb-16 max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white border-b-4 border-cyan-500 pb-3">
          Welcome to Career Path Navigator
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Choose your career path below to explore essential skills and
          resources tailored for your journey in technology.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-8"></div>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4"
      >
        {options.map((option, index) => (
          <div
            key={index}
            ref={addToRefs}
            onClick={() => handleNavigation(option.path)}
            className="group relative cursor-pointer rounded-3xl p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <div className="absolute top-6 left-10 w-14 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 right-10 w-14 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {option.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 max-w-xs">
                {option.description}
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-6 group-hover:w-28 transition-all duration-300"></div>
              <div className="mt-5 text-cyan-500 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-sm font-semibold">Explore →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* floating background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

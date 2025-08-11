import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import images
import htmlImage from "./../images/html.png";
import cssImage from "./../images/css.svg";
import jsImage from "./../images/JS.png";
import reactImage from "./../images/React.png";
import nodeImage from "./../images/Node.jpeg";

export default function WebDevelopment() {
  const headingRef = useRef(null);
  const separatorRef = useRef(null);
  const toolItemsRef = useRef([]);
  const sectionRef = useRef(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToRefs = (el) => {
    if (el && !toolItemsRef.current.includes(el)) {
      toolItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Initial setup
    gsap.set([headingRef.current, separatorRef.current], {
      opacity: 0,
      y: 50,
    });

    toolItemsRef.current.forEach((item) => {
      gsap.set(item, {
        opacity: 0,
        y: 60,
        scale: 0.95,
      });
    });

    // Animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    })
      .to(
        separatorRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          width: "120px",
        },
        "-=0.4"
      )
      .to(
        toolItemsRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.2"
      );

    // Individual item animations on scroll
    toolItemsRef.current.forEach((item, i) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        "--card-scale": 1,
        "--card-opacity": 1,
        "--card-y": 0,
        duration: 0.8,
        ease: "back.out(1.2)",
      });
    });

    return () => {
      toolItemsRef.current = [];
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  const tools = [
    {
      name: "HTML",
      description: "The structural foundation of every website",
      guidance:
        "You'll start your web development journey with HTML - it's the essential markup language that defines the content and structure of web pages. Think of it as the skeleton of your website. Without HTML, browsers wouldn't know how to display your content. You'll use elements like <header>, <section>, and <footer> to organize your page logically.",
      source: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      image: htmlImage,
      color: "from-orange-500 to-orange-300",
    },
    {
      name: "CSS",
      description: "The styling language that brings designs to life",
      guidance:
        "Once you've mastered HTML, you'll want to make your sites visually appealing with CSS. This is where you control colors, layouts, fonts, and responsive behavior. You'll learn powerful techniques like Flexbox and Grid to create modern layouts. Remember, good CSS makes the difference between an amateur-looking site and a professional one.",
      source: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      image: cssImage,
      color: "from-blue-500 to-blue-300",
    },
    {
      name: "JavaScript",
      description: "The programming language that adds interactivity",
      guidance:
        "Now you're ready to make your websites dynamic with JavaScript. You'll use it to handle user interactions, manipulate the DOM, and fetch data from servers. JavaScript is what transforms static pages into engaging web applications. As you progress, you'll discover its power through concepts like asynchronous programming and ES6+ features.",
      source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      image: jsImage,
      color: "from-yellow-500 to-yellow-300",
    },
    {
      name: "React",
      description: "The powerful library for building user interfaces",
      guidance:
        "When your JavaScript projects grow complex, you'll appreciate React's component-based architecture. You'll build reusable UI components and manage state efficiently. React's virtual DOM makes your apps performant, while JSX allows you to write HTML-like syntax directly in your JavaScript. It's currently the most popular frontend library for good reason.",
      source: "https://reactjs.org/docs/getting-started.html",
      image: reactImage,
      color: "from-cyan-500 to-cyan-300",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for server-side development",
      guidance:
        "To become a full-stack developer, you'll need to learn server-side programming. Node.js lets you use JavaScript on the server, creating a unified language across your stack. You'll build APIs, handle databases, and manage authentication. Combined with frameworks like Express, you can create robust backend systems to power your applications.",
      source: "https://nodejs.org/en/docs/",
      image: nodeImage,
      color: "from-green-500 to-green-300",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjIwIiBjeT0iMjAiIHI9IjEuNSIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1
            ref={headingRef}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white tracking-tight"
          >
            Essential{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Web Development
            </span>{" "}
            Technologies
          </h1>
          <div
            ref={separatorRef}
            className="w-0 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"
          ></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Master these core technologies to build modern, interactive web
            applications
          </p>
        </div>

        <div className="space-y-16">
          {tools.map(
            ({ name, description, guidance, source, image, color }, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="group relative"
                style={{
                  opacity: "var(--card-opacity, 0)",
                  transform:
                    "translateY(var(--card-y, 60px)) scale(var(--card-scale, 0.95))",
                  willChange: "transform, opacity",
                }}
              >
                {/* Removed gradient border wrapper */}
                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <div className="w-full md:w-48 flex-shrink-0 flex justify-center">
                    {/* Glow effect wrapper with fixed square size */}
                    <div
                      className={`relative w-36 h-36 rounded-2xl overflow-hidden
                      bg-white dark:bg-gray-800
                      flex items-center justify-center
                      shadow-[0_0_20px_rgba(0,255,255,0.5)]
                      transition-shadow duration-300
                      group-hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]
                    `}
                    >
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                        {name}
                      </h2>
                      <span
                        className={`h-3 w-3 rounded-full bg-gradient-to-br ${color}`}
                      ></span>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
                      {description}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {guidance}
                    </p>
                    <a
                      href={source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span className="mr-2">Learn More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {index < tools.length - 1 && (
                  <div className="mt-16 relative">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300 dark:border-gray-600 opacity-30"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span
                        className={`px-4 bg-white dark:bg-gray-800 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r ${color}`}
                      >
                        ● ● ●
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

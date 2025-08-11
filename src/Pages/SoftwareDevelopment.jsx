import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import images
import javaImage from "./../images/java.png";
import cppImage from "./../images/cpp.png";
import pythonImage from "./../images/Python.webp";
import gitImage from "./../images/git.png";
import sqlImage from "./../images/sql.png";

export default function SoftwareDevelopment() {
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
    toolItemsRef.current.forEach((item) => {
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
      name: "Java",
      description: "Versatile object-oriented programming language",
      guidance:
        "You'll use Java for building enterprise-scale applications, Android apps, and backend systems. Master core concepts like OOP, collections framework, and multithreading to become proficient.",
      source: "https://docs.oracle.com/javase/tutorial/",
      image: javaImage,
      color: "from-red-500 to-red-300",
    },
    {
      name: "C++",
      description: "High-performance systems programming language",
      guidance:
        "You'll leverage C++ for game development, embedded systems, and performance-critical applications. Focus on memory management, STL, and modern C++ features for effective development.",
      source: "https://isocpp.org/",
      image: cppImage,
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Python",
      description: "General-purpose high-level language",
      guidance:
        "You'll find Python invaluable for scripting, automation, and rapid prototyping. Its extensive libraries make it ideal for diverse applications from web development to data analysis.",
      source: "https://docs.python.org/3/tutorial/",
      image: pythonImage,
      color: "from-yellow-500 to-yellow-300",
    },
    {
      name: "Git",
      description: "Distributed version control system",
      guidance:
        "You'll use Git daily for tracking changes, collaborating with teams, and managing code versions. Mastering branching strategies and workflows is essential for professional development.",
      source: "https://git-scm.com/doc",
      image: gitImage,
      color: "from-orange-500 to-orange-300",
    },
    {
      name: "SQL",
      description: "Standard language for relational databases",
      guidance:
        "You'll need SQL to interact with databases, write complex queries, and optimize data retrieval. Understanding normalization, indexing, and transactions is crucial for backend development.",
      source: "https://www.w3schools.com/sql/",
      image: sqlImage,
      color: "from-indigo-500 to-indigo-300",
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
              Software Development
            </span>{" "}
            Technologies
          </h1>
          <div
            ref={separatorRef}
            className="w-0 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"
          ></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Master these core technologies to build robust, high-performance
            software applications
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
                {/* Removed gradient border + padding wrapper */}

                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  {/* Glow container with fixed size */}
                  <div className="w-full md:w-48 flex-shrink-0 flex justify-center">
                    <div
                      className={`relative w-36 h-36 rounded-2xl overflow-hidden
                      bg-white dark:bg-gray-800
                      flex items-center justify-center
                      shadow-[0_0_20px_rgba(0,123,255,0.4)]
                      transition-shadow duration-300
                      group-hover:shadow-[0_0_30px_rgba(0,123,255,0.7)]
                    `}
                    >
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Text */}
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

                {/* Divider */}
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

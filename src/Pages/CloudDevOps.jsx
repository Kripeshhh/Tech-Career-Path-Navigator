import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import awsImg from "../images/aws.jpg";
import azureImg from "../images/azure.webp";
import dockerImg from "../images/docker.png";
import k8sImg from "../images/kubernetes.png";
import cicdImg from "../images/ci.jpeg";

export default function CloudDevOps() {
  const headingRef = useRef(null);
  const separatorRef = useRef(null);
  const toolItemsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToRefs = (el) => {
    if (el && !toolItemsRef.current.includes(el)) {
      toolItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.set([headingRef.current, separatorRef.current], { opacity: 0, y: 50 });
    toolItemsRef.current.forEach((item) =>
      gsap.set(item, { opacity: 0, y: 60, scale: 0.95 })
    );

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.8 })
      .to(
        separatorRef.current,
        { opacity: 1, y: 0, duration: 0.6, width: "120px" },
        "-=0.4"
      )
      .to(
        toolItemsRef.current,
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 },
        "-=0.2"
      );

    toolItemsRef.current.forEach((item) =>
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
      })
    );

    return () => {
      toolItemsRef.current = [];
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  const tools = [
    {
      name: "AWS",
      description: "Amazon Web Services - cloud platform",
      guidance:
        "Learn core services (EC2, S3, RDS, IAM) and design for scalability, availability and cost-efficiency. Practice infrastructure-as-code (CloudFormation/Terraform) and monitoring with CloudWatch.",
      source: "https://aws.amazon.com/getting-started/",
      image: awsImg,
      color: "from-orange-500 to-yellow-400",
    },
    {
      name: "Azure",
      description: "Microsoft's cloud ecosystem",
      guidance:
        "Azure provides VM, PaaS, and serverless offerings. Understand Azure Resource Manager, identity/integration options and hybrid cloud strategies for enterprise workloads.",
      source: "https://learn.microsoft.com/en-us/azure/",
      image: azureImg,
      color: "from-blue-600 to-cyan-400",
    },
    {
      name: "Docker",
      description: "Containerization platform",
      guidance:
        "Containerize applications and dependencies. Master Dockerfiles, image layering, registry workflows and local development patterns to create portable environments.",
      source: "https://docs.docker.com/get-started/",
      image: dockerImg,
      color: "from-sky-500 to-indigo-400",
    },
    {
      name: "Kubernetes",
      description: "Container orchestration",
      guidance:
        "Kubernetes schedules containers at scale. Learn pods, services, deployments, configMaps, and operators. Practice cluster debugging and resource tuning for production readiness.",
      source: "https://kubernetes.io/docs/home/",
      image: k8sImg,
      color: "from-teal-500 to-cyan-400",
    },
    {
      name: "CI/CD",
      description: "Continuous Integration & Delivery",
      guidance:
        "Automate builds, tests and deployments using pipelines (GitHub Actions, GitLab CI, Jenkins). Focus on testing strategy, rollback safety, canary releases and observability.",
      source: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
      image: cicdImg,
      color: "from-indigo-500 to-purple-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2Zy...')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1
            ref={headingRef}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white tracking-tight"
          >
            Essential{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Cloud & DevOps
            </span>{" "}
            Technologies
          </h1>
          <div
            ref={separatorRef}
            className="w-0 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"
          ></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Infrastructure, automation and practices for building reliable
            cloud-native systems.
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
                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <div className="w-full md:w-48 flex-shrink-0 flex justify-center">
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

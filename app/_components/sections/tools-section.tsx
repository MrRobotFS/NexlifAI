"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import aiBrainAnimation from "../../../public/assets/ai-brain.json";
import waveAnimation from "../../../public/assets/wave.json";

gsap.registerPlugin(ScrollTrigger);

const automationFeatures = [
  {
    title: "Reduce tiempo manual",
    description: "Automatiza tareas repetitivas y libera tiempo para innovar",
    delay: 0.1
  },
  {
    title: "Mejora precisión",
    description: "Elimina errores humanos con procesos automatizados",
    delay: 0.2
  },
  {
    title: "Escalabilidad",
    description: "Crece sin aumentar proporcionalmente tu equipo",
    delay: 0.3
  },
  {
    title: "Análisis en tiempo real",
    description: "Obtén insights inmediatos para tomar mejores decisiones",
    delay: 0.4
  }
];

const technologyCards = [
  { name: "GitHub", icon: "🐙", description: "Control de versiones" },
  { name: "Slack", icon: "💬", description: "Comunicación" },
  { name: "Notion", icon: "📝", description: "Documentación" },
  { name: "Asana", icon: "📋", description: "Gestión de proyectos" },
  { name: "AWS", icon: "☁️", description: "Cloud computing" },
  { name: "Zapier", icon: "⚡", description: "Automatización" },
  { name: "Figma", icon: "🎨", description: "Diseño" },
  { name: "Jira", icon: "🎯", description: "Seguimiento" },
  { name: "Discord", icon: "🎮", description: "Comunidad" },
  { name: "Linear", icon: "📈", description: "Issue tracking" },
  { name: "Vercel", icon: "▲", description: "Deployment" },
  { name: "MongoDB", icon: "🍃", description: "Base de datos" }
];

const geometricShapes = [
  { type: "triangle", className: "w-8 h-8 bg-brand-primary/20 dark:bg-brand-light/20 clip-triangle" },
  { type: "circle", className: "w-6 h-6 bg-brand-accent/20 dark:bg-brand-light/20 rounded-full" },
  { type: "square", className: "w-7 h-7 bg-brand-secondary/20 dark:bg-brand-light/20 rounded-sm" },
  { type: "diamond", className: "w-6 h-6 bg-brand-primary/30 dark:bg-brand-light/30 rotate-45" },
];

const ToolsSection = () => {
  const containerRef = useRef(null);
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);
  const slide4Ref = useRef(null);

  useLayoutEffect(() => {
    const shapes = gsap.utils.toArray(".floating-shape");
    const features = gsap.utils.toArray(".automation-feature");
    const techCards = gsap.utils.toArray(".tech-card");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          scrub: 1,
          pin: true,
        },
      });

      // Initial setup - all slides positioned
      tl.set([slide2Ref.current, slide3Ref.current, slide4Ref.current], { x: "100vw" });

      // Slide 1: Hero with shapes animation
      tl.to({}, { duration: 0.3 }) // pause to view slide 1
        .fromTo(
          shapes,
          { scale: 0, rotation: 0, opacity: 0 },
          {
            scale: 1,
            rotation: 360,
            opacity: 0.7,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(1.7)",
          }
        );

      // Transition to Slide 2: Automation
      tl.to({}, { duration: 0.4 })
        .to(slide1Ref.current, { x: "-100vw", duration: 1, ease: "power2.inOut" })
        .to(slide2Ref.current, { x: 0, duration: 1, ease: "power2.inOut" }, "<")
        .fromTo(
          features,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Transition to Slide 3: Slack
      tl.to({}, { duration: 0.4 })
        .to(slide2Ref.current, { x: "-100vw", duration: 1, ease: "power2.inOut" })
        .to(slide3Ref.current, { x: 0, duration: 1, ease: "power2.inOut" }, "<")
        .to(containerRef.current, { backgroundColor: "#1e40af", duration: 0.8 }, "<");

      // Transition to Slide 4: Technology Cards
      tl.to({}, { duration: 0.4 })
        .to(slide3Ref.current, { x: "-100vw", duration: 1, ease: "power2.inOut" })
        .to(slide4Ref.current, { x: 0, duration: 1, ease: "power2.inOut" }, "<")
        .to(containerRef.current, { backgroundColor: "#f8fafc", duration: 0.8 }, "<")
        .fromTo(
          techCards,
          { y: 60, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "back.out(1.2)",
          },
          "-=0.3"
        );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Slide 1: Hero with Geometric Shapes */}
      <div ref={slide1Ref} className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">Able to work</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-gradient">
            with hundreds of tools
          </h3>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            NexlifAI connects to your favorite tools and services, from Asana to Zapier
          </p>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`shape-${i}`}
              className={`floating-shape absolute ${geometricShapes[i % geometricShapes.length].className}`}
              style={{
                left: `${10 + (i * 7) % 80}%`,
                top: `${15 + (i * 11) % 70}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Slide 2: Automation Benefits */}
      <div ref={slide2Ref} className="absolute inset-0 bg-gradient-to-br from-gray-50 to-brand-light/20 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side: AI Brain Animation */}
          <div className="flex flex-col items-center">
            <div className="w-80 h-80 mb-6">
              <Lottie
                animationData={aiBrainAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Automatización Inteligente
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Transforma tu empresa con IA que nunca duerme
              </p>
            </div>
          </div>

          {/* Right side: Benefits */}
          <div className="space-y-8">
            {automationFeatures.map((feature, i) => (
              <div key={i} className="automation-feature opacity-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{i + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 3: Slack Integration */}
      <div ref={slide3Ref} className="absolute inset-0 bg-blue-900 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Wave animation */}
          <div className="flex flex-col items-center text-white">
            <div className="w-60 h-60 mb-8">
              <Lottie
                animationData={waveAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="flex items-center justify-center mb-6">
              <svg className="w-12 h-12 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
              </svg>
              <h2 className="text-4xl font-bold">Integración Slack</h2>
            </div>
            <p className="text-xl text-center max-w-md">
              Comunícate con Devin directamente desde Slack y recibe actualizaciones en tiempo real
            </p>
          </div>

          {/* Right side: Slack conversation */}
          <div className="bg-gray-800 rounded-2xl p-8 max-w-lg">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
              <span className="text-gray-400 text-sm">#team-engineering</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  L
                </div>
                <div>
                  <div className="text-white text-sm">
                    <strong className="text-blue-400">Lucy</strong>
                    <span className="text-gray-400 ml-2">11:30</span>
                  </div>
                  <p className="text-gray-300 mt-1">
                    @Devin can you optimize our database queries? They&apos;re running slow
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  D
                </div>
                <div>
                  <div className="text-white text-sm">
                    <strong className="text-green-400">Devin</strong>
                    <span className="text-gray-400 ml-2">11:31</span>
                  </div>
                  <p className="text-gray-300 mt-1">
                    I&apos;ll analyze your database queries and optimize them. Starting with the most frequently used ones...
                  </p>
                  <div className="mt-2 bg-gray-700 rounded p-2 text-xs text-gray-400">
                    🔍 Analyzing 47 queries... Found 12 optimization opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 4: Technology Integration Cards */}
      <div ref={slide4Ref} className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Conecta con tus herramientas favoritas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Integra NexlifAI con más de 100+ servicios y plataformas que ya usas en tu empresa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologyCards.map((tech, i) => (
              <div
                key={i}
                className="tech-card opacity-0 group"
              >
                <div
                  className="flex flex-col items-center justify-center p-6 rounded-3xl backdrop-blur-md shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-32"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(25px)',
                    boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-center text-sm mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 text-center opacity-80">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent text-white font-medium">
              <span className="mr-2">+88 integraciones más</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
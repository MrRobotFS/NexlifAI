"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  { src: "/icons/asana.svg", alt: "Asana" },
  { src: "/icons/zapier.svg", alt: "Zapier" },
  { src: "/icons/notion.svg", alt: "Notion" },
  // Add more icons here
];

const ToolsSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const boxes = gsap.utils.toArray(".box");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });

      tl.to(contentRef.current, { opacity: 0, duration: 0.2 });

      tl.fromTo(
        boxes,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      tl.to(sectionRef.current, { backgroundColor: "#f3f4f6", duration: 0.5 }, "-=0.5");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={contentRef} className="text-center">
          <h2 className="text-4xl font-bold">Able to work</h2>
          <h3 className="text-4xl font-bold text-blue-500">with hundreds of tools</h3>
          <p className="mt-4 text-lg">
            Devin connects to your favorite MCP servers, from Asana to Zapier
          </p>
        </div>
      </div>
      <div ref={gridRef} className="absolute inset-0 grid grid-cols-5 gap-4 p-4">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="box flex items-center justify-center rounded-lg bg-white p-4 shadow-md">
            {icons[i % icons.length] && (
              <Image
                src={icons[i % icons.length].src}
                alt={icons[i % icons.length].alt}
                width={48}
                height={48}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
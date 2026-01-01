"use client";

import * as React from "react";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import "./our-story.css";

interface CardData {
  year: string;
  title: string;
  quote: string;
  description: string;
}

const CARD_DATA: CardData[] = [
  { year: "2020", title: "The Beginning",
    quote: "Where dreams quietly whispered… and we chose to listen.",
    description: "A simple spark turned into a defining moment. What started with passion soon became a purpose — a promise to build something truly meaningful."
  },
  { year: "2021", title: "First Milestone",
    quote: "Tiny steps turned into beautiful progress.",
    description: "We launched, learned, grew, and celebrated every heartbeat of encouragement from the wonderful people who believed in us."
  },
  { year: "2022", title: "Expansion",
    quote: "Every sunrise brought a new horizon.",
    description: "The journey widened. New people, bigger dreams, stronger confidence. Together, we expanded our voice and vision."
  },
  { year: "2023", title: "Innovation",
    quote: "Creativity became our rhythm.",
    description: "We experimented fearlessly, built passionately, and shaped ideas that inspired everyone connected to this story."
  },
  { year: "2024", title: "The Future",
    quote: "And the best chapter… is still being written.",
    description: "With hope, courage, and heart — we continue forward. Because this story isn’t ending… it’s only becoming more beautiful."
  }
];



/* ================= HERO ================= */
const HeroSection = ({ scrollY }: { scrollY: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) - 0.5) * 10;
    const y = (((e.clientY - rect.top) / rect.height) - 0.5) * 10;
    setMousePosition({ x, y });
  };

  const resetMousePosition = () => setMousePosition({ x: 0, y: 0 });

  const dots = useMemo(
    () =>
      Array.from({ length: 4 }).map(() => ({
        size: Math.random() * 20 + 10,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5,
        factor: 0.2 + Math.random() * 0.3
      })),
    []
  );

  if (!isClient) return <div className="hero-loading" />;

  return (
    <div
      className="hero-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMousePosition}
    >
      <div className="hero-pattern" />

      <div
        className="hero-content"
        style={{
          transform: `translateY(${-scrollY * 45}px)`,
          opacity: Math.max(0, 1 - scrollY * 2),
          backgroundPosition: `${50 + mousePosition.x}% ${50 + mousePosition.y}%`,
          transition: "background-position .15s ease-out",

          paddingTop: "4rem",
          paddingBottom: "3rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "1100px"
        }}
      >
        <h1>Our Story</h1>

        <p style={{
          maxWidth: "750px",
          margin: "1rem auto 0",
          lineHeight: "2rem"
        }}>
          Every journey begins with a quiet dream — a spark of hope that slowly
          turns into purpose. Ours began with passion, courage, and a heart full of
          belief. Over time it grew stronger… shaped by challenges, celebrated by
          milestones, and guided by the incredible people who stood beside us.
        </p>

        <p style={{
          maxWidth: "750px",
          margin: ".8rem auto 0",
          lineHeight: "2rem"
        }}>
          This isn’t just a timeline. It’s a collection of moments… lessons learned,
          memories cherished, and love poured into every step forward. Scroll down,
          and walk with us through the years we treasure.
        </p>
      </div>


      {/* Floating dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="floating-dot"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            animation: `float ${dot.duration}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
            transform: `translate(${mousePosition.x * dot.factor}px, ${mousePosition.y * dot.factor}px)`
          }}
        />
      ))}
    </div>
  );
};





/* ================= PAGE ================= */
export default function OurStoryPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient || !sectionRef.current) return;

    const handleScroll = () => {
      const h = window.innerHeight;
      const rect = sectionRef.current!.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const start = h;
      const end = start + rect.height - h;

      const progress = Math.min(
        1,
        Math.max(0, (scrollTop - start) / (end - start || 1))
      );

      setScrollY(progress);
      if (isInitialLoad && scrollTop > 0) setIsInitialLoad(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient, isInitialLoad]);



  const getCardStyle = useCallback(
    (index: number): React.CSSProperties => {
      if (!isClient) return { opacity: 0 };

      const total = CARD_DATA.length;
      const spacing = 30;
      const visible = 3;

      const firstVisible = Math.floor(scrollY * total);
      const isInStack = index >= firstVisible && index < firstVisible + visible;
      const stackPos = index - firstVisible;

      let y = 0;
      let opacity = 0;
      let scale = 0.9;
      let rotate = 0;
      let zIndex = total - index;

      if (index === 0 && isInitialLoad) {
        opacity = 1;
        scale = 1;
        zIndex = total + 1;
      } else if (isInStack) {
        y = stackPos * spacing;
        opacity = 1 - stackPos * 0.2;
        scale = 1 - stackPos * 0.05;
        rotate = stackPos * 2;
      }

      return {
        transform: `translate(-50%, calc(-50% + ${y}px)) scale(${scale}) rotate(${rotate}deg)`,
        opacity,
        zIndex,
        position: "absolute",
        width: "47rem",
        height: "400px",
        transition: "all 0.7s cubic-bezier(0.34,1.56,.64,1)",
        pointerEvents: opacity === 1 ? "auto" : "none"
      };
    },
    [scrollY, isClient, isInitialLoad]
  );



  if (!isClient) return <div className="page-loading" />;



  return (
    <div className="page-container">

      <HeroSection scrollY={scrollY} />


      <section
        ref={sectionRef}
        className="cards-section"
        style={{ minHeight: `${CARD_DATA.length * 120}vh` }}
      >
        <div className="cards-container">
          {CARD_DATA.map((card, i) => (
            <div key={card.year} className="story-card" style={getCardStyle(i)}>
              <div className="card-year">{card.year}</div>
              <h2>{card.title}</h2>
              <p className="card-quote">{card.quote}</p>
              <p className="card-body">{card.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ENDING TEXT (NO GAP, ON DARK BG) */}
      <section style={{
        padding: "6rem 2rem",
        background: "#0f172a",
        textAlign: "center"
      }}>
        <h2 style={{
          fontFamily: "Cinzel, serif",
          fontSize: "2.8rem",
          color: "#dcdcdc",
          marginBottom: "1.5rem"
        }}>
          And so… our story finds its pause.
        </h2>

        <p style={{
          fontFamily: "Great Vibes, cursive",
          fontSize: "2rem",
          color: "#e4e4e4",
          marginBottom: "1.5rem"
        }}>
          “Not an ending… just a gentle breath of gratitude.”
        </p>

        <p style={{
          fontFamily: "Libre Baskerville, serif",
          fontSize: "1.3rem",
          color: "#d0d0d0",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "2.1rem"
        }}>
          Because every story that is loved never truly ends — it lives on in
          memories, moments, and the beautiful tomorrows ahead.
        </p>
      </section>

    </div>
  );
}

"use client";

import { useEffect } from "react";
import { type SanityDocument } from "next-sanity";
import { urlFor } from "@/src/sanity/image";
import "./services.css";

export default function ServicesClient({
  services,
}: {
  services: SanityDocument[];
}) {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".slide-image, .slide-content"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.4 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services">
      {/* HERO */}
      <div className="services-hero-wrapper">
        <div className="services-hero">
          <div className="hero-left">
            <span className="services-eyebrow">SERVICES</span>

            <h1 className="services-title">
              We don't just build brands
              <br />
              We create systems
              <br />
              that help them bloom !
              <br />
              <em>With clarity, consistency and intent.</em>
            </h1>

            <p className="services-intro">
              Here are some services we offer that won our clients hearts
              over the past four years.
            </p>
          </div>

          <div className="hero-right">
            <img src="/services.jpeg" alt="Services visual" />
          </div>
        </div>
      </div>

      {/* SLIDES */}
      <div className="slides-wrapper">
        {services.map((service, index) => (
          <section
            key={service._id}
            className={`slide slide-${index + 1}`}
          >
            <div className="slide-inner">
              <div className="slide-image">
                {service.icon && (
                  <img
                    src={urlFor(service.icon)
                      .width(600)
                      .quality(90)
                      .auto("format")
                      .url()}
                    alt={service.title}
                  />
                )}
              </div>

              <div className="slide-content">
                <span className="slide-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                {service.impact && (
                  <em className="slide-impact">{service.impact}</em>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import "./services.css";

export default function Services() {

  useEffect(() => {
    // select both images and text blocks
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
      {
        threshold: 0.4, // triggers when 40% visible
      }
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
      {/* STICKY FULL PAGE SLIDES */}
      <div className="slides-wrapper">

        <section className="slide slide-1">
          <div className="slide-inner">
            <div className="slide-image">
              <img src="/s1.png" alt="Brand Strategy" />
            </div>
            <div className="slide-content">
              <span className="slide-number">01</span>
              <h3>Brand Strategy</h3>
              <p>
                We define the why before the what. Through positioning,
                messaging and brand architecture, we create a strategic
                foundation that guides every decision your brand makes.
              </p>
            </div>
          </div>
        </section>

        <section className="slide slide-2">
          <div className="slide-inner">
            <div className="slide-image">
              <img src="/s2.png" alt="Content Creation" />
            </div>
            <div className="slide-content">
              <span className="slide-number">02</span>
              <h3>Content Creation</h3>
              <p>
                Thoughtfully crafted visuals and words that feel aligned,
                intentional and built to connect with your audience.
              </p>
            </div>
          </div>
        </section>

        <section className="slide slide-3">
          <div className="slide-inner">
            <div className="slide-image">
              <img src="/s3.png" alt="Production" />
            </div>
            <div className="slide-content">
              <span className="slide-number">03</span>
              <h3>Production</h3>
              <p>
                From concept to execution, we bring ideas to life through
                refined production and attention to detail.
              </p>
            </div>
          </div>
        </section>

        <section className="slide slide-4">
          <div className="slide-inner">
            <div className="slide-image">
              <img src="/s4.png" alt="Social Media Branding" />
            </div>
            <div className="slide-content">
              <span className="slide-number">04</span>
              <h3>Social Media Branding</h3>
              <p>
                Cohesive systems that ensure your brand shows up consistently
                and confidently across platforms.
              </p>
            </div>
          </div>
        </section>

        <section className="slide slide-5">
          <div className="slide-inner">
            <div className="slide-image">
              <img src="/s5.png" alt="Influencer Marketing" />
            </div>
            <div className="slide-content">
              <span className="slide-number">05</span>
              <h3>Influencer Marketing</h3>
              <p>
                Strategic collaborations that feel authentic and extend
                your brand’s reach in meaningful ways.
              </p>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}

"use client"
import "./home.css"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Moving Background */}
      <div className="absolute inset-0 hero-bg animate-bgMove" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-brown/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center text-black border-white-400 bg-white bg-opacity-50 p-8 rounded-lg">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Where Brands Grow <span className="text-blue-400">With Purpose</span>
          </h1>

          <p className="text-lg md:text-xl text-black-200">
            Bloom Branding helps businesses shape clear identities through
            strategy, design, and storytelling.
          </p>

        </div>
      </div>
    </section>
  )
}

import "./services.css"
import { motion } from "framer-motion"

const Services = () => {
  const lines = [
    ["We", "don't", "just", "build", "brands"],
    ["We", "create", "systems"],
    ["that", "help", "them", "bloom", "!"],
    ["With", "clarity,", "consistency", "and", "intent."]
  ]

  return (
    <section className="services-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="services-hero-wrapper"
      >
        <div className="services-hero">
          <div className="hero-left">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="services-eyebrow"
            >
              SERVICES
            </motion.span>

            {/* Title */}
            <h1 className="services-title">
              {/* SERVICES text inside H1 */}

              {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="line">
                  {line.map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      className="word"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3 + lineIndex * 0.25 + wordIndex * 0.06,
                        duration: 0.45,
                        ease: "easeOut",
                      }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </div>
              ))}
            </h1>

          </div>

          {/* Image */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <img src="/services.jpeg" alt="Services visual" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Services

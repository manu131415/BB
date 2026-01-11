import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import React from "react";
import "./JourneySection.css"


export default function JourneySection() {
  const stats = [
    { key: "years", label: "Years Experience", value: 4, suffix: "+" },
    { key: "clients", label: "Clients Worked With", value: 35, suffix: "+" },
    { key: "projects", label: "Projects Delivered", value: 82, suffix: "+" },
    { key: "industries", label: "Industries Served", value: 8, suffix: "+" },
  ]

  return (
    <section className="relative container w-full py-20">
      <div className="absolute outer-box inset-0 bg-gradient-to-b from-bloom-butterYellow/30 to-transparent pointer-events-none" />

      <div className="relative box max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.6,
            margin: "-120px"
          }}
          variants={{
            hidden: { opacity: 0, y: 24, scale: 0.96 },
            show: { opacity: 1, y: 0, scale: 1 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 flex items-end justify-between gap-6"
        >
          <div className="text-top">
            <p className="inline-block px-3 py-1 text-xxl font-semibold text-bloom-darkChoc">Blooming the Brand</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-bloom-darkChoc">Our Journey</h2>
            <p className="text-box mt-2 max-w-2xl text-bloom-darkChoc/80">Momentum built on craft and clarity — strategy, content, and expressive digital experiences that help brands grow.</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 1 },
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((s) => (
            <motion.div
              key={s.key}
              variants={{ hidden: { opacity: 0, y: 18, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              className="group relative overflow-hidden rounded-2xl border border-bloom-darkChoc/15 bg-bloom-earlGray p-6 shadow-sm"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-bloom-butterYellow/40 blur-2xl" />
              <div className="relative">
                <div className="text-5xl font-extrabold leading-none tracking-tight text-bloom-electricBlue">
                  <CountUpNumber to={s.value} />
                  <span className="align-top text-2xl">{s.suffix}</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-bloom-darkChoc/90">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="rounded-xl border border-bloom-darkChoc/15 bg-white p-4 text-bloom-darkChoc/80">
            <p className="text-sm"><span className="font-semibold text-bloom-darkChoc">Strategy-led</span> to keep brand, content, and product aligned.</p>
          </div>
          <div className="rounded-xl border border-bloom-darkChoc/15 bg-white p-4 text-bloom-darkChoc/80">
            <p className="text-sm"><span className="font-semibold text-bloom-darkChoc">Content-first</span> storytelling with motion in mind.</p>
          </div>
          <div className="rounded-xl border border-bloom-darkChoc/15 bg-white p-4 text-bloom-darkChoc/80">
            <p className="text-sm"><span className="font-semibold text-bloom-darkChoc">Frontend craft</span> for fast, expressive experiences.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CountUpNumber({
  to,
  duration = 1.2,
}: {
  to: number
  duration?: number
}) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-120px",
    amount: 0.6,
  })

  const [val, setVal] = React.useState(0)

  React.useEffect(() => {
    if (!isInView) return

    let raf = 0
    const start = performance.now()

    function tick(now: number) {
      const p = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, to, duration])

  return <span ref={ref}>{val}</span>
}


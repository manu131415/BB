"use client"

import { useState } from "react"

type Status = "idle" | "submitting" | "success" | "error"

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  setStatus("submitting")

  const form = e.currentTarget
  const formData = new FormData(form)

  const services = formData.getAll("services")

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    subject: formData.get("subject"),
    budget: formData.get("budget"),
    timeline: formData.get("timeline"),
    services,
    message: formData.get("message"),
  }

  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!res.ok) throw new Error("Failed")

    setStatus("success")
    form.reset()
  } catch {
    setStatus("error")
  }
}


  return (
    <main className="min-h-[70vh] bg-bloom-butterYellow/20">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-bloom-darkChoc">Let's Bloom Your Brand</h1>
          <p className="mt-2 text-bloom-darkChoc/80">Tell us about your project. We’ll get back within 1–2 business days.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="w-full bg-bloom-earlGray rounded-xl p-6 shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Name" htmlFor="name">
                  <input id="name" name="name" required placeholder="Your full name" className="mt-1 rounded-md border border-bloom-darkChoc/30 bg-white px-3 py-2 text-bloom-darkChoc focus:outline-none focus:ring-2 focus:ring-bloom-electricBlue" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1 rounded-md border border-bloom-darkChoc/30 bg-white px-3 py-2 text-bloom-darkChoc focus:outline-none focus:ring-2 focus:ring-bloom-electricBlue" />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <input id="phone" name="phone" placeholder="Optional" className="mt-1 rounded-md border border-bloom-darkChoc/30 bg-white px-3 py-2 text-bloom-darkChoc focus:outline-none focus:ring-2 focus:ring-bloom-electricBlue" />
                </Field>
                <Field label="Company / Brand" htmlFor="company">
                  <input id="company" name="company" placeholder="Your company or brand" className="mt-1 rounded-md border border-bloom-darkChoc/30 bg-white px-3 py-2 text-bloom-darkChoc focus:outline-none focus:ring-2 focus:ring-bloom-electricBlue" />
                </Field>
                <Field label="Subject" htmlFor="subject">
                  <input id="subject" name="subject" required placeholder="Project or collaboration" className="mt-1 rounded-md border border-bloom-darkChoc/30 bg-white px-3 py-2 text-bloom-darkChoc focus:outline-none focus:ring-2 focus:ring-bloom-electricBlue" />
                </Field>
                <Field label="Budget" htmlFor="budget">
                  <select id="budget" name="budget" className="mt-1 rounded-md border border-bloom-darkChoc/30 bg-white px-3 py-2 text-bloom-darkChoc focus:outline-none focus:ring-2 focus:ring-bloom-electricBlue">
                    <option value="undisclosed">Undisclosed / Not sure</option>
                    <option value="under1l">Under ₹1L</option>
                    <option value="1to5l">₹1L–₹5L</option>
                    <option value="5to15l">₹5L–₹15L</option>
                    <option value="15lplus">₹15L+</option>
                  </select>
                </Field>
                <Field label="Timeline" htmlFor="timeline">
                  <select id="timeline" name="timeline" className="mt-1 rounded-md border border-bloom-darkChoc/30 bg-white px-3 py-2 text-bloom-darkChoc focus:outline-none focus:ring-2 focus:ring-bloom-electricBlue">
                    <option value="flexible">Flexible</option>
                    <option value="2-4w">2–4 weeks</option>
                    <option value="1-2m">1–2 months</option>
                    <option value="2mplus">2+ months</option>
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold text-bloom-darkChoc">Services interested</p>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Brand Strategy",
                    "Content Creation",
                    "Production",
                    "Social Media Branding",
                    "Frontend / Digital Experiences",
                  ].map((label) => (
                    <label key={label} className="flex items-center gap-2 text-bloom-darkChoc/90">
                      <input type="checkbox" name="services" value={label} className="accent-bloom-electricBlue" />
                      <span className="text-sm">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-col">
                <label htmlFor="message" className="text-sm font-semibold text-bloom-darkChoc">Project brief</label>
                <textarea id="message" name="message" required rows={6} placeholder="Tell us about your goals, audience, and success metrics" className="mt-1 rounded-md border border-bloom-darkChoc/30 bg-white px-3 py-2 text-bloom-darkChoc focus:outline-none focus:ring-2 focus:ring-bloom-electricBlue" />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button disabled={status === "submitting"} type="submit" className="inline-flex items-center justify-center rounded-md bg-bloom-electricBlue px-5 py-2.5 text-white font-semibold shadow hover:opacity-90 active:translate-y-[1px] transition disabled:opacity-60">
                  {status === "submitting" ? "Sending..." : "Send message"}
                </button>
                {status === "success" && (
                  <span className="text-sm font-medium text-bloom-darkChoc">Thanks! We'll be in touch.</span>
                )}
                {status === "error" && (
                  <span className="text-sm font-medium text-red-600">Something went wrong. Please try again.</span>
                )}
              </div>

              <p className="mt-4 text-xs text-bloom-darkChoc/80">We respect your privacy. Your information will only be used to contact you about your enquiry.</p>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-xl border border-bloom-darkChoc/20 bg-white p-5">
              <h2 className="text-lg font-bold text-bloom-darkChoc">Reach us</h2>
              <p className="mt-2 text-sm text-bloom-darkChoc/80">Email: contact@bloom.example</p>
              <p className="text-sm text-bloom-darkChoc/80">Phone: +91 00000 00000</p>
              <p className="text-sm text-bloom-darkChoc/80">Hours: Mon–Fri, 9am–6pm IST</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-bloom-darkChoc/20">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.58%2C12.97%2C77.62%2C12.99&layer=mapnik"
                className="w-full h-56"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-bloom-darkChoc">{label}</label>
      {children}
    </div>
  )
}

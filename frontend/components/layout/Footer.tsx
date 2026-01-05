"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import "./layout.css";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 mt-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14 grid-footer md:grid-cols-4">

        {/* Brand */}
        <div className="col1 md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-3">
            Bloom <span className="special">Branding</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Building meaningful brands with creativity, strategy & soul.
          </p>

          {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">📧 hello@bloombranding.com</p>
          <p className="text-sm mt-1">📞 +91 98765 43210</p>
        </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a className="social-icon instagram-pulse" href="https://www.instagram.com/bloom.branding_/">
              <FiInstagram />
            </a>
            <a className="social-icon" href="#">
              <FiLinkedin />
            </a>
            <a className="social-icon" href="#">
              <FiTwitter />
            </a>
          </div>
         
          
        </div>


        {/* Enquiry Box */}
        <div className="footer-enquiry">
          <h3 className="text-white font-semibold mb-4">
            Quick Enquiry
          </h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="footer-input resize-none"
            />
            <button type="submit" className="footer-btn">
              Send Enquiry
            </button>
          </form>
        </div>


        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/our-story">Our Story</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Brand Strategy</li>
            <li>Visual Identity</li>
            <li>Social Media</li>
            <li>Web Design</li>
          </ul>
        </div>

        

        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Bloom Branding. All rights reserved.
      </div>
    </motion.footer>
  );
}

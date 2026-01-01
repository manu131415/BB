BB/
│
├── frontend/                 # Next.js (Frontend + Backend APIs)
│   │
│   ├── app/
│   │   ├── layout.tsx        # Root layout (Navbar, Footer)
│   │   ├── globals.css
│   │   ├── page.tsx          # Home (/)
│   │
│   │   ├── services/
│   │   │   └── page.tsx      # /services
│   │
│   │   ├── our-story/
│   │   │   └── page.tsx      # /our-story
│   │
│   │   ├── founder/
│   │   │   └── page.tsx      # /founder
│   │
│   │   ├── contact/
│   │   │   └── page.tsx      # /contact
│   │
│   │   └── api/              # ✅ BACKEND (Next.js APIs)
│   │       ├── enquiry/
│   │       │   └── route.ts  # POST contact form
│   │       │
│   │       ├── services/
│   │       │   └── route.ts  # GET services (optional)
│   │       │
│   │       └── newsletter/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesPreview.tsx
│   │   │   ├── Testimonials.tsx 
│   │   │   └── Clients.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx
│   │   │   └── ServiceList.tsx
│   │   │
│   │   ├── about/
│   │   │   ├── OurStory.tsx
│   │   │   └── FounderProfile.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── ContactForm.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── SectionTitle.tsx
│   │
│   ├── lib/
│   │   ├── sanity.ts         # Sanity client
│   │   ├── sanity.queries.ts # GROQ queries
│   │   ├── mail.ts           # Email helper (Nodemailer)
│   │   └── types.ts          # TS interfaces
│   │
│   ├── utils/
│   │   ├── validation.ts
│   │   └── constants.ts
│   │
│   ├── middleware.ts         # Security / rate-limit (optional)
│   └── env.d.ts
│
├── cms/                      # Sanity Studio
│   ├── schemaTypes/
│   │   ├── homepage.ts
│   │   ├── service.ts
│   │   ├── testimonial.ts
│   │   ├── client.ts
│   │   ├── founder.ts
│   │   └── enquiry.ts
│   │
│   ├── sanity.config.ts
│   └── sanity.cli.ts
│
├── .env.local
├── package.json
└── README.md

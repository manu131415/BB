import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageTransition from "@/components/layout/PageTransition"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <PageTransition>
          {children}
        </PageTransition>

        <Footer />
      </body>
    </html>
  )
}

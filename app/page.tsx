import Header from "@/components/header"
import Hero from "@/components/hero"
import BloomfieldsOverview from "@/components/bloomfields-overview"
import BloomfieldsLocation from "@/components/bloomfields-location"
import BloomfieldsUnits from "@/components/bloomfields-units"
import BloomfieldsPayment from "@/components/bloomfields-payment"
import BloomfieldsAmenities from "@/components/bloomfields-amenities"
import BloomfieldsGallery from "@/components/bloomfields-gallery"
import ContactForm from "@/components/contact-form"
import AboutDeveloper from "@/components/about-developer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BloomfieldsOverview />
      <BloomfieldsLocation />
      <BloomfieldsUnits />
      <BloomfieldsPayment />
      <BloomfieldsAmenities />
      <BloomfieldsGallery />

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-right">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">تواصل معنا</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">نحن هنا لمساعدتك</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">هاتف</p>
                  <a href="tel:+201008900076" className="text-primary text-2xl font-bold hover:underline">
                    0100 8900 076
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 text-right">سجل اهتمامك</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <AboutDeveloper />
      <Footer />
      <WhatsAppWidget />
      <MobileBottomBar />
    </main>
  )
}

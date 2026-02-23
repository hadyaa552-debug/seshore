"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "+201008900076"
  const whatsappMessage = encodeURIComponent("مرحباً، أنا مهتم بمشروع Seashore Hyde Park الساحل الشمالي وأريد معرفة المزيد من التفاصيل")

  useEffect(() => { setIsVisible(true) }, [])

  return (
    <section id="home" className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/high1.webp')" }}>
      <div className="absolute inset-0 bg-black/55" />
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-3">Seashore</h1>
        <p className="text-2xl lg:text-3xl text-white/90 mb-4 font-light">هايد بارك سي شور</p>
        <p className="text-lg text-white/80 mb-10">عيش حياة الرفاهية على شاطئ البحر المتوسط مباشرة في رأس الحكمة</p>
        <p className="text-sm text-white/70 mb-10 tracking-widest uppercase">by Hyde Park Developments</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
            target="_blank" rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 font-semibold transition-colors text-lg">
            تواصل عبر واتساب
          </a>
          <a href={`tel:${phoneNumber}`}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold transition-colors text-lg">
            اتصل الآن
          </a>
        </div>
      </div>
    </section>
  )
}

"use client"

import { MessageCircle } from "lucide-react"
import { siteData } from "@/data/content"

export function FloatingWhatsApp() {
  return (
    <button
      onClick={() =>
        window.open(
          `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(siteData.contact.whatsappMessage)}`,
          "_blank"
        )
      }
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  )
}

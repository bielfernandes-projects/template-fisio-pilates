"use client"

import { MessageCircle, Camera, Menu, MapPin } from "lucide-react"
import { siteData } from "@/data/content"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"

export default function Home() {
  const { hero, services, about, contact } = siteData

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navLinks = [
    { label: "Serviços", id: "servicos" },
    { label: "Sobre", id: "sobre" },
    { label: "Contato", id: "contato" },
  ]

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold text-foreground">Fisio & Pilates</span>

          <nav className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
            <Button variant="outline" size="sm" onClick={() => scrollTo("contato")}>
              Contato
            </Button>
          </nav>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-sm" className="sm:hidden" />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Fisio & Pilates</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.id}
                    render={
                      <Button variant="ghost" className="justify-start text-base" />
                    }
                    onClick={() => scrollTo(link.id)}
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  render={
                    <Button className="mt-4 h-14 gap-2" />
                  }
                  onClick={() =>
                    window.open(
                      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`,
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="h-5 w-5" />
                  {hero.ctaText}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="pt-16">
        <section className="bg-gradient-to-b from-secondary/40 to-background px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
              {hero.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {hero.subheadline}
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Button
                size="lg"
                className="h-14 gap-2 transition-transform hover:scale-105"
                onClick={() =>
                  window.open(
                    `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="h-5 w-5" />
                {hero.ctaText}
              </Button>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-card px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              Nossos Serviços
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Tratamentos especializados para cada necessidade
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-muted/30 px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              {about.crefito}
            </Badge>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              {about.name}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {about.bio}
            </p>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-border bg-card px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Fisio & Pilates</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Cuidando do seu movimento com excelência e dedicação. Sua saúde está em boas mãos.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Links Rápidos
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">{contact.address}</p>
            <button
              onClick={() => window.open(contact.instagramUrl, "_blank")}
              className="mt-3 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Camera className="h-4 w-4" />
              @instagram_da_clinica
            </button>

            <button
              onClick={() => window.open(contact.googleMapsUrl, "_blank")}
              className="mt-4 flex aspect-[16/9] w-full items-center justify-center rounded-lg border border-border bg-muted/50 transition-colors hover:bg-muted"
            >
              <MapPin className="h-6 w-6 text-primary" />
              <span className="ml-2 text-sm text-muted-foreground">Ver no mapa</span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {about.name} — {about.crefito}
          </p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </>
  )
}

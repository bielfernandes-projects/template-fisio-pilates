"use client"

import { MessageCircle, Camera, Menu, MapPin, Phone, Mail, Activity, Bone, HeartPulse } from "lucide-react"
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <span className="text-xl font-semibold text-foreground">Fisio & Pilates</span>

          <nav className="hidden items-center gap-10 sm:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xl text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
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
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 to-background px-6 py-24 md:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23196642' fill-opacity='0.4' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E")`,
            }}
          />
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
              {hero.headline}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
              {hero.subheadline}
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Button
                size="lg"
                className="h-14 transition-transform hover:scale-105"
                onClick={() =>
                  window.open(
                    `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`,
                    "_blank"
                  )
                }
              >
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
              {services.map((service) => {
                const Icon = [Activity, Bone, HeartPulse][service.id - 1]
                return (
                  <Card
                    key={service.id}
                    className="border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                  >
                    <CardContent className="p-8">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
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
        <section className="border-y border-border bg-card px-6 py-16">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">10+</span>
              <p className="mt-1 text-sm text-muted-foreground">Anos de experiência</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">500+</span>
              <p className="mt-1 text-sm text-muted-foreground">Pacientes atendidos</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">3</span>
              <p className="mt-1 text-sm text-muted-foreground">Especialidades</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-border bg-card px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-[1fr_1fr_1.5fr]">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Fisio & Pilates</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Cuidando do seu movimento com excelência e dedicação. Sua saúde está em boas mãos.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                {contact.address}
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                {contact.phone}
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                {contact.email}
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <Button
                size="sm"
                className="gap-2"
                onClick={() =>
                  window.open(
                    `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open(contact.instagramUrl, "_blank")}
              >
                <Camera className="h-4 w-4" />
                Instagram
              </Button>
            </div>
          </div>

          <button
            onClick={() => window.open(contact.googleMapsUrl, "_blank")}
            className="flex min-h-[220px] w-full items-center justify-center rounded-xl border border-border bg-muted/50 transition-colors hover:bg-muted md:min-h-full"
          >
            <MapPin className="h-8 w-8 text-primary" />
            <span className="ml-2 text-sm text-muted-foreground">Abrir no mapa</span>
          </button>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} — {about.name} — {about.crefito}
          </p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </>
  )
}

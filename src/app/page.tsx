'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Sofa,
  Hammer,
  HardHat,
  Ruler,
  ClipboardCheck,
  ClipboardList,
  CheckCircle2,
  ChevronDown,
  Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

/* ============================== Datos ============================== */

const NAV = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

const WHATSAPP_URL =
  'https://wa.me/5215512345678?text=Hola%20CONSTRUTECH%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n.'

const STATS = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '+200', label: 'Proyectos completados' },
  { value: '+50', label: 'Clientes satisfechos' },
  { value: '100%', label: 'Compromiso de calidad' },
]

const SERVICES = [
  {
    icon: Building2,
    title: 'Construcción',
    desc: 'Edificación de proyectos residenciales, comerciales e industriales llave en mano, con los más altos estándares de calidad.',
  },
  {
    icon: Sofa,
    title: 'Interiorismo',
    desc: 'Diseño y ejecución de interiores que combinan estética, funcionalidad y confort para elevar cada espacio.',
  },
  {
    icon: Hammer,
    title: 'Remodelaciones',
    desc: 'Transformamos casas, oficinas y locales con remodelaciones integrales rápidas y sin sorpresas.',
  },
  {
    icon: HardHat,
    title: 'Obra civil e industrial',
    desc: 'Naves industriales, cimentaciones y obra gris con ingeniería sólida y cumplimiento normativo.',
  },
  {
    icon: Ruler,
    title: 'Diseño arquitectónico',
    desc: 'Planos, renders y proyectos ejecutivos que traducen tus ideas en construcciones reales.',
  },
  {
    icon: ClipboardCheck,
    title: 'Gerencia de proyectos',
    desc: 'Supervisión, control de costos y calendarización profesional para que tu obra salga en tiempo y forma.',
  },
]

const PROJECTS = [
  {
    img: '/img/proyecto-residencial.png',
    cat: 'Residencial',
    title: 'Residencial Privada Las Lomas',
    loc: 'CDMX',
    desc: 'Complejo de 24 departamentos de lujo con amenidades.',
  },
  {
    img: '/img/proyecto-interiorismo.png',
    cat: 'Interiorismo',
    title: 'Departamento Polanco',
    loc: 'Miguel Hidalgo',
    desc: 'Interiorismo integral de 180 m² con acabados premium.',
  },
  {
    img: '/img/proyecto-comercial.png',
    cat: 'Comercial',
    title: 'Corporativo Insurgentes',
    loc: 'Benito Juárez',
    desc: 'Remodelación corporativa de 1,200 m² en 14 semanas.',
  },
  {
    img: '/img/proyecto-industrial.png',
    cat: 'Industrial',
    title: 'Nave Industrial Tlalnepantla',
    loc: 'Edo. de México',
    desc: 'Nave de 3,500 m² con estructura de acero y patios de maniobras.',
  },
]

const GALLERY = [
  { img: '/img/galeria-1.png', alt: 'Soldadura de viga de acero en obra' },
  { img: '/img/galeria-2.png', alt: 'Cocina remodelada con iluminación cálida' },
  { img: '/img/galeria-3.png', alt: 'Edificio en construcción con andamios' },
  { img: '/img/galeria-4.png', alt: 'Planos arquitectónicos y casco de seguridad' },
  { img: '/img/galeria-5.png', alt: 'Baño de lujo con acabados en piedra' },
  { img: '/img/galeria-6.png', alt: 'Colado de concreto con equipo de obra' },
]

const STEPS = [
  {
    n: '01',
    icon: ClipboardList,
    title: 'Contacto inicial',
    desc: 'Escuchamos tu idea, entendemos tus necesidades y agendamos una visita sin costo.',
  },
  {
    n: '02',
    icon: Ruler,
    title: 'Presupuesto sin costo',
    desc: 'Recibes una propuesta detallada con tiempos, materiales y costos transparentes.',
  },
  {
    n: '03',
    icon: HardHat,
    title: 'Ejecución y supervisión',
    desc: 'Construimos con personal certificado y te mantenemos informado en cada avance.',
  },
  {
    n: '04',
    icon: CheckCircle2,
    title: 'Entrega y garantía',
    desc: 'Entregamos tu proyecto puntual, limpio y con garantía por escrito.',
  },
]

const CHECKLIST = [
  'Personal certificado y especializado',
  'Materiales de primera calidad con garantía',
  'Cumplimiento estricto de normas y seguridad',
  'Entregas puntuales y presupuestos transparentes',
]

const CONTACT_INFO = [
  { icon: Phone, label: 'Teléfono', value: '+52 55 1234 5678' },
  { icon: Mail, label: 'Correo', value: 'contacto@construtech.mx' },
  { icon: MapPin, label: 'Zona de trabajo', value: 'CDMX y Área Metropolitana' },
  { icon: Clock, label: 'Horario', value: 'Lun – Sáb · 8:00 a 18:00 h' },
]

/* ============================== Helpers ============================== */

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.246-.579-.502-.485-.686-.48-.169-.008-.365-.01-.56-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

function SectionHeader({
  label,
  title,
  desc,
  align = 'center',
}: {
  label: string
  title: React.ReactNode
  desc?: string
  align?: 'center' | 'left'
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'
      }
    >
      <div
        className={`inline-flex items-center gap-2 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="h-2 w-2 bg-primary" />
        <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
          {label}
        </span>
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
        {title}
      </h2>
      {desc && <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>}
    </motion.div>
  )
}

/* ============================== Header ============================== */

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#141619]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="CONSTRUTECH inicio">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-md bg-white p-1">
            <Image
              src="/img/logo-icon.png"
              alt="Logotipo de CONSTRUTECH"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-black tracking-wide text-white">CONSTRUTECH</span>
            <span className="block text-[10px] text-muted-foreground">
              Construcciones &amp; Interiorismo
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contacto">
            <Button className="h-11 bg-primary px-5 font-bold text-primary-foreground hover:bg-primary/90">
              <WhatsAppIcon className="h-4 w-4" />
              Solicitar cotización
            </Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#141619] lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Navegación móvil">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-2">
              <Button className="h-11 w-full bg-primary font-bold text-primary-foreground hover:bg-primary/90">
                <WhatsAppIcon className="h-4 w-4" />
                Solicitar cotización
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

/* ============================== Hero ============================== */

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/img/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141619]/95 via-[#141619]/75 to-[#141619]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-transparent to-[#141619]/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 border border-primary/50 bg-primary/10 px-4 py-2.5">
            <span className="h-2.5 w-2.5 bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.15em] text-primary sm:text-sm">
              EMPRESA LÍDER EN CONSTRUCCIÓN · CDMX
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Construcción e Interiorismo{' '}
            <span className="text-primary">de Alta Calidad</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Soluciones integrales para proyectos residenciales, comerciales e
            industriales. Transformamos ideas en espacios excepcionales con
            profesionalismo y precisión.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto">
              <Button className="h-12 gap-2 bg-primary px-7 text-sm font-bold text-primary-foreground hover:bg-primary/90">
                Solicitar cotización
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#proyectos">
              <Button
                variant="outline"
                className="h-12 border-white/25 bg-white/5 px-7 text-sm font-bold text-white backdrop-blur hover:bg-white/10 hover:text-primary"
              >
                Ver proyectos
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Tarjeta flotante PROYECTOS */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute right-8 top-10 hidden rounded-xl border border-white/10 bg-[#26292d]/90 p-5 shadow-2xl backdrop-blur lg:block"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-primary">
            PROYECTOS
          </span>
          <span className="mt-1 block text-4xl font-black text-white">+200</span>
          <span className="mt-1 block text-sm text-gray-400">Obras entregadas</span>
        </motion.div>

        {/* Barra de estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 divide-white/10 border border-white/10 bg-[#17191d]/85 backdrop-blur lg:grid-cols-4 lg:divide-x"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-7 text-center [&:nth-child(-n+2)]:border-b [&:nth-child(-n+2)]:border-white/10 lg:border-b-0 lg:[&:nth-child(-n+2)]:border-b-0"
            >
              <span className="block text-3xl font-black text-primary lg:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-sm text-gray-400">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Indicador scroll */}
        <div className="mt-10 hidden justify-center lg:flex" aria-hidden="true">
          <a href="#nosotros" className="flex flex-col items-center gap-1 text-gray-500 transition-colors hover:text-primary">
            <span className="text-[10px] font-bold tracking-[0.3em]">SCROLL</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ============================== Nosotros ============================== */

function Nosotros() {
  return (
    <section id="nosotros" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div
            className="absolute -left-4 -top-4 hidden h-28 w-28 border-l-4 border-t-4 border-primary sm:block"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/img/nosotros.png"
              alt="Equipo de ingenieros de CONSTRUTECH revisando planos en obra"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-7 right-4 rounded-lg bg-primary p-5 text-primary-foreground shadow-2xl sm:right-8">
            <span className="block text-3xl font-black leading-none">+15</span>
            <span className="mt-1 block text-[11px] font-bold uppercase tracking-wider">
              Años de experiencia
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Sobre Nosotros
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Expertos en construir espacios que inspiran
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            En CONSTRUTECH somos una empresa 100% mexicana con más de 15 años
            construyendo confianza. Nuestro equipo de arquitectos, ingenieros y
            constructores combina experiencia técnica con una obsesión por el
            detalle, para entregar obras que superan las expectativas de cada cliente.
          </p>
          <ul className="mt-7 space-y-3.5">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-gray-300 sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <a href="#contacto">
              <Button className="h-12 gap-2 bg-primary px-7 text-sm font-bold text-primary-foreground hover:bg-primary/90">
                Solicitar cotización
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================== Servicios ============================== */

function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-20 border-t border-white/5 bg-[#101214] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Nuestros Servicios"
          title="Soluciones integrales de construcción"
          desc="Un solo proveedor para todo tu proyecto: desde el diseño arquitectónico hasta la última capa de pintura."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (idx % 3) * 0.08 }}
              className="group rounded-lg border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================== Proyectos ============================== */

function Proyectos() {
  return (
    <section id="proyectos" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Proyectos"
          title="Proyectos destacados"
          desc="Una muestra de las más de 200 obras entregadas en toda la Ciudad de México y su área metropolitana."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (idx % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-white/10"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.img}
                  alt={`${project.title} — ${project.desc}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  {project.cat}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-300">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {project.loc}
                  </p>
                  <p className="mt-1.5 text-sm text-gray-400">{project.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================== Galería ============================== */

function Galeria() {
  return (
    <section id="galeria" className="scroll-mt-20 border-t border-white/5 bg-[#101214] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Galería"
          title="Nuestro trabajo en imágenes"
          desc="Obra gris, acabados, remodelaciones e interiores: cada fotografía es un proyecto real entregado."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY.map((photo, idx) => (
            <motion.figure
              key={photo.img}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (idx % 3) * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-lg border border-white/10"
            >
              <Image
                src={photo.img}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption
                className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/85 to-transparent p-4 pt-8 text-xs font-medium text-gray-200 transition-transform duration-300 group-hover:translate-y-0"
                aria-hidden={true}
              >
                {photo.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================== Proceso ============================== */

function Proceso() {
  return (
    <section id="proceso" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Nuestro Proceso"
          title="Así trabajamos"
          desc="Un método probado en más de 200 obras que garantiza resultados sin sorpresas."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-8 hidden border-t border-dashed border-white/15 lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.n}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center lg:px-2"
              >
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="mt-4 block text-sm font-black tracking-[0.2em] text-primary">
                  {step.n}
                </span>
                <h3 className="mt-1.5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mx-auto mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================== Contacto ============================== */

const EMPTY_FORM = { name: '', email: '', phone: '', projectType: '', message: '' }

function Contacto() {
  const { toast } = useToast()
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'No se pudo enviar la solicitud.')
      }
      toast({
        title: '¡Solicitud enviada!',
        description: 'Gracias por confiar en CONSTRUTECH. Te contactaremos en menos de 24 horas.',
      })
      setForm(EMPTY_FORM)
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: err instanceof Error ? err.message : 'Inténtalo de nuevo en unos minutos.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'h-11 border-white/10 bg-[#1b1e22] text-white placeholder:text-gray-500 focus-visible:ring-primary'

  return (
    <section id="contacto" className="scroll-mt-20 border-t border-white/5 bg-[#101214] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contacto"
          title="Solicita tu cotización gratis"
          desc="Cuéntanos sobre tu proyecto y un especialista te contactará en menos de 24 horas hábiles."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Información */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 lg:col-span-2"
          >
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-card p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                    {item.label}
                  </span>
                  <span className="block text-sm font-semibold text-white">{item.value}</span>
                </div>
              </div>
            ))}

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block">
              <Button className="h-12 w-full gap-2 bg-[#25D366] text-sm font-bold text-white hover:bg-[#1ebe5a]">
                <WhatsAppIcon className="h-5 w-5" />
                Escríbenos por WhatsApp
              </Button>
            </a>
          </motion.div>

          {/* Formulario */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            onSubmit={handleSubmit}
            className="rounded-lg border border-white/10 bg-card p-6 sm:p-8 lg:col-span-3"
            aria-label="Formulario de cotización"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                  Nombre completo *
                </label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ej. Juan Pérez"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                  Correo electrónico *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@correo.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
                  Teléfono *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+52 55 0000 0000"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-gray-300">
                  Tipo de proyecto *
                </label>
                <Select
                  value={form.projectType}
                  onValueChange={(value) => setForm({ ...form, projectType: value })}
                >
                  <SelectTrigger id="projectType" className="h-11 border-white/10 bg-[#1b1e22] text-white data-[placeholder]:text-gray-500">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent className="border-white/10 bg-[#1b1e22] text-white">
                    <SelectItem value="Residencial">Residencial</SelectItem>
                    <SelectItem value="Comercial">Comercial</SelectItem>
                    <SelectItem value="Industrial">Industrial</SelectItem>
                    <SelectItem value="Interiorismo">Interiorismo</SelectItem>
                    <SelectItem value="Remodelación">Remodelación</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                  Cuéntanos sobre tu proyecto *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Ej. Necesito remodelar mi departamento de 90 m² en la Roma Norte..."
                  className="border-white/10 bg-[#1b1e22] text-white placeholder:text-gray-500 focus-visible:ring-primary"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="mt-7 h-12 w-full gap-2 bg-primary text-sm font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar solicitud
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
            <p className="mt-3 text-center text-xs text-gray-500">
              Al enviar aceptas ser contactado por nuestro equipo. Sin spam, sin compromiso.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

/* ============================== Footer ============================== */

function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0d0f11]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-md bg-white p-1">
              <Image
                src="/img/logo-icon.png"
                alt="Logotipo de CONSTRUTECH"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-black tracking-wide text-white">CONSTRUTECH</span>
              <span className="block text-[10px] text-muted-foreground">
                Construcciones &amp; Interiorismo
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Empresa líder en construcción e interiorismo en la Ciudad de México.
            Transformamos ideas en espacios excepcionales con profesionalismo y
            precisión.
          </p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Enlaces rápidos
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contacto</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {CONTACT_INFO.map((item) => (
              <li key={item.label} className="flex items-center gap-2.5">
                <item.icon className="h-4 w-4 shrink-0 text-primary" />
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} CONSTRUTECH — Construcciones &amp; Interiorismo.
            Todos los derechos reservados.
          </p>
          <p>Ciudad de México, CDMX</p>
        </div>
      </div>
    </footer>
  )
}

/* ============================== WhatsApp flotante ============================== */

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}

/* ============================== Página ============================== */

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Nosotros />
        <Servicios />
        <Proyectos />
        <Galeria />
        <Proceso />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

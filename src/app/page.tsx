'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  CircleCheck,
  CircleCheckBig,
  Target,
  Eye,
  Building2,
  Hammer,
  Palette,
  ShieldCheck,
  Star,
  Search,
  LayoutGrid,
  HardHat,
  Home as HomeIcon,
  Phone,
  Facebook,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

/* ============================================================
   GRUPO CONSTRUTECH — Clon exacto del sitio original
   Contenido, colores y estructura extraídos del bundle real
   ============================================================ */

const YELLOW = '#F2B705'
const DARK = '#0f1923'

const LOGO = '/assets/logo-construtech-light.png'
const IMG_CASA = '/assets/CASA-BdNrGWgy.jpg'
const IMG_CANCHA = '/assets/CANCHA-Jgu3Sqk6.png'
const IMG_HERRERIA = '/assets/HERRERIA_CANCHA-WScwCVFr.jpg'
const IMG_CASETA = '/assets/CASETA_3-BCDr8rA9.png'
const IMG_JARDIN = '/assets/JARDIN_2-CYLxEkJQ.jpg'
const IMG_ADECUACIONES = '/assets/adecuaciones-residenciales.jpg'
const IMG_INTERIORISMO_SALA = '/assets/servicio-interiorismo.jpg'
const IMG_TERRAZA = '/assets/servicio-terraza.jpg'
const IMG_FACHADA = '/assets/servicio-fachada.jpg'
const IMG_INSTALACIONES = '/assets/servicio-instalaciones.jpg'
const IMG_COCINA = '/assets/servicio-cocina.jpg'
const IMG_CLOSET = '/assets/servicio-closet.jpg'
const IMG_RESTAURANTE = '/assets/proyecto-restaurante.jpg'
const IMG_IMPERMEABILIZACION = '/assets/proyecto-impermeabilizacion.jpg'
const IMG_FORO = '/assets/proyecto-foro.jpg'

const WHATSAPP_URL =
  'https://wa.me/525631223666?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n.'
const WHATSAPP_INFO_URL =
  'https://wa.me/525631223666?text=Hola%2C%20me%20interesa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios.'
const CONTACT_EMAIL = 'ventas@grupoconstrutech.com.mx'
const PHONE_TEL_HREF = 'tel:+525566016471'
const PHONE_DISPLAY = '+52 55 6601 6471'
const WHATSAPP_DISPLAY = '+52 56 3122 3666'
const ADDRESS = 'Eje 3 Oriente Arneses 588, Tula, Iztapalapa, 09800 Ciudad de México, CDMX'
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`
const SOCIAL_FACEBOOK = 'https://www.facebook.com/profile.php?id=61593899015845'
const SOCIAL_INSTAGRAM = 'https://www.instagram.com/grupoconstrutechmx/'
const SOCIAL_TIKTOK = 'https://www.tiktok.com/@grupoconstrutechmx'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
      />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.23.71-.09 1.57-.02 2.33.03.55.14 1.13.51 1.56.86 1.04 2.56 1.19 3.62.42.61-.42.97-1.13 1.06-1.84.06-.5.05-1.01.05-1.51V.02h5.06z"
      />
    </svg>
  )
}

/* ============================== Datos ============================== */

const NAV_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Galería', href: '#galeria', gallery: true },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

const STATS = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '+200', label: 'Proyectos completados' },
  { value: '+50', label: 'Clientes satisfechos' },
  { value: '100%', label: 'Compromiso y garantía' },
]

const CHECKLIST = [
  'Equipo con enfoque técnico, operativo y de atención al detalle',
  'Cronograma y presupuesto claros desde la planeación',
  'Cumplimiento de normativas técnicas vigentes en cada etapa',
  'Diseño y acabados orientados a funcionalidad, estética y durabilidad',
  'Comunicación clara y directa con el cliente en todo el proceso',
]

const CATEGORIES = [
  'Residencial',
  'Comercial',
  'Industrial',
  'Remodelación',
  'Interiorismo',
  'Mantenimiento',
]

const SERVICES = [
  {
    icon: Building2,
    title: 'Construcción e Infraestructura',
    description:
      'Ejecución de obra civil, naves industriales, techumbres, velarias y estructuras metálicas.',
    image: IMG_HERRERIA,
    tag: 'Obra Civil · Estructuras · Velarias',
    filter: 'Construcción e Infraestructura',
    photos: [
      { src: IMG_HERRERIA, alt: 'Velaria y herrería para cancha deportiva' },
      { src: IMG_CANCHA, alt: 'Techumbre estructural para zona deportiva' },
      { src: IMG_FORO, alt: 'Construcción de foro al aire libre' },
    ],
  },
  {
    icon: Hammer,
    title: 'Remodelaciones y Acabados',
    description:
      'Transformación de espacios, oficinas, comercios y viviendas, con tablaroca y pintura.',
    image: IMG_RESTAURANTE,
    tag: 'Oficinas · Comercios · Viviendas',
    filter: 'Remodelaciones y Acabados',
    photos: [
      { src: IMG_RESTAURANTE, alt: 'Remodelación integral de restaurante' },
      { src: IMG_CASA, alt: 'Remodelación residencial con acabados modernos' },
      { src: IMG_CASETA, alt: 'Remodelación de casetas con pintura e iluminación' },
    ],
  },
  {
    icon: Palette,
    title: 'Interiorismo y Exteriores',
    description:
      'Diseño y adecuación de espacios, iluminación, paisajismo y áreas comunes.',
    image: IMG_JARDIN,
    tag: 'Iluminación · Paisajismo · Áreas Comunes',
    filter: 'Interiorismo y Exteriores',
    photos: [
      { src: IMG_JARDIN, alt: 'Diseño de áreas de lectura y paisajismo' },
      { src: IMG_INTERIORISMO_SALA, alt: 'Interiorismo residencial con mobiliario a la medida' },
      { src: IMG_TERRAZA, alt: 'Terraza exterior con pérgola de madera' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Mantenimiento y Protección',
    description:
      'Impermeabilización de azoteas y mantenimiento preventivo y correctivo de inmuebles.',
    image: IMG_IMPERMEABILIZACION,
    tag: 'Impermeabilización · Preventivo · Correctivo',
    filter: 'Mantenimiento y Protección',
    photos: [
      { src: IMG_IMPERMEABILIZACION, alt: 'Impermeabilización de cubiertas y azoteas' },
      { src: IMG_FACHADA, alt: 'Mantenimiento y resane de fachadas con andamio' },
      { src: IMG_INSTALACIONES, alt: 'Revisión de instalaciones hidráulicas y eléctricas' },
    ],
  },
  {
    icon: HomeIcon,
    title: 'Adecuaciones Residenciales',
    description:
      'Adaptaciones y mejoras a la medida en viviendas: tablaroca, closets, cocinas, carpintería, pintura, plomería e instalación eléctrica.',
    image: IMG_ADECUACIONES,
    tag: 'Closets · Cocinas · Tablaroca',
    filter: 'Adecuaciones Residenciales',
    photos: [
      { src: IMG_ADECUACIONES, alt: 'Adecuación de espacios con tablaroca' },
      { src: IMG_COCINA, alt: 'Instalación de cocina integral a la medida' },
      { src: IMG_CLOSET, alt: 'Closet empotrado con carpintería personalizada' },
    ],
  },
]

const PROJECTS = [
  {
    id: 1,
    title: 'Velaria para Gradas y Cancha',
    category: 'Construcción e Infraestructura',
    galleryCategory: 'Construcción e Infraestructura',
    type: 'Estructura Metálica',
    description:
      'Diseño, fabricación e instalación de velaría para zona de gradas, proporcionando sombra, funcionalidad e integración al entorno de las canchas deportivas.',
    image: IMG_HERRERIA,
    size: 'large',
  },
  {
    id: 2,
    title: 'Techumbre para Zona Deportiva',
    category: 'Construcción e Infraestructura',
    galleryCategory: 'Construcción e Infraestructura',
    type: 'Estructura Metálica',
    description:
      'Construcción e instalación de techumbre estructural sobre área deportiva, garantizando protección solar y continuidad de actividades al aire libre.',
    image: IMG_CANCHA,
    size: 'medium',
  },
  {
    id: 3,
    title: 'Diseño de Áreas de Lectura',
    category: 'Interiorismo y Exteriores',
    galleryCategory: 'Interiorismo y Exteriores',
    type: 'Paisajismo',
    description:
      'Diseño y adecuación de jardines y áreas de lectura al aire libre con bancas de concreto y andadores.',
    image: IMG_JARDIN,
    size: 'medium',
  },
  {
    id: 4,
    title: 'Remodelación de Casetas',
    category: 'Remodelaciones y Acabados',
    galleryCategory: 'Remodelaciones y Acabados',
    type: 'Acabados',
    description:
      'Remodelación integral incluyendo resanado, aplanado, pintura, instalación eléctrica, ventanas y mobiliario de baño.',
    image: IMG_CASETA,
    size: 'large',
  },
  {
    id: 5,
    title: 'Remodelación Residencial',
    category: 'Remodelaciones y Acabados',
    galleryCategory: 'Remodelaciones y Acabados',
    type: 'Interiorismo · Acabados',
    description:
      'Remodelación integral de departamento: pisos, muros, plafones, iluminación y closets con acabados duraderos.',
    image: IMG_CASA,
    size: 'medium',
  },
  {
    id: 6,
    title: 'Remodelación de Restaurante',
    category: 'Remodelaciones y Acabados',
    galleryCategory: 'Remodelaciones y Acabados',
    type: 'Acabados',
    description:
      'Remodelación integral de restaurante: barra, comedor, pisos, iluminación y acabados para renovar la imagen y mejorar la experiencia de los clientes.',
    image: IMG_RESTAURANTE,
    size: 'medium',
  },
  {
    id: 7,
    title: 'Mantenimiento de Cubiertas',
    category: 'Mantenimiento y Protección',
    galleryCategory: 'Mantenimiento y Protección',
    type: 'Impermeabilización',
    description:
      'Aplicación de sistema de impermeabilización sobre cubiertas y azoteas, garantizando protección contra humedad y filtraciones, y prolongando la vida útil de la construcción.',
    image: IMG_IMPERMEABILIZACION,
    size: 'medium',
  },
  {
    id: 8,
    title: 'Construcción de Foro al Aire Libre',
    category: 'Construcción e Infraestructura',
    galleryCategory: 'Construcción e Infraestructura',
    type: 'Obra Civil',
    description:
      'Construcción de foro al aire libre con plataforma de concreto y estructura metálica, integrado al entorno para eventos y actividades públicas.',
    image: IMG_FORO,
    size: 'large',
  },
  {
    id: 9,
    title: 'Adecuación Residencial Integral',
    category: 'Adecuaciones Residenciales',
    galleryCategory: 'Adecuaciones Residenciales',
    type: 'Carpintería · Tablaroca',
    description:
      'Adecuaciones a la medida en vivienda: tablaroca, closets empotrados, cocina integral y carpintería personalizada que optimizan cada espacio del hogar.',
    image: IMG_ADECUACIONES,
    size: 'medium',
  },
]

const GALLERY_FILTERS = [
  'Todos',
  'Construcción e Infraestructura',
  'Remodelaciones y Acabados',
  'Interiorismo y Exteriores',
  'Mantenimiento y Protección',
  'Adecuaciones Residenciales',
]

const GALLERY_CARDS = [
  {
    title: 'Líneas de servicio',
    text: 'Construcción e infraestructura, remodelaciones y acabados, interiorismo y exteriores, mantenimiento y protección, y adecuaciones residenciales.',
  },
  {
    title: 'Ejecución',
    text: 'Coordinación de materiales, tiempos y obra con supervisión técnica permanente en cada etapa.',
  },
  {
    title: 'Perfil del cliente',
    text: 'Atención personalizada para proyectos residenciales, comerciales e industriales con prioridad en funcionalidad y resultados duraderos.',
  },
]

const PROCESS_STEPS = [
  {
    icon: Search,
    number: '01',
    title: 'Análisis y Diseño',
    description:
      'Definición de objetivos, alcance, renders 3D y planos técnicos.',
    accent: YELLOW,
  },
  {
    icon: LayoutGrid,
    number: '02',
    title: 'Planeación y Gestión',
    description:
      'Cronograma de actividades, coordinación técnica, materiales y presupuestos.',
    accent: DARK,
  },
  {
    icon: HardHat,
    number: '03',
    title: 'Ejecución de Obra',
    description:
      'Construcción con supervisión técnica permanente y control de calidad en obra.',
    accent: YELLOW,
  },
  {
    icon: CircleCheckBig,
    number: '04',
    title: 'Entrega Final',
    description:
      'Pruebas de calidad, limpieza general, manuales de uso y acompañamiento post-obra.',
    accent: DARK,
  },
]

const TESTIMONIALS = [
  {
    name: 'María López',
    role: 'Dueña de vivienda',
    quote:
      'Nos entregaron un proyecto impecable, con atención muy cercana y resultados que superaron nuestras expectativas. La calidad y la limpieza de obra fueron excelentes.',
  },
  {
    name: 'Carlos Ruiz',
    role: 'Propietario comercial',
    quote:
      'Trabajaron con mucha responsabilidad y puntualidad. Todo estuvo bien coordinado y el resultado final se ve profesional y muy funcional para nuestro negocio.',
  },
  {
    name: 'Ana García',
    role: 'Cliente residencial',
    quote:
      'Desde la primera reunión nos hicieron sentir seguros. Entendieron bien nuestra idea y la ejecutaron con detalle, estilo y calidad en cada acabado.',
  },
]

const FAQS = [
  {
    question: '¿Qué tipo de proyectos manejan?',
    answer:
      'Proyectos residenciales, comerciales e industriales de construcción, remodelación, adecuaciones, acabados, techumbres, velarias, interiorismo y mantenimiento.',
  },
  {
    question: '¿Hacen trabajo a medida?',
    answer:
      'Sí, diseñamos y ejecutamos soluciones personalizadas según las necesidades del cliente.',
  },
  {
    question: '¿Trabajan en toda la Ciudad de México?',
    answer:
      'Sí, con cobertura en la Ciudad de México y área metropolitana.',
  },
  {
    question: '¿Cómo garantizan la calidad?',
    answer:
      'Con supervisión técnica constante, materiales certificados y cumplimiento de las normativas vigentes.',
  },
]

const FOOTER_LINKS = {
  empresa: [
    { label: 'Sobre nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Proceso de trabajo', href: '#proceso' },
  ],
  servicios: [
    { label: 'Construcción e infraestructura', href: '#servicios' },
    { label: 'Remodelaciones y acabados', href: '#servicios' },
    { label: 'Interiorismo y exteriores', href: '#servicios' },
    { label: 'Mantenimiento y protección', href: '#servicios' },
    { label: 'Adecuaciones residenciales', href: '#servicios' },
  ],
}

/* ============================== Navbar ============================== */

function Navbar({ onOpenGallery }: { onOpenGallery: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f1923] shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center rounded-md bg-white px-3 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
          <img
            src={LOGO}
            alt="Grupo Construtech Logo"
            className="h-9 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative group">
              {link.gallery ? (
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    onOpenGallery()
                  }}
                  className="relative inline-flex items-center justify-center py-2 text-gray-300 transition-colors duration-200 group-hover:text-[#F2B705]"
                  style={{ fontSize: '0.875rem', letterSpacing: '0.04em' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#F2B705] shadow-[0_0_14px_rgba(242,183,5,0.7)] transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <a
                  href={link.href}
                  className="relative inline-flex items-center justify-center py-2 text-gray-300 transition-colors duration-200 group-hover:text-[#F2B705]"
                  style={{ fontSize: '0.875rem', letterSpacing: '0.04em' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#F2B705] shadow-[0_0_14px_rgba(242,183,5,0.7)] transition-all duration-300 group-hover:w-full" />
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-[#0f1923] px-5 py-2.5 transition-opacity duration-200 hover:opacity-90"
          style={{ backgroundColor: YELLOW, fontSize: '0.875rem', fontWeight: 700 }}
        >
          <WhatsAppIcon className="w-4 h-4 fill-current flex-shrink-0" />
          Solicitar cotización
        </a>

        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f1923] border-t border-gray-700 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.gallery ? (
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false)
                      onOpenGallery()
                    }}
                    className="text-gray-300 hover:text-[#F2B705] transition-colors duration-200 block py-1 text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-[#F2B705] transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[#0f1923] px-5 py-3 w-full justify-center transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: YELLOW, fontSize: '0.875rem', fontWeight: 700 }}
          >
            <WhatsAppIcon className="w-4 h-4 fill-current flex-shrink-0" />
            Solicitar cotización
          </a>
        </div>
      )}
    </nav>
  )
}

/* ============================== Hero ============================== */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(15,25,35,0.9), rgba(15,25,35,0.7) 40%, rgba(15,25,35,0.45)), url(${IMG_CASA})`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,183,5,0.18),transparent_29%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(242,183,5,0.06)_45%,transparent_100%)] opacity-80" />

      <motion.div
        className="absolute right-8 top-28 hidden xl:flex flex-col gap-3 rounded-2xl border border-[#F2B705]/25 bg-[#0f1923]/60 p-4 shadow-[0_20px_60px_rgba(15,25,35,0.35)] backdrop-blur-md"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{ delay: 0.5, duration: 0.7, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
      >
        <div className="text-xs uppercase tracking-[0.18em] text-[#F2B705]">Proyectos</div>
        <div className="text-3xl font-black text-white">+200</div>
        <div className="text-sm text-gray-300">Obras entregadas</div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border"
            style={{
              backgroundColor: 'rgba(242,183,5,0.15)',
              borderColor: 'rgba(242,183,5,0.4)',
              color: YELLOW,
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="w-2 h-2 animate-pulse" style={{ backgroundColor: YELLOW }} />
            <span
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                fontWeight: 600,
              }}
            >
              CONSTRUCCIÓN · REMODELACIÓN · INTERIORISMO · CDMX
            </span>
          </motion.div>

          <motion.h1
            className="text-white mb-6"
            style={{ fontWeight: 800, lineHeight: 1.15, fontSize: 'clamp(2.1rem, 4.5vw, 3.6rem)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Construcción e Interiorismo:{' '}
            <span style={{ color: YELLOW }}>Diseño que trasciende, obra que perdura</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 mb-10 max-w-xl"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transformamos ideas en espacios excepcionales con
            profesionalismo, precisión y cumplimiento de normativas técnicas.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <motion.a
              href="#footer"
              className="inline-flex items-center gap-2 text-[#0f1923] px-8 py-4 transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: YELLOW, fontWeight: 700, fontSize: '0.95rem' }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar cotización
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#proyectos"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 px-8 py-4 transition-all duration-200"
              style={{ fontWeight: 600, fontSize: '0.95rem' }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver proyectos
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden border border-[#F2B705]/15 shadow-[0_20px_45px_rgba(15,25,35,0.18)]"
          style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-[#0f1923]/80 backdrop-blur px-6 py-5 text-center transition-colors duration-300 hover:bg-[#F2B705]/15"
              style={{ cursor: 'default' }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.1, duration: 0.5 }}
            >
              <div className="mb-1" style={{ color: YELLOW, fontWeight: 800, fontSize: '1.8rem' }}>
                {stat.value}
              </div>
              <div className="text-gray-400" style={{ fontSize: '0.8rem' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#nosotros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#F2B705] transition-colors duration-200 flex flex-col items-center gap-1 z-10"
        style={{ textDecoration: 'none' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  )
}

/* ============================== Nosotros ============================== */

function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative overflow-hidden shadow-2xl">
              <motion.img
                src={IMG_CANCHA}
                alt="Proyecto de techumbre - Grupo Construtech"
                className="w-full h-[500px] object-cover"
                initial={{ scale: 1.08, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/60 to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 text-[#0f1923] p-6 shadow-xl"
              style={{ backgroundColor: YELLOW }}
              initial={{ opacity: 0, y: 24, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div style={{ fontWeight: 800, fontSize: '2.5rem' }}>+200</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                Proyectos
                <br />
                Completados
              </div>
            </motion.div>

            <div
              className="absolute top-6 -left-4 w-2 h-32"
              style={{ backgroundColor: YELLOW }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 mb-4" style={{ color: YELLOW }}>
              <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
              <span
                style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}
              >
                SOBRE NOSOTROS
              </span>
            </div>

            <h2
              className="text-[#0f1923] mb-6"
              style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
            >
              Expertos en Construcción e{' '}
              <span style={{ color: YELLOW }}>Innovación</span>
            </h2>

            <p
              className="text-gray-600 mb-6"
              style={{ lineHeight: 1.8, fontSize: '0.975rem' }}
            >
              <strong>Grupo Construtech S.A. de C.V.</strong> es una empresa con
              sede en la Ciudad de México, especializada en servicios integrales
              de construcción, remodelación, interiorismo, mantenimiento y
              adecuaciones para proyectos residenciales, comerciales e
              industriales.
            </p>

            <div
              className="mb-8 border-l-4 pl-5"
              style={{ borderColor: YELLOW }}
            >
              <p
                className="text-gray-700"
                style={{ lineHeight: 1.8, fontSize: '0.975rem' }}
              >
                Nos basamos en <strong>estrictos estándares de seguridad (NOM)</strong>,
                control de calidad en obra y el uso de <strong>materiales certificados</strong>
                {' '}en cada proyecto.
              </p>
            </div>

            <ul className="mb-10 space-y-3">
              {CHECKLIST.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <CircleCheck
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: YELLOW }}
                  />
                  <span className="text-gray-700" style={{ fontSize: '0.9rem' }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mb-8 rounded-[28px] border border-[#0f1923]/10 bg-[#f8fafb] p-6">
              <div className="mb-4 inline-flex items-center gap-2" style={{ color: YELLOW }}>
                <div className="h-0.5 w-8 bg-[#F2B705]" />
                <span
                  style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em' }}
                >
                  ENFOQUE OPERATIVO
                </span>
              </div>
              <p
                className="text-gray-600"
                style={{ fontSize: '0.9rem', lineHeight: 1.7 }}
              >
                Nuestra forma de trabajo combina diseño, planificación y ejecución
                real en campo. Desde la definición del proyecto hasta la entrega
                final, cada decisión se orienta a la funcionalidad, la precisión
                constructiva y la eficiencia del proyecto.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="bg-gray-50 border border-gray-100 p-5 transition-colors duration-300 hover:border-[#F2B705]/40"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(242,183,5,0.1)' }}
                  >
                    <Target className="w-4 h-4" style={{ color: YELLOW }} />
                  </div>
                  <span
                    className="text-[#0f1923]"
                    style={{ fontWeight: 700, fontSize: '0.9rem' }}
                  >
                    Misión
                  </span>
                </div>
                <p
                  className="text-gray-600"
                  style={{ fontSize: '0.85rem', lineHeight: 1.7 }}
                >
                  Ofrecer soluciones integrales que combinen funcionalidad, diseño y
                  eficiencia, garantizando la satisfacción total de cada cliente.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 border border-gray-100 p-5 transition-colors duration-300 hover:border-[#F2B705]/40"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(242,183,5,0.1)' }}
                  >
                    <Eye className="w-4 h-4" style={{ color: YELLOW }} />
                  </div>
                  <span
                    className="text-[#0f1923]"
                    style={{ fontWeight: 700, fontSize: '0.9rem' }}
                  >
                    Visión
                  </span>
                </div>
                <p
                  className="text-gray-600"
                  style={{ fontSize: '0.85rem', lineHeight: 1.7 }}
                >
                  Consolidarnos como una empresa referente en construcción,
                  remodelación e interiorismo en México, reconocida por su
                  cumplimiento, compromiso e innovación.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============================== Categorías ============================== */

function Categories() {
  return (
    <section className="border-y border-[#0f1923]/5 bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-5 text-center">
          <span className="inline-block rounded-full border border-[#F2B705]/30 bg-[#F2B705]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0f1923]">
            Tipos de proyecto
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat}
              className="flex items-center justify-center rounded-xl border border-[#0f1923]/8 bg-[#f8f9fa] px-4 py-4 text-center text-sm font-semibold tracking-[0.08em] text-[#0f1923]/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F2B705]/40 hover:bg-[#F2B705]/5"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================== Servicios ============================== */

function Servicios() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)
  const [lightbox, setLightbox] = useState<(typeof SERVICES)[number] | null>(null)
  const [photoIndex, setPhotoIndex] = useState(0)

  const updateArrows = useCallback(() => {
    const el = servicesRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateArrows()
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [updateArrows])

  function scrollServices(dir: 1 | -1) {
    const el = servicesRef.current
    if (!el) return
    const card = el.querySelector('[data-service-card]') as HTMLElement | null
    const step = card ? card.offsetWidth + 20 : 320
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  function openServicePhotos(service: (typeof SERVICES)[number], index: number) {
    setLightbox(service)
    setPhotoIndex(index)
  }

  return (
    <section id="servicios" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 justify-center" style={{ color: YELLOW }}>
            <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
            <span
              style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}
            >
              NUESTROS SERVICIOS
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
          </div>
          <h2
            className="text-[#0f1923] mb-4"
            style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
          >
            Nuestros <span style={{ color: YELLOW }}>Servicios</span>
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto"
            style={{ fontSize: '0.975rem', lineHeight: 1.7 }}
          >
            Cinco líneas de servicio que cubren todo el ciclo del proyecto:
            construcción, remodelación, interiorismo, mantenimiento y
            adecuaciones residenciales.
          </p>
        </div>

        <div className="relative">
          {canLeft && (
            <button
              type="button"
              onClick={() => scrollServices(-1)}
              aria-label="Ver servicios anteriores"
              className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#F2B705] text-[#0f1923] shadow-[0_8px_22px_rgba(15,25,35,0.28)] transition-transform duration-200 hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {canRight && (
            <button
              type="button"
              onClick={() => scrollServices(1)}
              aria-label="Ver más servicios"
              className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#F2B705] text-[#0f1923] shadow-[0_8px_22px_rgba(15,25,35,0.28)] transition-transform duration-200 hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
          <div
            ref={servicesRef}
            onScroll={updateArrows}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 py-3"
          >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              data-service-card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group w-[86%] max-w-[440px] shrink-0 snap-start overflow-hidden border border-[#0f1923]/8 bg-white transition-all duration-300 hover:border-[#F2B705]/40 hover:shadow-[0_18px_40px_rgba(15,25,35,0.08)] sm:w-[calc(50%-10px)] xl:w-[calc(25%-15px)]"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/75 via-[#0f1923]/20 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block rounded-full border border-[#F2B705]/40 bg-[#F2B705] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0f1923]">
                    {service.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#F2B705]/20 bg-[#F2B705]/10">
                    <service.icon className="h-4 w-4" style={{ color: YELLOW }} />
                  </div>
                  <h3
                    className="text-[#0f1923]"
                    style={{ fontWeight: 700, fontSize: '0.94rem' }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  className="text-gray-500"
                  style={{ fontSize: '0.8rem', lineHeight: 1.7 }}
                >
                  {service.description}
                </p>

                <div className="mt-4 border-t border-[#0f1923]/8 pt-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className="text-gray-400"
                      style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em' }}
                    >
                      FOTOGRAFÍAS
                    </span>
                    <span
                      className="text-gray-400"
                      style={{ fontSize: '0.66rem', fontWeight: 600 }}
                    >
                      {service.photos.length} fotos
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {service.photos.map((photo, pi) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => openServicePhotos(service, pi)}
                        className="group/photo relative h-16 overflow-hidden rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
                        aria-label={`Ampliar fotografía: ${photo.alt}`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover/photo:scale-110"
                        />
                        <div className="absolute inset-0 bg-[#0f1923]/0 transition-colors duration-200 group-hover/photo:bg-[#0f1923]/25" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>

          <div
            className="mt-2 flex min-h-[1.75rem] items-center justify-center gap-2 text-gray-400"
            style={{ fontSize: '0.72rem', letterSpacing: '0.06em' }}
          >
            {canRight && (
              <>
                Desliza para descubrir más servicios
                <ChevronRight className="h-3.5 w-3.5 animate-pulse" style={{ color: YELLOW }} />
              </>
            )}
          </div>
        </div>
      </div>

      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-2xl overflow-hidden rounded-[28px] border border-[#F2B705]/20 bg-[#0f1923] p-0 text-white shadow-[0_30px_90px_rgba(15,25,35,0.4)] sm:max-w-2xl">
          {lightbox && (
            <>
              <div className="relative">
                <img
                  src={lightbox.photos[photoIndex].src}
                  alt={lightbox.photos[photoIndex].alt}
                  className="h-64 w-full object-cover sm:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => setPhotoIndex((i) => Math.max(0, i - 1))}
                  disabled={photoIndex === 0}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0f1923]/70 text-white transition-colors hover:border-[#F2B705] hover:text-[#F2B705] disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Fotografía anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setPhotoIndex((i) => Math.min(lightbox.photos.length - 1, i + 1))
                  }
                  disabled={photoIndex === lightbox.photos.length - 1}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0f1923]/70 text-white transition-colors hover:border-[#F2B705] hover:text-[#F2B705] disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Fotografía siguiente"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="absolute bottom-3 right-4 rounded-full bg-[#0f1923]/80 px-3 py-1 text-xs font-semibold text-[#F2B705]">
                  {photoIndex + 1} / {lightbox.photos.length}
                </span>
              </div>
              <div className="space-y-4 p-6">
                <div className="inline-flex items-center rounded-full border border-[#F2B705]/30 bg-[#F2B705]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F2B705]">
                  {lightbox.title}
                </div>
                <DialogHeader className="space-y-2 text-left">
                  <DialogTitle className="text-xl font-black text-white">
                    {lightbox.photos[photoIndex].alt}
                  </DialogTitle>
                  <DialogDescription className="text-sm leading-6 text-gray-300">
                    {lightbox.description}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

/* ============================== Proyectos ============================== */

function Proyectos({ onOpenGallery }: { onOpenGallery: () => void }) {
  const [selected, setSelected] = useState<(typeof PROJECTS)[number] | null>(null)

  return (
    <>
      <section id="proyectos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4" style={{ color: YELLOW }}>
                <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
                <span
                  style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}
                >
                  PROYECTOS RECIENTES
                </span>
              </div>
              <h2
                className="text-[#0f1923]"
                style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
              >
                Nuestro <span style={{ color: YELLOW }}>Portafolio</span>
              </h2>
            </div>
            <p
              className="text-gray-500 max-w-sm"
              style={{ fontSize: '0.9rem', lineHeight: 1.7 }}
            >
              Obra real organizada por línea de servicio: construcción,
              remodelación, interiorismo, mantenimiento y adecuaciones
              residenciales.
            </p>
          </motion.div>

          <div className="mb-12 columns-1 gap-4 sm:columns-2 xl:columns-3">
            {PROJECTS.map((project, i) => (
              <motion.button
                key={project.title}
                type="button"
                onClick={() => setSelected(project)}
                className="group relative mb-4 block w-full overflow-hidden rounded-[28px] border border-[#0f1923]/8 bg-white text-left shadow-[0_10px_25px_rgba(15,25,35,0.08)]"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    project.size === 'large' ? 'h-[22rem]' : 'h-[16rem]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/90 via-[#0f1923]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-block rounded-full border border-[#F2B705]/30 bg-[#F2B705] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0f1923]">
                    {project.category}
                  </span>
                  <h3
                    className="mt-3 text-white"
                    style={{ fontWeight: 700, fontSize: '1rem' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mt-1 text-gray-300"
                    style={{ fontSize: '0.72rem' }}
                  >
                    {project.type}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <button
              type="button"
              onClick={onOpenGallery}
              className="inline-flex items-center gap-2 px-8 py-4 transition-opacity duration-200 hover:opacity-85"
              style={{
                backgroundColor: YELLOW,
                color: DARK,
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              Ver galería completa
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl overflow-hidden rounded-[28px] border border-[#F2B705]/20 bg-[#0f1923] p-0 text-white shadow-[0_30px_90px_rgba(15,25,35,0.4)] sm:max-w-3xl">
          {selected && (
            <>
              <div className="relative h-64 w-full overflow-hidden sm:h-80">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-[#0f1923]/20 to-transparent" />
              </div>
              <div className="space-y-5 p-6 sm:p-8">
                <div className="inline-flex items-center rounded-full border border-[#F2B705]/30 bg-[#F2B705]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F2B705]">
                  {selected.category}
                </div>
                <DialogHeader className="space-y-3 text-left">
                  <DialogTitle className="text-2xl font-black text-white sm:text-3xl">
                    {selected.title}
                  </DialogTitle>
                  <DialogDescription className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2B705]">
                    {selected.type}
                  </DialogDescription>
                </DialogHeader>
                <p className="text-sm leading-7 text-gray-300 sm:text-[0.95rem]">
                  {selected.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

/* ============================== Proceso ============================== */

function Proceso() {
  return (
    <section id="proceso" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center" style={{ color: YELLOW }}>
            <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
            <span
              style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}
            >
              NUESTRO PROCESO
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
          </div>
          <h2
            className="text-[#0f1923] mb-4"
            style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
          >
            Cómo <span style={{ color: YELLOW }}>Trabajamos</span>
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontSize: '0.975rem', lineHeight: 1.7 }}
          >
            Un único proceso de cuatro pasos, del análisis inicial a la entrega
            final de tu proyecto.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 opacity-20"
            style={{ background: `linear-gradient(to right, ${YELLOW}, ${DARK}, ${YELLOW})` }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="group relative bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F2B705]/35 text-center"
              >
                <div
                  className="absolute top-4 right-4"
                  style={{ fontWeight: 900, fontSize: '3rem', lineHeight: 1, color: '#f3f4f6' }}
                >
                  {step.number}
                </div>
                <div
                  className="w-16 h-16 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md"
                  style={{ backgroundColor: step.accent }}
                >
                  <step.icon
                    className="w-8 h-8"
                    style={{ color: step.accent === YELLOW ? DARK : YELLOW }}
                  />
                </div>
                <h3
                  className="text-[#0f1923] mb-3"
                  style={{ fontWeight: 700, fontSize: '1.05rem' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-gray-500"
                  style={{ fontSize: '0.875rem', lineHeight: 1.7 }}
                >
                  {step.description}
                </p>
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 flex items-center justify-center shadow-md text-[#0f1923]"
                  style={{ backgroundColor: YELLOW, fontSize: '0.75rem', fontWeight: 800 }}
                >
                  {Number(step.number)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================== Testimonios ============================== */

function Testimonios() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 justify-center" style={{ color: YELLOW }}>
            <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
            <span
              style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}
            >
              TESTIMONIOS
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
          </div>
          <h2
            className="text-[#0f1923] mb-4"
            style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
          >
            Lo que dicen nuestros <span style={{ color: YELLOW }}>clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              className="border border-gray-200 bg-[#f8f9fa] p-7 shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-4 flex gap-1 text-[#F2B705]">
                {Array.from({ length: 5 }).map((_, o) => (
                  <Star key={o} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p
                className="text-gray-600 mb-6"
                style={{ fontSize: '0.92rem', lineHeight: 1.8 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div
                  className="font-bold text-[#0f1923]"
                  style={{ fontSize: '0.95rem' }}
                >
                  {t.name}
                </div>
                <div className="text-gray-500" style={{ fontSize: '0.8rem' }}>
                  {t.role}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================== FAQ ============================== */

function FAQ() {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 justify-center" style={{ color: YELLOW }}>
            <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
            <span
              style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}
            >
              DUDAS COMUNES
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
          </div>
          <h2
            className="text-[#0f1923] mb-4"
            style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
          >
            Preguntas <span style={{ color: YELLOW }}>Frecuentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <details
              key={faq.question}
              className="group border border-[#0f1923]/8 bg-white p-0 shadow-[0_10px_30px_rgba(15,25,35,0.02)]"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-left text-[#0f1923]">
                <span style={{ fontWeight: 700, fontSize: '0.96rem' }}>{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-[#0f1923] transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div
                className="border-t border-[#0f1923]/8 px-6 py-4 text-gray-600"
                style={{ fontSize: '0.9rem', lineHeight: 1.7 }}
              >
                {faq.answer}
              </div>
            </details>
          ))}
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
        description:
          'Gracias por confiar en Grupo Construtech. Te contactaremos en menos de 24 horas.',
      })
      setForm(EMPTY_FORM)
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description:
          err instanceof Error ? err.message : 'Inténtalo de nuevo en unos minutos.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  function sendWhatsApp() {
    const message = `Hola, soy ${form.name || 'un cliente interesado'}.${
      form.projectType ? ` Tipo de proyecto: ${form.projectType}.` : ''
    } ${form.message || 'Me interesa solicitar una cotización.'}`
    window.open(
      `https://wa.me/525631223666?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const inputClass =
    'h-11 border-[#0f1923]/15 bg-white text-[#0f1923] placeholder:text-gray-400 focus-visible:ring-[#F2B705] focus-visible:border-[#F2B705]'

  return (
    <section id="contacto" className="scroll-mt-24 py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 mb-1" style={{ color: YELLOW }}>
              <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
              <span
                style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}
              >
                CONTACTO
              </span>
            </div>
            <h2
              className="text-[#0f1923] mb-2"
              style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
            >
              Solicite su <span style={{ color: YELLOW }}>cotización</span>
            </h2>
            <p
              className="text-gray-500 mb-6"
              style={{ fontSize: '0.975rem', lineHeight: 1.7 }}
            >
              Si necesitas más información o quieres solicitar un presupuesto,
              envíanos tus datos y con gusto te asesoramos sin costo.
            </p>

            <div className="flex items-center gap-4 rounded-[22px] border border-[#0f1923]/8 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#F2B705]/20 bg-[#F2B705]/10">
                <Mail className="h-5 w-5" style={{ color: YELLOW }} />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                  Correo
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block text-sm font-semibold text-[#0f1923] transition-colors hover:text-[#F2B705] break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-[22px] border border-[#0f1923]/8 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#F2B705]/20 bg-[#F2B705]/10">
                <Phone className="h-5 w-5" style={{ color: YELLOW }} />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                  Teléfono
                </span>
                <a
                  href={PHONE_TEL_HREF}
                  className="block text-sm font-semibold text-[#0f1923] transition-colors hover:text-[#F2B705]"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-[22px] border border-[#0f1923]/8 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#25D366]/20 bg-[#25D366]/10">
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                  WhatsApp
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-semibold text-[#0f1923] transition-colors hover:text-[#25D366]"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-[22px] border border-[#0f1923]/8 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#F2B705]/20 bg-[#F2B705]/10">
                <MapPin className="h-5 w-5" style={{ color: YELLOW }} />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                  Dirección
                </span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-semibold text-[#0f1923] transition-colors hover:text-[#F2B705]"
                >
                  Eje 3 Oriente Arneses 588, Tula, Iztapalapa,{' '}
                  <br className="hidden sm:block" />
                  09800 Ciudad de México, CDMX
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            onSubmit={handleSubmit}
            className="rounded-[24px] border border-[#0f1923]/8 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
            aria-label="Formulario de cotización"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-[#0f1923]">
                  Nombre completo *
                </label>
                <Input
                  id="contact-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ej. Juan Pérez"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-[#0f1923]">
                  Correo electrónico *
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@correo.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-[#0f1923]">
                  Teléfono *
                </label>
                <Input
                  id="contact-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+52 55 0000 0000"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-type" className="mb-2 block text-sm font-semibold text-[#0f1923]">
                  Tipo de proyecto *
                </label>
                <Select
                  value={form.projectType}
                  onValueChange={(value) => setForm({ ...form, projectType: value })}
                >
                  <SelectTrigger id="contact-type" className="h-11 border-[#0f1923]/15 bg-white text-[#0f1923] data-[placeholder]:text-gray-400 focus-visible:ring-[#F2B705]">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent className="border-[#0f1923]/10 bg-white text-[#0f1923]">
                    <SelectItem value="Residencial">Residencial</SelectItem>
                    <SelectItem value="Comercial">Comercial</SelectItem>
                    <SelectItem value="Industrial">Industrial</SelectItem>
                    <SelectItem value="Interiorismo">Interiorismo</SelectItem>
                    <SelectItem value="Remodelación">Remodelación</SelectItem>
                    <SelectItem value="Adecuaciones Residenciales">Adecuaciones Residenciales</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-[#0f1923]">
                  Cuéntanos sobre tu proyecto *
                </label>
                <Textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Ej. Necesito remodelar mi departamento de 90 m² en la Roma Norte..."
                  className="border-[#0f1923]/15 bg-white text-[#0f1923] placeholder:text-gray-400 focus-visible:ring-[#F2B705] focus-visible:border-[#F2B705]"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                type="submit"
                disabled={submitting}
                className="h-12 flex-1 gap-2 bg-[#F2B705] text-sm font-bold text-[#0f1923] hover:bg-[#F2B705]/90 disabled:opacity-60"
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
              <Button
                type="button"
                onClick={sendWhatsApp}
                className="h-12 flex-1 gap-2 bg-[#25D366] text-sm font-bold text-white hover:bg-[#1ebe5a]"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current" />
                Enviar por WhatsApp
              </Button>
            </div>
            <p className="mt-3 text-center text-xs text-gray-500">
              Al enviar aceptas ser contactado por nuestro equipo. Sin spam, sin
              compromiso.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

/* ============================== CTA ============================== */

function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG_HERRERIA})` }}
      />
      <div className="absolute inset-0 bg-[#0f1923]/92" />
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(to right, ${YELLOW}, rgba(242,183,5,0.4), ${YELLOW})`,
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 justify-center" style={{ color: YELLOW }}>
          <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
          <span
            style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}
          >
            ¿LISTO PARA EMPEZAR?
          </span>
          <div className="w-8 h-0.5" style={{ backgroundColor: YELLOW }} />
        </div>
        <h2
          className="text-white mb-6"
          style={{ fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15 }}
        >
          Transforma tu espacio <span style={{ color: YELLOW }}>con expertos</span>
        </h2>
        <p
          className="text-gray-300 mb-10 max-w-2xl mx-auto"
          style={{ fontSize: '1.05rem', lineHeight: 1.7 }}
        >
          Contamos con el equipo y la experiencia para llevar tu proyecto al
          siguiente nivel. Desde la primera consulta hasta la entrega final,
          estamos contigo en cada paso.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#0f1923] px-8 py-4 transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: YELLOW, fontWeight: 700, fontSize: '1rem' }}
          >
            Contáctanos
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={PHONE_TEL_HREF}
            className="inline-flex items-center gap-2 border border-white/30 hover:border-[#F2B705] hover:text-[#F2B705] text-white px-8 py-4 transition-all duration-200"
            style={{ fontWeight: 600, fontSize: '1rem' }}
          >
            <Phone className="w-5 h-5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}

/* ============================== Footer ============================== */

function Footer() {
  return (
    <footer id="footer" className="bg-[#080f16] text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-5 inline-block rounded-md bg-white px-4 py-3">
              <img
                src={LOGO}
                alt="Grupo Construtech"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.8 }} className="mb-4">
              Empresa especializada en servicios integrales de construcción,
              remodelación, interiorismo, mantenimiento y adecuaciones para
              proyectos residenciales, comerciales e industriales en la
              Ciudad de México.
            </p>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.7, color: '#6b7280' }}>
              Eje 3 Oriente Arneses 588, Tula, Iztapalapa,{' '}
              09800 Ciudad de México, CDMX
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Facebook, label: 'Facebook', href: SOCIAL_FACEBOOK },
                { icon: Instagram, label: 'Instagram', href: SOCIAL_INSTAGRAM },
                { icon: TikTokIcon, label: 'TikTok', href: SOCIAL_TIKTOK },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} de Grupo Construtech`}
                  className="w-9 h-9 flex items-center justify-center transition-colors duration-200 hover:bg-[#F2B705]"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-white mb-5"
              style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}
            >
              EMPRESA
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#F2B705]"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-white mb-5"
              style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}
            >
              SERVICIOS
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#F2B705]"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p style={{ fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Grupo Construtech S.A. de C.V. Todos los
            derechos reservados.
          </p>
          <a
            href={WHATSAPP_INFO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
            style={{ color: '#25D366', fontSize: '0.8rem', fontWeight: 600 }}
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ============================== Galería (dialog) ============================== */

function GalleryDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [category, setCategory] = useState('Todos')
  const [selectedId, setSelectedId] = useState<number | null>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  const filtered =
    category === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.galleryCategory === category)
  const selected = PROJECTS.find((p) => p.id === selectedId)
  const selectedIndex = filtered.findIndex((p) => p.id === selectedId)
  const goPrev = () => selectedIndex > 0 && setSelectedId(filtered[selectedIndex - 1].id)
  const goNext = () =>
    selectedIndex < filtered.length - 1 && setSelectedId(filtered[selectedIndex + 1].id)

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-[#08111b] text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(242,183,5,0.18),transparent_45%)]" />

      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1220]/85 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="rounded-md bg-white px-3 py-2">
            <img
              src={LOGO}
              alt="Grupo Construtech"
              className="h-8 w-auto object-contain"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-gray-300 transition-colors duration-200 hover:text-[#F2B705]"
            style={{ fontSize: '0.875rem', fontWeight: 600 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </button>
        </div>
      </nav>

      <div className="relative overflow-hidden bg-[#0b1220] pb-18 pt-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 justify-center text-[#F2B705]">
            <div className="h-0.5 w-8 bg-[#F2B705]" />
            <span
              style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}
            >
              PORTAFOLIO
            </span>
            <div className="h-0.5 w-8 bg-[#F2B705]" />
          </div>
          <h1
            className="mb-4 text-white"
            style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.15 }}
          >
            Galería de <span style={{ color: YELLOW }}>Proyectos</span>
          </h1>
          <p
            className="mx-auto max-w-xl text-gray-400"
            style={{ fontSize: '0.975rem', lineHeight: 1.7 }}
          >
            Obra real de construcción, remodelación, interiorismo,
            mantenimiento y adecuaciones residenciales en la Ciudad de México,
            organizada por línea de servicio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {GALLERY_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-[26px] border border-white/10 bg-white/3 p-5 backdrop-blur-sm"
            >
              <div className="mb-3 h-1 w-12 bg-[#F2B705]" />
              <h3
                className="mb-2 text-white"
                style={{ fontWeight: 700, fontSize: '0.98rem' }}
              >
                {card.title}
              </h3>
              <p
                className="text-gray-300"
                style={{ fontSize: '0.82rem', lineHeight: 1.7 }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky top-[73px] z-30 border-b border-white/10 bg-[#0b1220]/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-2 overflow-x-auto py-4">
            {GALLERY_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setCategory(filter)}
                className="flex-shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: category === filter ? YELLOW : 'transparent',
                  color: category === filter ? DARK : '#d1d5db',
                  borderColor: category === filter ? YELLOW : 'rgba(255,255,255,0.2)',
                  boxShadow:
                    category === filter ? '0 0 18px rgba(242,183,5,0.22)' : 'none',
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-gray-400">
            Sin proyectos en esta categoría.
          </p>
        ) : (
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[28px] border border-white/10 bg-[#0f1726] shadow-[0_18px_44px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(242,183,5,0.12)]"
                onClick={() => setSelectedId(project.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedId(project.id)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    project.size === 'large' ? 'h-[22rem]' : 'h-[16rem]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111b]/95 via-[#08111b]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-block rounded-full bg-[#F2B705] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0f1923]">
                    {project.galleryCategory}
                  </span>
                  <h3
                    className="mt-3 text-white"
                    style={{ fontWeight: 700, fontSize: '1rem' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mt-1 text-gray-300"
                    style={{ fontSize: '0.72rem' }}
                  >
                    {project.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <p
          className="mt-10 text-center text-gray-400"
          style={{ fontSize: '0.82rem' }}
        >
          Mostrando {filtered.length} de {PROJECTS.length} proyectos
        </p>
      </div>

      <div className="bg-[#0b1220] py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2
            className="mb-4 text-white"
            style={{ fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            ¿Tienes un proyecto en mente?
          </h2>
          <p
            className="mb-8 text-gray-400"
            style={{ fontSize: '0.95rem', lineHeight: 1.7 }}
          >
            Contáctanos y con gusto te asesoramos sin costo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_INFO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-white transition-opacity duration-200 hover:opacity-85"
              style={{ backgroundColor: '#25D366', fontWeight: 700, fontSize: '0.9rem' }}
            >
              <WhatsAppIcon className="h-4 w-4 fill-current" />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-white transition-colors duration-200 hover:border-[#F2B705] hover:text-[#F2B705]"
              style={{ fontWeight: 600, fontSize: '0.9rem' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </button>
          </div>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1220]/88 p-4 backdrop-blur-sm"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-[30px] border border-[#F2B705]/20 bg-[#0f1923] shadow-[0_28px_90px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0f1923]/70 text-white transition-colors hover:border-[#F2B705] hover:text-[#F2B705]"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="max-h-[72vh] w-full object-cover"
            />
            <div className="flex flex-col gap-4 border-t border-white/10 bg-[#0f1923] px-6 py-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <span className="inline-block rounded-full bg-[#F2B705] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0f1923]">
                  {selected.galleryCategory}
                </span>
                <h3
                  className="mt-3 text-white"
                  style={{ fontWeight: 700, fontSize: '1.15rem' }}
                >
                  {selected.title}
                </h3>
                <p
                  className="mt-1 text-gray-300"
                  style={{ fontSize: '0.8rem' }}
                >
                  {selected.type}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {selected.description}
                </p>
              </div>
              <div className="flex gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={selectedIndex === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#F2B705] hover:text-[#F2B705] disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Anterior"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={selectedIndex === filtered.length - 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#F2B705] hover:text-[#F2B705] disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Siguiente"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ============================== WhatsApp flotante ============================== */

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_38px_rgba(37,211,102,0.55)]"
    >
      <WhatsAppIcon className="h-7 w-7 fill-current" />
    </a>
  )
}

/* ============================== Página ============================== */

export default function Home() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryKey, setGalleryKey] = useState(0)

  const openGallery = () => {
    setGalleryKey((k) => k + 1)
    setGalleryOpen(true)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar onOpenGallery={openGallery} />
      <main className="flex-1">
        <Hero />
        <Nosotros />
        <Categories />
        <Servicios />
        <Proyectos onOpenGallery={openGallery} />
        <Proceso />
        <Testimonios />
        <FAQ />
        <CTA />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
      <GalleryDialog
        key={galleryKey}
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </div>
  )
}

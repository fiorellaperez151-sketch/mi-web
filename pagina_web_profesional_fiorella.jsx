import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, BriefcaseBusiness, GraduationCap, Languages, CheckCircle2, ArrowRight } from "lucide-react";

const experience = [
  {
    company: "Grupo Llanardo E.I.R.L",
    role: "Asistente Administrativa",
    period: "Agosto 2023 – Marzo 2025",
    items: [
      "Gestión de documentación, reportes y coordinación administrativa.",
      "Apoyo en reclutamiento, control de asistencia e inducción de personal.",
      "Emisión y revisión de comprobantes de pago, control de ventas y soporte en cierres de caja.",
      "Control básico de inventario y soporte operativo en tiendas."
    ]
  },
  {
    company: "WORX Coworking & Offices",
    role: "Recepcionista Administrativa",
    period: "Mayo 2022 – Febrero 2023",
    items: [
      "Atención a clientes corporativos, empresas residentes y visitantes nacionales e internacionales.",
      "Asesoría comercial sobre oficinas, espacios de trabajo y salas de reuniones.",
      "Facturación, registro de proveedores y seguimiento de pagos con StarSoft.",
      "Soporte directo a gerencia en control documental e información confidencial.",
      "Coordinación de eventos corporativos y actividades de networking."
    ]
  },
  {
    company: "IMARPE",
    role: "Auxiliar Logístico",
    period: "Noviembre 2020 – Enero 2022",
    items: [
      "Registro y control de activos fijos mediante SIGA.",
      "Seguimiento de activos para procesos de transferencia o baja.",
      "Apoyo en planificación de requerimientos de bienes y servicios.",
      "Organización operativa de pequeños equipos de trabajo."
    ]
  },
  {
    company: "INVEB Constructora S.A.C",
    role: "Recepcionista Administrativa",
    period: "Enero 2020 – Marzo 2020",
    items: [
      "Atención de clientes internos, proveedores y visitas externas.",
      "Soporte administrativo a operaciones y logística.",
      "Coordinación con proveedores y control documental.",
      "Registro de Hojas de Entrada de Servicios."
    ]
  }
];

const skills = [
  "Reclutamiento y selección",
  "Levantamiento de perfiles",
  "Filtrado curricular",
  "Entrevistas por competencias STAR",
  "Coordinación administrativa",
  "Employer branding",
  "Excel, Word y PowerPoint",
  "Power BI básico",
  "ERP StarSoft",
  "Sistema SIGA",
  "CRM básico",
  "Illustrator, Photoshop y Premiere"
];

const education = [
  ["Bachiller en Marketing y Administración", "Escuela ISIL", "2021"],
  ["Técnica en Marketing", "Cibertec", "2020"],
  ["Especialización en Analista de Gestión de Talento", "Centrum PUCP", "Mayo 2026"]
];

export default function ProfessionalWebsite() {
  return (
    <main className="min-h-screen bg-stone-50 text-neutral-900">
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#f5c4c4,_transparent_35%),radial-gradient(circle_at_bottom_left,_#b76e79,_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_.9fr] md:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col justify-center">
            <p className="mb-4 w-fit rounded-full border border-white/20 px-4 py-2 text-sm text-white/80">Asistente Administrativa | Reclutamiento y Selección</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Fiorella Perez Paquiyauri</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Profesional en Marketing y Administración con experiencia en soporte administrativo, procesos de reclutamiento y selección, capacitación, desarrollo del talento humano, compensaciones y beneficios.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:fiorellaperez151@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg transition hover:scale-[1.02]">
                Contactar <ArrowRight size={16} />
              </a>
              <a href="#experiencia" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Ver experiencia
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-stone-50 p-6 text-neutral-900">
              <div className="mb-6 h-56 rounded-[1.25rem] bg-gradient-to-br from-rose-200 via-stone-200 to-neutral-300" />
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3"><Phone size={18} className="text-rose-700" /> <span>(51) 976 035 568</span></div>
                <div className="flex items-center gap-3"><Mail size={18} className="text-rose-700" /> <span>fiorellaperez151@gmail.com</span></div>
                <div className="flex items-center gap-3"><MapPin size={18} className="text-rose-700" /> <span>Lima, Perú</span></div>
                <div className="flex items-center gap-3"><Languages size={18} className="text-rose-700" /> <span>Español nativo · Inglés intermedio B2</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          {["5 años de experiencia administrativa", "Gestión del talento humano", "Orientación a resultados"].map((item) => (
            <div key={item} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="mb-4 text-rose-700" />
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-neutral-200">
            <h2 className="mb-4 text-3xl font-semibold">Perfil profesional</h2>
            <p className="leading-8 text-neutral-700">
              Maneja levantamiento de perfiles, filtrado curricular y coordinación de entrevistas, con enfoque en selección por competencias y experiencia del candidato. Integra una visión estratégica desde marketing aplicada a employer branding y atracción de talento, con confidencialidad, organización y foco en resultados.
            </p>
          </div>

          <div className="rounded-[2rem] bg-neutral-950 p-8 text-white shadow-sm">
            <h2 className="mb-6 text-3xl font-semibold">Competencias clave</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[.25em] text-rose-700">Trayectoria</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Experiencia laboral</h2>
            </div>
            <BriefcaseBusiness className="hidden text-neutral-300 md:block" size={54} />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((job) => (
              <article key={job.company} className="rounded-3xl border border-neutral-200 bg-stone-50 p-7 shadow-sm">
                <p className="text-sm font-medium text-rose-700">{job.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
                <p className="mb-5 text-neutral-600">{job.company}</p>
                <ul className="space-y-3 text-sm leading-6 text-neutral-700">
                  {job.items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-700" />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <GraduationCap className="text-rose-700" />
              <h2 className="text-3xl font-semibold">Educación</h2>
            </div>
            <div className="space-y-4">
              {education.map(([degree, school, year]) => (
                <div key={degree} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="flex justify-between gap-6">
                    <div>
                      <h3 className="font-semibold">{degree}</h3>
                      <p className="text-neutral-600">{school}</p>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-rose-700">{year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-rose-50 p-8 ring-1 ring-rose-100">
            <h2 className="text-3xl font-semibold">Disponibilidad profesional</h2>
            <p className="mt-4 leading-8 text-neutral-700">
              Perfil orientado a posiciones de asistencia administrativa, gestión del talento, reclutamiento y selección, coordinación de entrevistas, soporte a gerencia y gestión documental.
            </p>
            <a href="mailto:fiorellaperez151@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]">
              Escribir por correo <Mail size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white px-6 py-8 text-center text-sm text-neutral-500">
        © 2026 Fiorella Perez Paquiyauri · Lima, Perú
      </footer>
    </main>
  );
}

import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Mouse,
  Phone,
  Rocket,
  Sparkles,
  Trophy,
  X
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  about,
  achievements,
  certificates,
  experience,
  personal,
  projects,
  services,
  skills,
  stats
} from "./data/portfolio";
import { useTypingEffect } from "./hooks/useTypingEffect";

const navItems = ["Home", "About", "Skills", "Projects", "Certificates", "Achievements", "Experience", "Contact"];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
      <span className="eyebrow">
        <Sparkles size={14} />
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </motion.div>
  );
}

function ButtonLink({ href, children, variant = "primary", icon: Icon }) {
  const styles =
    variant === "primary"
      ? "bg-accent-gradient text-white shadow-glow hover:brightness-110"
      : "border border-white/15 bg-white/[0.06] text-white hover:border-sky-300/45 hover:bg-white/[0.1]";

  return (
    <a
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${styles}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="focus-ring rounded-lg text-lg font-black text-white">
          Abhishek<span className="gradient-text">.</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06] lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <motion.div
          className="border-t border-white/10 bg-ink/95 px-5 py-4 lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="focus-ring rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.06]"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  const typed = useTypingEffect(personal.typingPhrases);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl"
        animate={{ y: [0, 28, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10">
          <motion.span variants={reveal} className="eyebrow">
            <Rocket size={14} />
            Open to opportunities
          </motion.span>
          <motion.h1 variants={reveal} className="mt-5 max-w-4xl text-4xl font-black tracking-normal text-white sm:text-6xl lg:text-7xl">
            Hi, I am <span className="gradient-text">{personal.name}</span>
          </motion.h1>
          <motion.p variants={reveal} className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
            {personal.title}
          </motion.p>
          <motion.p variants={reveal} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {personal.intro}
          </motion.p>
          <motion.div variants={reveal} className="mt-6 h-9 text-lg font-bold text-sky-200">
            I create <span className="gradient-text">{typed}</span>
            <span className="ml-1 inline-block h-6 w-0.5 translate-y-1 animate-pulse bg-sky-200" />
          </motion.div>
          <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projects" icon={Code2}>
              View Projects
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" icon={MessageCircle}>
              Contact Me
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-accent-gradient opacity-50 blur-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />
          <div className="glass-card relative mx-auto aspect-square w-72 rounded-full p-4 sm:w-96">
            <div className="absolute inset-0 rounded-full border border-sky-200/30" />
            <img
              src={personal.profileImage}
              alt="Abhishek Gupta profile placeholder"
              className="h-full w-full rounded-full object-cover transition duration-500 hover:scale-[1.025]"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 rounded-full text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 md:flex"
      >
        <Mouse size={20} />
        Scroll
      </a>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Portfolio statistics" className="border-y border-white/10 bg-white/[0.03]">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-8 sm:px-6 lg:grid-cols-4 lg:px-8"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((item) => (
          <motion.div key={item.label} variants={reveal} className="glass-card p-5 text-center">
            <div className="gradient-text text-3xl font-black sm:text-4xl">{item.value}+</div>
            <div className="mt-1 text-sm font-semibold text-slate-300">{item.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="About me"
        title="Focused on useful products, clean interfaces, and steady growth."
        copy={about.summary}
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card p-6 sm:p-8">
          <h3 className="text-2xl font-black text-white">Career Objective</h3>
          <p className="mt-4 leading-8 text-slate-300">{about.objective}</p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center gap-3 text-sky-200">
              <GraduationCap size={22} />
              <span className="font-bold">Education</span>
            </div>
            <p className="mt-3 text-slate-300">{about.education}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {about.strengths.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>
          <ButtonLink href={personal.resume} variant="secondary" icon={Download}>
            Download Resume
          </ButtonLink>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5">
          {about.timeline.map((item) => (
            <motion.div key={item.title} variants={reveal} className="glass-card relative overflow-hidden p-6">
              <div className="absolute left-0 top-0 h-full w-1 bg-accent-gradient" />
              <div className="text-sm font-black text-sky-200">{item.year}</div>
              <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader eyebrow="Skills" title="Technical depth with people-first collaboration." copy="Animated skill cards are split into technical strengths and soft skills for quick recruiter scanning." />
      {[
        ["Technical Skills", skills.technical],
        ["Soft Skills", skills.soft]
      ].map(([title, list]) => (
        <div key={title} className="mt-10">
          <h3 className="text-xl font-black text-white">{title}</h3>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {list.map((skill) => (
              <motion.div key={skill} variants={reveal} whileHover={{ y: -6, scale: 1.02 }} className="glass-card p-5 text-center">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient shadow-glow">
                  <Code2 size={20} />
                </div>
                <p className="mt-4 text-sm font-bold text-slate-100 sm:text-base">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader eyebrow="Projects" title="Selected work with polished presentation." copy="Replace these placeholders with your real projects, links, and images from the data file." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article key={project.title} variants={reveal} whileHover={{ y: -8 }} className="glass-card overflow-hidden">
            <img src={project.image} alt={`${project.title} preview`} className="h-56 w-full object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-xl font-black text-white">{project.title}</h3>
              <p className="mt-3 min-h-24 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-sky-300/10 px-3 py-1 text-xs font-bold text-sky-100">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <ButtonLink href={project.demo} icon={ExternalLink}>
                  Demo
                </ButtonLink>
                <ButtonLink href={project.github} variant="secondary" icon={Github}>
                  GitHub
                </ButtonLink>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function PreviewModal({ item, onClose }) {
  if (!item) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-5 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
    >
      <button className="focus-ring absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10" type="button" onClick={onClose} aria-label="Close preview">
        <X size={22} />
      </button>
      <motion.img
        src={item.certificate || item.thumbnail}
        alt={`${item.title} full preview`}
        className="max-h-[82vh] rounded-2xl border border-white/15 object-contain shadow-card"
        initial={{ scale: 0.94, y: 20 }}
        animate={{ scale: 1, y: 0 }}
      />
    </motion.div>
  );
}

function CredentialCard({ item, mode, onPreview }) {
  return (
    <motion.article variants={reveal} whileHover={{ y: -8 }} className="glass-card overflow-hidden">
      <button type="button" onClick={() => onPreview(item)} className="focus-ring block w-full" aria-label={`Preview ${item.title}`}>
        <img src={item.thumbnail} alt={`${item.title} thumbnail`} className="h-52 w-full object-cover" loading="lazy" />
      </button>
      <div className="p-6">
        <h3 className="text-xl font-black text-white">{item.title}</h3>
        <p className="mt-2 text-sm font-semibold text-sky-200">{item.organization} {item.date || item.year ? `• ${item.date || item.year}` : ""}</p>
        {item.description && <p className="mt-3 leading-7 text-slate-300">{item.description}</p>}
        <div className="mt-4 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-200">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ButtonLink href={item.certificate || item.thumbnail} variant="secondary" icon={ExternalLink}>
            View Certificate
          </ButtonLink>
          {mode === "certificate" && (
            <ButtonLink href={item.verify || "#"} icon={Award}>
              Verify
            </ButtonLink>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Certifications() {
  const [preview, setPreview] = useState(null);

  return (
    <section id="certificates" className="section-shell">
      <SectionHeader eyebrow="Certifications" title="Technical certifications, ready for real credentials." copy="Certificate files live in the certificates folder and the displayed details are edited in one data file." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-6 lg:grid-cols-3">
        {certificates.map((item) => (
          <CredentialCard key={item.title} item={item} mode="certificate" onPreview={setPreview} />
        ))}
      </motion.div>
      <PreviewModal item={preview} onClose={() => setPreview(null)} />
    </section>
  );
}

function Achievements() {
  const [preview, setPreview] = useState(null);

  return (
    <section id="achievements" className="section-shell">
      <SectionHeader eyebrow="Achievements & NCC" title="Discipline, leadership, and recognition beyond code." copy="Use this section for NCC certificates, camps, sports, awards, and future achievements." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item) => (
          <CredentialCard key={item.title} item={item} mode="achievement" onPreview={setPreview} />
        ))}
      </motion.div>
      <PreviewModal item={preview} onClose={() => setPreview(null)} />
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader eyebrow="Experience" title="A timeline that can grow with your career." copy="Edit these entries as internships, freelance work, volunteering, or project experience are added." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative mt-12 grid gap-6">
        {experience.map((item) => (
          <motion.article key={item.role} variants={reveal} className="glass-card relative p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black text-sky-200">{item.period}</p>
                <h3 className="mt-1 text-2xl font-black text-white">{item.role}</h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-200">
                <BriefcaseBusiness size={16} />
                {item.company}
              </div>
            </div>
            <p className="mt-5 leading-8 text-slate-300">{item.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function Services() {
  const icons = [Code2, Mouse, Sparkles, Trophy];

  return (
    <section id="services" className="section-shell">
      <SectionHeader eyebrow="Services" title="Helpful, practical services for modern web needs." copy="Simple service cards communicate what you can offer while keeping the page recruiter-friendly." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.article key={service.title} variants={reveal} whileHover={{ y: -8 }} className="glass-card p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-gradient shadow-glow">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-black text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

function Contact() {
  const contactCards = useMemo(
    () => [
      [Mail, "Email", personal.email, `mailto:${personal.email}`],
      [Phone, "Phone", personal.phone, `tel:${personal.phone.replace(/\s/g, "")}`],
      [Linkedin, "LinkedIn", "Connect professionally", personal.socials.linkedIn],
      [Github, "GitHub", "View code and projects", personal.socials.github],
      [Instagram, "Instagram", "Follow updates", personal.socials.instagram]
    ],
    []
  );

  return (
    <section id="contact" className="section-shell">
      <SectionHeader eyebrow="Contact" title="Let’s build something clear, useful, and polished." copy="Use the form layout for a professional first impression and update the direct contact links in the data file." />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <motion.form variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card grid gap-4 p-6 sm:p-8">
          <input className="focus-ring rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-slate-500" placeholder="Your name" aria-label="Your name" />
          <input className="focus-ring rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-slate-500" placeholder="Email address" type="email" aria-label="Email address" />
          <textarea className="focus-ring min-h-36 resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-slate-500" placeholder="Tell me about your project or opportunity" aria-label="Message" />
          <button type="button" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent-gradient px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:brightness-110">
            <Mail size={18} />
            Send Message
          </button>
        </motion.form>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4">
          {contactCards.map(([Icon, label, value, href]) => (
            <motion.a key={label} variants={reveal} href={href} className="focus-ring glass-card flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-sky-300/35">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient shadow-glow">
                <Icon size={21} />
              </span>
              <span>
                <span className="block text-sm font-bold text-slate-400">{label}</span>
                <span className="block break-all font-bold text-white">{value}</span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Abhishek Gupta. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {[
            [Linkedin, personal.socials.linkedIn, "LinkedIn"],
            [Github, personal.socials.github, "GitHub"],
            [Instagram, personal.socials.instagram, "Instagram"]
          ].map(([Icon, href, label]) => (
            <a key={label} href={href} className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-200 transition hover:text-white" aria-label={label}>
              <Icon size={19} />
            </a>
          ))}
          <a href="#home" className="focus-ring grid h-10 w-10 place-items-center rounded-xl bg-accent-gradient shadow-glow" aria-label="Scroll to top">
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <div className="min-h-screen overflow-hidden">
      <motion.div className="fixed left-0 top-0 z-50 h-1 origin-left bg-accent-gradient" style={{ scaleX, width: "100%" }} />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

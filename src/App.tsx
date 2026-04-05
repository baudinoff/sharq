/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from "motion/react";
import { 
  Phone, 
  Mail, 
  Briefcase, 
  Send, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  ChevronDown, 
  GraduationCap, 
  User, 
  Code, 
  Car,
  Github,
  Gamepad2,
  Cpu,
  Layers,
  Globe,
  Terminal
} from "lucide-react";
import React, { useState, useRef } from "react";

const TECH_STACK = [
  { name: "React / Next.js", icon: Globe, color: "text-emerald-400" },
  { name: "TypeScript", icon: Code, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: Layers, color: "text-cyan-400" },
  { name: "Node.js / Express", icon: Terminal, color: "text-green-500" },
  { name: "System Engineering", icon: Cpu, color: "text-khaki-400" },
];

function TechStackScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} className="h-[250vh] relative mb-20">
      <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale, opacity, rotate }}
          className="text-center px-4 w-full max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 md:mb-12 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            TECH <br /> STACK
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12">
            {TECH_STACK.map((tech, idx) => {
              const y = useTransform(smoothProgress, 
                [0, 0.2 + idx * 0.05, 0.5 + idx * 0.05, 1], 
                [50, 0, 0, -50]
              );
              const techOpacity = useTransform(smoothProgress, 
                [0, 0.2 + idx * 0.05, 0.5 + idx * 0.05, 1], 
                [0, 1, 1, 0]
              );

              return (
                <motion.div 
                  key={idx}
                  style={{ y, opacity: techOpacity }}
                  className="flex flex-col items-center gap-2 md:gap-4"
                >
                  <div className={`p-4 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-900/80 border border-white/5 ${tech.color} shadow-2xl backdrop-blur-xl`}>
                    <tech.icon className="w-8 h-8 md:w-12 md:h-12" />
                  </div>
                  <span className="font-bold text-zinc-400 text-[10px] md:text-sm tracking-widest uppercase text-center">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Decorative elements that move with scroll */}
        <motion.div 
          style={{ 
            y: useTransform(smoothProgress, [0, 1], [0, -500]),
            opacity: useTransform(smoothProgress, [0, 0.5], [0.5, 0])
          }}
          className="absolute top-1/4 left-10 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"
        />
        <motion.div 
          style={{ 
            y: useTransform(smoothProgress, [0, 1], [0, 500]),
            opacity: useTransform(smoothProgress, [0, 0.5], [0.5, 0])
          }}
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-khaki-500/10 blur-3xl rounded-full"
        />
      </div>
    </section>
  );
}

interface ExperienceStep {
  role: string;
  period: string;
  desc: string;
}

interface Experience {
  date: string;
  company: string;
  position: string;
  desc?: string;
  career?: ExperienceStep[];
}

const SOCIAL_LINKS = [
  { icon: Briefcase, href: "https://hh.ru/resume/90fe6446ff102fa74a0039ed1f5a3251465830", label: "HH.ru" },
  { icon: Send, href: "https://t.me/baudinoff", label: "Telegram" },
  { icon: Phone, href: "https://wa.me/79256797029", label: "WhatsApp" },
  { icon: Github, href: "https://github.com/baudinoff", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/chingiz-baudinov-52606a3b7", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/baudinoff", label: "Instagram" },
  { icon: Gamepad2, href: "https://steamcommunity.com/id/baudinoff/", label: "Steam" },
];

const EXPERIENCE: Experience[] = [
  {
    date: "июнь 2024 — май 2025",
    company: "Дирекция Спортивных Сооружений (Халык Арена)",
    position: "Руководитель IT отдела",
    desc: "Координация аутсорсинговых компаний, управление парком ПК, системами видеонаблюдения, СКУД (болларды, шлагбаумы) и слаботочными сетями."
  },
  {
    date: "апр. 2023 — янв. 2024",
    company: "ТОО \"ICMET\"",
    position: "Специалист по ИТ",
    desc: "Техническое обслуживание судов г. Алматы. Сборка ПК, монтаж UTP, настройка локальных сетей и сопровождение судебных процессов."
  },
  {
    date: "март 2022 — март 2023",
    company: "KidsArtCenter",
    position: "Учитель",
    desc: "Преподаватель шахмат для детей (от 5 до 16 лет). Развитие логического мышления и дисциплины."
  },
  {
    date: "февр. 2021 — март 2022",
    company: "Белый Ветер",
    position: "Карьерный рост (4 позиции)",
    career: [
      { role: "Менеджер отдела продаж", period: "сент. 2021 – март 2022", desc: "Консультации, подбор решений, мерчандайзинг." },
      { role: "Инженер-системотехник", period: "июль 2021 – сент. 2021", desc: "Сервис, диагностика брака, ремонт и настройка оборудования." },
      { role: "Специалист ОТК", period: "апр. 2021 – июль 2021", desc: "Предпродажное тестирование и контроль качества комплектующих." },
      { role: "Специалист по сборке", period: "февр. 2021 – апр. 2021", desc: "Сборка ПК, установка ПО и ОС на смартфоны/ноутбуки." }
    ]
  },
  {
    date: "март 2018 — янв. 2021",
    company: "GSE",
    position: "Специалист по сборке ПК",
    desc: "Профессиональная сборка и тонкая настройка высокопроизводительных систем."
  }
];

const EDUCATION = [
  { date: "2025", institution: "Университет \"Синергия\"", degree: "Бакалавриат, Веб-разработчик" },
  { date: "2025 — 2026", institution: "IT STEP Academy", degree: "Frontend Developer" },
  { date: "2018 — 2022", institution: "ИТК г. Алматы при МУИТ", degree: "Техник-программист, ВТиПО" }
];

const WORKS = [
  { 
    name: "metall-almaty.kz", 
    url: "https://metall-almaty.kz",
    desc: "Корпоративный сайт для металлопрокатной компании. Проектирование и разработка.",
    tags: ["React", "SEO", "Business"],
    featured: true
  },
  { 
    name: "carefood.kz", 
    url: "carefood/index.html",
    desc: "Интернет-магазин здорового питания. Интеграция каталога и корзины.",
    tags: ["E-commerce", "UX/UI"],
    featured: false
  },
  { 
    name: "fbs-almaty.kz", 
    url: "https://fbs-almaty.kz",
    desc: "Лендинг для производства строительных блоков. Высокая конверсия.",
    tags: ["Landing", "Marketing"],
    featured: false
  },
  { 
    name: "tabysconsult.kz", 
    url: "https://tabysconsult.kz",
    desc: "Консалтинговое агентство. Строгий дизайн и удобная навигация.",
    tags: ["Corporate", "Next.js"],
    featured: true
  },
  { 
    name: "fbs-block.kz", 
    url: "https://fbs-block.kz",
    desc: "Сайт-визитка для производственного предприятия.",
    tags: ["Portfolio", "Fast"],
    featured: false
  },
  { 
    name: "baudinoffs.kz", 
    url: "https://baudinoffs.kz",
    desc: "Личный проект и эксперименты с веб-технологиями.",
    tags: ["Personal", "Lab"],
    featured: false
  }
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-2xl font-bold mb-8 flex items-center gap-3"
    >
      <motion.span 
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="h-1 bg-emerald-500 rounded-full" 
      />
      {children}
    </motion.h2>
  );
}

interface ExperienceCardProps {
  item: Experience;
  index: number;
  total: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, index, total }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Calculate scale based on index to create a stacking effect
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.95 - (total - index) * 0.01]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.9, 1], [0.9, 1, 1, 0.7]);
  
  const [isOpen, setIsOpen] = useState(index === 0);

  // Automatically open/close based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // More lenient triggers for mobile
    const isSticky = latest >= 0.48 && latest < 0.92;
    if (isSticky && !isOpen) {
      setIsOpen(true);
    } else if (!isSticky && isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div ref={container} className="h-[70vh] md:h-[60vh] flex items-start justify-center sticky top-16 md:top-24 mb-12">
      <motion.div 
        style={{ 
          scale, 
          opacity,
          top: `calc(5% + ${index * 15}px)`,
        }}
        className="glass-card p-5 md:p-8 w-full transition-shadow duration-500 hover:shadow-emerald-500/10 hover:border-emerald-500/30"
      >
        <div className="flex justify-between items-start mb-2 md:mb-4">
          <div>
            <span className="text-emerald-500 font-bold text-[10px] md:text-sm tracking-wider uppercase bg-emerald-500/10 px-2 md:px-3 py-1 rounded-full">{item.date}</span>
            <h3 className="text-lg md:text-2xl font-black mt-2 md:mt-4 text-zinc-100 tracking-tight leading-tight">{item.company}</h3>
            <p className="text-khaki-400 font-bold text-sm md:text-lg">{item.position}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-zinc-800/50 text-zinc-400 border border-white/5"
          >
            <ChevronDown 
              size={20} 
              className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 md:pt-6 mt-4 md:mt-6 border-t border-white/5 text-zinc-400 leading-relaxed text-xs md:text-base">
                {item.desc && <p className="mb-3 md:mb-4">{item.desc}</p>}
                {item.career && (
                  <div className="space-y-4 md:space-y-6 mt-3 md:mt-4">
                    {item.career.map((step, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="pl-4 md:pl-6 border-l-2 border-emerald-500/30 hover:border-emerald-500 transition-colors group/step"
                      >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1 md:mb-2">
                          <span className="font-bold text-zinc-100 group-hover/step:text-emerald-400 transition-colors text-xs md:text-base">{step.role}</span>
                          <span className="text-[10px] md:text-xs font-mono text-zinc-500 md:bg-zinc-800/50 md:px-2 md:py-1 rounded">{step.period}</span>
                        </div>
                        <p className="text-[10px] md:text-sm leading-relaxed">{step.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Decorative background element */}
        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Briefcase size={120} className="text-emerald-500" />
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();

  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end center"]
  });

  const educationRef = useRef(null);
  const { scrollYProgress: educationScroll } = useScroll({
    target: educationRef,
    offset: ["start center", "end center"]
  });
  
  return (
    <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-khaki-900/10 blur-[120px] rounded-full" 
        />
      </div>

      <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black tracking-tighter cursor-default flex items-center gap-3"
        >
          <img src="/img/sqlogo.png" alt="Logo" className="w-10 h-10 rounded-lg object-contain" referrerPolicy="no-referrer" />
          <span>baudinoff<span className="text-emerald-500">.</span></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ y: -2 }}
          className="flex gap-4"
        >
          <div className="px-4 py-2 rounded-full bg-zinc-900/50 border border-white/5 text-xs font-medium text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Available for hire
          </div>
        </motion.div>
      </nav>

      <main className="container mx-auto px-6 max-w-4xl">
        {/* Hero Section */}
        <header className="py-12 md:py-20 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
              className="relative cursor-pointer group"
            >
              <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity animate-pulse" />
              <img 
                src="/img/avatar.jpg" 
                alt="Чингиз Баудинов" 
                className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-emerald-500/50 object-cover relative z-10 shadow-2xl group-hover:border-emerald-400 transition-colors"
                referrerPolicy="no-referrer"
              />
            </motion.div>

          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight"
            >
              Баудинов <br className="hidden md:block" />
              <span className="text-emerald-500">Чингиз</span> Именжанович
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-zinc-400 font-medium mb-8"
            >
              Специалист IT <span className="mx-2 text-zinc-700">|</span> 
              Frontend Developer <span className="mx-2 text-zinc-700">|</span> 
              System Engineer
            </motion.p>

            <motion.div 
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.3 }
                }
              }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              {SOCIAL_LINKS.map((social, idx) => (
                <motion.a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 10, scale: 0.8 },
                    show: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.1,
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    borderColor: "rgba(16, 185, 129, 0.4)",
                    color: "#10b981"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </header>

        <TechStackScroll />

        {/* Contact Info Bento */}
        <section className="mb-20">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.3)" }}
              className="glass-card p-6 flex items-start gap-4 transition-colors duration-300"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500"
              >
                <Phone size={24} />
              </motion.div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Телефоны</h4>
                <div className="space-y-1">
                  <motion.a 
                    whileHover={{ color: "#10b981", x: 2 }}
                    href="tel:+77073029000" 
                    className="block text-lg font-bold transition-colors"
                  >
                    +7 (707) 302 9000
                  </motion.a>
                  <motion.a 
                    whileHover={{ color: "#10b981", x: 2 }}
                    href="tel:+77767308999" 
                    className="block text-lg font-bold transition-colors"
                  >
                    +7 (776) 730 8999
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ y: -5, borderColor: "rgba(189, 189, 85, 0.3)" }}
              className="glass-card p-6 flex items-start gap-4 transition-colors duration-300"
            >
              <motion.div 
                whileHover={{ rotate: -15, scale: 1.1 }}
                className="p-3 rounded-xl bg-khaki-500/10 text-khaki-400"
              >
                <Mail size={24} />
              </motion.div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Почта</h4>
                <div className="space-y-1">
                  <motion.a 
                    whileHover={{ color: "#bdbd55", x: 2 }}
                    href="mailto:Chingiz@baudinov.ru" 
                    className="block text-sm font-medium transition-colors"
                  >
                    chingiz@baudinov.ru
                  </motion.a>
                  <motion.a 
                    whileHover={{ color: "#bdbd55", x: 2 }}
                    href="mailto:chingiz.baudinov@gmail.com" 
                    className="block text-sm font-medium transition-colors"
                  >
                    chingiz.baudinov@gmail.com
                  </motion.a>
                  <motion.a 
                    whileHover={{ color: "#bdbd55", x: 2 }}
                    href="mailto:Chingiz.baudin@icloud.com" 
                    className="block text-sm font-medium transition-colors"
                  >
                    chingiz.baudin@icloud.com
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="mb-20">
          <SectionTitle>О себе</SectionTitle>
          <motion.div 
            style={{ 
              scale: useTransform(aboutScroll, [0, 1], [0.95, 1]),
              opacity: useTransform(aboutScroll, [0, 0.5], [0.5, 1])
            }}
            whileHover={{ scale: 1.01 }}
            className="glass-card p-8 relative overflow-hidden group transition-all duration-500"
          >
            <motion.div
              style={{ 
                y: useTransform(aboutScroll, [0, 1], [0, -40]),
                rotate: useTransform(aboutScroll, [0, 1], [12, 20]),
                scale: useTransform(aboutScroll, [0, 0.5, 1], [1, 1.1, 1.2])
              }}
              className="absolute -right-8 -bottom-8"
            >
              <User className="w-40 h-40 text-emerald-500/5" />
            </motion.div>
            <div className="text-lg text-zinc-300 leading-relaxed relative z-10">
              {/* Creative text reveal */}
              {`Универсальный IT-специалист с 7-летним практическим опытом. Мой путь пролегает от эксперта по сборке высокопроизводительных систем и сетевого администрирования до руководства ИТ-инфраструктурой на крупных спортивных объектах. Сейчас я успешно совмещаю этот фундамент с современным стеком Frontend-разработки, создавая надежные и удобные веб-интерфейсы.`.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ delay: i * 0.02, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="inline-block mr-1.5"
                >
                  {word === "7-летним" ? <span className="text-emerald-500 font-bold">{word}</span> : 
                   word === "Frontend-разработки" ? <span className="text-khaki-400 font-bold">{word}</span> : word}
                </motion.span>
              ))}
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="mt-8 flex items-center gap-3 text-sm font-bold text-emerald-500 bg-emerald-500/10 w-fit px-4 py-2 rounded-full border border-emerald-500/20 cursor-default"
            >
              <Car size={18} />
              Водительские права: Категория B
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="mb-40 relative">
          <SectionTitle>Опыт работы</SectionTitle>
          <div className="relative space-y-0">
            {EXPERIENCE.map((item, idx) => (
              <ExperienceCard 
                key={idx} 
                item={item} 
                index={idx} 
                total={EXPERIENCE.length} 
              />
            ))}
          </div>
        </section>

        {/* Education Section - Horizontal Scroll */}
        <section ref={educationRef} className="relative h-[250vh] mb-40 -mx-6 md:-mx-20">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <div className="px-6 md:px-20 max-w-4xl mx-auto w-full mb-12">
              <SectionTitle>Образование</SectionTitle>
            </div>
            
            <div className="relative">
              <motion.div 
                style={{ 
                  x: useTransform(educationScroll, [0, 1], ["0%", "-40%"]) 
                }} 
                className="flex gap-6 px-6 md:px-20"
              >
                {EDUCATION.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 shrink-0 w-[300px] md:w-[450px] relative overflow-hidden group border-white/5 hover:border-emerald-500/30 transition-all duration-500"
                    whileHover={{ y: -10 }}
                  >
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:rotate-12 transition-transform duration-500">
                        <GraduationCap size={32} />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-emerald-500/70 bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
                          {edu.date}
                        </span>
                        <h3 className="text-xl md:text-2xl font-black text-zinc-100 mt-4 leading-tight group-hover:text-emerald-400 transition-colors">
                          {edu.institution}
                        </h3>
                        <p className="text-zinc-400 mt-2 font-medium">{edu.degree}</p>
                      </div>
                    </div>
                    
                    {/* Decorative background icon */}
                    <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                      <GraduationCap size={180} />
                    </div>

                    {/* Progress dot */}
                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Scroll Indicator for Education */}
            <div className="mt-20 px-6 md:px-20 max-w-4xl mx-auto w-full">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                  style={{ scaleX: educationScroll, originX: 0 }}
                />
              </div>
              <p className="text-[10px] text-zinc-600 mt-2 uppercase tracking-widest font-bold">Scroll to explore education</p>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section className="mb-40">
          <SectionTitle>Мои работы</SectionTitle>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-6 gap-6"
          >
            {WORKS.map((work, idx) => {
              const cardRef = useRef(null);
              const { scrollYProgress: cardScroll } = useScroll({
                target: cardRef,
                offset: ["start end", "end start"]
              });
              const rotateX = useTransform(cardScroll, [0, 0.5, 1], [5, 0, -5]);
              const rotateY = useTransform(cardScroll, [0, 0.5, 1], [-3, 0, 3]);

              // Bento grid logic: featured items take more space
              const gridClass = work.featured 
                ? "md:col-span-4 h-[350px]" 
                : "md:col-span-2 h-[350px]";

              return (
                <motion.a 
                  ref={cardRef}
                  key={idx}
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ rotateX, rotateY, perspective: 1000 }}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 30px 60px -12px rgba(16, 185, 129, 0.2)"
                  }}
                  className={`glass-card group relative overflow-hidden flex flex-col ${gridClass}`}
                >
                  {/* Mock Browser Header */}
                  <div className="h-8 bg-zinc-800/50 border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                    <div className="ml-4 h-4 w-32 md:w-48 bg-zinc-900/50 rounded-md border border-white/5 flex items-center px-2">
                      <span className="text-[8px] text-zinc-600 truncate">{work.url}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col h-full relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                        <Globe size={24} />
                      </div>
                      <div className="flex gap-2">
                        {work.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-bold text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded-md border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-xl md:text-2xl font-black text-zinc-100 group-hover:text-emerald-400 transition-colors duration-300">
                        {work.name}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {work.desc}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-emerald-500 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <span>Посмотреть проект</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>

                  {/* Background Visuals */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-khaki-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Abstract UI Elements */}
                  <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full group-hover:bg-emerald-500/10 transition-colors duration-700" />
                  
                  {/* Shine effect */}
                  <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-[shine_2s_ease-in-out] pointer-events-none" />
                </motion.a>
              );
            })}
          </motion.div>
        </section>

        <footer className="py-12 border-t border-white/5 text-center">
          <p className="text-zinc-500 text-sm">
            Created by <motion.a 
              whileHover={{ color: "#10b981", scale: 1.05 }}
              href="https://t.me/baudinoff" 
              className="text-emerald-500 font-medium inline-block"
            >
              Sharq.
            </motion.a>
          </p>
          <div className="mt-8 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 rounded-2xl bg-zinc-900/50 border border-white/5"
            >
              <img src="/img/sqlogo.png" alt="Logo" className="w-12 h-12 rounded-xl object-contain" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import hsuImage from './hsu.webp';
import { 
  Linkedin, 
  Mail, 
  Phone,
  ExternalLink, 
  ChevronRight, 
  Award, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Mic, 
  BarChart3,
  Menu,
  X,
  Code2,
  Sparkles,
  Rocket,
  CheckCircle2,
  Languages
} from 'lucide-react';

// --- Types ---
interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

interface Project {
  title: string;
  role?: string;
  period?: string;
  description: string;
  tags: string[];
  icon?: React.ReactNode;
}

interface Education {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details?: string;
}

// --- Data ---
const experiences: Experience[] = [
  {
    company: "Taipei City Gov, DoIT",
    role: "Substitute Military Service (mandatory)",
    period: "04/2026 – 07/2026",
    location: "Taipei, Taiwan",
    description: [
      "Evaluated 16 IM platforms for 60K+ users and presented a product proposal to the Commissioner."
    ],
    tags: ["Product Proposal", "Government IT", "IM Platforms", "Enterprise Evaluation"]
  },
  {
    company: "Microsoft Taiwan",
    role: "Marketing and Operations Intern",
    period: "06/2024 – 07/2025",
    location: "Taipei, Taiwan",
    description: [
      "Led a 4-person student technical team for DevDays Asia 2025, defining requirements for 4 booths and 2 hands-on AI workshops; coordinated timelines, deliverables, and handoffs to 3 interns, engaging 150+ developers.",
      "Executed 150+ cross-functional work items across Azure, Copilot, Security, M365, and BizApps, supporting 6+ flagship and 10+ mid-sized marketing events across product content, GTM, and localization.",
      "Analyzed Azure vs. AWS positioning across media, industry marketing, events, and developer communities, identifying opportunities for Azure Taiwan; presented findings to senior leadership and COO for planning.",
      "Built a 100+ term Taiwan dictionary across Azure, Copilot, and Security, cutting localization time by 50%."
    ],
    tags: ["DevDays Asia", "Azure & Copilot", "Cross-Functional GTM", "Competitive Analysis", "Localization"]
  },
  {
    company: "GoSky AI Inc.",
    role: "Product Marketing Intern",
    period: "12/2023 – 06/2024",
    location: "Taipei, Taiwan",
    description: [
      "Built a conversion funnel dashboard tracking acquisition-to-registration performance across paid and organic channels; provided weekly budget reallocation recommendations that increased CVR from 7.9% to 11.3% and cut MQL-to-SQL reporting time by 80%.",
      "Launched Chatbot, Social CRM, and auto-reply campaigns on Meta, achieving 4x reach and 10x engagement versus average campaigns while generating leads for Business Development."
    ],
    tags: ["Product Marketing", "Funnel Optimization", "Looker Studio", "Social CRM", "Lead Generation"]
  },
  {
    company: "7-ELEVEN myship",
    role: "Freelance Project Coordinator",
    period: "01/2024 – Present",
    location: "Taipei, Taiwan",
    description: [
      "Coordinated 20+ video projects for 7-ELEVEN myship, including 8 platform tutorials and 12 seller interviews; managed filming logistics and editor collaboration, generating 25K+ total views."
    ],
    tags: ["Project Coordination", "Video Production", "Creator Collaboration", "Content Logistics"]
  },
  {
    company: "Taiwan Marketing Research Ltd.",
    role: "Online Course Instructor",
    period: "02/2022 – 09/2023",
    location: "Taipei, Taiwan",
    description: [
      "Developed and launched a paid AI and web development course on Hahow, attracting 130+ students."
    ],
    tags: ["Course Instructor", "AI & Web Dev", "Hahow", "Curriculum Design"]
  }
];

const projectsAndLeadership: Project[] = [
  {
    title: "LinkedIn Taiwan Ambassador Program",
    role: "Project Lead",
    period: "11/2024 – 06/2025",
    description: "Managed 25+ ambassadors across 3 teams and led 2 events with 300+ sign-ups and 200+ participants; drove 97K+ reach and 1.4K+ engagements.",
    tags: ["Leadership", "Community Growth", "Event Management", "200+ Attendees"]
  },
  {
    title: "NTU Creativity & Entrepreneurship Program – KonnecT",
    role: "Product & Data Research",
    period: "09/2023 – 06/2024",
    description: "Analyzed 744 survey responses using Excel, Tableau, and JASP to identify fan engagement patterns and translate statistical findings into product recommendations for fan engagement and creator interaction.",
    tags: ["Product Research", "Survey Analysis", "Tableau", "JASP"]
  },
  {
    title: "Personal AI & Cloud Projects",
    role: "Creator & Developer",
    period: "Ongoing",
    description: "Built and deployed a LINE chatbot and 3+ Python AI apps on Google Cloud Run with CI/CD, using Claude Code.",
    tags: ["Python", "Google Cloud Run", "CI/CD", "LINE Chatbot", "Claude Code"]
  }
];

const education: Education[] = [
  {
    school: "National Taiwan University of Science and Technology (NTUST)",
    degree: "B.B.A. in Information Management",
    period: "09/2021 – 02/2026",
    location: "Taipei, Taiwan",
    details: "Co-author, Digital Bionics and Heritage: Achieving Text Usage Habit Replication through Semantic Recognition Technology and Large Language Models, Communications of the CCISA."
  },
  {
    school: "Budapest University of Technology and Economics (BME)",
    degree: "Exchange Program, Business Administration",
    period: "09/2025 – 01/2026",
    location: "Budapest, Hungary"
  }
];

const certifications = [
  { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
  { name: "Microsoft Certified: Azure AI Fundamentals (AI-900)", issuer: "Microsoft" },
  { name: "Google Project Management Professional Certificate", issuer: "Coursera / Google" },
  { name: "Google Analytics Certification", issuer: "Google" }
];

const skillCategories = [
  {
    title: "Product & Strategy",
    skills: ["Product Management", "Growth & Funnel Optimization", "Go-To-Market Strategy", "AI Applications", "User Insights"]
  },
  {
    title: "Data & BI Tools",
    skills: ["Data Analysis", "Python", "Power BI", "GA4", "Looker Studio", "Tableau", "JASP", "Excel"]
  },
  {
    title: "Cloud & Development",
    skills: ["Google Cloud Run", "CI/CD Deployment", "LINE Chatbot API", "Claude Code", "AI Workflow Automation"]
  },
  {
    title: "Languages",
    skills: ["English (TOEIC 855/990 – Professional)", "Mandarin Chinese (Native)"]
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects & Leadership', href: '#projects' },
    { name: 'Education & Skills', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          JASPER <span className="text-blue-600">HSU</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 max-w-2xl text-base md:text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 50 }}
      viewport={{ once: true }}
      className="h-1 bg-blue-600 mt-4 rounded-full"
    />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              <Rocket size={14} /> Product & AI-Driven Growth
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-4">
              Hao-Jiun Hsu <br />
              <span className="text-blue-600 text-3xl sm:text-4xl md:text-5xl">(Jasper) 許皓鈞</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Product-oriented professional with experience in <span className="font-semibold text-slate-900">AI</span>, <span className="font-semibold text-slate-900">data-driven growth</span>, and cross-functional execution at <span className="font-semibold text-slate-900">Microsoft Taiwan</span> and <span className="font-semibold text-slate-900">GoSky AI</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#experience" 
                className="px-7 py-3.5 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-0.5"
              >
                View Experience
              </a>
              <a 
                href="https://www.linkedin.com/in/hao-jiun" 
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a 
                href="mailto:hsu.haojiun@gmail.com"
                className="px-7 py-3.5 bg-slate-100 text-slate-800 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
              >
                <Mail size={18} /> Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="max-w-sm md:max-w-md w-full aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white bg-slate-200">
              <img 
                src={hsuImage} 
                alt="Hao-Jiun (Jasper) Hsu" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
            {/* Decorative blurs */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-indigo-200 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* About / Summary Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Connecting product thinking, data analytics, and cross-functional execution.">
            About Me
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-lg text-slate-600 leading-relaxed space-y-4">
              <p>
                Hi, I’m <span className="font-bold text-slate-900">Hao-Jiun (Jasper) Hsu (許皓鈞)</span>. I am a product-oriented professional with a strong foundation in <span className="text-blue-600 font-semibold">Information Management from NTUST</span>.
              </p>
              <p>
                With hands-on experience at <span className="font-semibold text-slate-900">Microsoft Taiwan</span> and <span className="font-semibold text-slate-900">GoSky AI</span>, I specialize in funnel optimization, reporting automation, and go-to-market strategies that connect technical capabilities with business impact.
              </p>
              <p>
                I am a native Mandarin speaker with professional English proficiency (TOEIC 855/990), passionate about leveraging AI applications and analytical rigor to solve complex user and product challenges.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">AI & PM</div>
                <div className="text-xs text-blue-500 font-bold uppercase tracking-wider">Product Focus</div>
              </div>
              <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">MSFT</div>
                <div className="text-xs text-indigo-500 font-bold uppercase tracking-wider">Ops & GTM</div>
              </div>
              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">+43%</div>
                <div className="text-xs text-emerald-500 font-bold uppercase tracking-wider">Funnel CVR Lift</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 text-center">
                <div className="text-3xl font-bold text-slate-800 mb-1">855</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">TOEIC (EN)</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Product & Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                Skilled in funnel optimization, GTM strategy, and translating user needs into actionable technical and product requirements.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data & BI Automation</h3>
              <p className="text-slate-600 leading-relaxed">
                Expertise in Python, Looker Studio, Power BI, GA4, and Tableau to automate reporting and uncover growth levers.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cross-Functional Execution</h3>
              <p className="text-slate-600 leading-relaxed">
                Proven track record leading technical teams, coordinating 150+ work items across multiple product divisions, and managing large ambassador programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="My professional journey and track record across tech enterprises, startups, and public service.">
            Work Experience
          </SectionHeading>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative grid md:grid-cols-[280px_1fr] gap-8 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-sm font-bold text-blue-600 mb-1 uppercase tracking-wider">{exp.period}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.company}</h3>
                  <div className="text-slate-500 font-medium text-sm flex items-center gap-1">
                    <ChevronRight size={16} className="text-blue-400" /> {exp.location}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">{exp.role}</h4>
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Leadership Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Leadership initiatives, user research programs, and hands-on AI cloud development.">
            Projects & Leadership
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-8">
            {projectsAndLeadership.map((proj, index) => (
              <motion.div 
                key={proj.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {proj.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{proj.title}</h3>
                  {proj.role && <div className="text-sm font-semibold text-slate-600 mb-4">{proj.role}</div>}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education, Certifications & Skills */}
      <section id="education" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education & Extracurricular */}
            <div>
              <SectionHeading subtitle="Academic foundation and campus involvement.">
                Education & Honors
              </SectionHeading>
              
              <div className="space-y-8 mb-12">
                {education.map((edu) => (
                  <motion.div 
                    key={edu.school}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-blue-200"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                    <div className="text-sm font-bold text-blue-600 mb-1">{edu.period}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.school}</h3>
                    <div className="text-slate-700 font-medium mb-2">{edu.degree}</div>
                    {edu.details && (
                      <p className="text-sm text-slate-500 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-100">
                        <span className="font-semibold text-slate-700">Publication: </span>
                        {edu.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Extracurricular highlights */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award size={20} className="text-blue-600" /> Extracurricular Highlights
                </h4>
                <div className="p-4 rounded-2xl bg-white border border-slate-100 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Joint Orientation Camp (2023)</h5>
                    <p className="text-sm text-slate-600">General Coordinator for NTUST & NTUNHS 4-Dept.</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-100 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Big Data Innovation Competition</h5>
                    <p className="text-sm text-slate-600">National Top 10 Finalist (2023)</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-100 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                    <Mic size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">TEDxNTUST 7th</h5>
                    <p className="text-sm text-slate-600">Director of Marketing & PR (2021–2022)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Skills */}
            <div>
              <SectionHeading subtitle="Verified credentials and core competencies.">
                Skills & Certifications
              </SectionHeading>

              {/* Certifications */}
              <div className="mb-10">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award size={20} className="text-blue-600" /> Certifications
                </h4>
                <div className="grid gap-3">
                  {certifications.map((cert) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                        <span className="font-semibold text-slate-900 text-sm md:text-base">{cert.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full shrink-0 ml-2">
                        {cert.issuer}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills Matrix */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Code2 size={20} className="text-blue-600" /> Skills Matrix
                </h4>
                <div className="space-y-4">
                  {skillCategories.map((cat) => (
                    <div key={cat.title} className="p-5 bg-white rounded-2xl border border-slate-100">
                      <div className="text-sm font-bold text-slate-900 mb-3">{cat.title}</div>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-slate-50 border border-slate-200/80 text-slate-700 text-xs md:text-sm font-medium rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let's Connect</h2>
            <p className="text-slate-400 text-lg">
              Open to opportunities in Product Management, Product Marketing, and AI Growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="mailto:hsu.haojiun@gmail.com"
              className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">Email</h3>
              <p className="text-slate-400 text-sm truncate">hsu.haojiun@gmail.com</p>
            </a>

            <a 
              href="tel:+886902215922"
              className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">Phone</h3>
              <p className="text-slate-400 text-sm">+886 902 215 922</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/hao-jiun" 
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">LinkedIn</h3>
              <p className="text-slate-400 text-sm">in/hao-jiun</p>
            </a>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ExternalLink size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">Location</h3>
              <p className="text-slate-400 text-sm">Taipei, Taiwan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-medium">
            © 2026 Hao-Jiun (Jasper) Hsu 許皓鈞. All rights reserved.
          </div>
          <div className="flex gap-6 items-center">
            <a href="https://www.linkedin.com/in/hao-jiun" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hsu.haojiun@gmail.com" className="hover:text-white transition-colors" title="Email">
              <Mail size={20} />
            </a>
            <a href="tel:+886902215922" className="hover:text-white transition-colors" title="Phone">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


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
  ExternalLink, 
  ChevronRight, 
  Award, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Mic, 
  BarChart3,
  Github,
  Menu,
  X
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

interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

// --- Data ---
const experiences: Experience[] = [
  {
    company: "Dept. of Information Technology, Taipei City Government",
    role: "Substitute Military Service",
    period: "04/2026 – 07/2026",
    location: "Taipei, Taiwan",
    description: [
      "Deployed a PII data anonymization tool and evaluated open-source instant messaging solutions."
    ],
    tags: ["Government IT", "Data Privacy", "Open Source"]
  },
  {
    company: "Microsoft Taiwan",
    role: "Marketing Operation Intern – Sales Enablement & Operation Group",
    period: "06/2024 – 07/2025",
    location: "Taipei, Taiwan",
    description: [
      "Directed a team of 4 Student Experts as Project Manager of student booth at DevDays Asia 2025, delivering 2 hands-on workshops and interactive experiences on AI for 1000+ target developers.",
      "Co-led GTM campaigns with field marketing, translating Azure/Copilot capabilities into B2B value propositions for business decision-makers — driving 150K+ views across Copilot video reels series.",
      "Produced 18-episode podcast (2.5k+ downloads), and ran PowerBI workshops for 60+ students.",
      "Led LinkedIn TW Campus Ambassador Program, co-hosted event for students (220+ participants)."
    ],
    tags: ["Project Management", "Content Strategy", "Data Analysis", "Public Speaking"]
  },
  {
    company: "GoSky AI Inc.",
    role: "Marketing Intern – Marketing Team",
    period: "12/2023 – 06/2024",
    location: "Taipei, Taiwan",
    description: [
      "Automated dashboards with Looker Studio integrating Google Analytics data, cutting retrieval time by 80% and empowering sales and marketing team to turn raw data into customer journey insight.",
      "Led year-end B2B client satisfaction survey, from design to analysis, presenting at company all-hands.",
      "Managed digital campaigns (social, EDM, Web) and Google Analytics, assisted in product pre-launch campaigns to boost participation, generating high-quality leads for the funnel and maximizing SOV."
    ],
    tags: ["MarTech", "Looker Studio", "B2B Marketing", "Lead Generation"]
  },
  {
    company: "Taiwan Marketing Research Ltd. (TMR)",
    role: "Digital Marketing Intern & Online Course Instructor",
    period: "02/2022 – 09/2023",
    location: "Taipei, Taiwan",
    description: [
      "Developed and launched a paid online course (130+ students) on Hahow, and led a 4-person website team to a 131% organic traffic increase via SEO in 4 months."
    ],
    tags: ["SEO", "Course Creation", "Team Leadership", "Content Marketing"]
  }
];

const education: Education[] = [
  {
    school: "National Taiwan University of Science and Technology (NTUST)",
    degree: "B.B.A. in Information Management",
    period: "09/2021 - 02/2026",
    details: "HSU, Hao-Jiun et al. Digital Bionics and Heritage: Achieving Text Usage Habit Replication through Semantic Recognition Technology and Large Language Models. Communications of the CCISA."
  },
  {
    school: "Budapest University of Technology and Economics (BME)",
    degree: "Exchange Program, Business Administration",
    period: "09/2025 - 01/2026"
  },
  {
    school: "National Taiwan University (NTU)",
    degree: "Creativity and Entrepreneurship Program",
    period: "09/2023 - 01/2025",
    details: "Project: KonnecT, platform for tracking fandom journeys and interacting with artists."
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
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          JASPER <span className="text-blue-600">HSU</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
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
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600"
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
      className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
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
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <TrendingUp size={14} /> Data-Driven Marketing
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Jasper Hsu <br />
              <span className="text-blue-600 text-4xl md:text-6xl">(Hao-Jiun)</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Information Management graduate from <span className="font-semibold text-slate-900">NTUST</span>. Former Marketing Operations Intern at <span className="font-semibold text-slate-900">Microsoft Taiwan</span>.
              Bridging technology and strategy with a data-driven mindset.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#experience" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1"
              >
                View Experience
              </a>
              <a 
                href="https://www.linkedin.com/in/hao-jiun" 
                target="_blank"
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white bg-slate-200">
              <img 
                src={hsuImage} 
                alt="Jasper Hsu" 
                className="w-full h-full object-cover"
              />
              {/* Overlay for professional feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-60" />
            
            {/* Floating Stats Card */}
            
          </motion.div>
        </div>
      </section>

      {/* About / Summary Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Bridging the gap between technology and business strategy.">
            About Me
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-lg text-slate-600 leading-relaxed space-y-4">
              <p>
                Hi, I’m <span className="font-bold text-slate-900">Jasper (Hao-Jiun) Hsu</span>. I am an Information Management graduate from <span className="text-blue-600 font-semibold">National Taiwan University of Science and Technology (NTUST)</span> with a passion for bridging the gap between technology and business strategy.
              </p>
              <p>
                My experience includes working as a Marketing & Operations Intern at <span className="font-semibold text-slate-900">Microsoft Taiwan</span> and a Marketing Intern at a SaaS startup. These roles have sharpened my skills in data analysis, strategic planning, and campaign execution.
              </p>
              <p>
                I thrive in dynamic environments where I can leverage my technical background to drive marketing performance. I am currently open to opportunities. Let’s connect!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">IM</div>
                <div className="text-xs text-blue-400 font-bold uppercase tracking-wider">Background</div>
              </div>
              <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">SaaS</div>
                <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider">Startup Exp</div>
              </div>
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">MSFT</div>
                <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Internship</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <div className="text-3xl font-bold text-slate-600 mb-1">AI</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Focused</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3+ Years Experience</h3>
              <p className="text-slate-600 leading-relaxed">
                Proven track record in marketing and content strategy at global tech leaders and innovative MarTech startups.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data-Driven Mindset</h3>
              <p className="text-slate-600 leading-relaxed">
                Expertise in Looker Studio, PowerBI, and Google Analytics to turn raw data into actionable customer insights.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Leadership</h3>
              <p className="text-slate-600 leading-relaxed">
                Strong abilities in team management, project coordination, and professional bilingual communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="My professional journey and key achievements in marketing and operations.">
            Work Experience
          </SectionHeading>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative grid md:grid-cols-[250px_1fr] gap-8 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-sm font-bold text-blue-600 mb-1 uppercase tracking-widest">{exp.period}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.company}</h3>
                  <div className="text-slate-500 font-medium flex items-center gap-1">
                    <ChevronRight size={16} className="text-blue-400" /> {exp.location}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">{exp.role}</h4>
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
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

      {/* Education & Activities */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <SectionHeading>Education</SectionHeading>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={edu.school}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-slate-100"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                    <div className="text-sm font-bold text-blue-600 mb-1">{edu.period}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.school}</h3>
                    <div className="text-slate-600 font-medium mb-2">{edu.degree}</div>
                    {edu.details && <p className="text-sm text-slate-500 italic">{edu.details}</p>}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Extracurricular */}
            <div>
              <SectionHeading>Extracurricular</SectionHeading>
              <div className="grid gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Joint Orientation Camp (2023)</h4>
                    <p className="text-sm text-slate-600">General Coordinator for NTUST & NTUNHS 4-Dept.</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Big Data Innovation Competition</h4>
                    <p className="text-sm text-slate-600">National Top 10 Finalist (2023)</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                    <Mic size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">TEDxNTUST 7th</h4>
                    <p className="text-sm text-slate-600">Director of Marketing & PR (2021–2022)</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Certifications</h4>
                    <p className="text-sm text-slate-600">Microsoft Certified: Azure Fundamentals (AZ-900)</p>
                    <p className="text-sm text-slate-600">Google Project Management by Coursera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-400 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="mailto:hsu.haojiun@gmail.com"
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Me</h3>
              <p className="text-slate-400">hsu.haojiun@gmail.com</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/hao-jiun" 
              target="_blank"
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <div className="w-14 h-14 bg-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Linkedin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-slate-400">Connect with me</p>
            </a>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ExternalLink size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-slate-400">Taipei, Taiwan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-medium">
            © 2026 Hao-Jiun Hsu (Jasper). All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/hao-jiun" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:hsu.haojiun@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

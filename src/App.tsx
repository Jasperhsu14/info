/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import hsuImage from './hsu.webp';

// Project & Portfolio Assets
import bentoImage from './assets/bento_profile.png';
import devdaysImg from './assets/projects/devdays_booth.png';
import copilotImg from './assets/projects/copilot_reels.png';
import linkedinImg from './assets/projects/linkedin_event.png';
import goskyImg from './assets/projects/gosky_dashboard.png';
import konnectImg from './assets/projects/konnect_analysis.png';
import devdaysSlide from './assets/projects/page_4.png';
import copilotSlide from './assets/projects/page_5.png';
import linkedinSlide from './assets/projects/page_6.png';
import goskySlide from './assets/projects/page_7.png';
import konnectSlide from './assets/projects/page_8.png';

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
  Layers,
  Eye,
  ArrowUpRight,
  Flame,
  Globe2,
  BrainCircuit,
  Zap,
  Target
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

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  category: 'all' | 'ai' | 'data' | 'growth';
  metricBadge: string;
  summary: string;
  thumbnail: string;
  detailImage?: string;
  context: string;
  keyActions: string[];
  impact: string[];
  tags: string[];
  link?: string;
  linkLabel?: string;
}

interface Education {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details?: string;
}

// --- Data ---
const caseStudies: CaseStudy[] = [
  {
    id: "devdays-2025",
    title: "DevDays Asia 2025 Next Big AI",
    subtitle: "Student Technical Booth & AI Workshops",
    organization: "Microsoft Taiwan",
    period: "06/2024 – 07/2025",
    category: "ai",
    metricBadge: "200+ Developers Engaged",
    summary: "Led a 4-person technical team running the Next Big AI student booth; delivered 2 hands-on workshops on Copilot Studio & Azure AI with live demos.",
    thumbnail: devdaysImg,
    detailImage: devdaysSlide,
    context: "DevDays Asia is Microsoft's premier developer conference in Taiwan. The goal was to showcase next-generation AI developer tools (Copilot Studio, Azure AI) to professional developers and student innovators.",
    keyActions: [
      "Directed a 4-person student technical team as Project Manager, coordinating deliverables, timelines, and handover to 3 interns.",
      "Defined requirements for 4 interactive booth showcases and designed 2 hands-on AI workshops.",
      "Conducted live demonstrations of Copilot Studio agent workflows and Azure OpenAI capabilities."
    ],
    impact: [
      "Engaged 200+ developers and technical decision-makers over the conference.",
      "Delivered 2 fully-booked interactive AI workshops with high participant satisfaction.",
      "Bridged student tech talent with enterprise developer ecosystems."
    ],
    tags: ["Copilot Studio", "Azure AI", "Event PM", "Technical Workshops", "Developer Relations"],
    link: "https://www.linkedin.com/in/hao-jiun",
    linkLabel: "View on LinkedIn"
  },
  {
    id: "copilot-reels",
    title: "“Meet My Copilot” Viral Video Series",
    subtitle: "B2B & B2C AI Adoption Short-Form Content",
    organization: "Microsoft Taiwan",
    period: "06/2024 – 07/2025",
    category: "growth",
    metricBadge: "150,000+ Views (10x Lift)",
    summary: "Co-created 4 short video reels translating Copilot capabilities into relatable workplace use cases, driving 150K+ organic views across platforms.",
    thumbnail: copilotImg,
    detailImage: copilotSlide,
    context: "To boost adoption and awareness of Microsoft 365 Copilot among professionals, we needed engaging, snackable video content showing realistic workplace problem-solving.",
    keyActions: [
      "Led end-to-end content planning, scriptwriting (POV office scenarios), and on-site filming.",
      "Collaborated with cross-functional marketing teams to ensure accurate product value proposition messaging.",
      "Optimized video hooks and pacing for Instagram Reels and social video algorithms."
    ],
    impact: [
      "Generated 150,000+ total views across social platforms (a 10x increase over average campaign baselines).",
      "Top-performing reel achieved 129,000+ views and 3,400+ likes individually.",
      "Successfully drove brand sentiment and product curiosity for Copilot in Taiwan."
    ],
    tags: ["Short-Form Video", "GTM Strategy", "M365 Copilot", "Viral Growth", "Content Direction"],
    link: "https://www.linkedin.com/in/hao-jiun",
    linkLabel: "View on LinkedIn"
  },
  {
    id: "gosky-dashboard",
    title: "Automated Growth Funnel Dashboard",
    subtitle: "Acquisition to SQL BI Automation & CVR Optimization",
    organization: "GoSky AI Inc.",
    period: "12/2023 – 06/2024",
    category: "data",
    metricBadge: "CVR 7.9% → 11.3% (+43%)",
    summary: "Built an automated Looker Studio & GA dashboard tracking acquisition-to-registration performance; increased CVR from 7.9% to 11.3% and cut MQL-to-SQL reporting time by 80%.",
    thumbnail: goskyImg,
    detailImage: goskySlide,
    context: "The marketing and BD teams lacked a unified view of conversion performance across paid and organic channels, requiring hours of manual weekly data assembly.",
    keyActions: [
      "Served as Project Lead reporting weekly to the Head of Product Marketing.",
      "Built automated dashboards in Looker Studio integrating Google Analytics (GA4) traffic and event data.",
      "Formulated weekly ad budget reallocation recommendations based on granular channel CVR.",
      "Extended tracking to qualify inbound contact-form leads from MQL to SQL for the Business Development team."
    ],
    impact: [
      "Increased registration conversion rate (CVR) from 7.9% to 11.3% (+43% relative growth).",
      "Reduced weekly MQL-to-SQL reporting and lead qualification time by 80%.",
      "Enabled data-driven budget allocation across paid social and search channels."
    ],
    tags: ["Looker Studio", "GA4", "Funnel Optimization", "MQL / SQL", "Growth Analytics"],
    link: "https://www.linkedin.com/in/hao-jiun",
    linkLabel: "View on LinkedIn"
  },
  {
    id: "linkedin-ambassador",
    title: "LinkedIn Taiwan Campus Ambassador Program",
    subtitle: "Nationwide Student Networking & Brand Keynote",
    organization: "LinkedIn Taiwan",
    period: "11/2024 – 06/2025",
    category: "growth",
    metricBadge: "300+ Signups / 220+ Attendees",
    summary: "Managed 25+ ambassadors across 3 teams; co-hosted Taiwan's first open LinkedIn student event and delivered a keynote on personal branding.",
    thumbnail: linkedinImg,
    detailImage: linkedinSlide,
    context: "Expanding LinkedIn's presence among university students in Taiwan by empowering student ambassadors and hosting high-impact career networking initiatives.",
    keyActions: [
      "Collaborated closely with 8 mentors in the LinkedIn Hong Kong & Taiwan teams.",
      "Led 25+ ambassadors divided into 3 functional teams (Marketing, Events, PR).",
      "Co-hosted the first open LinkedIn student networking event in Taiwan.",
      "Delivered a keynote speech on personal branding and professional profile optimization."
    ],
    impact: [
      "Attracted 300+ signups and 220+ live participants for the flagship networking event.",
      "Generated 97,000+ organic social reach and 1,400+ engagements.",
      "Established long-term engagement pathways for university talent on LinkedIn."
    ],
    tags: ["Community Leadership", "Event Planning", "Keynote Speaker", "Brand Advocacy", "Team Management"],
    link: "https://www.linkedin.com/in/hao-jiun",
    linkLabel: "View on LinkedIn"
  },
  {
    id: "konnect-research",
    title: "KonnecT Fandom Statistical Analysis",
    subtitle: "744 Survey Responses & Econometric Hypothesis Testing",
    organization: "NTU Creativity & Entrepreneurship Program",
    period: "09/2023 – 06/2024",
    category: "data",
    metricBadge: "3rd Place in NTUCEP (744 Responses)",
    summary: "Analyzed 744 survey responses using Excel, Tableau, and JASP (Paired Samples T-tests) to extract consumer insights and formulate product recommendations.",
    thumbnail: konnectImg,
    detailImage: konnectSlide,
    context: "KonnecT is a fandom journey tracking and creator interaction platform developed within the NTU Creativity & Entrepreneurship Program (NTUCEP).",
    keyActions: [
      "Designed and collected 744 structured online survey responses from active fandom participants.",
      "Visualized behavioral and willingness-to-pay distributions in Excel and Tableau.",
      "Conducted Paired Samples T-tests and statistical validation in JASP to test willingness-to-pay hypotheses.",
      "Translated statistical findings into concrete UX and monetization features for the product roadmap."
    ],
    impact: [
      "Won 3rd Place overall in the 16th NTU Creativity & Entrepreneurship Program.",
      "Provided statistically validated consumer insights (p < 0.001) for creator tipping mechanisms.",
      "Established evidence-based product positioning for music & creator engagement."
    ],
    tags: ["JASP Statistics", "Tableau", "User Research", "Survey Design", "Product Strategy"],
    link: "https://www.linkedin.com/in/hao-jiun",
    linkLabel: "View on LinkedIn"
  }
];

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
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education & Skills', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-slate-200/50' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-500/20">J</span>
          <span>JASPER <span className="text-blue-600">HSU</span></span>
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
          <a
            href="mailto:hsu.haojiun@gmail.com"
            className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md shadow-blue-200 transition-all"
          >
            Get In Touch
          </a>
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
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-blue-600"
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
      className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mt-4 rounded-full"
    />
  </div>
);

// --- Apple-style Glassmorphism Bento Grid Component ---
const AppleBentoGrid = () => {
  return (
    <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-slate-100/80 via-white/40 to-slate-200/50 backdrop-blur-2xl border border-white/60 shadow-2xl shadow-slate-200/60 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Container */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-4.5">
        
        {/* Card 1: NTUST */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-2 p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:shadow-md transition-all flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0 shadow-sm">
            <GraduationCap size={24} />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-base md:text-lg leading-snug">國立臺灣科技大學</div>
            <div className="text-xs md:text-sm text-slate-600">Dept. of Information Management</div>
            <div className="text-xs font-semibold text-blue-600 mt-0.5">2021/9 – 2026/2</div>
          </div>
        </motion.div>

        {/* Card 2: Microsoft */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-2 p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:shadow-md transition-all flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-red-100 border border-amber-200/60 flex items-center justify-center shrink-0 shadow-sm">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2.5 h-2.5 bg-[#f25022] rounded-xs" />
              <div className="w-2.5 h-2.5 bg-[#7fba00] rounded-xs" />
              <div className="w-2.5 h-2.5 bg-[#00a4ef] rounded-xs" />
              <div className="w-2.5 h-2.5 bg-[#ffb900] rounded-xs" />
            </div>
          </div>
          <div>
            <div className="font-bold text-slate-900 text-base md:text-lg leading-snug">Microsoft Taiwan</div>
            <div className="text-xs md:text-sm text-slate-600">Marketing Operation Intern (SE&O)</div>
            <div className="text-xs font-semibold text-blue-600 mt-0.5">2024/6 – 2025/7</div>
          </div>
        </motion.div>

        {/* Card 3: BME Exchange */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-1 p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center"
        >
          <div className="w-9 h-9 rounded-xl bg-red-900 text-white flex items-center justify-center text-xs font-bold mb-2 shadow-sm">
            BME
          </div>
          <div className="font-bold text-slate-900 text-xs md:text-sm">Exchange</div>
          <div className="text-[11px] text-slate-500 font-medium">Budapest, Hungary</div>
          <div className="text-[11px] font-semibold text-blue-600 mt-0.5">2025/9 – 2026/1</div>
        </motion.div>

        {/* CENTER HERO CARD: 許皓鈞 Jasper */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-2 row-span-2 p-6 md:p-8 rounded-3xl bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 text-white shadow-xl shadow-pink-500/25 flex flex-col items-center justify-center text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[1px]" />
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-white/20 rounded-full blur-xl" />
          <div className="text-3xl md:text-5xl font-black tracking-tight mb-2 drop-shadow-sm">許皓鈞</div>
          <div className="text-xl md:text-3xl font-bold tracking-wide text-white/95">Jasper</div>
          <div className="mt-3 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white/95 tracking-wide border border-white/30">
            Product • AI Growth • Data
          </div>
        </motion.div>

        {/* Card 4: GoSky AI */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-1 p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center"
        >
          <div className="text-sm font-black tracking-tighter text-blue-600 mb-1">GOSKY:</div>
          <div className="font-bold text-slate-900 text-xs md:text-sm">Marketing Intern</div>
          <div className="text-[11px] font-semibold text-blue-600 mt-0.5">2023/12 – 2024/5</div>
        </motion.div>

        {/* Card 5: NTUCEP */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-1 p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-sm mb-1.5">
            臺大
          </div>
          <div className="font-bold text-slate-900 text-xs md:text-sm leading-tight">創創學程</div>
          <div className="text-[10px] text-slate-500">NTUCEP</div>
          <div className="text-[11px] font-semibold text-blue-600 mt-0.5">2023/9 – 2024/6</div>
        </motion.div>

        {/* Card 6: TMR */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-1 p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center"
        >
          <div className="text-base font-black tracking-tight text-red-600 mb-1">TMR</div>
          <div className="font-bold text-slate-900 text-xs md:text-sm">Digital Mkt Intern</div>
          <div className="text-[11px] font-semibold text-blue-600 mt-0.5">2022/2 – 2023/3</div>
        </motion.div>

        {/* Card 7: Power of Agility */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-1 p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center"
        >
          <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-1.5 shadow-sm">
            <BrainCircuit size={20} />
          </div>
          <div className="font-bold text-slate-800 text-xs leading-tight">Power of Agility</div>
        </motion.div>

        {/* Card 8: Power of People */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-1 p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center"
        >
          <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5 shadow-sm">
            <Users size={20} />
          </div>
          <div className="font-bold text-slate-800 text-xs leading-tight">Power of People</div>
        </motion.div>

        {/* Card 9: TOEIC 855 */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-1 p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-bold mb-1.5 shadow-sm">
            文 A
          </div>
          <div className="font-bold text-slate-900 text-xs">TOEIC 855</div>
          <div className="text-[10px] text-emerald-600 font-semibold">Gold Certificate</div>
        </motion.div>

        {/* Card 10: TEDxNTUST */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="col-span-1 p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center"
        >
          <div className="text-xs font-black text-red-600 mb-1">TEDx<span className="text-slate-900">NTUST</span></div>
          <div className="font-bold text-slate-900 text-xs leading-tight">Director MKT & PR</div>
          <div className="text-[11px] font-semibold text-blue-600 mt-0.5">2021/9 – 2022/8</div>
        </motion.div>

      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'data' | 'growth'>('all');
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 text-slate-800">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-3xl sm:text-4xl md:text-5xl">(Jasper) 許皓鈞</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Product-oriented professional with experience in <span className="font-semibold text-slate-900">AI</span>, <span className="font-semibold text-slate-900">data-driven growth</span>, and cross-functional execution at <span className="font-semibold text-slate-900">Microsoft Taiwan</span> and <span className="font-semibold text-slate-900">GoSky AI</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#portfolio" 
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Sparkles size={18} /> View Case Studies
              </a>
              <a 
                href="https://www.linkedin.com/in/hao-jiun" 
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
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
            <div className="absolute -top-6 -right-6 w-44 h-44 bg-blue-300/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-indigo-300/40 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* About & Apple Bento Grid Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Connecting product thinking, data analytics, and cross-functional execution.">
            About & Highlights
          </SectionHeading>

          {/* Apple-style Bento Grid Showcase */}
          <div className="mb-16">
            <AppleBentoGrid />
          </div>
          
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

      {/* Featured Case Studies / Portfolio Section with Expandable Modals */}
      <section id="portfolio" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
                <Target size={14} /> Case Studies & Projects
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
                Featured Portfolio
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-xl">
                Explore quantifiable impacts, visual artifacts, and execution strategies across real enterprise and startup projects.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === 'all' 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                All 全部
              </button>
              <button
                onClick={() => setSelectedCategory('ai')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === 'ai' 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                AI & Tech
              </button>
              <button
                onClick={() => setSelectedCategory('data')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === 'data' 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Growth & Data
              </button>
              <button
                onClick={() => setSelectedCategory('growth')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === 'growth' 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                GTM & Community
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredCaseStudies.map((cs) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={cs.id}
                  onClick={() => setActiveModal(cs)}
                  className="group cursor-pointer rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail Image Container */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                      <img 
                        src={cs.thumbnail} 
                        alt={cs.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      
                      {/* Metric Pill Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold shadow-md border border-blue-400/30 flex items-center gap-1.5">
                          <Flame size={13} className="text-amber-300" />
                          {cs.metricBadge}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4">
                        <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">{cs.organization}</div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                        <span>{cs.title}</span>
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-400 shrink-0" />
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
                        {cs.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cs.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium">
                          {tag}
                        </span>
                      ))}
                      {cs.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded-full bg-white/5 text-[11px] text-slate-400">
                          +{cs.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="text-xs font-bold text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Case Study <ChevronRight size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 z-10 p-6 md:p-8 text-slate-800"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors z-20"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                  {activeModal.organization} • {activeModal.period}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{activeModal.title}</h3>
                <div className="text-base text-slate-500 font-medium">{activeModal.subtitle}</div>
              </div>

              {/* Detail Image Preview */}
              {activeModal.detailImage && (
                <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                  <img 
                    src={activeModal.detailImage} 
                    alt={activeModal.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Highlight Metric Pill */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-blue-500/20">
                  <Flame size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Key Achievement</div>
                  <div className="text-lg font-bold text-slate-900">{activeModal.metricBadge}</div>
                </div>
              </div>

              {/* Section 1: Background & Context */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Target size={16} className="text-blue-600" /> Background & Goal
                </h4>
                <p className="text-slate-600 text-base leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {activeModal.context}
                </p>
              </div>

              {/* Section 2: Key Actions & Execution */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Zap size={16} className="text-blue-600" /> Key Actions & Methodology
                </h4>
                <ul className="space-y-2.5">
                  {activeModal.keyActions.map((action, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed text-sm md:text-base">
                      <CheckCircle2 size={18} className="text-blue-600 mt-1 shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3: Impact & Results */}
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <TrendingUp size={16} className="text-emerald-600" /> Quantifiable Impact
                </h4>
                <ul className="space-y-2.5">
                  {activeModal.impact.map((result, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed text-sm md:text-base">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeModal.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {activeModal.link && (
                  <a 
                    href={activeModal.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
                  >
                    <Linkedin size={16} /> {activeModal.linkLabel || "View Details"}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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

      {/* Education, Certifications & Skills */}
      <section id="education" className="py-24 bg-white">
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
                      <p className="text-sm text-slate-500 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
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
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Joint Orientation Camp (2023)</h5>
                    <p className="text-sm text-slate-600">General Coordinator for NTUST & NTUNHS 4-Dept.</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Big Data Innovation Competition</h5>
                    <p className="text-sm text-slate-600">National Top 10 Finalist (2023)</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 items-start">
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
                      className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                        <span className="font-semibold text-slate-900 text-sm md:text-base">{cert.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200/60 px-2.5 py-1 rounded-full shrink-0 ml-2 shadow-xs">
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
                    <div key={cat.title} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="text-sm font-bold text-slate-900 mb-3">{cat.title}</div>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs md:text-sm font-medium rounded-lg shadow-xs"
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



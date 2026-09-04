/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ArrowRight, 
  ArrowLeft,
  Video, 
  Mic, 
  FileText, 
  HelpCircle, 
  Zap, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
  X,
  Clock,
  Maximize2,
  Check,
  AlertCircle,
  Lock,
  Presentation,
  Layers,
  Activity,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Compass,
  Menu as MenuIcon,
  GitFork,
  CornerDownRight,
  Network
} from 'lucide-react';
import { curriculum, Module, Course } from './data';
import logo from './logo.png';
import bgDark from './bg-dark.png';
import bgLight from './bg-light.png';
import verticalPurple from './vertical-purple.png';
import b2bLandscape from './b2b-landscape.png';
import contentUnifier from './content-unifier.png';
import oktaStakeholders from './okta-stakeholders.png';


function Chapter2VideoPlayer() {
  const videoUrl = "https://docs.google.com/videos/d/1wmyl11KBpi1gW1FXfB5ra2VgTWaRccqVyfAX9-26t3w/play?usp=sharing";

  return (
    <div className="relative aspect-video w-full rounded-xl bg-slate-900 border border-brand-line/80 overflow-hidden shadow-md group">
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white cursor-pointer hover:bg-slate-800/90 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-label="Open WATCH, Chapter 2: The Connective Tissue Video"
      >
        <div className="w-16 h-16 rounded-full bg-indigo-600 group-hover:bg-indigo-500 group-hover:scale-110 flex items-center justify-center shadow-lg transition-all duration-200 mb-4">
          <Play size={28} className="text-white fill-white ml-1" />
        </div>
        <p className="text-base font-semibold tracking-tight text-slate-100 flex items-center gap-2">
          <span>WATCH, Chapter 2: The Connective Tissue</span>
          <ExternalLink size={16} className="text-slate-300 shrink-0" />
        </p>
      </a>
    </div>
  );
}


function Chapter4VideoPlayer() {
  const videoUrl = "https://drive.google.com/file/d/1xEz0ezVjCAJ0PykB9nBM8g2avciPurAB8EqkNZi5kTQ/preview";

  return (
    <div className="relative aspect-video w-full rounded-xl bg-slate-900 border border-brand-line/80 overflow-hidden shadow-md group">
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white cursor-pointer hover:bg-slate-800/90 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-label="Open Watch: How Other Agencies Do It Video in Google Drive"
      >
        <div className="w-16 h-16 rounded-full bg-indigo-600 group-hover:bg-indigo-500 group-hover:scale-110 flex items-center justify-center shadow-lg transition-all duration-200 mb-4">
          <Play size={28} className="text-white fill-white ml-1" />
        </div>
        <p className="text-base font-semibold tracking-tight text-slate-100 flex items-center gap-2">
          <span>Watch: How Other Agencies Do It</span>
          <ExternalLink size={16} className="text-slate-300 shrink-0" />
        </p>
      </a>
    </div>
  );
}

function getYouTubeEmbedUrl(url?: string): string {
  if (!url) return '';
  let id = '';
  if (url.includes('youtu.be/')) {
    id = url.split('youtu.be/')[1]?.split('?')[0];
  } else if (url.includes('watch?v=')) {
    id = url.split('watch?v=')[1]?.split('&')[0];
  } else if (url.includes('embed/')) {
    id = url.split('embed/')[1]?.split('?')[0];
  }
  return id ? `https://www.youtube.com/embed/${id}?rel=0` : url;
}

const QUIZ_DATA = {
  'chapters-2-4': {
    title: "Quietly L&D Module 1: Chapter 2-4 Quiz",
    description: "Multi-chapter evaluation verifying stakeholder alignment, lifecycle checkpoints, and unified content pipeline standards.",
    questions: [
      {
        id: 1,
        question: "Which customer lifecycle stage is the Sales archetype primarily responsible for optimizing?",
        options: [
          { letter: "A", text: "Exploration" },
          { letter: "B", text: "Evaluation" },
          { letter: "C", text: "Onboarding" },
          { letter: "D", text: "Growth" }
        ],
        correctAnswer: "B",
        explanation: "Sales archetypes guide buyers during the Evaluation phase through to the actual Purchase, converting SQLs and opportunities."
      },
      {
        id: 2,
        question: "What primary metrics does the Campaigns archetype prioritize during the Awareness stage?",
        options: [
          { letter: "A", text: "Opportunities closed" },
          { letter: "B", text: "Organic sessions and CPA" },
          { letter: "C", text: "CLTV and Account growth" },
          { letter: "D", text: "MQL and SQL" }
        ],
        correctAnswer: "B",
        explanation: "Campaign success relies on optimized reach and channel CPA. Its key indicator parameters are organic session volume and CPA optimizations."
      },
      {
        id: 3,
        question: "The Demand Gen function focuses on the Exploration stage and cares about which key metrics?",
        options: [
          { letter: "A", text: "Avg. time to complete onboarding milestones" },
          { letter: "B", text: "Opportunities closed and Avg. deal size/value" },
          { letter: "C", text: "MQL and SQL" },
          { letter: "D", text: "CSAT and Customer churn" }
        ],
        correctAnswer: "C",
        explanation: "Demand Gen filters general interest in the Exploration stage down into concrete pipeline segments: Marketing Qualified Leads (MQLs) and Sales Qualified Leads (SQLs)."
      },
      {
        id: 4,
        question: "Which function is responsible for optimizing the Onboarding stage of the customer lifecycle?",
        options: [
          { letter: "A", text: "Product marketing" },
          { letter: "B", text: "Renewals & Account Management" },
          { letter: "C", text: "Customer Success Management" },
          { letter: "D", text: "Solutions Engineering" }
        ],
        correctAnswer: "C",
        explanation: "Customer Success Management (CSM) handles customer onboarding, maximizing early adoption, and driving user CSAT scores."
      },
      {
        id: 5,
        question: "During the Retention stage, the Renewals & Account Management archetype prioritizes which set of metrics?",
        options: [
          { letter: "A", text: "CLTV and Account growth" },
          { letter: "B", text: "Organic sessions" },
          { letter: "C", text: "CSAT and Customer churn" },
          { letter: "D", text: "Opportunities closed and Avg. deal size/value" }
        ],
        correctAnswer: "A",
        explanation: "Renewals and Account Management drives expansion value during Retention -> Growth, tracking Customer Lifetime Value (CLTV) and upsell/cross-sell account growth."
      },
      {
        id: 6,
        question: "What is the critical unifying role of content across the B2B ecosystem?",
        options: [
          { letter: "A", text: "It solely focuses on conversion assets for Demand Gen." },
          { letter: "B", text: "It ensures alignment across functions to support a cohesive, end-to-end customer journey." },
          { letter: "C", text: "It is confined to Marketing and Communications efforts." },
          { letter: "D", text: "It primarily serves as proof points for Sales teams." }
        ],
        correctAnswer: "B",
        explanation: "Content acts as the operational, strategic joints. By supplying consistent answers matching traveler interest across functions, it welds separate silos into one seamless lifecycle track."
      }
    ]
  }
};

interface PhaseCaseStudy {
  agency: string;
  description: string;
  bullets: string[];
  interactives?: {
    type: 'growth-matrix' | 'story-shift' | 'guardrails-list' | 'blocking-map' | 'chart';
    title: string;
    subtitle?: string;
    items?: any[];
  };
}

interface PhaseBlueprint {
  consultancy: string;
  headline: string;
  description: string;
  bullets: string[];
  chartTitle?: string;
  chartData?: any[];
}

interface CampaignPhase {
  number: number;
  id: string;
  title: string;
  colorClass: string;
  badgeColor: string;
  glowColor: string;
  bulletColor: string;
  bullets: string[];
  task: string;
  goal?: string;
  gate?: string;
  slidesCovered: string;
  agencyCaseStudy: PhaseCaseStudy;
  consultancyBlueprint: PhaseBlueprint;
  hybridValue: {
    title: string;
    description: string;
  };
}

const campaignPhases: CampaignPhase[] = [
  {
    number: 1,
    id: 'discovery-brand-audit',
    title: 'Discovery & Brand Audit',
    colorClass: 'from-blue-50 to-blue-100/50 border-blue-200 text-blue-900 hover:bg-blue-100/30',
    badgeColor: 'bg-blue-100 text-blue-950 border-blue-200',
    glowColor: 'group-hover:shadow-blue-100/20',
    bulletColor: 'bg-blue-600',
    bullets: ['Market Review', 'Isolate Core Tension', 'Core Problem to Solve'],
    task: 'Deep dive into client marketplace data, share-of-voice, and competitor positioning.',
    goal: 'Isolate the core consumer tension and identify the main problem to be solved.',
    slidesCovered: 'Slides 10 & 11',
    agencyCaseStudy: {
      agency: 'Cosette (Creative Marketing & Comms Agency)',
      description: 'Central to the discover phase is a comprehensive strategic framework focused on finding the win-win overlap between what the brand offers, people\'s human needs, and competitor vulnerabilities within the cultural context.',
      bullets: [
        'Brand Touchpoint Review: Conducted extensive reviews of client\'s existing touchpoints and assets.',
        '\'Families Helped\' Survey: Captured key quantitative metrics and insights around family support.',
        'Proto-Persona Workshop: Outlined early stakeholder/buyer characters to anchor strategic target alignment.',
        'Desk Research & Competitive Analysis: Comprehensive analysis of the wider market and rivals.',
        'Giving Trends Review: Standardized content objectives against modern giving motivations.'
      ],
      interactives: {
        type: 'growth-matrix',
        title: 'Brand Asset Valuator (Y&R Matrix Analysis)',
        subtitle: 'Understand the stages of consumer attraction depicting Brand Strength & Brand Stature:',
        items: [
          { label: 'Curiosity', strength: 'High', stature: 'Low', desc: 'High differentiation & relevance, low esteem & knowledge. High potential for brand launch.' },
          { label: 'Commitment', strength: 'High', stature: 'High', desc: 'The optimal gold standard. Deep emotional trust paired with strong relevance (e.g., Disney).' },
          { label: 'Indifference', strength: 'Low', stature: 'Low', desc: 'Low differentiation and low knowledge. Brand is viewed as a generic commodity (e.g., Diners Club).' },
          { label: 'Fatigue', strength: 'Low', stature: 'High', desc: 'Low strength but high stature. Highly known but lacking current relevance or excitement (e.g., TV Guide).' }
        ]
      }
    },
    consultancyBlueprint: {
      consultancy: 'BCG (Management Consulting Approach)',
      headline: 'Framework-First Customer Journey Strategy',
      description: 'Rather than launching straight into creative ideas, management consultancies model the entire consumer journey across distinct stages to identify strategic friction first.',
      bullets: [
        'Rigorous Multi-Stage Mapping: Formulates discrete stages for Inspiration, Exploration, Selection, and Closing.',
        'Sourcing & Channel Diagnostics: Identifies exactly where buyers search (did-it-myself vs partner/family assistance).',
        'Channel Indexing: Statistically tracks above/below average index of source channels (websites, printed brochures, agent consultations) to optimize media allocations.'
      ],
      chartTitle: 'BCG Customer Journey Indexing (Source Utilization Rating)',
      chartData: [
        { stage: 'Inspiration', online: '26%', partner: '58%', print: '22%', agency: '12%' },
        { stage: 'Exploration', online: '60%', partner: '42%', print: '19%', agency: '39%' },
        { stage: 'Selection', online: '52%', partner: '39%', print: '14%', agency: '33%' },
        { stage: 'Closing', online: '33%', partner: '31%', print: '10%', agency: '58%' }
      ]
    },
    hybridValue: {
      title: 'The Quietly Differentiator',
      description: 'We marry the storytelling insights of creative agencies with the empirical consumer journey frameworks of consultancies. We treat content as a systematic operation where every asset map aligns with specific B2B audience needs.'
    }
  },
  {
    number: 2,
    id: 'strategic-foundation',
    title: 'Strategic Foundation & The Brief',
    colorClass: 'from-amber-50 to-amber-100/40 border-amber-200 text-amber-900 hover:bg-amber-100/30',
    badgeColor: 'bg-amber-100 text-amber-950 border-amber-200',
    glowColor: 'group-hover:shadow-amber-100/20',
    bulletColor: 'bg-amber-600',
    bullets: ['Distill Insight', 'Write Creative Brief'],
    task: 'Distill market data into a singular, sharp, and highly actionable consumer insight.',
    gate: 'GATE 1 (Strategy Lock): Secure formal client sign-off on the Creative Brief before any creative ideation begins.',
    slidesCovered: 'Slides 12, 13, & 14',
    agencyCaseStudy: {
      agency: 'Cosette & Anomaly Strategic Briefs',
      description: 'Moving the client from a cold transactional structure to a high-emotion conviction story.',
      bullets: [
        'The Case for Chaos: Adopting Martin Weigel (Wieden+Kennedy) theory that "predictability kills the value of creativity." Creativity amplifies commercial impact by 11x.',
        'Cosette\'s RMH Challenge: Traditional approaches were too focused on the clinical solution. They recommended shifting to the "crisis moments" of parents facing a child\'s medical emergencies—tapping into fear, shock, and helplessness to inspire deep donor conviction.',
        'Anomaly\'s North Star: Underlining that you "cannot change something for the better without recognizing what sucks about it" to establishing extreme category purpose.'
      ],
      interactives: {
        type: 'story-shift',
        title: 'Storytelling Paradigm Shift (Cosette RMH Case Study)',
        items: [
          { from: 'Old Transactional Narrative', to: 'New Emotional Reality', desc: 'From static "RMH needs your money to provide rooms" to "Parents are facing a terrifying child crisis—hooking donor-heroes directly into the emotional lifelines of the family stay."' }
        ]
      }
    },
    consultancyBlueprint: {
      consultancy: 'BCG (Management Consulting Approach)',
      headline: 'Analytical Brand Asset Valuations',
      description: 'Rather than focusing on narrative chaos, consultancies quantify brand equity dimensions mathematically to establish business rationale for repositioning.',
      bullets: [
        'Competitive Persona Auditing: Mapping brand attributes (High-quality, Luxurious, Exclusive, Global) relative to global competitor benchmarks.',
        'Averaged Association Matrices: Calculating overall frequency of associations with key traits to validate the "North Star" direction objectively.'
      ]
    },
    hybridValue: {
      title: 'The Quietly Differentiator',
      description: 'We write creative briefs that inspire designers and writers, but anchor those concepts securely in business KPIs. We justify the "chaos" of creative thinking using data-dense proof-of-concepts.'
    }
  },
  {
    number: 3,
    id: 'creative-conception',
    title: 'Creative Conception & \'Big Idea\'',
    colorClass: 'from-orange-50 to-orange-100/50 border-orange-200 text-orange-950 hover:bg-orange-100/30',
    badgeColor: 'bg-orange-100 text-orange-950 border-orange-200',
    glowColor: 'group-hover:shadow-orange-100/20',
    bulletColor: 'bg-orange-600',
    bullets: ['"Big Idea" Platform', 'Overarching Umbrella Concept'],
    task: 'Creative teams brainstorm overarching conceptual platforms, not individual assets.',
    goal: 'Deliver an "umbrella concept" (e.g. a multi-year brand platform) that can stretch seamlessly across TV, out-of-home (OOH), and digital ecosystems.',
    slidesCovered: 'Slides 15, 16 & 17',
    agencyCaseStudy: {
      agency: 'Rethink & Anomaly Platforms',
      description: 'How high-concept creative platforms translate abstract strategy into compelling narratives.',
      bullets: [
        'Rethink\'s Heat Pump Project: "Heat pumps do so much more than heat." They hit the streets using humorous real-world customer interviews to bridge technical complexity with household familiarity.',
        'Anomaly\'s Debatable Platform: Formulating an insight that "Dissent has become commonplace and commoditized." Their creative execution gave influencers "a rooftop to shout from," establishing strict campaign guardrails to stay authentic.',
        'Campaign Guardrails: Anomaly used explicit rules: (1) Topics must be inherently dual-sided. (2) We state an opinion, not a fact. (3) Leverage true honest opinions.'
      ],
      interactives: {
        type: 'guardrails-list',
        title: 'Anomaly Campaign Guardrails Matrix',
        items: [
          { rule: 'Dual-Sided Debate', desc: 'Topics must be inherently debatable and stir social discussion.' },
          { rule: 'Opinionated Stance', desc: 'We state a clear, bold brand opinion—never generic facts or corporate platitudes.' },
          { rule: 'Empower Spokespersons', desc: 'Leverage true, honest opinions from passionate people behind the brand.' },
          { rule: 'Conduit, Not Source', desc: 'The brand acts as the platform/channel for debate, letting our stakeholders drive it.' }
        ]
      }
    },
    consultancyBlueprint: {
      consultancy: 'BCG (Management Consulting Approach)',
      headline: 'Strategic Scenario & Option Matrices',
      description: 'Instead of raw storytelling, a consultancy presents clean strategic option trees to assess which concept offers the highest operational feasibility and risk mitigation.',
      bullets: [
        'Structured Option Tree: Mapping different brand pillars with direct cost estimates and compliance checks.',
        'Pyramid Principle Framing: Introducing conclusions first (e.g., "Pillar C provides 24% higher ROI opportunity") then backing it up with customer survey matrices.'
      ]
    },
    hybridValue: {
      title: 'The Quietly Differentiator',
      description: 'We believe "The Big Idea" shouldn\'t be a shot in the dark. We design conceptual platforms of a creative boutique, but build them on a foundation of user-intent data to guarantee campaign durability.'
    }
  },
  {
    number: 4,
    id: 'media-architecture',
    title: 'Media Architecture & Channel Mapping',
    colorClass: 'from-emerald-50 to-emerald-100/50 border-emerald-200 text-emerald-950 hover:bg-emerald-100/30',
    badgeColor: 'bg-emerald-100 text-emerald-950 border-emerald-200',
    glowColor: 'group-hover:shadow-emerald-100/20',
    bulletColor: 'bg-emerald-600',
    bullets: ['Channel Mapping', 'Paid/Owned/Earned Matrix'],
    task: 'Media planners match the creative concepts to complex audience consumption habits.',
    goal: 'Build a structured media plan that dictates where the creative platform will live across Paid, Owned, and Earned environments.',
    slidesCovered: 'Slides 19, 20, & 21',
    agencyCaseStudy: {
      agency: 'iProspect & Anomaly Channel Strategies',
      description: 'Converting creative spark into targeted distribution.',
      bullets: [
        'RMH Campaign Summary Matrices: Mapped distinct audience tracks: Brand-Primary (Switch focus), Heat Pumps-Secondary (Switch/Save), Conservation-Secondary (Save), and general Contest promotions.',
        'iProspect\'s Traditional Blocking Charts: Multi-page spreadsheets listing TV flighting, radio spot allocation, and digital programmatic placements with micro-budget caps.',
        'Anomaly Integrated Journeys: Designing the complete Citizen Journey from OOH touchpoints to target Search & SEM queries, closing local loops in Social.'
      ],
      interactives: {
        type: 'blocking-map',
        title: 'Campaign Media Allocation Breakdown',
        items: [
          { channel: 'Paid Television (TV)', weight: '35%', role: 'Broad emotional reach, launching the big storytelling platform.' },
          { channel: 'Programmatic Display & Social', weight: '28%', role: 'Nurturing intent, target-remarketing, and audience segments.' },
          { channel: 'Out-Of-Home (OOH)', weight: '18%', role: 'Local visual dominance, reinforcing public brand presence.' },
          { channel: 'Search & Earned (SEO/PR)', weight: '19%', role: 'Capturing active interest, answering conversion queries.' }
        ]
      }
    },
    consultancyBlueprint: {
      consultancy: 'BCG (Management Consulting Approach)',
      headline: 'Prioritization Initiative Analysis',
      description: 'Management consultancies run media allocations through a rigorous prioritization matrix, rating opportunities by business criteria to ensure capital allocation is optimized.',
      bullets: [
        'Top-of-the-Funnel Initiative Ranking: Mapping initiatives like "Acquire content channel" or "Develop Search Tool" across Feasibility, Top-line impact, Required Resources, Urgency, and Overall Priority.',
        'Major Milestones Tracking: Mapping deliverables with sequential phases check-signoffs.'
      ]
    },
    hybridValue: {
      title: 'The Quietly Differentiator',
      description: 'We write the stories and map the channels concurrently. Instead of a media planner handing a spreadsheet to a team that doesn\'t understand the creative, we integrate channel mapping and asset production under one unified Content Operations strategy.'
    }
  },
  {
    number: 5,
    id: 'high-fidelity-production',
    title: 'High-Fidelity Production & QA',
    colorClass: 'from-rose-50 to-rose-100/50 border-rose-200 text-rose-950 hover:bg-rose-100/30',
    badgeColor: 'bg-rose-100 text-rose-950 border-rose-200',
    glowColor: 'group-hover:shadow-rose-100/20',
    bulletColor: 'bg-rose-600',
    bullets: ['Casting & Asset Design', 'Brand & Legal QA', 'Traffic'],
    task: 'Move approved concepts into studio production, casting, and asset design.',
    gate: 'RIGOROUS GATE: Conduct exhaustive legal, regulatory compliance, and strict brand guideline QA checks prior to asset traffic delivery.',
    slidesCovered: 'Slide 22',
    agencyCaseStudy: {
      agency: 'Creative Production Teams',
      description: 'Getting content and brand assets ready for real-world deployment.',
      bullets: [
        'Sotheby\'s International Realty Asset Design: Translating approved premium concepts into multi-size digital brochures, rich responsive media banners, and real estate presentation packages.',
        'Speed & Creative Detail: Orchestrating photographers, custom copywriting, specialized layout and formatting to make sure creative elements feel exceptionally luxurious and culturally relevant.',
        'Brand Compliance Review: Auditing exact fonts, image reference parameters, logo placement tolerances, and strict regulatory notices.'
      ]
    },
    consultancyBlueprint: {
      consultancy: 'BCG (Management Consulting Approach)',
      headline: 'Uniform Corporate Formatting & System Design',
      description: 'Consultancies approach production through standardized, uniform grids and highly-dense charts. Their focus is complete clinical accuracy and alignment with corporate structures.',
      bullets: [
        'Clinical/Data-Dense Styling: Relying on analytical 2x2 matrices, process flows, and consistent documentation schemas to convey mathematical credibility.',
        'Governance Frameworks: Designing standardized content governance guides, operational taxonomies, and clear approvals maps.'
      ]
    },
    hybridValue: {
      title: 'The Quietly Differentiator',
      description: 'We represent "Variable Fidelity." We provide both: high-impact, cinematic creative design paired with rigorous, clinical corporate standards, giving executive-level trust while evoking emotional appeal.'
    }
  },
  {
    number: 6,
    id: 'optimization-post-mortem',
    title: 'Optimization & Post-Mortem',
    colorClass: 'from-violet-50 to-violet-100/50 border-violet-200 text-violet-950 hover:bg-violet-100/30',
    badgeColor: 'bg-violet-100 text-violet-950 border-violet-200',
    glowColor: 'group-hover:shadow-violet-100/20',
    bulletColor: 'bg-violet-600',
    bullets: ['In-Flight Metrics', 'ROI Review'],
    task: 'Launch the campaign and hand it off to analytics and media buying teams.',
    goal: 'Review post-campaign metrics to evaluate brand lift, media performance, and commercial ROI against the Stage 1 business objectives.',
    slidesCovered: 'Slides 23, 24, 25, 26, 27 & 28',
    agencyCaseStudy: {
      agency: 'BC Hydro Post-Mortem Case Study',
      description: 'Evaluating real campaign effectiveness in the wild.',
      bullets: [
        'BC Hydro Ad Recall Survey analysis: Comparing Pre-Campaign vs Post-Campaign recall benchmarks inside statistical models.',
        'Substantial Claimed Lift: Demonstrating that claimed ad recall significantly increased from 46% (Pre) to 68% (Post). Net claimed recall of 64% reached one of its highest peaks in historical tracking.',
        'Cross-Channel Performance Review: Compiling performance lift ratios across TV, Social Media, Online, Global TV, Radio, Billboard, Spotify, and Live Events.'
      ],
      interactives: {
        type: 'chart',
        title: 'BC Hydro Ad Recall Wave Comparison',
        items: [
          { label: 'Unexposed / Pre-Wave', val: 46 },
          { label: 'Traditional Average', val: 54 },
          { label: 'Contemporary Flight Stage', val: 58 },
          { label: 'Quietly Optimized Campaign Peak', val: 68 }
        ]
      }
    },
    consultancyBlueprint: {
      consultancy: 'BCG (Management Consulting Approach)',
      headline: 'Commercial & Operations Audit',
      description: 'Consultancies construct massive financial post-mortems checking budget efficiency against bottom-line business ROI, reviewing team workflows, and recommending enterprise content operations restructuring.',
      bullets: [
        'FTE Headcount and Workflow Analysis: Reviewing agency cost efficiency in campaign delivery.',
        'Content Operations Upgrades: Quantifying system-thinking optimizations to transform uncoordinated silos into a streamlined content factory.'
      ]
    },
    hybridValue: {
      title: 'The Quietly Differentiator',
      description: 'We don\'t just report on clicks, impressions, or simple ad recall percentages. We connect those brand lift metrics back to your enterprise content infrastructure—reforming content creation workflows to make sure your future loops are faster and more capital-efficient.'
    }
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [expandedCourseIds, setExpandedCourseIds] = useState<Record<string, boolean>>({});
  const [selectedDisciplineIds, setSelectedDisciplineIds] = useState<Record<string, string>>({});
  const [activeDiscipline, setActiveDiscipline] = useState<{ course: Course; discipline: any; index: number } | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [showQuizWarning, setShowQuizWarning] = useState(false);
  const [quizWarningDismissed, setQuizWarningDismissed] = useState(false);
  const [showQuizPopup, setShowQuizPopup] = useState(false);
  const [quizPopupDismissed, setQuizPopupDismissed] = useState(false);
  const [activeQuizType, setActiveQuizType] = useState<'chapter-1' | 'chapters-2-4' | null>(null);
  const [quizInProgress, setQuizInProgress] = useState(false);
  const [quizSelectedAnswers, setQuizSelectedAnswers] = useState<Record<number, string>>({});
  const [quizShowResults, setQuizShowResults] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showChapterSelector, setShowChapterSelector] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenuModuleId, setHoveredMenuModuleId] = useState<string | null>(null);
  const [b2bViewMode, setB2bViewMode] = useState<'interactive' | 'slide'>('slide');
  const [chapter3ActiveSlideIndex, setChapter3ActiveSlideIndex] = useState(0);
  const [chapter3LightboxOpen, setChapter3LightboxOpen] = useState(false);
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number | null>(null);
  const [activeLifecycleTab, setActiveLifecycleTab] = useState<'agency' | 'consultancy' | 'quietly'>('agency');
  const disciplineSectionRef = useRef<HTMLDivElement>(null);
  const chapterScrollContainerRef = useRef<HTMLDivElement>(null);

  // Track completed discipline IDs
  const [completedDisciplines, setCompletedDisciplines] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('quietly_completed_disciplines');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Track last visited discipline for each module
  const [lastDisciplineByModule, setLastDisciplineByModule] = useState<Record<string, { courseId: string; disciplineId: string; index: number }>>(() => {
    try {
      const saved = localStorage.getItem('quietly_last_discipline_by_module');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('quietly_completed_disciplines', JSON.stringify(completedDisciplines));
  }, [completedDisciplines]);

  const allCourses = useMemo(() => {
    return curriculum.flatMap(m => m.courses.map(c => ({
      ...c,
      moduleId: m.id,
      moduleNumber: m.number,
      moduleTitle: m.title,
      isModuleLocked: m.number >= 2
    })));
  }, []);

  const activeChapterIndex = useMemo(() => {
    if (!selectedChapterId) return -1;
    return allCourses.findIndex(c => c.id === selectedChapterId);
  }, [selectedChapterId, allCourses]);

  const activeChapter = useMemo(() => {
    if (activeChapterIndex === -1) return null;
    return allCourses[activeChapterIndex];
  }, [activeChapterIndex, allCourses]);

  const activeChapterModule = useMemo(() => {
    if (!activeChapter) return null;
    return curriculum.find(m => m.id === activeChapter.moduleId);
  }, [activeChapter]);

  const prevChapter = useMemo(() => {
    if (activeChapterIndex <= 0) return null;
    const prev = allCourses[activeChapterIndex - 1];
    return prev && !prev.isModuleLocked ? prev : null;
  }, [activeChapterIndex, allCourses]);

  const nextChapter = useMemo(() => {
    if (activeChapterIndex === -1 || activeChapterIndex >= allCourses.length - 1) return null;
    const next = allCourses[activeChapterIndex + 1];
    return next && !next.isModuleLocked ? next : null;
  }, [activeChapterIndex, allCourses]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (menuOpen) {
          setMenuOpen(false);
          setHoveredMenuModuleId(null);
        } else if (showChapterSelector) {
          setShowChapterSelector(false);
        } else if (selectedChapterId) {
          setSelectedChapterId(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedChapterId, menuOpen, showChapterSelector]);


  useEffect(() => {
    localStorage.setItem('quietly_last_discipline_by_module', JSON.stringify(lastDisciplineByModule));
  }, [lastDisciplineByModule]);

  const chapter3Course = useMemo(() => {
    for (const mod of curriculum) {
      const match = mod.courses.find(c => c.id === 'chapter-3-b2b-stakeholder-archetypes');
      if (match) return match;
    }
    return null;
  }, []);

  useEffect(() => {
    if (!chapter3LightboxOpen || !chapter3Course) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setChapter3LightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setChapter3ActiveSlideIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        const total = chapter3Course.disciplines?.length || 0;
        setChapter3ActiveSlideIndex(prev => Math.min(total - 1, prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [chapter3LightboxOpen, chapter3Course]);

  const getModuleProgress = (mod: Module) => {
    // Collect all disciplines in this module's courses
    const allDisciplines = mod.courses.flatMap(c => c.disciplines || []);
    if (allDisciplines.length === 0) return { percent: 0, completed: 0, total: 0 };
    
    const completedCount = allDisciplines.filter(d => !!completedDisciplines[d.id]).length;
    return {
      percent: Math.round((completedCount / allDisciplines.length) * 100),
      completed: completedCount,
      total: allDisciplines.length
    };
  };

  const getCourseProgress = (course: Course) => {
    const list = course.disciplines || [];
    if (list.length === 0) return { percent: 0, completed: 0, total: 0 };
    
    const completedCount = list.filter(d => !!completedDisciplines[d.id]).length;
    return {
      percent: Math.round((completedCount / list.length) * 100),
      completed: completedCount,
      total: list.length
    };
  };

  const handleSetActiveDiscipline = (data: { course: Course; discipline: any; index: number } | null) => {
    setActiveDiscipline(data);
    setHoveredNode(null);
    if (data && selectedModuleId) {
      setLastDisciplineByModule(prev => ({
        ...prev,
        [selectedModuleId]: {
          courseId: data.course.id,
          disciplineId: data.discipline.id,
          index: data.index
        }
      }));
      setCompletedDisciplines(prev => ({
        ...prev,
        [data.discipline.id]: true
      }));
    }
  };

  const renderInteractiveGraphic = (graphicId: string) => {
    const getRectWidth = (label: string) => {
      return Math.min(150, Math.max(76, label.length * 7.2 + 16));
    };

    if (graphicId === 'landscape') {
      const nodes = [
        { id: 'content', label: 'Content', x: 300, y: 50 },
        { id: 'marketing', label: 'Marketing', x: 450, y: 90 },
        { id: 'demand-gen', label: 'Demand Gen', x: 490, y: 180 },
        { id: 'comms', label: 'Comms', x: 450, y: 270 },
        { id: 'regions', label: 'Regions & Verticals', x: 350, y: 320 },
        { id: 'product', label: 'Product', x: 215, y: 320 },
        { id: 'sales', label: 'Sales', x: 135, y: 270 },
        { id: 'lifecycle', label: 'Lifecycle Marketing', x: 110, y: 180 },
        { id: 'product-marketing', label: 'Product Marketing', x: 150, y: 90 },
      ];

      return (
        <div className="flex flex-col h-full bg-white border border-brand-line rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden select-none">
          <div className="flex-1 flex items-center justify-center min-h-[400px] lg:min-h-[480px] max-h-[580px] my-auto">
            <svg viewBox="0 0 600 370" className="w-full h-full">
              <defs>
                <marker id="arrow-landscape" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="rgba(26, 26, 26, 0.25)" />
                </marker>
                <marker id="arrow-landscape-active" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#805ad5" />
                </marker>
                <clipPath id="emblem-clip">
                  <circle cx="300" cy="185" r="37" />
                </clipPath>
              </defs>

              {nodes.map(n => {
                const isActive = hoveredNode === n.id;
                return (
                  <line
                    key={n.id}
                    x1={n.x}
                    y1={n.y}
                    x2={300}
                    y2={185}
                    stroke={isActive ? '#805ad5' : 'rgba(26, 26, 26, 0.15)'}
                    strokeWidth={isActive ? 2.5 : 1.2}
                    strokeDasharray={isActive ? 'none' : '4 4'}
                    markerEnd={isActive ? 'url(#arrow-landscape-active)' : 'url(#arrow-landscape)'}
                    className="transition-all duration-300"
                  />
                );
              })}

              <g 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode('q-core')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Visual white background circle with a clean hover ring */}
                <circle
                  cx="300"
                  cy="185"
                  r="38"
                  fill="#ffffff"
                  stroke={hoveredNode === 'q-core' ? '#805ad5' : 'rgba(26, 26, 26, 0.15)'}
                  strokeWidth={hoveredNode === 'q-core' ? 2 : 1.2}
                  className="transition-all duration-300"
                />
                
                {/* Crop exactly the top Q part, cutting off "Quietly" */}
                <image
                  href={verticalPurple}
                  x="262"
                  y="144"
                  width="76"
                  height="124"
                  clipPath="url(#emblem-clip)"
                  className="pointer-events-none transition-all duration-300"
                  style={{
                    transformOrigin: '300px 185px',
                    transform: hoveredNode === 'q-core' ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
              </g>

              {nodes.map(n => {
                const isActive = hoveredNode === n.id;
                const rectWidth = getRectWidth(n.label);
                return (
                  <g
                    key={n.id}
                    className="cursor-pointer select-none"
                    onMouseEnter={() => setHoveredNode(n.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <rect
                      x={n.x - rectWidth / 2}
                      y={n.y - 18}
                      width={rectWidth}
                      height={36}
                      rx={10}
                      fill={isActive ? '#faf5ff' : '#ffffff'}
                      stroke={isActive ? '#805ad5' : 'rgba(26, 26, 26, 0.3)'}
                      strokeWidth={isActive ? 2 : 1}
                      className="transition-all duration-300"
                    />
                    <text
                      x={n.x}
                      y={n.y + 4}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight={isActive ? 'bold' : 'normal'}
                      fontFamily="Open Sans, sans-serif"
                      fill={isActive ? '#805ad5' : '#1a1a1a'}
                      className="transition-all duration-300 pointer-events-none"
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      );
    }

    if (graphicId === 'force-multiplier') {
      const parts = [
        { id: 'earned', label: 'Earned Media', cx: 235, cy: 155, r: 80, color: 'rgba(92, 61, 117, 0.08)', stroke: '#5c3d75', fillActive: 'rgba(92, 61, 117, 0.15)' },
        { id: 'paid', label: 'Paid Media', cx: 365, cy: 155, r: 80, color: 'rgba(49, 151, 149, 0.08)', stroke: '#319795', fillActive: 'rgba(49, 151, 149, 0.15)' },
        { id: 'owned', label: 'Owned Media', cx: 300, cy: 235, r: 80, color: 'rgba(196, 75, 49, 0.08)', stroke: '#c44b31', fillActive: 'rgba(196, 75, 49, 0.15)' }
      ];

      return (
        <div className="flex flex-col h-full bg-white border border-brand-line rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden select-none">
          <div className="flex-1 flex items-center justify-center min-h-[400px] lg:min-h-[480px] max-h-[580px] my-auto">
            <svg viewBox="0 0 600 370" className="w-full h-full">
              {parts.map(p => {
                const isActive = hoveredNode === p.id;
                return (
                  <circle
                    key={p.id}
                    cx={p.cx}
                    cy={p.cy}
                    r={p.r}
                    fill={isActive ? p.fillActive : p.color}
                    stroke={isActive ? p.stroke : 'rgba(26, 26, 26, 0.2)'}
                    strokeWidth={isActive ? 3 : 1.5}
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredNode(p.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  />
                );
              })}

              {parts.map(p => {
                const isActive = hoveredNode === p.id;
                let tx = p.cx;
                let ty = p.cy;
                if (p.id === 'earned') { tx -= 15; ty -= 5; }
                if (p.id === 'paid') { tx += 15; ty -= 5; }
                if (p.id === 'owned') { ty += 25; }

                return (
                  <g key={`lbl-${p.id}`} className="pointer-events-none">
                    <text
                      x={tx}
                      y={ty}
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="bold"
                      fill={isActive ? '#1a1a1a' : 'rgba(26, 26, 26, 0.75)'}
                      className="transition-all duration-300"
                    >
                      {p.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      );
    }

    if (graphicId === 'outside-marketing') {
      const elements = [
        { id: 'comms', label: 'Executive Comms', cx: 160, cy: 110, r: 35, color: 'rgba(92, 61, 117, 0.06)', stroke: '#5c3d75' },
        { id: 'hr', label: 'Human Resources', cx: 160, cy: 250, r: 35, color: 'rgba(49, 151, 149, 0.06)', stroke: '#319795' },
        { id: 'sales', label: 'Sales', cx: 440, cy: 110, r: 35, color: 'rgba(196, 75, 49, 0.06)', stroke: '#c44b31' },
        { id: 'product', label: 'Product', cx: 440, cy: 250, r: 35, color: 'rgba(217, 119, 6, 0.06)', stroke: '#d97706' },
      ];

      return (
        <div className="flex flex-col h-full bg-white border border-brand-line rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden select-none">
          <div className="flex-1 flex items-center justify-center min-h-[400px] lg:min-h-[480px] max-h-[580px] my-auto">
            <svg viewBox="0 0 600 370" className="w-full h-full">
              {/* Central Large Marketing & Comms Circle */}
              <circle 
                cx="300" 
                cy="180" 
                r="115" 
                fill="#fcfbf9" 
                stroke="rgba(26,26,26,0.15)" 
                strokeWidth="1.2" 
                strokeDasharray="4 4"
              />
              <text 
                x="300" 
                y="95" 
                textAnchor="middle" 
                fontSize="11" 
                fontWeight="bold" 
                fill="rgba(26,26,26,0.35)"
                className="font-sans uppercase tracking-widest"
              >
                Marketing & Comms
              </text>

              {/* Inside the central Marcom bubble: Mini Venn diagram */}
              <g transform="translate(0, 0)">
                <circle cx="290" cy="180" r="20" fill="rgba(92, 61, 117, 0.08)" stroke="rgba(92, 61, 117, 0.2)" strokeWidth="0.5" />
                <circle cx="310" cy="180" r="20" fill="rgba(49, 151, 149, 0.08)" stroke="rgba(49, 151, 149, 0.2)" strokeWidth="0.5" />
                <circle cx="300" cy="195" r="20" fill="rgba(196, 75, 49, 0.08)" stroke="rgba(196, 75, 49, 0.2)" strokeWidth="0.5" />
                <text x="300" y="191" textAnchor="middle" fontSize="6.5" fontWeight="semibold" fill="#805ad5" className="opacity-75">Core Fit</text>
              </g>

              {/* Internal non-overlapping circles representing disciplines */}
              {/* Left-center inner pill */}
              <circle cx="218" cy="180" r="24" fill="#ffffff" stroke="rgba(26,26,26,0.12)" strokeWidth="1" />
              <text x="218" y="174" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1a1a1a">PR,</text>
              <text x="218" y="182" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1a1a1a">Experiential,</text>
              <text x="218" y="190" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1a1a1a">Events</text>

              {/* Right-center inner pill */}
              <circle cx="382" cy="180" r="24" fill="#ffffff" stroke="rgba(26,26,26,0.12)" strokeWidth="1" />
              <text x="382" y="174" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1a1a1a">OOH, TV,</text>
              <text x="382" y="182" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1a1a1a">Print,</text>
              <text x="382" y="190" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1a1a1a">Radio</text>

              {/* Bottom-center inner pill */}
              <circle cx="300" cy="252" r="24" fill="#ffffff" stroke="rgba(26,26,26,0.12)" strokeWidth="1" />
              <text x="300" y="246" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1a1a1a">Website,</text>
              <text x="300" y="254" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1a1a1a">In-Store,</text>
              <text x="300" y="262" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1a1a1a">Email</text>

              {/* Connective links to satellites */}
              {elements.map(el => {
                const isActive = hoveredNode === el.id;
                let targetX = 300;
                let targetY = 180;
                if (el.id === 'comms') { targetX = 218; targetY = 180; }
                if (el.id === 'hr') { targetX = 218; targetY = 180; }
                if (el.id === 'sales') { targetX = 382; targetY = 180; }
                if (el.id === 'product') { targetX = 382; targetY = 180; }
                
                return (
                  <line
                    key={`line-${el.id}`}
                    x1={targetX}
                    y1={targetY}
                    x2={el.cx}
                    y2={el.cy}
                    stroke={isActive ? el.stroke : 'rgba(26, 26, 26, 0.12)'}
                    strokeWidth={isActive ? 2 : 1}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Satellites */}
              {elements.map(el => {
                const isActive = hoveredNode === el.id;
                return (
                  <g
                    key={el.id}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredNode(el.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <circle
                      cx={el.cx}
                      cy={el.cy}
                      r={el.r + 5}
                      fill="transparent"
                      stroke={isActive ? el.stroke : 'transparent'}
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      className="transition-all duration-300"
                    />

                    <circle
                      cx={el.cx}
                      cy={el.cy}
                      r={el.r}
                      fill={isActive ? el.color : '#ffffff'}
                      stroke={isActive ? el.stroke : 'rgba(26, 26, 26, 0.25)'}
                      strokeWidth={isActive ? 2.5 : 1.2}
                      className="transition-all duration-300"
                    />
                    
                    {el.label.split(' ').length > 1 ? (
                      <>
                        <text
                          x={el.cx}
                          y={el.cy - 1}
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight={isActive ? 'semibold' : 'normal'}
                          fill={isActive ? el.stroke : '#1a1a1a'}
                          className="transition-colors duration-300 pointer-events-none"
                        >
                          {el.label.split(' ')[0]}
                        </text>
                        <text
                          x={el.cx}
                          y={el.cy + 10}
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight={isActive ? 'semibold' : 'normal'}
                          fill={isActive ? el.stroke : '#1a1a1a'}
                          className="transition-colors duration-300 pointer-events-none"
                        >
                          {el.label.split(' ').slice(1).join(' ')}
                        </text>
                      </>
                    ) : (
                      <text
                        x={el.cx}
                        y={el.cy + 4}
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight={isActive ? 'semibold' : 'normal'}
                        fill={isActive ? el.stroke : '#1a1a1a'}
                        className="transition-colors duration-300 pointer-events-none"
                      >
                        {el.label}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      );
    }

    if (graphicId === 'enterprise-view') {
      const nodes = [
        { id: 'content', label: 'Content', x: 300, y: 50 },
        { id: 'marketing', label: 'Marketing', x: 450, y: 90 },
        { id: 'demand-gen', label: 'Demand Gen', x: 490, y: 165 },
        { id: 'comms', label: 'Comms', x: 450, y: 240 },
        { id: 'regions', label: 'Regions & Verticals', x: 360, y: 285 },
        { id: 'product', label: 'Product', x: 215, y: 285 },
        { id: 'sales', label: 'Sales', x: 135, y: 240 },
        { id: 'lifecycle', label: 'Lifecycle Marketing', x: 110, y: 165 },
        { id: 'product-marketing', label: 'Product Marketing', x: 150, y: 90 }
      ];

      return (
        <div className="flex flex-col h-full bg-white border border-brand-line rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden select-none">
          <div className="flex-1 flex items-center justify-center min-h-[400px] lg:min-h-[480px] max-h-[580px] my-auto">
            <svg viewBox="0 0 600 370" className="w-full h-full">
              <defs>
                <marker id="arrow-in" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                  <path d="M 8 1.5 L 0 5 L 8 8.5 z" fill="rgba(26, 26, 26, 0.25)" />
                </marker>
                <marker id="arrow-in-active" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 8 1.5 L 0 5 L 8 8.5 z" fill="#805ad5" />
                </marker>
              </defs>

              <g className="cursor-pointer" onMouseEnter={() => setHoveredNode('strategy-core')} onMouseLeave={() => setHoveredNode(null)}>
                <line
                  x1={300}
                  y1={315}
                  x2={300}
                  y2={220}
                  stroke={hoveredNode === 'strategy-core' ? '#805ad5' : 'rgba(26, 26, 26, 0.45)'}
                  strokeWidth="6"
                  className="transition-all duration-300"
                />
                <polygon
                  points="295,225 300,212 305,225"
                  fill={hoveredNode === 'strategy-core' ? '#805ad5' : '#4a5568'}
                  className="transition-all duration-300"
                />
              </g>

              {nodes.map(n => {
                const isActive = hoveredNode === n.id;
                return (
                  <line
                    key={n.id}
                    x1={n.x}
                    y1={n.y}
                    x2={300}
                    y2={170}
                    stroke={isActive ? '#805ad5' : 'rgba(26, 26, 26, 0.15)'}
                    strokeWidth={isActive ? 2.5 : 1.2}
                    markerEnd={isActive ? 'url(#arrow-in-active)' : 'url(#arrow-in)'}
                    className="transition-all duration-300"
                  />
                );
              })}

              <g 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode('strategy-core')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Left-facing face silhouette starting from the back neck */}
                <path
                  d="M315,200 C317,185 320,175 320,160 C320,140 312,132 300,132 C286,132 283,143 283,155 C283,161 288,166 288,169 C288,172 283,174 280,177 C277,180 279,183 282,184 C280,187 282,190 284,191 C286,192 285,195 287,196 L296,200 Z"
                  fill="#faf5ff"
                  stroke={hoveredNode === 'strategy-core' ? '#805ad5' : '#1a1a1a'}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                {/* Inner Cogs inside the head silhouette */}
                <g transform="translate(300, 155)">
                  <circle cx="0" cy="0" r="7" fill="none" stroke={hoveredNode === 'strategy-core' ? '#805ad5' : '#1a1a1a'} strokeWidth="1" />
                  <path d="M-9,0 L9,0 M0,-9 L0,9 M-6,-6 L6,6 M-6,6 L6,-6" stroke={hoveredNode === 'strategy-core' ? '#805ad5' : '#1a1a1a'} strokeWidth="1" />
                  
                  <circle cx="9" cy="8" r="4.5" fill="none" stroke={hoveredNode === 'strategy-core' ? '#805ad5' : '#1a1a1a'} strokeWidth="0.8" />
                  <path d="M4.5,8 L13.5,8 M9,3.5 L9,12.5" stroke={hoveredNode === 'strategy-core' ? '#805ad5' : '#1a1a1a'} strokeWidth="0.8" />
                </g>
              </g>

              <g 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode('strategy-core')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <rect x="180" y="315" width="240" height="28" rx="8" fill={hoveredNode === 'strategy-core' ? '#805ad5' : '#1a1a1a'} className="transition-colors duration-300" />
                <text x="300" y="332" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff" className="font-mono tracking-widest uppercase">
                  Enterprise Content Strategy
                </text>
              </g>

              {nodes.map(n => {
                const isActive = hoveredNode === n.id;
                const rectWidth = getRectWidth(n.label);
                return (
                  <g
                    key={n.id}
                    className="cursor-pointer select-none"
                    onMouseEnter={() => setHoveredNode(n.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <rect
                      x={n.x - rectWidth / 2}
                      y={n.y - 18}
                      width={rectWidth}
                      height={36}
                      rx={10}
                      fill={isActive ? '#faf5ff' : '#ffffff'}
                      stroke={isActive ? '#805ad5' : 'rgba(26, 26, 26, 0.3)'}
                      strokeWidth={isActive ? 2 : 1}
                      className="transition-all duration-300"
                    />
                    <text
                      x={n.x}
                      y={n.y + 4}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight={isActive ? 'bold' : 'normal'}
                      fontFamily="Open Sans, sans-serif"
                      fill={isActive ? '#805ad5' : '#1a1a1a'}
                      className="transition-all duration-300 pointer-events-none"
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      );
    }

    if (graphicId === 'players') {
      return (
        <div className="flex flex-col h-full bg-white border border-brand-line rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="text-center mb-6">
            <span className="text-[10px] bg-brand-ink text-brand-bg px-2.5 py-1 rounded-full font-bold uppercase tracking-widest font-mono">Competitor Landscape</span>
            <h3 className="text-xl font-serif text-brand-ink mt-2.5">The Holding Cos vs. The Consultancies</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <div className="p-5 rounded-2xl bg-slate-50 border border-brand-line/45 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold font-mono tracking-wider text-brand-indigo uppercase mb-1">Traditional Agency Holdcos</h4>
                <p className="text-xs text-brand-muted mb-4 font-light">Huge global networks focused on creative concepts & media buy scale.</p>
                <div className="flex flex-wrap gap-2">
                  {['Omnicom', 'WPP', 'Publicis', 'Interpublic (IPG)', 'Dentsu'].map(n => (
                    <span key={n} className="px-2.5 py-1 bg-white border border-brand-line rounded-lg text-xs font-medium text-brand-ink">{n}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-line/30 text-[10px] text-brand-muted italic">Hired by: CMO / VP of Brand</div>
            </div>
            <div className="p-5 rounded-2xl bg-indigo-50/25 border border-indigo-100/40 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold font-mono tracking-wider text-purple-800 uppercase mb-1">Management Consultancies</h4>
                <p className="text-xs text-brand-muted mb-4 font-light">Deeply analytical engines integrating storytelling into massive business transformation.</p>
                <div className="flex flex-wrap gap-2">
                  {['Accenture Song', 'Deloitte Digital', 'PwC Digital', 'KPMG', 'McKinsey'].map(n => (
                    <span key={n} className="px-2.5 py-1 bg-white border border-indigo-100 rounded-lg text-xs font-semibold text-brand-indigo">{n}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-100/30 text-[10px] text-brand-muted/70 italic">Hired by: CEO / CIO / CFO</div>
            </div>
          </div>
        </div>
      );
    }

    if (graphicId === 'convergence') {
      return (
        <div className="flex flex-col h-full bg-white border border-brand-line rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden justify-between">
          <div className="text-center mb-6">
            <span className="text-[10px] bg-brand-ink text-brand-bg px-2.5 py-1 rounded-full font-bold uppercase tracking-widest font-mono">Forces of Integration</span>
            <h3 className="text-xl font-serif text-brand-ink mt-2.5">The Great Convergence</h3>
          </div>
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <div className="p-4 rounded-xl border border-brand-line/60 bg-gradient-to-r from-teal-50/30 to-transparent flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
                <span className="text-xs font-bold font-mono uppercase">Data</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800">Consolidation & Tech-First Bets</h4>
                <p className="text-xs text-brand-muted font-light mt-0.5">From Omnicom’s acquisition of IPG to Publicis’ agreement to acquire LiveRamp, key agency players are betting on data & tech capabilities to fuel growth.</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl border border-brand-line/60 bg-gradient-to-r from-purple-50/30 to-transparent flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                <span className="text-xs font-bold font-mono uppercase">Scale</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-800">Tech-Enabled Independents</h4>
                <p className="text-xs text-brand-muted font-light mt-0.5">Specialized boutiques can now use AI to simulate scale and multiply impact while staying lean and agile in headcount and operations.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-brand-line/60 bg-gradient-to-r from-amber-50/30 to-transparent flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <span className="text-xs font-bold font-mono uppercase">AI</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800">Consulting on AI</h4>
                <p className="text-xs text-brand-muted font-light mt-0.5">Consultancies are staying relevant by advising executives on how to use AI (e.g., strategic roadmaps, governance frameworks, AI workflows).</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (graphicId === 'workflow') {
      return (
        <div className="flex flex-col h-full bg-white border border-brand-line rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="text-center mb-6">
            <span className="text-[10px] bg-brand-ink text-brand-bg px-2.5 py-1 rounded-full font-bold uppercase tracking-widest font-mono">Campaign Lifecycle</span>
            <h3 className="text-xl font-serif text-brand-ink mt-2.5">Workflow Integration</h3>
          </div>
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            {/* Traditional Section */}
            <div className="space-y-2 text-left">
              <span className="text-[9px] uppercase tracking-widest font-bold text-red-500 block">Traditional Linear Flow</span>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 border border-brand-line/50 rounded-xl bg-slate-50 opacity-70">1. Client Brief</div>
                <div className="p-2 border border-brand-line/50 rounded-xl bg-slate-50 opacity-70">2. Media Plan</div>
                <div className="p-2 border-2 border-red-200 rounded-xl bg-red-50/30 text-red-700 font-medium">3. Content (Afterthought)</div>
              </div>
            </div>

            <div className="flex justify-center my-1 select-none">
              <div className="h-4 w-px border-l-2 border-dashed border-brand-line" />
            </div>

            {/* Contemporary Section */}
            <div className="space-y-2 text-left">
              <span className="text-[9px] uppercase tracking-widest font-bold text-teal-600 block">Quietly Modern Content-Led Flow</span>
              <div className="p-4 border border-teal-500/20 rounded-2xl bg-teal-50/10 relative">
                <span className="absolute -top-2.5 right-4 bg-teal-600 text-brand-bg text-[7px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full font-mono">Strategic Driver</span>
                <div className="grid grid-cols-3 gap-2 text-center text-xs items-center">
                  <div className="font-bold text-teal-800">Content Planning</div>
                  <div className="text-brand-ink font-medium">Media Allocation</div>
                  <div className="text-brand-ink font-medium">Creative Concept</div>
                </div>
                <p className="text-[10px] text-brand-muted font-light mt-3 text-center">Content informs media choices and fuels creative elements concurrently from Day 1.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (graphicId === 'fidelity') {
      return (
        <div className="flex flex-col h-full bg-white border border-brand-line rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="text-center mb-6">
            <span className="text-[10px] bg-brand-ink text-brand-bg px-2.5 py-1 rounded-full font-bold uppercase tracking-widest font-mono">Fidelity Spectrum</span>
            <h3 className="text-xl font-serif text-brand-ink mt-2.5">Variable Fidelity Delivery</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <div className="p-4 rounded-xl border border-brand-line bg-gradient-to-b from-slate-50 to-white flex flex-col justify-between text-left">
              <div>
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-brand-ink mb-1.5 block">High Strategic Consulting</span>
                <p className="text-xs text-brand-muted font-light leading-relaxed">Rigorous frameworks, structured models, quantitative evidence, and executive clarity.</p>
              </div>
              <div className="mt-4 p-2 bg-white rounded-lg border border-brand-line/45 text-[10px] font-mono text-brand-ink text-center">
                Vibe: Objective & Structured
              </div>
            </div>
            
            <div className="p-4 rounded-xl border border-brand-line bg-gradient-to-b from-purple-50/10 to-white flex flex-col justify-between text-left">
              <div>
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-brand-ink mb-1.5 block">Creative Planning</span>
                <p className="text-xs text-brand-muted font-light leading-relaxed">Narrative flow, visual layouts, mockups, emotional resonance, and abstract concepts.</p>
              </div>
              <div className="mt-4 p-2 bg-white rounded-lg border border-brand-line/45 text-[10px] font-mono text-brand-ink text-center">
                Vibe: Compelling & Conceptual
              </div>
            </div>
          </div>
          <p className="text-[10px] text-brand-muted text-center italic mt-4 font-light">Matching deliverable fidelity to client stakeholder expectations prevents friction and ensures alignment.</p>
        </div>
      );
    }

    if (graphicId === 'who-wins') {
      return (
        <div className="flex flex-col h-full bg-white border border-brand-line rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="text-center mb-4">
            <span className="text-[10px] bg-brand-ink text-brand-bg px-2.5 py-1 rounded-full font-bold uppercase tracking-widest font-mono">Value Shift</span>
            <h3 className="text-xl font-serif text-brand-ink mt-2">Differentiating and Winning</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-2.5 flex-1 justify-center my-auto text-left">
            <div className="flex items-center gap-3.5 p-3.5 bg-red-50/15 border border-red-100/50 rounded-xl">
              <span className="text-lg">❌</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-800">Commoditized: Raw Content</h4>
                <p className="text-[11px] text-brand-muted leading-relaxed font-light">Simple writing, boilerplate copywriting, generic blog posts, and templated summaries (rapidly solved by basic AI).</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3.5 p-3.5 bg-teal-50/10 border border-teal-100/30 rounded-xl">
              <span className="text-lg">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800">Winner: Systems Thinking</h4>
                <p className="text-[11px] text-brand-muted leading-relaxed font-light font-medium">Connecting content pieces into a holistic operations pipeline matching customer intent directly.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 bg-teal-50/10 border border-teal-100/30 rounded-xl">
              <span className="text-lg">✓</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800">Winner: Subject-Matter Depth</h4>
                <p className="text-[11px] text-brand-muted leading-relaxed font-light font-medium">Expert insights, qualitative analysis, and proprietary business knowledge that generic training models can't reproduce.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (graphicId === 'b2b-landscape-graphic') {
      return (
        <div id="b2b-landscape-widget" className="w-full flex flex-col relative select-none justify-center items-center">
          <div className="w-full flex items-center justify-center relative py-2">
            <img 
              src={b2bLandscape} 
              alt="Common B2B Org Structure Diagram" 
              className="w-full max-w-full h-auto max-h-[480px] sm:max-h-[580px] object-contain transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      );
    }

    if (graphicId === 'content-unifier-graphic') {
      return (
        <div id="content-unifier-widget" className="w-full flex flex-col relative select-none justify-center items-center animate-fade-in">
          <div className="w-full flex items-center justify-center relative py-2">
            <img 
              src={contentUnifier} 
              alt="Where Content and Functions Converge" 
              className="w-full max-w-full h-auto max-h-[480px] sm:max-h-[580px] object-contain transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      );
    }

    if (graphicId === 'okta-graphic') {
      return (
        <div id="okta-graphic-widget" className="w-full flex flex-col relative select-none justify-center items-center animate-fade-in">
          <div className="w-full flex items-center justify-center relative py-2">
            <img 
              src={oktaStakeholders} 
              alt="Okta Content Synchronization Stakeholder Map" 
              className="w-full max-w-full h-auto max-h-[480px] sm:max-h-[580px] object-contain transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      );
    }

    if (graphicId === 'b2b-transition-graphic') {
      return (
        <div className="flex flex-col h-full bg-[#0d0d0d] border border-stone-800 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden select-none text-white text-center justify-center items-center min-h-[460px] md:min-h-[500px] lg:min-h-[560px]">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(${bgDark})`, backgroundSize: 'cover' }} />
          <div className="max-w-xl space-y-5 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium leading-tight">
              What does each team care about?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light font-mono opacity-80 pt-1">
              Now that we’ve established the organizational structure, let’s double click into each ‘B2B stakeholder Archetype’ to understand the insights and content that are priorities for each.
            </p>
            <div className="w-12 h-px bg-[#c89ffb]/40 mx-auto my-4" />
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed italic font-light">
              Each function optimizes for a different part of the customer journey — but all rely on shared insights and content to succeed.
            </p>
          </div>
        </div>
      );
    }

    if (graphicId === 'b2b-archetypes-table-graphic') {
      const archetypes = [
        {
          team: 'CAMPAIGNS',
          functions: [
            'Executes integrated marketing campaigns across channels to drive awareness and engagement',
            'Orchestrates messaging and timing across teams and touchpoints'
          ],
          focus: 'Awareness → Exploration\n(reach, engagement, campaign performance)',
          insights: [
            'Channel performance, campaign analytics (e.g. CPA, organic sessions)',
            'Campaign messaging, creative assets, and audience segmentation'
          ]
        },
        {
          team: 'DEMAND GENERATION',
          functions: [
            'Drives pipeline creation through acquisition strategies and conversion tactics',
            'Focuses on turning audience interest into qualified leads'
          ],
          focus: 'Exploration → Evaluation\n(MQLs, cost efficiency)',
          insights: [
            'Conversion data (MQLs, CPA, funnel performance)',
            'Gated content, landing pages, performance-driven assets'
          ]
        },
        {
          team: 'CONTENT (MARKETING SUBSET)',
          functions: [
            'Develops content that supports all stages of the customer journey',
            'Acts as the connective layer across teams and lifecycle stages'
          ],
          focus: 'Full lifecycle\n(supports Awareness → Growth)',
          insights: [
            'Audience insights, search trends, engagement data',
            'Scalable content formats (editorial, thought leadership, enablement)'
          ]
        },
        {
          team: 'PRODUCT MARKETING',
          functions: [
            'Owns positioning, messaging, and go-to-market narratives',
            'Translates product features into customer value'
          ],
          focus: 'Exploration → Evaluation\n(education, differentiation)',
          insights: [
            'Competitive intelligence, market trends',
            'Messaging frameworks, use cases, solution storytelling'
          ]
        },
        {
          team: 'PRODUCT MANAGEMENT',
          functions: [
            'Defines product roadmap, features, and long-term vision',
            'Aligns product development with market needs'
          ],
          focus: 'Evaluation → Growth\n(product-market fit, adoption)',
          insights: [
            'Customer feedback, usage data, market needs',
            'Feature adoption insights, roadmap validation inputs'
          ]
        },
        {
          team: 'SALES',
          functions: [
            'Converts leads into revenue through direct customer engagement',
            'Manages deal cycles, objections, and negotiations'
          ],
          focus: 'Evaluation → Purchase\n(closing opportunities)',
          insights: [
            'Opportunities closed, deal size/value, SQLs',
            'Case studies, ROI proof, competitive comparisons'
          ]
        },
        {
          team: 'SOLUTIONS ENGINEERING',
          functions: [
            'Provides technical validation and product expertise during the sales process',
            'Bridges product capabilities with customer requirements'
          ],
          focus: 'Evaluation → Purchase\n(technical validation)',
          insights: [
            'Product specs, integrations, technical documentation',
            'Demo environments, solution architectures'
          ]
        },
        {
          team: 'CUSTOMER SUCCESS MANAGEMENT',
          functions: [
            'Ensures customers achieve value after purchase',
            'Drives onboarding, satisfaction, and retention'
          ],
          focus: 'Onboarding → Retention\n(time-to-value, CSAT)',
          insights: [
            'Onboarding milestones, CSAT, usage insights',
            'Educational content, onboarding guides, best practices'
          ]
        },
        {
          team: 'RENEWALS & ACCOUNT MANAGEMENT',
          functions: [
            'Focuses on retaining and growing existing accounts',
            'Drives renewals, upsells, and long-term account value'
          ],
          focus: 'Retention → Growth\n(CLTV, account expansion)',
          insights: [
            'Customer health data, churn risk, account performance',
            'Expansion opportunities, value-driven content, ROI reporting'
          ]
        }
      ];

      return (
        <div className="flex flex-col h-full bg-white border border-brand-line rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden select-text">
          <div className="mb-4">
            <span className="text-[10px] bg-[#c89ffb] text-black px-2.5 py-1 rounded-full font-bold uppercase tracking-widest font-mono">
              Combined Directory (Slides 9 & 10)
            </span>
            <h3 className="text-xl font-serif text-brand-ink mt-2">B2B Stakeholder Archetypes Reference Map</h3>
            <p className="text-xs text-brand-muted font-light mt-0.5">Comprehensive view of functions, journey focus, and prioritized insights/content across all departments</p>
          </div>

          <div className="flex-1 overflow-auto border border-brand-line/50 rounded-2xl max-h-[500px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-brand-ink uppercase font-bold text-[10px] sm:text-[11px] tracking-wider border-b border-brand-line/60">
                  <th className="p-4 w-[22%]">B2B Archetype / Team</th>
                  <th className="p-4 w-[28%]">Key Functions</th>
                  <th className="p-4 w-[22%]">Journey Stage Focus &amp; Goals</th>
                  <th className="p-4 w-[28%]">Prioritized Insights &amp; Content</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line/30 text-xs text-brand-ink">
                {archetypes.map((arch) => {
                  const isContentMarketing = arch.team === 'CONTENT (MARKETING SUBSET)';
                  return (
                    <tr 
                      key={arch.team} 
                      className={`transition-colors ${
                        isContentMarketing 
                          ? 'bg-[#f6effd] hover:bg-[#f2e7fc] font-medium border-y-2 border-purple-200/60' 
                          : 'hover:bg-slate-50/50'
                      }`}
                    >
                      <td className="p-4 align-top">
                        <div className={`font-extrabold tracking-tight px-2.5 py-1.5 rounded-lg w-fit text-[10px] ${
                          isContentMarketing 
                            ? 'bg-[#e9d5ff] text-[#581c87]' 
                            : 'bg-slate-100/80 text-brand-ink'
                        }`}>
                          {arch.team}
                        </div>
                      </td>
                      <td className="p-4 align-top">
                        <ul className="list-disc pl-4 space-y-1.5 font-light leading-relaxed">
                          {arch.functions.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 align-top font-medium text-brand-ink whitespace-pre-line leading-relaxed">
                        {arch.focus}
                      </td>
                      <td className="p-4 align-top">
                        <ul className="list-disc pl-4 space-y-1.5 font-light leading-relaxed">
                          {arch.insights.map((ins, i) => (
                            <li key={i}>{ins}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    return null;
  };

  const handleSelectChapter = (course: Course) => {
    // 1. Exit the interactive video/discipline modal if open
    setActiveDiscipline(null);

    // 2. Expand the selected course/chapter section card inside the Sidebar Detail overlay
    setExpandedCourseIds(prev => ({ ...prev, [course.id]: true }));
    
    // 3. Close the Chapter Selector Popup/Drawer
    setShowChapterSelector(false);
    
    // 4. Smoothly scroll to the course card inside the Module detail sidebar
    setTimeout(() => {
      const element = document.getElementById(course.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Temporarily highlight the border to draw user focus
        element.style.transition = 'all 0.5s ease-out';
        element.style.boxShadow = '0 0 0 3px rgba(26, 26, 26, 0.4)';
        setTimeout(() => {
          element.style.boxShadow = '';
        }, 1200);
      }
    }, 150);
  };

  const handleStartTraining = () => {
    const activeMod = curriculum.find(m => m.id === selectedModuleId);
    if (!activeMod) return;
    
    const lastVisited = lastDisciplineByModule[activeMod.id];
    if (lastVisited) {
      const course = activeMod.courses.find(c => c.id === lastVisited.courseId);
      const discipline = course?.disciplines?.find(d => d.id === lastVisited.disciplineId);
      if (course && discipline) {
        setExpandedCourseIds(prev => ({ ...prev, [course.id]: true }));
        handleSetActiveDiscipline({
          course,
          discipline,
          index: lastVisited.index
        });
        return;
      }
    }
    
    const firstCourse = activeMod.courses[0];
    if (firstCourse) {
      setExpandedCourseIds(prev => ({ ...prev, [firstCourse.id]: true }));
      if (firstCourse.disciplines && firstCourse.disciplines.length > 0) {
        handleSetActiveDiscipline({
          course: firstCourse,
          discipline: firstCourse.disciplines[0],
          index: 0
        });
      } else {
        const element = document.getElementById(firstCourse.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDiscipline(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (quizWarningDismissed) return;
    
    // Create an observer that triggers when the user scrolls to the disciplines section
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShowQuizWarning(true);
        }
      });
    }, { threshold: 0.05 });

    const currentEl = disciplineSectionRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      observer.disconnect();
    };
  }, [quizWarningDismissed, selectedModuleId, expandedCourseIds]);

  useEffect(() => {
    if (selectedChapterId && chapterScrollContainerRef.current) {
      chapterScrollContainerRef.current.scrollTop = 0;
    }
  }, [selectedChapterId]);

  const closeQuiz = () => {
    setShowQuizPopup(false);
    setQuizPopupDismissed(true);
    setQuizInProgress(false);
    setQuizSelectedAnswers({});
    setQuizShowResults(false);
    setQuizSubmitted(false);
    setActiveQuizType(null);
  };

  const toggleCourseExpanded = (courseId: string) => {
    setExpandedCourseIds(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  // Filter modules and courses based on search
  const renderCourseContent = (course: Course) => {
    return (
      <div className="space-y-6">
                                {course.outcome && course.id !== 'module-0-introduction' && (
                                  <div className="p-6 bg-brand-bg/40 rounded-2xl border border-brand-line/60 my-2">
                                    <h4 className="text-xs font-semibold uppercase tracking-wider mb-2 text-brand-ink">Expected Outcome</h4>
                                    <p className="text-sm text-brand-ink leading-relaxed font-light whitespace-pre-line">{course.outcome}</p>
                                  </div>
                                )}
                                
                                {course.disciplines && course.disciplines.length > 0 && course.id !== 'module-0-introduction' && (
                                  <div ref={disciplineSectionRef} className="p-6 sm:p-8 bg-brand-bg/25 rounded-2xl border border-brand-line/60 space-y-5 my-6">
                                    <div className="flex items-center gap-2">
                                      <HelpCircle size={18} className="text-brand-ink shrink-0" />
                                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-ink">
                                        {course.podcastUrl ? "To Consider As You Listen" : "To Consider As You Watch"}
                                      </h4>
                                    </div>
                                    {(() => {
                                      const questions = course.discussionQuestions || [
                                        "Before diving into specific disciplines (like SEO or Social), remember that Quietly focuses on solving specific business problems—whether that's brand awareness, lead generation, or customer retention.",
                                        "No marketing discipline exists in a vacuum at Quietly. For example, a \"Social Media\" video should be viewed through the lens of how it supports \"Search\" or \"Demand Gen\" efforts.",
                                        "Quietly isn't just about creative content; our core approach is \"data-led and human-inspired.\" Everything we do is rooted in data and insights to ensure content actually performs for our clients.",
                                        "We view content as a continuous cycle—from strategy and creation to distribution and optimization—rather than a one-off project.",
                                        "Always ask how a discipline's success is measured. We prioritize meaningful metrics (KPIs) that prove the return on investment for the client."
                                      ];
                                      const half = Math.ceil(questions.length / 2);
                                      const col1 = questions.slice(0, half);
                                      const col2 = questions.slice(half);
                                      return (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                          <div className="space-y-4">
                                            {col1.map((q, idx) => (
                                              <div key={idx} className="flex gap-3">
                                                <span className="text-xs font-bold text-brand-ink shrink-0 mt-0.5 font-mono">
                                                  {String(idx + 1).padStart(2, '0')}
                                                </span>
                                                <p className="text-sm text-brand-muted leading-relaxed font-light">
                                                  {q}
                                                </p>
                                              </div>
                                            ))}
                                          </div>
                                          <div className="space-y-4">
                                            {col2.map((q, idx) => {
                                              const labelNum = half + idx + 1;
                                              return (
                                                <div key={idx} className="flex gap-3">
                                                  <span className="text-xs font-bold text-brand-ink shrink-0 mt-0.5 font-mono">
                                                    {String(labelNum).padStart(2, '0')}
                                                  </span>
                                                  <p className="text-sm text-brand-muted leading-relaxed font-light">
                                                    {q}
                                                  </p>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        </div>
                                      );
                                    })()}
                                  </div>
                                )}
                                
                                {course.disciplines && course.disciplines.length > 0 && (course.id === 'chapter-1-marketing-disciplines' || course.id === 'chapter-4-agency-vs-consultancy-mindset') && (
                                  <motion.div 
                                    initial={{ opacity: 0, scale: 0.97, y: 15 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className="p-6 bg-brand-ink text-brand-bg rounded-2xl border border-brand-line my-6 shadow-xl relative overflow-hidden group"
                                  >
                                    <div className="space-y-3 relative z-10 select-text">
                                      <p className="text-sm sm:text-base leading-relaxed font-light text-brand-bg/95">
                                        {course.id === 'chapter-1-marketing-disciplines' ? (
                                          "Heads Up, You will be taking a 5 minute multiple choice quiz at the end of this chapter. Be sure to take notes as you progress."
                                        ) : (
                                          "Heads Up, You will be taking a multiple choice quiz covering Chapters 2-4 at the end of this chapter. Be sure to take notes as you progress."
                                        )}
                                      </p>
                                      <span className="text-xs font-bold tracking-widest uppercase opacity-60 inline-block mt-1">
                                        Now, let’s get into it…
                                      </span>
                                    </div>
                                    <div className="absolute right-[-20px] bottom-[-20px] opacity-10 text-brand-bg group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                                      <HelpCircle size={100} />
                                    </div>
                                  </motion.div>
                                )}
                                
                                 {course.disciplines && course.disciplines.length > 0 && course.id !== 'chapter-3-b2b-stakeholder-archetypes' && (
                                   course.id !== 'chapter-4-agency-vs-consultancy-mindset' ? (
                                    <div className="mt-6 pt-6 border-t border-brand-line/40 space-y-4">
                                      {course.id === 'module-0-introduction' ? (
                                        <div className="bg-slate-50 border border-brand-line/60 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm animate-fade-in text-brand-ink">
                                          <div className="flex items-center justify-between">
                                            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                                              Featured Study Portal
                                            </span>
                                          </div>
                                          <div className="h-px bg-gradient-to-r from-brand-line/60 to-transparent w-full" />
                                          <div className="space-y-4 text-brand-ink text-sm sm:text-base leading-relaxed font-light">
                                            <p>
                                              A direct portal to the world-renowned course on Coursera: <strong className="font-semibold text-brand-ink">"Learning How to Learn"</strong>. This training equips you with powerful mental tools used by experts in art, music, literature, math, science, and sports.
                                            </p>
                                            <p>
                                              You will explore the differences between <strong className="font-semibold text-brand-ink">"focused" and "diffuse"</strong> modes of thinking, learn how active recall and spacing beats cramming, and master techniques to conquer procrastination.
                                            </p>
                                          </div>
                                          <div className="pt-3">
                                            <a 
                                              href="https://www.coursera.org/learn/learning-how-to-learn?action=showPartnerSupportedAccess" 
                                              target="_blank" 
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-sm uppercase tracking-wider"
                                            >
                                              <span>Explore course on Coursera</span>
                                              <ExternalLink size={16} />
                                            </a>
                                          </div>
                                        </div>
                                       ) : course.id === 'chapter-2-the-connective-tissue' ? (
                                         <div className="space-y-6">
                                           <div className="bg-slate-50 border border-brand-line/60 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm animate-fade-in text-brand-ink select-text">
                                             <div className="flex items-center justify-between border-b border-brand-line/40 pb-3">
                                               <h5 className="text-base font-bold font-serif text-brand-ink tracking-tight flex items-center gap-2">
                                                 <Presentation size={18} className="text-indigo-600" />
                                                 <span>VIEW, Chapter 2 Slide Deck</span>
                                               </h5>
                                               <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted bg-white px-2.5 py-1 rounded-md border border-brand-line/60">
                                                 Google Slides
                                               </span>
                                             </div>
                                             <p className="text-xs text-brand-muted leading-relaxed font-light">
                                               Access the complete slide presentation for Chapter 2: The Connective Tissue.
                                             </p>
                                             <a
                                               href="https://docs.google.com/presentation/d/1dsQaGnD1w6D6SJzxrfyX-erZ6cWeLbahtRlC4Xifv3I/edit?usp=sharing"
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-ink text-brand-bg hover:bg-slate-800 font-semibold rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider group"
                                             >
                                               <span>View Slide Deck</span>
                                               <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                             </a>
                                           </div>

                                           <div className="bg-slate-50 border border-brand-line/60 rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm animate-fade-in text-brand-ink select-text">
                                             <div className="text-left border-b border-brand-line/40 pb-4">
                                               <h5 className="text-base font-bold font-serif text-brand-ink tracking-tight">
                                                 WATCH, Chapter 2: The Connective Tissue
                                               </h5>
                                             </div>
                                             <Chapter2VideoPlayer />
                                           </div>
                                         </div>
                                       ) : (
                                        <>
                                          <div className="flex items-center justify-between px-1">
                                            <p className="text-[10px] uppercase tracking-widest font-extrabold text-brand-ink">
                                              Disciplines & Topics ({course.disciplines.length})
                                            </p>
                                            <span className="text-[11px] text-brand-muted italic hidden sm:inline">Click any topic to explore in full-screen interactive view</span>
                                          </div>
                                          
                                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {course.disciplines.map((disc, dIdx) => (
                                              <button
                                                key={disc.id}
                                                onClick={() => handleSetActiveDiscipline({ course, discipline: disc, index: dIdx })}
                                                className="group text-left p-6 bg-brand-bg/25 hover:bg-brand-ink hover:text-brand-bg border border-brand-line hover:border-brand-ink rounded-2xl transition-all cursor-pointer flex flex-col justify-between h-40 focus:outline-none focus:ring-2 focus:ring-brand-ink/30"
                                              >
                                                <div className="space-y-2">
                                                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-ink group-hover:text-brand-bg/80 block">
                                                    Topic 0{dIdx + 1}
                                                  </span>
                                                  <h5 className="text-base font-semibold leading-snug group-hover:text-brand-bg">{disc.title}</h5>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs font-medium text-brand-ink group-hover:text-brand-bg mt-4">
                                                  <span className="group-hover:opacity-100 flex items-center gap-1.5">
                                                    {disc.videoUrl ? 'Watch Video Walkthrough' : 'Interactive View'}
                                                    {disc.videoUrl ? (
                                                      <Video size={13} className="opacity-70 group-hover:opacity-100" />
                                                    ) : disc.graphicId ? (
                                                      <BookOpen size={13} className="opacity-70 group-hover:opacity-100" />
                                                    ) : null}
                                                  </span>
                                                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                              </button>
                                            ))}
                                          </div>
                                        </>
                                      )}
                                      </div>
                                  ) : null
                                )}

                                {course.disciplines && course.disciplines.length > 0 && course.id !== 'module-0-introduction' && course.id !== 'chapter-2-the-connective-tissue' && (
                                  <div className="mt-8 pt-8 border-t border-brand-line/40 space-y-4">
                                    {course.slideDeckUrl && (
                                      <div className="bg-slate-50 border border-brand-line/60 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm animate-fade-in text-brand-ink select-text mb-6">
                                        <div className="flex items-center justify-between border-b border-brand-line/40 pb-3">
                                          <h5 className="text-base font-bold font-serif text-brand-ink tracking-tight flex items-center gap-2">
                                            <Presentation size={18} className="text-indigo-600" />
                                            <span>VIEW, {course.title.match(/Chapter\s+\d+/i)?.[0] || course.title} Slide Deck</span>
                                          </h5>
                                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted bg-white px-2.5 py-1 rounded-md border border-brand-line/60">
                                            Google Slides
                                          </span>
                                        </div>
                                        <p className="text-xs text-brand-muted leading-relaxed font-light">
                                          Access the complete slide presentation for {course.title}.
                                        </p>
                                        <a
                                          href={course.slideDeckUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-ink text-brand-bg hover:bg-slate-800 font-semibold rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider group"
                                        >
                                          <span>View Slide Deck</span>
                                          <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                        </a>
                                      </div>
                                    )}

                                    {course.podcastUrl && (
                                      <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl border border-indigo-500/30 mb-6 shadow-xl relative overflow-hidden group select-text">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                                          <div className="space-y-3 max-w-2xl">
                                            <div className="flex items-center gap-2">
                                              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center gap-1.5">
                                                <Mic size={12} className="text-indigo-300" />
                                                NotebookLM Audio Briefing
                                              </span>
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                                              {course.podcastTitle || "Why Content Is B2B Dark Matter"}
                                            </h3>
                                            <p className="text-sm text-indigo-200/90 leading-relaxed font-light">
                                              Listen to the NotebookLM deep dive podcast overview analyzing why content serves as the essential "dark matter" connecting B2B stakeholder archetypes across the entire buyer lifecycle.
                                            </p>
                                          </div>
                                          <div className="pt-2 sm:pt-0 shrink-0">
                                            <a
                                              href={course.podcastUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="shrink-0 px-6 py-3.5 bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer flex items-center justify-center gap-2.5 text-xs uppercase tracking-wider font-mono border border-indigo-300/30"
                                            >
                                              <span>Listen on NotebookLM</span>
                                              <ExternalLink size={14} />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="absolute right-[-20px] bottom-[-30px] opacity-10 text-white pointer-events-none group-hover:scale-105 transition-transform duration-500">
                                          <Mic size={140} />
                                        </div>
                                      </div>
                                    )}

                                    {course.id !== 'chapter-4-agency-vs-consultancy-mindset' && (
                                      <h4 className="text-xl sm:text-2xl font-serif text-brand-ink">
                                        {course.id === 'chapter-1-marketing-disciplines' ? 'How content marketing fits in' : 'Key takeaways'}
                                      </h4>
                                    )}
                                    <div className="space-y-4 text-brand-ink text-sm sm:text-base leading-relaxed font-normal">

                                      {course.id === 'chapter-1-marketing-disciplines' && (
                                        <>
                                          <p>
                                            Content marketing is the <strong className="font-semibold text-brand-ink">"fuel"</strong> that powers all other marketing efforts, providing the materials for all of the other marketing disciplines to leverage. It acts as the connective tissue, ensuring a consistent brand message across various channels (earned media, paid search, etc.).
                                          </p>
                                          <p>
                                            By offering valuable, authoritative information tailored to the audience’s needs, content builds long-term trust and supports objectives across the buyer's journey—from awareness (PR) to conversion (demand generation). Insights and data from the other disciplines’ marketing efforts should then feed back into a wider content marketing strategy to ensure the content developed achieves all objectives.
                                          </p>
                                        </>
                                      )}

                                      {course.id === 'chapter-2-the-connective-tissue' && (
                                        <>
                                          <p className="font-semibold text-brand-ink">Tying it all together…</p>
                                          <p>
                                            <strong className="font-semibold text-brand-ink">Content is everywhere:</strong> It exists across all departments—from HR and Sales to Product and Executive Communications—building credibility and supporting recruitment.
                                          </p>
                                          <p>
                                            <strong className="font-semibold text-brand-ink">The need for consistency:</strong> Because content is ubiquitous, organizations must ensure a consistent brand narrative and story across every line of business.
                                          </p>
                                          <p>
                                            <strong className="font-semibold text-brand-ink">Enterprise content strategy:</strong> This is the highest-level overarching plan that captures and considers a holistic perspective of an organization's structure, system, and mission.
                                          </p>
                                          <p>
                                            <strong className="font-semibold text-brand-ink">Unified narrative:</strong> A strategic approach connects disparate units, providing a complete organizational picture and a unified narrative for all audiences (internal, external, primary, secondary and tertiary)
                                          </p>
                                        </>
                                      )}

                                      {course.id === 'chapter-3-b2b-stakeholder-archetypes' && (
                                        <>
                                          <p className="font-semibold text-brand-ink">Tying it all together…</p>
                                          <p>
                                            <strong className="font-semibold text-brand-ink">Critical, unifying force:</strong> Content exists throughout the B2B organizational landscape, where each function optimizes a different stage of the customer lifecycle with native content formats.
                                          </p>
                                          <p>
                                            <strong className="font-semibold text-brand-ink">Strategic alignment:</strong> Aligning content across all functions is vital to ensure a cohesive, end-to-end customer journey, often requiring content to be formalized beyond marketing itself.
                                          </p>
                                          <p>
                                            <strong className="font-semibold text-brand-ink">Archetype understanding:</strong> Deconstructing B2B archetypes reveals the specific metrics, insights, and content priorities needed for each team to succeed.
                                          </p>
                                        </>
                                      )}

                                      {course.id === 'chapter-4-agency-vs-consultancy-mindset' && (
                                        <div className="space-y-8 select-text">
                                          {/* Slide 6 & 7 video player placeholder */}
                                          <div className="bg-slate-50 border border-brand-line/60 rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm animate-fade-in text-brand-ink select-text">
                                            <div className="text-left border-b border-brand-line/40 pb-4">
                                              <h5 className="text-base font-bold font-serif text-brand-ink tracking-tight">
                                                WATCH, Chapter 4: How Other Agencies Do It
                                              </h5>
                                            </div>
                                            {/* Embedded Google Video Container */}
                                            <Chapter4VideoPlayer />
                                          </div>






                                        </div>
                                      )}

                                {course.disciplines && course.disciplines.length > 0 && course.id !== 'chapter-2-the-connective-tissue' && (
                                  <div className="mt-8 pt-8 border-t border-brand-line/40 space-y-4">
                                    {course.id !== 'chapter-4-agency-vs-consultancy-mindset' && (
                                      <h4 className="text-xl sm:text-2xl font-serif text-brand-ink">
                                        Applying this to your day-to-day
                                      </h4>
                                    )}

                                    {course.id === 'chapter-1-marketing-disciplines' && (
                                      <ul className="space-y-4 text-brand-ink text-sm sm:text-base leading-relaxed font-normal list-none pl-0">
                                        <li className="flex gap-3">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/40 mt-2.5 shrink-0 block" />
                                          <p>
                                            View each marketing function (like PR or Demand Gen) not as a standalone silo, but as a lever you can pull to strengthen a holistic content strategy.
                                          </p>
                                        </li>
                                        <li className="flex gap-3">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/40 mt-2.5 shrink-0 block" />
                                          <p>
                                            Use your new understanding of different disciplines to consider exactly where a piece of content sits in the buyer’s journey—is it building <strong className="font-semibold text-brand-ink">"top-of-funnel"</strong> awareness like PR, or driving <strong className="font-semibold text-brand-ink">"bottom-of-funnel"</strong> action like Demand Gen?
                                          </p>
                                        </li>
                                        <li className="flex gap-3">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/40 mt-2.5 shrink-0 block" />
                                          <p>
                                            With awareness of what each disciplines’ overarching objectives are, use the learnings from these videos when we collaborate with partners, ensuring our content supports their specific channel requirements and goals.
                                          </p>
                                        </li>
                                        <li className="flex gap-3">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/40 mt-2.5 shrink-0 block" />
                                          <p>
                                            Always close the loop: ensure the content we’re creating actually addresses the specific KPIs mentioned for that marketing discipline, such as engagement for social or authority for SEO.
                                          </p>
                                        </li>
                                        <li className="flex gap-3">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/40 mt-2.5 shrink-0 block" />
                                          <p>
                                            Apply the <strong className="font-semibold text-brand-ink">"Media Planning"</strong> mindset to your writing; consider how a single content idea can be reframed or "atomized" to fit the unique requirements of various paid, earned, and owned channels.
                                          </p>
                                        </li>
                                      </ul>
                                    )}

                                    {course.id === 'chapter-3-b2b-stakeholder-archetypes' && (
                                      <div className="space-y-6 text-brand-ink text-sm sm:text-base leading-relaxed font-normal">
                                        <p className="font-medium text-brand-ink">
                                          Considerations for cross-functional collaboration:
                                        </p>

                                        <div className="space-y-3">
                                          <p className="font-semibold text-brand-ink text-sm sm:text-base">Client Partners</p>
                                          <ul className="space-y-3 list-none pl-0">
                                            <li className="flex gap-3">
                                              <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/40 mt-2.5 shrink-0 block" />
                                              <p>
                                                Understand the different stakeholder groups within the organization and what they care about, as this can be an avenue to account growth (outside of our usual Marketing stakeholders).
                                              </p>
                                            </li>
                                          </ul>
                                        </div>

                                        <div className="space-y-3">
                                          <p className="font-semibold text-brand-ink text-sm sm:text-base">Strategists</p>
                                          <ul className="space-y-3 list-none pl-0">
                                            <li className="flex gap-3">
                                              <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/40 mt-2.5 shrink-0 block" />
                                              <p>
                                                Develop and champion an Enterprise content strategy that formalizes content beyond Marketing, ensuring alignment across all B2B functions to support a cohesive, end-to-end customer journey.
                                              </p>
                                            </li>
                                          </ul>
                                        </div>

                                        <div className="space-y-3">
                                          <p className="font-semibold text-brand-ink text-sm sm:text-base">Content & Creative Teams</p>
                                          <ul className="space-y-3 list-none pl-0">
                                            <li className="flex gap-3">
                                              <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/40 mt-2.5 shrink-0 block" />
                                              <p>
                                                Produce content that serves each B2B archetype's needs as it relates to the journey stages and accompanying customer mindsets they care about most.
                                              </p>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    )}

                                    {(course.id === 'chapter-1-marketing-disciplines' || course.id === 'chapter-4-agency-vs-consultancy-mindset') && (
                                      <div className="pt-6 mt-6 border-t border-brand-line/20 flex justify-center">
                                        <button 
                                          onClick={() => {
                                            setActiveQuizType(course.id === 'chapter-1-marketing-disciplines' ? 'chapter-1' : 'chapters-2-4');
                                            setShowQuizPopup(true);
                                          }}
                                          className="w-full sm:w-auto px-8 py-3.5 bg-brand-ink text-brand-bg rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-95 transition-opacity whitespace-nowrap cursor-pointer shadow-lg shadow-brand-ink/5"
                                        >
                                          <span>Click to Start Quiz!</span>
                                          <HelpCircle size={16} />
                                        </button>
                                      </div>
                                    )}
                                       </div>
                                     )}
                                   </div>
                                {course.videoUrl && (
                                  <div className="rounded-xl overflow-hidden border border-brand-line aspect-video w-full bg-black/5 shadow-inner">
                                    <iframe 
                                      src={getYouTubeEmbedUrl(course.videoUrl)}
                                      title={`${course.title} Video Presentation`}
                                      className="w-full h-full border-0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen
                                    />
                                  </div>
                                )}
                                
                                {course.subtopics && (
                                  <div className="flex flex-wrap gap-2 pt-1">
                                    {course.subtopics.map(topic => (
                                      <span key={topic} className="px-3 py-1 bg-brand-bg text-[10px] uppercase tracking-wider font-semibold rounded-full border border-brand-line">
                                        {topic}
                                      </span>
                                    ))}
                                  </div>
                                )}
      </div>
    )}
  </div>
    );
  };
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return curriculum;
    const query = searchQuery.toLowerCase();
    return curriculum.map(module => {
      const filteredCourses = module.courses.filter(course => 
        course.title.toLowerCase().includes(query) || 
        course.description.toLowerCase().includes(query) ||
        course.subtopics?.some(t => t.toLowerCase().includes(query))
      );

      if (module.title.toLowerCase().includes(query) || filteredCourses.length > 0) {
        return { ...module, courses: filteredCourses };
      }
      return null;
    }).filter(Boolean) as Module[];
  }, [searchQuery]);

  const selectedModule = curriculum.find(m => m.id === selectedModuleId);

  const FormatIcon = ({ format }: { format?: string }) => {
    switch (format) {
      case 'video': return <Video size={16} />;
      case 'podcast': return <Mic size={16} />;
      case 'quiz': return <HelpCircle size={16} />;
      case 'document': return <FileText size={16} />;
      case 'interactive': return <Zap size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-ink selection:text-brand-bg">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-bg/90 backdrop-blur-xl border-b border-brand-line">
        <div className="flex flex-col gap-0">
          <img src={logo} alt="Quietly Logo" className="h-[110px] w-auto object-contain object-left mb-0" />
          <span className="text-sm -mt-3 uppercase tracking-[0.4em] font-bold opacity-40 leading-none">Learning & Development</span>
        </div>
        
        <div className="flex items-center gap-6 sm:gap-8 text-xs uppercase tracking-widest font-medium">
          {/* Nested Menu Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => {
              setMenuOpen(false);
              setHoveredMenuModuleId(null);
            }}
          >
            <button 
              onClick={() => setMenuOpen(prev => !prev)}
              className={`hover:opacity-100 transition-all flex items-center gap-1.5 cursor-pointer text-brand-ink font-medium py-1 px-2.5 rounded-lg border ${
                menuOpen 
                  ? 'bg-brand-ink text-brand-bg border-brand-ink opacity-100 shadow-xs' 
                  : 'bg-transparent border-transparent opacity-60 hover:opacity-100'
              }`}
              aria-label="Open Menu"
              aria-expanded={menuOpen}
            >
              <MenuIcon size={13} className={menuOpen ? 'text-brand-bg' : 'text-brand-ink'} />
              <span className="uppercase">MENU</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${menuOpen ? 'rotate-180 text-brand-bg' : 'opacity-60'}`} />
            </button>

            {/* Modules Dropdown Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.14 }}
                  className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl border border-brand-line shadow-2xl p-2 z-50 text-left"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-1">
                    {curriculum.map((mod) => {
                      const isLocked = mod.number >= 2;
                      const isHovered = !isLocked && (hoveredMenuModuleId || curriculum[1]?.id) === mod.id;
                      const hasCourses = mod.courses && mod.courses.length > 0;
                      const cleanTitle = mod.title.replace(/^Module \d+\s*(?:—|-|:)\s*/, '');
                      const moduleDisplayName = `Module ${mod.number}: ${cleanTitle}`;

                      return (
                        <div
                          key={mod.id}
                          className="relative"
                          onMouseEnter={() => {
                            if (!isLocked) {
                              setHoveredMenuModuleId(mod.id);
                            }
                          }}
                        >
                          <div
                            onClick={() => {
                              if (!isLocked) {
                                setSelectedModuleId(mod.id);
                                setMenuOpen(false);
                                setHoveredMenuModuleId(null);
                              }
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all ${
                              isLocked 
                                ? 'text-brand-ink/45 bg-slate-50/50 cursor-not-allowed' 
                                : isHovered 
                                  ? 'bg-brand-bg text-brand-ink font-semibold shadow-xs cursor-pointer' 
                                  : 'text-brand-ink/80 hover:bg-brand-bg/70 hover:text-brand-ink font-medium cursor-pointer'
                            }`}
                          >
                            <span className="truncate pr-2 normal-case text-[13px]">
                              {moduleDisplayName}
                            </span>
                            {isLocked ? (
                              <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider bg-slate-100/90 text-slate-500 px-1.5 py-0.5 rounded font-mono shrink-0">
                                <Lock size={10} className="opacity-70" />
                                <span>Soon</span>
                              </span>
                            ) : hasCourses ? (
                              <ChevronRight 
                                size={14} 
                                className={`shrink-0 transition-transform ${
                                  isHovered ? 'translate-x-0.5 text-brand-ink' : 'text-brand-muted opacity-40'
                                }`} 
                              />
                            ) : null}
                          </div>

                          {/* Nested Flyout Submenu for Chapters (Hover to Expand for active/unlocked modules only) */}
                          <AnimatePresence>
                            {isHovered && hasCourses && !isLocked && (
                              <motion.div
                                initial={{ opacity: 0, x: 4 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 4 }}
                                transition={{ duration: 0.12 }}
                                className="hidden sm:block absolute right-full top-0 mr-2 w-72 sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl border border-brand-line shadow-2xl p-2 z-50 text-left"
                              >
                                <div className="space-y-1">
                                  {mod.courses.map((course) => (
                                    <button
                                      key={course.id}
                                      onClick={() => {
                                        setSelectedModuleId(mod.id);
                                        if (chapterScrollContainerRef.current) {
                                          chapterScrollContainerRef.current.scrollTop = 0;
                                        }
                                        setSelectedChapterId(course.id);
                                        setMenuOpen(false);
                                        setHoveredMenuModuleId(null);
                                      }}
                                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-brand-ink/85 hover:text-brand-ink hover:bg-brand-bg transition-colors flex items-center justify-between group cursor-pointer"
                                    >
                                      <span className="truncate pr-2 group-hover:underline normal-case text-[13px]">
                                        {course.title}
                                      </span>
                                      <ArrowRight 
                                        size={13} 
                                        className="text-brand-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" 
                                      />
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Mobile inline expansion if screen is small (unlocked only) */}
                          {isHovered && hasCourses && !isLocked && (
                            <div className="sm:hidden pl-3 pr-1 py-1 space-y-1 border-l-2 border-brand-line/60 my-1">
                              {mod.courses.map((course) => (
                                <button
                                  key={course.id}
                                  onClick={() => {
                                    setSelectedModuleId(mod.id);
                                    if (chapterScrollContainerRef.current) {
                                      chapterScrollContainerRef.current.scrollTop = 0;
                                    }
                                    setSelectedChapterId(course.id);
                                    setMenuOpen(false);
                                    setHoveredMenuModuleId(null);
                                  }}
                                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-brand-ink/80 hover:text-brand-ink hover:bg-brand-bg transition-colors flex items-center justify-between normal-case"
                                >
                                  <span className="truncate pr-1 text-[12px]">{course.title}</span>
                                  <ArrowRight size={11} className="text-brand-muted shrink-0" />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#curriculum" className="hover:opacity-100 opacity-60 transition-opacity">Curriculum</a>
          <a href="#" className="hover:opacity-100 opacity-60 transition-opacity">Philosophy</a>
        </div>
      </header>

      <main className="pt-[180px] pb-20 px-6 max-w-6xl mx-auto relative">
        {/* Main Body Background Texture */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-30 z-0"
          style={{ 
            backgroundImage: `url(${bgLight})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }} 
        />
        
        {/* Hero Section */}
        <section className="mb-24 relative z-10">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-ink/5 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl leading-[1.05] tracking-tight text-brand-ink mb-8 font-serif">
              Welcome to our <br />
              <span className="italic font-normal">Learning &amp; Development Hub</span>
            </h1>
            
            <div className="max-w-2xl space-y-6 text-brand-muted text-lg leading-relaxed mb-12 font-normal">
              <p>
                At Quietly, excellence is something we continuously build together. As our industry evolves and client expectations grow, so does our commitment to developing the skills, knowledge, and capabilities that help us do our best work.
              </p>
              <p>
                This portal is designed to support ongoing learning through a series of interactive modules, practical resources, and short knowledge checks along the way. Whether you're deepening existing expertise or exploring new areas, you'll find opportunities to learn at your own pace and apply what you learn in your day-to-day work.
              </p>
              <p>
                We encourage you to stay curious, engage with the content, and make learning a regular part of your growth journey.
              </p>

              {/* Search Bar */}
              <div className="relative group max-w-xl">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 opacity-20 group-focus-within:opacity-100 transition-opacity" size={24} />
                <input
                  type="text"
                  placeholder="Search modules, tools, or techniques..."
                  className="w-full h-20 pl-16 pr-8 bg-white/50 backdrop-blur-sm border border-brand-line rounded-3xl focus:outline-none focus:ring-4 focus:ring-brand-ink/5 focus:bg-white transition-all text-xl placeholder:opacity-30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Modules Grid */}
        <section id="curriculum" className="scroll-mt-36">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl">Core Curriculum</h2>
            <div className="h-px bg-brand-line flex-1 mx-8 hidden sm:block" />
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-40">
              <span>{filteredResults.length} Modules Found</span>
            </div>
          </div>

          {filteredResults.length === 0 ? (
            <div className="py-20 text-center border border-brand-line rounded-3xl bg-white/50">
              <p className="text-brand-muted font-serif italic text-xl">No results matching your query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredResults.map((module, idx) => {
                const isLocked = module.number >= 2;
                return (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => !isLocked && setSelectedModuleId(module.id)}
                    className={`group bg-brand-bg p-0 transition-all relative overflow-hidden flex flex-col h-full ring-1 ring-brand-line ${
                      isLocked 
                        ? 'cursor-not-allowed opacity-85' 
                        : 'cursor-pointer hover:bg-white hover:ring-brand-ink/20 hover:z-10'
                    }`}
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden relative border-b border-brand-line">
                      <img 
                        src={module.imageUrl} 
                        alt={module.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isLocked 
                            ? 'grayscale blur-md opacity-30' 
                            : 'grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
                         <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-line">{module.number === 0 ? "Module 0" : `Module 0${module.number}`}</span>
                      </div>

                      {isLocked && (
                        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center text-white">
                          <div className="w-12 h-12 rounded-full bg-slate-800/90 border border-white/20 flex items-center justify-center shadow-xl mb-3">
                            <Lock size={20} className="text-white/90" />
                          </div>
                          <span className="px-3.5 py-1 bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20 shadow-md mb-1.5">
                            Coming Soon
                          </span>
                          <p className="text-xs text-slate-300 font-medium max-w-[220px]">
                            Module 0{module.number} content is currently locked.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className={`p-10 flex-1 flex flex-col justify-between ${isLocked ? 'filter blur-[1.5px] select-none opacity-50 pointer-events-none' : ''}`}>
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <p className="text-brand-muted text-[10px] uppercase tracking-[0.2em] font-bold">{module.subtitle}</p>
                            {module.duration && (
                              <div className="flex items-center gap-1.5 text-[11px] text-brand-ink/70 font-medium mt-1">
                                <Clock size={11} className="text-brand-muted shrink-0" />
                                <span>{module.duration}</span>
                              </div>
                            )}
                          </div>
                          {!isLocked ? (
                            <div className="w-10 h-10 border border-brand-line rounded-full flex items-center justify-center group-hover:bg-brand-ink group-hover:text-brand-bg transition-all duration-500">
                              <ArrowRight size={16} />
                            </div>
                          ) : (
                            <div className="w-10 h-10 border border-brand-line/60 bg-brand-line/20 rounded-full flex items-center justify-center text-brand-muted">
                              <Lock size={16} />
                            </div>
                          )}
                        </div>
                        <h3 className="text-3xl mb-4 leading-tight">{module.title}</h3>
                        <p className="text-brand-muted text-sm leading-relaxed max-w-sm whitespace-pre-line">{module.purpose}</p>
                      </div>

                      {/* Module Progress Bar */}
                      {!isLocked && (() => {
                        const { percent, completed, total } = getModuleProgress(module);
                        if (total === 0) return null;
                        return (
                          <div className="mt-8 pt-6 border-t border-brand-line">
                            <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-brand-ink mb-2">
                              <span>Module Progress</span>
                              <span>{percent}% ({completed}/{total})</span>
                            </div>
                            <div className="w-full h-1.5 bg-brand-line rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-brand-ink rounded-full transition-all duration-500" 
                                style={{ width: `${percent}%` }}
                              />
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                    <div 
                      className="absolute -right-10 -bottom-10 w-40 h-40 opacity-5 blur-2xl rounded-full transition-all group-hover:scale-150 group-hover:opacity-10"
                      style={{ backgroundColor: module.accentColor }}
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Module Detail Overlay */}
      <AnimatePresence>
        {selectedModuleId && selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-ink/30 backdrop-blur-md p-2 sm:p-4 lg:p-6"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-[96vw] xl:max-w-7xl h-full bg-brand-bg rounded-3xl shadow-2xl flex flex-col overflow-hidden relative"
            >
              {/* Background Texture for Sidebar */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
                style={{ 
                  backgroundImage: `url(${bgDark})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} 
              />
              
              {/* Overlay Header */}
              <div className="flex items-center justify-between p-8 border-b border-brand-line">
                <button 
                  onClick={() => setSelectedModuleId(null)}
                  className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft size={16} /> Back
                </button>
                <button 
                  onClick={() => setSelectedModuleId(null)}
                  className="w-10 h-10 flex items-center justify-center border border-brand-line rounded-full hover:bg-brand-ink hover:text-brand-bg transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Overlay Content */}
              <div className="flex-1 overflow-y-auto p-8 sm:p-12 relative z-10">
                <div className="mb-12">
                  <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden mb-10 border border-brand-line">
                    <img 
                      src={selectedModule.imageUrl} 
                      alt={selectedModule.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <span className="font-serif italic text-6xl opacity-10 block mb-4">0{selectedModule.number}</span>
                  <h2 className="text-4xl sm:text-5xl mb-4 leading-tight">{selectedModule.title}</h2>
                  <p className="text-brand-muted uppercase tracking-widest text-xs font-semibold mb-2">{selectedModule.subtitle}</p>
                  {selectedModule.duration && (
                    <div className="flex items-center gap-2 mb-8">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-bg rounded-lg border border-brand-line text-xs font-medium text-brand-ink">
                        <Clock size={12} className="text-brand-muted" />
                        <span>Total Time Required: <strong className="font-semibold text-brand-ink">{selectedModule.duration}</strong></span>
                      </span>
                    </div>
                  )}
                  {!selectedModule.duration && <div className="mb-8" />}
                  
                  {/* Detailed Module Progress Bar */}
                  {(() => {
                    const { percent, completed, total } = getModuleProgress(selectedModule);
                    if (total === 0) return null;
                    return (
                      <div className="mb-10 bg-white p-6 rounded-2xl border border-brand-line shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-brand-ink" />
                        <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-[11px] text-brand-ink mb-3">
                          <span className="flex items-center gap-2">
                            <BookOpen size={14} className="text-brand-ink" /> Completed Topics
                          </span>
                          <span className="font-mono text-brand-ink">{percent}% ({completed} of {total})</span>
                        </div>
                        <div className="w-full h-3 bg-brand-bg rounded-full overflow-hidden border border-brand-line/50 p-[1.5px]">
                          <div 
                            className="h-full bg-emerald-700 rounded-full transition-all duration-700 ease-out" 
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                      </div>
                    );
                  })()}

                  <div className="bg-white p-8 rounded-2xl border border-brand-line space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-brand-ink">Purpose</h4>
                      <p className="leading-relaxed whitespace-pre-line">{selectedModule.purpose}</p>
                    </div>
                    {selectedModule.preface && (
                      <>
                        <hr className="border-brand-line" />
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-brand-ink">Preface</h4>
                          <p className="leading-relaxed italic">{selectedModule.preface}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  {selectedModule.number !== 0 && (
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-serif">Chapters in this module</h3>
                      <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider hidden sm:inline">
                        Select any chapter to view
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6">
                    {selectedModule.courses.map((course, idx) => {
                      return (
                        <div 
                          key={course.id} 
                          id={course.id}
                          onClick={() => setSelectedChapterId(course.id)}
                          className="bg-white border border-brand-line rounded-2xl hover:border-brand-ink transition-all overflow-hidden p-6 sm:p-8 cursor-pointer group shadow-sm hover:shadow-md flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-brand-ink flex-wrap">
                                <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-bg rounded-lg border border-brand-line">
                                  <FormatIcon format={course.format} />
                                  <span>{course.format || "Interactive"}</span>
                                </span>
                                {course.duration && (
                                  <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-bg rounded-lg border border-brand-line">
                                    <Clock size={12} />
                                    <span>{course.duration}</span>
                                  </span>
                                )}
                                {course.disciplines && course.disciplines.length > 0 && (() => {
                                  const { percent, completed, total } = getCourseProgress(course);
                                  return (
                                    <div className="flex items-center gap-2 px-3 py-1 bg-brand-bg rounded-lg border border-brand-line">
                                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">Progress</span>
                                      <div className="w-16 sm:w-20 h-2 bg-slate-200 rounded-full overflow-hidden shrink-0">
                                        <div 
                                          className={`h-full transition-all duration-500 rounded-full ${percent === 100 ? 'bg-emerald-500' : 'bg-brand-ink'}`}
                                          style={{ width: `${percent}%` }}
                                        />
                                      </div>
                                      <span className={`text-[11px] font-mono font-bold ${percent === 100 ? 'text-emerald-600' : 'text-brand-ink'}`}>
                                        {percent}%
                                      </span>
                                      <span className="text-[10px] text-brand-muted font-mono hidden sm:inline">
                                        ({completed}/{total})
                                      </span>
                                    </div>
                                  );
                                })()}
                              </div>
                            </div>

                            <h4 className="text-2xl font-medium leading-tight text-brand-ink group-hover:text-slate-900 mb-3">
                              {course.title}
                            </h4>
                            <p className="text-brand-muted text-sm leading-relaxed font-light max-w-3xl whitespace-pre-line">
                              {course.description}
                            </p>

                            {course.outcome && course.id !== "module-0-introduction" && (
                              <div className="mt-5 p-4 bg-brand-bg/40 rounded-xl border border-brand-line/60">
                                <h5 className="text-[10px] font-bold uppercase tracking-wider text-brand-ink mb-1">Expected Outcome</h5>
                                <p className="text-xs text-brand-ink/90 leading-relaxed font-light whitespace-pre-line space-y-1">{course.outcome}</p>
                              </div>
                            )}
                          </div>

                          <div className="mt-6 pt-5 border-t border-brand-line/60 flex items-center justify-end gap-4">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedChapterId(course.id);
                              }}
                              className="px-5 py-2.5 bg-brand-ink text-brand-bg rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:bg-slate-800 transition-all shadow-md cursor-pointer"
                            >
                              <span>Open Chapter</span>
                              <BookOpen size={14} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              {activeLifecycleStage === null && (
                <div className="p-8 border-t border-brand-line bg-brand-bg relative z-20">
                  <div className="relative z-10 space-y-6">
                    {/* Module Quick Switcher */}
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-brand-ink/40 mb-3 text-center sm:text-left">
                        Select a module:
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {curriculum.map((m) => {
                          const isCurrent = m.id === selectedModule.id;
                          const isLocked = m.number >= 2;
                          const { percent } = getModuleProgress(m);
                          return (
                            <button
                              key={m.id}
                              disabled={isLocked}
                              onClick={() => !isLocked && setSelectedModuleId(m.id)}
                              className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all flex items-center gap-2 ${
                                isLocked
                                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-60'
                                  : isCurrent 
                                    ? 'bg-brand-ink text-brand-bg border-brand-ink shadow-md shadow-brand-ink/10 font-bold cursor-pointer' 
                                    : 'bg-white text-brand-ink border-brand-line hover:border-brand-ink/40 hover:bg-brand-bg/10 cursor-pointer'
                              }`}
                            >
                              <span>Module {m.number}</span>
                              {isLocked ? (
                                <Lock size={12} className="text-slate-400" />
                              ) : percent > 0 ? (
                                <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-brand-bg' : 'bg-emerald-500'}`} title={`${percent}% done`} />
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Discipline Popup overlay */}
      <AnimatePresence>
        {activeDiscipline && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex flex-col bg-brand-bg md:p-6 p-3 h-screen w-screen overflow-hidden"
          >
            {/* Immersive background light texture */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30 z-0"
              style={{ 
                backgroundImage: `url(${bgLight})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }} 
            />
            
            <div className="flex-1 bg-white border border-brand-line shadow-2xl rounded-3xl flex flex-col overflow-hidden relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between p-6 sm:px-10 sm:py-8 border-b border-brand-line bg-brand-bg/10 backdrop-blur">
                <button
                  onClick={() => setShowChapterSelector(true)}
                  className="flex items-center gap-3 hover:opacity-85 transition-all bg-brand-ink/[0.03] hover:bg-brand-ink/[0.07] px-3.5 py-1.5 rounded-2xl border border-brand-line/50 text-left group cursor-pointer animate-fade-in"
                  title="Click to switch chapters"
                >
                  <span className="px-3.5 py-1 bg-brand-ink text-brand-bg rounded-lg text-[9px] font-bold uppercase tracking-widest font-mono">
                    Topic 0{activeDiscipline.index + 1}
                  </span>
                  <div className="h-4 w-px bg-brand-line" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold opacity-65 flex items-center gap-1.5">
                    {activeDiscipline.course.title}
                    <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </span>
                </button>
                
                <button 
                  onClick={() => setActiveDiscipline(null)}
                  className="flex items-center gap-2 px-5 py-2.5 border border-brand-line/80 rounded-full hover:bg-brand-ink hover:text-brand-bg hover:border-brand-ink transition-all text-xs uppercase tracking-widest font-bold cursor-pointer"
                >
                  <X size={15} /> Close [esc]
                </button>
              </div>

              {/* Main Immersive Content */}
              <div className="flex-1 overflow-y-auto p-8 sm:p-14 lg:p-16 flex flex-col max-w-[1380px] mx-auto w-full justify-between items-stretch">
                {/* Center Content Area */}
                <div className="flex-1 flex flex-col justify-between space-y-12 select-text">
                  <div className="space-y-8">
                    <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-brand-ink/40 block">Interactive Study</span>
                    <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-brand-ink leading-tight">
                      {activeDiscipline.discipline.title}
                    </h2>
                    
                    <div className="h-px bg-gradient-to-r from-brand-line to-transparent w-full" />
                    
                    {activeDiscipline.discipline.videoUrl ? (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
                        {/* Video player Column */}
                        <div className="lg:col-span-7 space-y-4">
                          <div className="rounded-2xl overflow-hidden border border-brand-line aspect-video w-full bg-black/5 shadow-lg relative">
                            <iframe 
                              src={getYouTubeEmbedUrl(activeDiscipline.discipline.videoUrl)}
                              title={`${activeDiscipline.discipline.title} Video Presentation`}
                              className="w-full h-full border-0 absolute inset-0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                          <p className="text-xs text-brand-muted italic font-mono select-none text-center">
                            Recorded Presentation Walkthrough • Click Play to Watch
                          </p>
                        </div>
                        
                        {/* Description Column */}
                        <div className="lg:col-span-5 prose prose-stone max-w-none">
                          <p className="text-brand-ink text-base sm:text-lg leading-relaxed whitespace-pre-line font-light">
                            {activeDiscipline.discipline.description}
                          </p>
                        </div>
                      </div>
                    ) : activeDiscipline.discipline.graphicId ? (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-6">
                        {/* Dynamic Interactive Graphic/Image Column */}
                        <div className="lg:col-span-8 flex flex-col justify-center items-stretch min-h-[460px] md:min-h-[500px] lg:min-h-[560px]">
                          {renderInteractiveGraphic(activeDiscipline.discipline.graphicId)}
                        </div>
                        
                        {/* Description Column */}
                        <div className="lg:col-span-4 prose prose-stone max-w-none flex flex-col justify-center bg-brand-bg/15 p-6 rounded-2xl border border-brand-line/45">
                          <p className="text-brand-ink text-base sm:text-lg leading-relaxed whitespace-pre-line font-light">
                            {activeDiscipline.discipline.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="prose prose-stone max-w-none space-y-6">
                        <p className="text-brand-ink text-lg sm:text-2xl leading-relaxed whitespace-pre-line font-light">
                          {activeDiscipline.discipline.description}
                        </p>
                        {activeDiscipline.discipline.id === 'learning-how-to-learn' && (
                          <div className="pt-4">
                            <a 
                              href="https://www.coursera.org/learn/learning-how-to-learn?action=showPartnerSupportedAccess" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-sm uppercase tracking-wider"
                            >
                              <span>Explore course on Coursera</span>
                              <ExternalLink size={16} />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Progressive indicator info */}
                  <div className="pt-8 border-t border-brand-line/40 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-brand-ink/40">
                    <span>Quietly Learning Curriculum</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-ink/30" />
                    <span>0{activeDiscipline.index + 1} of {activeDiscipline.course.disciplines?.length} Focus Modules</span>
                  </div>
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="p-6 sm:px-10 sm:py-6 border-t border-brand-line bg-brand-bg/5 flex flex-col md:flex-row items-center justify-between gap-4 z-20">
                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
                  <button
                    onClick={() => {
                      const course = activeDiscipline.course;
                      const len = course.disciplines?.length || 0;
                      const prevIndex = (activeDiscipline.index - 1 + len) % len;
                      handleSetActiveDiscipline({
                        course,
                        discipline: course.disciplines![prevIndex],
                        index: prevIndex
                      });
                    }}
                    className="flex items-center gap-2 px-5 py-3.5 border border-brand-line/80 rounded-2xl hover:bg-brand-bg transition-all font-medium text-sm text-brand-ink hover:border-brand-ink cursor-pointer"
                  >
                    <ArrowLeft size={16} />
                    <span>Previous Topic</span>
                  </button>

                  {/* Manual Complete/Reset Toggle Option */}
                  <button
                    onClick={() => {
                      const dId = activeDiscipline.discipline.id;
                      setCompletedDisciplines(prev => ({
                        ...prev,
                        [dId]: !prev[dId]
                      }));
                    }}
                    className={`px-4 py-3.5 border rounded-2xl flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      completedDisciplines[activeDiscipline.discipline.id]
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-white text-brand-ink border-brand-line/80 hover:border-brand-ink'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${completedDisciplines[activeDiscipline.discipline.id] ? 'bg-emerald-500 animate-pulse' : 'bg-brand-ink/30'}`} />
                    {completedDisciplines[activeDiscipline.discipline.id] ? 'Completed ✓' : 'Mark Complete'}
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                  {activeDiscipline.course.disciplines?.map((_, idx) => {
                    const isCompleted = !!completedDisciplines[activeDiscipline.course.disciplines![idx].id];
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSetActiveDiscipline({
                          course: activeDiscipline.course,
                          discipline: activeDiscipline.course.disciplines![idx],
                          index: idx
                        })}
                        className={`h-2.5 rounded-full transition-all cursor-pointer flex items-center justify-center relative ${
                          idx === activeDiscipline.index 
                            ? 'w-8 bg-brand-ink' 
                            : 'w-2.5 bg-brand-line hover:bg-brand-ink/40'
                        }`}
                        title={`Go to topic 0${idx + 1}`}
                      >
                        {isCompleted && idx !== activeDiscipline.index && (
                          <span className="absolute inset-0 bg-emerald-600 rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => {
                    const course = activeDiscipline.course;
                    const len = course.disciplines?.length || 0;
                    const nextIndex = (activeDiscipline.index + 1) % len;
                    handleSetActiveDiscipline({
                      course,
                      discipline: course.disciplines![nextIndex],
                      index: nextIndex
                    });
                  }}
                  className="flex items-center gap-2 px-5 py-3.5 bg-brand-ink text-brand-bg rounded-2xl hover:opacity-95 transition-all font-medium text-sm shadow-md shadow-brand-ink/10 cursor-pointer w-full md:w-auto justify-center"
                >
                  <span>Next Topic</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quiz Time Popup Modal */}
      <AnimatePresence>
        {showQuizPopup && activeQuizType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-brand-ink/40 backdrop-blur-md overflow-y-auto"
            onClick={closeQuiz}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-brand-bg w-full max-w-lg rounded-3xl border border-brand-line p-8 shadow-2xl relative overflow-hidden flex flex-col items-center text-center space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Abstract decorative accent background */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-ink/20 via-brand-ink to-brand-ink/20" />
              
              <div className="w-16 h-16 rounded-2xl bg-brand-ink/5 border border-brand-line flex items-center justify-center text-brand-ink relative shadow-inner">
                <HelpCircle size={32} className="animate-pulse" />
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-serif text-brand-ink">
                  Quiz Time!
                </h3>
                <p className="text-brand-muted text-sm sm:text-base leading-relaxed max-w-md font-light">
                  {activeQuizType === 'chapter-1' ? (
                    "Time to test your knowledge of various marketing disciplines covered in Chapter 1."
                  ) : (
                    "Testing your knowledge of Chapters 2-4: B2B Stakeholder Archetypes, content integration models, and lifecycle alignments."
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="w-full pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={closeQuiz}
                  className="flex-1 px-6 h-14 border border-brand-line hover:border-brand-ink hover:bg-brand-ink/5 rounded-xl font-medium text-brand-ink transition-all text-sm cursor-pointer"
                >
                  Skip for Now
                </button>
                <a
                  href={
                    activeQuizType === 'chapter-1'
                      ? "https://forms.gle/ynGfHoQ2PmqRmt5GA"
                      : "https://forms.gle/eV16Nee2R2WP6kdC9"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeQuiz}
                  className="flex-1 px-6 h-14 bg-brand-ink text-brand-bg rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all text-sm shadow-lg shadow-brand-ink/10 cursor-pointer"
                >
                  <span>
                    {activeQuizType === 'chapter-1' ? "Take Chapter Quiz" : "Take Chapters 2-4 Quiz"}
                  </span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Close button icon */}
              <button
                onClick={closeQuiz}
                className="absolute top-4 right-4 p-2 text-brand-ink/40 hover:text-brand-ink hover:bg-brand-ink/5 rounded-full transition-colors cursor-pointer"
                aria-label="Close custom quiz modal"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chapter Selection Popup directory Drawer */}
      <AnimatePresence>
        {showChapterSelector && selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[550] flex items-center justify-center p-4 bg-brand-ink/40 backdrop-blur-md"
            onClick={() => setShowChapterSelector(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-brand-bg w-full max-w-2xl rounded-3xl border border-brand-line p-8 shadow-2xl relative overflow-hidden flex flex-col space-y-6 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Accent Strip */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-colors duration-500" 
                style={{ backgroundColor: selectedModule.accentColor || '#4A5568' }}
              />

              {/* Modal Header */}
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-brand-ink/40 block pb-1">
                    0{selectedModule.number} • Chapter Directory
                  </span>
                  <h3 className="text-3xl font-serif text-brand-ink">
                    Select a Chapter
                  </h3>
                  <p className="text-brand-muted text-xs leading-relaxed max-w-md">
                    Choose from Chapters 1 to {selectedModule.courses.length} of our {selectedModule.title} curriculum.
                  </p>
                </div>

                <button
                  onClick={() => setShowChapterSelector(false)}
                  className="p-2 text-brand-ink/40 hover:text-brand-ink hover:bg-brand-ink/5 rounded-full transition-colors cursor-pointer"
                  aria-label="Close chapter directory modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chapters List */}
              <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
                {selectedModule.courses.map((course, idx) => {
                  const isCurCompleted = course.disciplines && course.disciplines.length > 0 
                    ? course.disciplines.every(d => !!completedDisciplines[d.id])
                    : false;

                  const complCount = course.disciplines 
                    ? course.disciplines.filter(d => !!completedDisciplines[d.id]).length
                    : 0;
                  
                  return (
                    <button
                      key={course.id}
                      onClick={() => handleSelectChapter(course)}
                      className="w-full text-left p-5 bg-white hover:bg-brand-ink/5 border border-brand-line hover:border-brand-ink rounded-2xl transition-all duration-300 flex items-start gap-4 group cursor-pointer"
                    >
                      {/* Chapter Indicator Emblem */}
                      <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-line flex flex-col items-center justify-center shrink-0 group-hover:bg-brand-ink group-hover:text-brand-bg group-hover:border-brand-ink transition-all">
                        <span className="text-[10px] font-mono leading-none opacity-60 uppercase">Ch</span>
                        <span className="text-lg font-bold font-serif leading-none mt-0.5">0{idx + 1}</span>
                      </div>

                      {/* Info Panel */}
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-base font-semibold leading-snug text-brand-ink">
                            {course.title.replace(/^Chapter\s+\d+:\s*/i, '')}
                          </h4>
                          <span className="px-2 py-0.5 bg-brand-bg border border-brand-line/60 rounded-full text-[9px] uppercase tracking-wider font-semibold opacity-60 flex items-center gap-1.5">
                            <FormatIcon format={course.format} />
                            <span>{course.format || 'Standard'}</span>
                          </span>
                          
                          {course.duration && (
                            <span className="px-2 py-0.5 bg-brand-bg border border-brand-line/60 rounded-full text-[9px] uppercase tracking-wider font-semibold opacity-60 flex items-center gap-1">
                              <Clock size={10} />
                              <span>{course.duration}</span>
                            </span>
                          )}
                          
                          {/* Complete status */}
                          {isCurCompleted ? (
                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                              Done ✓
                            </span>
                          ) : course.disciplines && course.disciplines.length > 0 && complCount > 0 ? (
                            <span className="bg-amber-50 text-amber-800 border border-amber-200 text-[9px] px-2 py-0.5 rounded-full font-semibold">
                              {complCount}/{course.disciplines.length} topics
                            </span>
                          ) : null}
                        </div>
                        <p className="text-brand-muted text-xs leading-relaxed max-w-lg line-clamp-2">
                          {course.description}
                        </p>
                      </div>

                      {/* Action trigger */}
                      <div className="w-10 h-10 border border-brand-line group-hover:border-brand-ink group-hover:bg-brand-ink group-hover:text-brand-bg rounded-full flex items-center justify-center shrink-0 transition-all">
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Decorative note foot */}
              <div className="pt-3 border-t border-brand-line/60 flex items-center justify-between text-[10px] uppercase tracking-widest text-brand-ink/40">
                <span>Select to direct-start or expand topics</span>
                <span className="italic">Quietly Collective</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chapter 3 Lightbox / Pop-up Presenter Modals */}
      <AnimatePresence>
        {chapter3LightboxOpen && chapter3Course && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[350] flex items-center justify-center p-2 sm:p-4 bg-brand-ink/90 backdrop-blur-md overflow-hidden"
            onClick={() => setChapter3LightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-slate-50 w-full max-w-7xl h-[95vh] max-h-[900px] rounded-3xl border border-brand-line/80 shadow-2xl flex flex-col overflow-hidden relative select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Border Glow */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-[#c89ffb] to-indigo-500" />

              {/* Modal Core Header */}
              <div className="px-6 py-4 border-b border-brand-line/40 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white shrink-0">
                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-brand-muted block font-mono">
                      Chapter 3
                    </span>
                    <h3 className="text-sm font-bold text-brand-ink uppercase tracking-wider font-sans">
                      B2B & Stakeholder Archetypes
                    </h3>
                  </div>
                </div>

                {/* Jump to Slide Navigation Pills */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {chapter3Course.disciplines.map((d, idx) => {
                    const isActive = chapter3ActiveSlideIndex === idx;
                    const isCompleted = !!completedDisciplines[d.id];
                    const slideNo = idx + 6;
                    return (
                      <button
                        key={d.id}
                        id={`lightbox-tab-btn-${slideNo}`}
                        onClick={() => setChapter3ActiveSlideIndex(idx)}
                        className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-lg transition-all flex items-center gap-1.5 border cursor-pointer ${
                          isActive
                            ? 'bg-brand-ink text-brand-bg border-brand-ink shadow-sm'
                            : 'bg-white text-brand-ink border-brand-line/60 hover:bg-slate-100'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-emerald-500' : 'bg-brand-ink/20'}`} />
                        <span>{d.title.replace(/^Slides?\s+\d+(?:\s+&\s+\d+)?(?::|-)?\s*/i, '')}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setChapter3LightboxOpen(false)}
                  className="absolute sm:relative top-3 right-3 sm:top-0 sm:right-0 p-2 text-brand-ink/40 hover:text-brand-ink hover:bg-slate-100 rounded-full transition-all cursor-pointer border border-transparent hover:border-brand-line/40"
                  title="Close slide presenter"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Content Pane */}
              {(() => {
                const disc = chapter3Course.disciplines[chapter3ActiveSlideIndex];
                const isSlideCompleted = !!completedDisciplines[disc.id];
                const slideNo = chapter3ActiveSlideIndex + 6;

                return (
                  <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch select-text">
                    
                    {/* Left Column Description */}
                    <div className="w-full lg:w-[35%] flex flex-col justify-start space-y-6 text-left shrink-0">
                      
                      {/* Title & Description Container */}
                      <div className="space-y-4">
                        
                        <h2 className="text-2xl sm:text-3xl font-serif text-brand-ink leading-tight font-medium">
                          {disc.title.replace(/^Slide \d+:\s*/, '').replace(/^Slides \d+ & \d+:\s*/, '')}
                        </h2>

                        <div className="h-0.5 bg-gradient-to-r from-brand-line/60 to-transparent w-full" />
                        
                        <p className="text-sm sm:text-base text-brand-ink/95 leading-relaxed font-light font-sans select-text whitespace-pre-line bg-white/40 p-4 rounded-xl border border-brand-line/30 shadow-inner">
                          {disc.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Column Large Interactive Graphic */}
                    <div className="flex-1 flex flex-col justify-center items-stretch min-h-[350px] bg-white border border-brand-line/40 rounded-2xl p-3 sm:p-6 shadow-sm overflow-hidden relative">
                      <div className="w-full h-full flex flex-col justify-center relative items-center">
                        {disc.graphicId && renderInteractiveGraphic(disc.graphicId)}
                      </div>
                    </div>

                  </div>
                );
              })()}

              {/* Modal Core Footer */}
              <div className="px-6 py-4 border-t border-brand-line/40 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white shrink-0 font-sans select-none">
                
                <button
                  id="lightbox-prev-btn"
                  disabled={chapter3ActiveSlideIndex === 0}
                  onClick={() => setChapter3ActiveSlideIndex(prev => prev - 1)}
                  className={`px-4 py-2.5 border border-brand-line rounded-xl font-bold text-[10px] uppercase tracking-widest cursor-pointer flex items-center gap-2 transition-all shrink-0 ${
                    chapter3ActiveSlideIndex === 0
                      ? 'opacity-30 cursor-not-allowed bg-slate-50 text-brand-ink/30'
                      : 'bg-white hover:bg-slate-100 text-brand-ink'
                  }`}
                >
                  <ChevronLeft size={12} /> Back
                </button>

                {/* Hotkeys Prompt and Progress indicator */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-xs font-mono text-brand-muted font-semibold flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-slate-100 rounded border">{chapter3ActiveSlideIndex + 1} of {chapter3Course?.disciplines?.length || 5}</span>
                  </div>
                  <div className="text-[9px] font-mono opacity-50 uppercase tracking-widest mt-1 hidden md:block">
                    Tip: Use <kbd className="px-1 bg-slate-100 border rounded">←</kbd> / <kbd className="px-1 bg-slate-100 border rounded">→</kbd> to browse • Press <kbd className="px-1 bg-slate-100 border rounded">Esc</kbd> to close
                  </div>
                </div>

                <button
                  id="lightbox-next-btn"
                  disabled={chapter3ActiveSlideIndex === chapter3Course.disciplines.length - 1}
                  onClick={() => {
                    // Auto mark as complete when progressing
                    const curDisc = chapter3Course.disciplines[chapter3ActiveSlideIndex];
                    if (!completedDisciplines[curDisc.id]) {
                      setCompletedDisciplines(prev => ({ ...prev, [curDisc.id]: true }));
                    }
                    setChapter3ActiveSlideIndex(prev => prev + 1);
                  }}
                  className={`px-4 py-2.5 bg-brand-ink text-brand-bg rounded-xl font-bold text-[10px] uppercase tracking-widest cursor-pointer flex items-center gap-2 transition-all hover:opacity-90 shrink-0 ${
                    chapter3ActiveSlideIndex === chapter3Course.disciplines.length - 1
                      ? 'opacity-30 cursor-not-allowed bg-slate-100 text-brand-ink/30 border border-brand-line'
                      : ''
                  }`}
                >
                  Next <ChevronRight size={12} />
                </button>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chapter Pop-Out Window Modal */}
      <AnimatePresence>
        {selectedChapterId && activeChapter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[300] flex items-center justify-center p-3 sm:p-6 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
              className="bg-white border border-brand-line/80 rounded-2xl sm:rounded-3xl shadow-2xl max-w-[96vw] xl:max-w-7xl w-full h-[95vh] flex flex-col overflow-hidden relative"
            >
              {/* Modal Top Bar */}
              <div className="bg-brand-bg px-6 py-4 border-b border-brand-line flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="px-3 py-1 bg-brand-ink text-brand-bg text-[10px] font-bold uppercase tracking-widest rounded-full shrink-0">
                    {activeChapterModule?.number === 0 ? "Module 0" : `Module 0${activeChapterModule?.number ?? 1}`}
                  </span>
                  <h3 className="font-medium text-brand-ink text-sm sm:text-base truncate">
                    {activeChapter.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Prev / Next Nav */}
                  <div className="hidden sm:flex items-center gap-1 border-r border-brand-line/60 pr-3 mr-1">
                    <button
                      disabled={!prevChapter}
                      onClick={() => {
                        if (prevChapter) {
                          if (chapterScrollContainerRef.current) {
                            chapterScrollContainerRef.current.scrollTop = 0;
                          }
                          setSelectedChapterId(prevChapter.id);
                        }
                      }}
                      className="p-1.5 rounded-lg border border-brand-line hover:bg-white text-brand-ink disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1 text-xs font-medium cursor-pointer"
                      title={prevChapter ? `Previous: ${prevChapter.title}` : "No previous chapter"}
                    >
                      <ChevronLeft size={14} />
                      <span>Prev</span>
                    </button>
                    <button
                      disabled={!nextChapter}
                      onClick={() => {
                        if (nextChapter) {
                          if (chapterScrollContainerRef.current) {
                            chapterScrollContainerRef.current.scrollTop = 0;
                          }
                          setSelectedChapterId(nextChapter.id);
                        }
                      }}
                      className="p-1.5 rounded-lg border border-brand-line hover:bg-white text-brand-ink disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1 text-xs font-medium cursor-pointer"
                      title={nextChapter ? `Next: ${nextChapter.title}` : "No next chapter"}
                    >
                      <span>Next</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedChapterId(null)}
                    className="p-2 rounded-full border border-brand-line bg-white hover:bg-slate-100 text-brand-ink transition-all cursor-pointer shadow-sm"
                    aria-label="Close chapter pop-out window"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Content */}
              <div 
                ref={chapterScrollContainerRef}
                key={activeChapter.id}
                className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white scroll-smooth"
              >
                {/* Chapter Banner & Meta */}
                <div className="border-b border-brand-line/60 pb-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-brand-ink mb-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-bg rounded-lg border border-brand-line">
                      <FormatIcon format={activeChapter.format} />
                      <span>{activeChapter.format || "Interactive"}</span>
                    </span>
                    {activeChapter.duration && (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-bg rounded-lg border border-brand-line">
                        <Clock size={12} />
                        <span>Time Required: {activeChapter.duration}</span>
                      </span>
                    )}
                    {activeChapter.disciplines && activeChapter.disciplines.length > 0 && (() => {
                      const { percent, completed, total } = getCourseProgress(activeChapter);
                      return (
                        <div className="flex items-center gap-2 px-3 py-1 bg-brand-bg rounded-lg border border-brand-line">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">Chapter Progress</span>
                          <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden shrink-0">
                            <div 
                              className={`h-full transition-all duration-500 rounded-full ${percent === 100 ? 'bg-emerald-500' : 'bg-brand-ink'}`}
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                          <span className={`text-[11px] font-mono font-bold ${percent === 100 ? 'text-emerald-600' : 'text-brand-ink'}`}>
                            {percent}%
                          </span>
                          <span className="text-[10px] text-brand-muted font-mono hidden sm:inline">
                            ({completed}/{total})
                          </span>
                        </div>
                      );
                    })()}
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-normal text-brand-ink leading-tight mb-4">
                    {activeChapter.title}
                  </h1>
                  <p className="text-brand-muted text-base leading-relaxed max-w-3xl whitespace-pre-line">
                    {activeChapter.description}
                  </p>
                </div>

                {/* Render Rich Chapter Content */}
                {renderCourseContent(activeChapter)}
              </div>

              {/* Modal Footer Nav */}
              <div className="bg-brand-bg px-6 py-4 border-t border-brand-line flex items-center justify-between gap-4 shrink-0">
                <div>
                  {prevChapter ? (
                    <button
                      onClick={() => {
                        if (chapterScrollContainerRef.current) {
                          chapterScrollContainerRef.current.scrollTop = 0;
                        }
                        setSelectedChapterId(prevChapter.id);
                      }}
                      className="px-4 py-2 bg-white text-brand-ink rounded-xl border border-brand-line hover:border-brand-ink text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm max-w-[220px] sm:max-w-xs truncate"
                    >
                      <ChevronLeft size={16} className="shrink-0" />
                      <span className="truncate">Prev: {prevChapter.title}</span>
                    </button>
                  ) : (
                    <div />
                  )}
                </div>

                <button
                  onClick={() => setSelectedChapterId(null)}
                  className="px-5 py-2 bg-brand-ink text-brand-bg rounded-xl font-semibold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-md"
                >
                  Back to Module
                </button>

                <div>
                  {nextChapter ? (
                    <button
                      onClick={() => {
                        if (chapterScrollContainerRef.current) {
                          chapterScrollContainerRef.current.scrollTop = 0;
                        }
                        setSelectedChapterId(nextChapter.id);
                      }}
                      className="px-4 py-2 bg-white text-brand-ink rounded-xl border border-brand-line hover:border-brand-ink text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm max-w-[220px] sm:max-w-xs truncate"
                    >
                      <span className="truncate">Next: {nextChapter.title}</span>
                      <ChevronRight size={16} className="shrink-0" />
                    </button>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-brand-line bg-brand-ink text-brand-bg relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10 grayscale brightness-50"
          style={{ 
            backgroundImage: `url(${bgDark})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
        />
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-12 relative z-10">
          <div className="max-w-md">
            <h4 className="text-2xl mb-4 italic">The Collective Intelligence.</h4>
            <p className="opacity-60 text-sm leading-relaxed">
              Quietly’s Learning & Development ecosystem is designed to evolve our delivery beyond standard documentation.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-brand-bg/10 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-30 relative z-10">
          <span>&copy; {new Date().getFullYear()} Quietly L&D</span>
          <span>Property of Quietly Ltd.</span>
        </div>
      </footer>
    </div>
  );
}

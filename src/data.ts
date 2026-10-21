/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DisciplineVideo {
  title: string;
  videoUrl: string;
  durationNote?: string;
  platform?: string;
  coverage?: string;
  researchQuestions?: string[];
  category?: string;
  roleTakeaways?: {
    strategist?: string;
    contentLead?: string;
    clientPartner?: string;
  };
}

export interface Discipline {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  videoList?: DisciplineVideo[];
  graphicId?: string;
  category?: string;
  coverage?: string;
  researchQuestions?: string[];
  roleTakeaways?: {
    strategist?: string;
    contentLead?: string;
    clientPartner?: string;
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration?: string;
  subtopics?: string[];
  format?: 'video' | 'podcast' | 'quiz' | 'document' | 'interactive';
  videoUrl?: string;
  googleVideoUrl?: string;
  podcastUrl?: string;
  podcastTitle?: string;
  slideDeckUrl?: string;
  disciplines?: Discipline[];
  outcome?: string;
  discussionQuestions?: string[];
  quizFormUrl?: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  purpose: string;
  duration?: string;
  isOptional?: boolean;
  isLocked?: boolean;
  preface?: string;
  courses: Course[];
  accentColor: string;
  imageUrl: string;
  outcome?: string;
  quizFormUrl?: string;
}

export const curriculum: Module[] = [
  {
    id: 'learning-how-to-learn',
    number: 0,
    title: 'Module 0 — Learning How to Learn',
    subtitle: 'Setting the stage for iterative growth',
    duration: 'Approx. 15 hours',
    isOptional: true,
    purpose: 'Before diving into marketing and AI models, we must first learn how to acquire skills effectively. This section introduces the custom modules and integrates the world-renowned Coursera course, establishing why continuous and iterative learning is our strategic advantage.',
    accentColor: '#3182CE',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    courses: [
      {
        id: 'module-0-introduction',
        title: 'Chapter 0: Foundation for Iterative Learning',
        description: 'Discover how memory, focused vs. diffuse thinking modes, and cognitive structures can be fully leveraged across all subsequent modules. Setting up a structured, agile approach to continuous mental training at Quietly.',
        duration: '15 hours',
        format: 'interactive',
        outcome: 'A foundational understanding of how your brain learns best, establishing the mindset required to successfully process and master the toolstacks and processes of the next four modules.',
        discussionQuestions: [
          "How will you allocate dedicated cognitive space to balance focused delivery and diffuse thinking on active projects?",
          "Why is immediate application/retrieval more effective than passive video-watching or reading?",
          "What are the dangers of the 'illusions of competence' when skimming tool documentation?"
        ],
        disciplines: [
          {
            id: 'learning-how-to-learn',
            title: 'Coursera: Learning How to Learn',
            description: 'A direct portal to the world-renowned course on Coursera: "Learning How to Learn". This training equips you with powerful mental tools used by experts in art, music, literature, math, science, and sports.\n\nYou will explore the differences between "focused" and "diffuse" modes of thinking, learn how active recall and spacing beats cramming, and master techniques to conquer procrastination.\n\nAccess the full free training directly: \n\nhttps://www.coursera.org/learn/learning-how-to-learn?action=showPartnerSupportedAccess'
          }
        ]
      }
    ]
  },
  {
    id: 'foundational-marketing-101',
    number: 1,
    title: 'Foundational — Marketing 101',
    subtitle: 'Understanding the ecosystem',
    duration: 'Approx. 2 hours',
    purpose: 'This module provides the "altitude" needed to understand how content marketing fits into the broader marketing ecosystem.',
    accentColor: '#4A5568',
    imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
    courses: [
      {
        id: 'chapter-1-marketing-disciplines',
        title: 'Chapter 1: Marketing Disciplines',
        description: 'We’ll walk through key marketing functions like PR, Digital, Paid Media, and Product Marketing that exist alongside Content Marketing. For each function, we’ll provide a brief overview of what it is, and what activities are involved therein.',
        duration: '45 mins',
        format: 'interactive',
        outcome: '• Gain a holistic view of various marketing functions.\n• Understand the fundamental differences and overlaps between these roles.\n• Recognize how each forms a part of an overarching brand and marketing strategy.',
        discussionQuestions: [
          "Before diving into specific disciplines (like SEO or Social), remember that Quietly focuses on solving specific business problems—whether that's brand awareness, lead generation, or customer retention.",
          "No marketing discipline exists in a vacuum at Quietly. For example, a \"Social Media\" video should be viewed through the lens of how it supports \"Search\" or \"Demand Gen\" efforts.",
          "Quietly isn't just about creative content; our core approach is \"data-led and human-inspired.\" Everything we do is rooted in data and insights to ensure content actually performs for our clients.",
          "We view content as a continuous cycle—from strategy and creation to distribution and optimization—rather than a one-off project.",
          "Always ask how a discipline's success is measured. We prioritize meaningful metrics (KPIs) that prove the return on investment for the client."
        ],
        disciplines: [
          {
            id: 'discipline-pr',
            title: 'Public Relations (PR)',
            description: 'Public relations is the strategic management of information release to build and maintain a positive brand reputation.\n\nUnlike paid advertising, PR uses earned media (news, blogs, magazines) for third-party credibility, which the public trusts more.\n\nThe main goal is to establish and protect honest, long-term relationships with stakeholders (customers, investors, partners) to keep the brand relevant and successful.',
            videoUrl: 'https://youtu.be/MHxs-Rklcks'
          },
          {
            id: 'discipline-paid-media',
            title: 'Paid Media',
            description: 'Media planning serves as the strategic phase where you identify the target audience and select the most effective platforms for a campaign.\n\nMedia buying acts as the tactical execution phase, focusing on negotiating costs and purchasing the actual ad space.\n\nTogether, these processes ensure that marketing budgets are spent efficiently to reach the right people at the right time.',
            videoUrl: 'https://youtu.be/t59pVcdE8UI'
          },
          {
            id: 'discipline-digital-marketing',
            title: 'Digital Marketing',
            description: 'Digital marketing uses the internet and electronic devices via channels like search engines, social media, and email to connect with customers.\n\nInbound methodology focuses on attracting, engaging, and delighting customers with valuable, relevant content instead of intrusive traditional advertising.\n\nDigital marketing success requires balancing three media types —Owned (website/blog),  Paid (ads), and Earned (word-of-mouth/ reviews)—to guide users through the buyer’s journey.',
            videoUrl: 'https://youtu.be/XDpwDwcXGoU'
          },
          {
            id: 'discipline-product-marketing',
            title: 'Product Marketing',
            description: 'Product marketing is the process of deeply understanding and articulating what makes a product uniquely valuable and different compared to all other alternatives in the market.\n\nIt requires a mastery of the competitive landscape to identify the product\'s "secret sauce" and explain exactly why a specific target audience should choose it.\n\nThe role serves as the essential strategic foundation that must be established before any tactical messaging, copywriting, or sales activities can effectively take place.',
            videoUrl: 'https://youtu.be/ZLuDIpzGosw'
          },
          {
            id: 'discipline-demand-gen',
            title: 'Demand Generation',
            description: 'Demand generation creates awareness and long-term interest in a brand\'s offerings, attracting a high-quality audience before the sales funnel.  \n\nIt differs from lead generation by distributing free, valuable content (educational insights) to build trust, rather than just collecting contact information. \n\nThe goal is a predictable sales pipeline, ensuring the brand is the trusted authority when a potential customer is ready to buy.',
            videoUrl: 'https://youtu.be/cb97wOXJpxI'
          },
          {
            id: 'discipline-gtm',
            title: 'Go-To-Market (GTM)',
            description: 'A Go-to-Market (GTM) strategy is a targeted, short-term plan for launching a new product or entering a market.\n\nIt focuses on four core components: target audience (who), value proposition (why), pricing/distribution (how much/where), and promotion (launch tactics).\n\nA strong GTM plan lowers marketing costs through high-ROI channels, ensures product-market fit, and accelerates traction.',
            videoUrl: 'https://youtu.be/Zf7cjnfp1w8'
          },
          {
            id: 'discipline-channel-marketing',
            title: 'Channel & Partner Marketing',
            description: 'Channel marketing is a highly efficient "leverage" strategy. By influencing a single partner (e.g., retailer, distributor, or architect), a brand can reach the customers that partner advises. \n\nThis approach is effective because it utilizes the partners\' existing trust and established relationships with their client bases. Focusing on these intermediaries allows brands to scale their reach and impact much further than direct-to-consumer efforts alone.',
            videoUrl: 'https://youtu.be/3xnktYpDBIY'
          },
          {
            id: 'discipline-field-marketing',
            title: 'Sales & Field Marketing',
            description: 'Field marketing is a specialized brand strategy that focuses on direct, face-to-face interactions with potential customers to promote products and drive sales in a physical environment.\n\nCommon activities include product demonstrations, on-site sampling, leafleting, and street promotions, all designed to create a tangible and memorable brand experience.\n\nThe goal is to bridge the gap between a brand and its audience by gathering real-time feedback and influencing purchasing decisions at the exact point of sale or in high-traffic public spaces.',
            videoUrl: 'https://youtu.be/VivOOclP2SY'
          },
          {
            id: 'discipline-social-media',
            title: 'Social Media & Community Management',
            description: 'Social media marketing uses digital platforms to create and share content that builds brand awareness, engages target audiences, and drives measurable business actions.\n\nThis strategy relies on two-way communication, shifting from traditional "broadcasting" to fostering genuine communities where brands interact with followers in real-time.\n\nEffectiveness is measured by a mix of brand-building metrics (like reach and engagement) and direct conversion goals (like website traffic and sales), all adapted to each platform\'s unique user behavior.',
            videoUrl: 'https://youtu.be/PgCjH6wh0fk'
          }
        ]
      },
      {
        id: 'chapter-2-the-connective-tissue',
        title: 'Chapter 2: The Connective Tissue',
        description: 'This Chapter positions content as the "connective tissue" across marketing functions and the broader organization, including HR, Sales and beyond. It highlights how content alignment acts as a force multiplier and establishes the need for an "Enterprise content strategy" to ensure a consistent, unified brand narrative across all departments and audiences.',
        duration: '10 mins',
        format: 'interactive',
        slideDeckUrl: 'https://docs.google.com/presentation/d/1dsQaGnD1w6D6SJzxrfyX-erZ6cWeLbahtRlC4Xifv3I/edit?usp=sharing',
        outcome: '• Understand how and why content extends beyond Marketing\n• Define "Enterprise content strategy"\n• Explain how content joins up all of an organization\'s departments, LoBs and channels',
        discussionQuestions: [
          "What does ‘content’ mean and/or how does it come to life across different teams, LoBs and functions across an organization?",
          "In what ways is the role of content expanding beyond traditional Marketing and Communications to influence broader organizational functions?",
          "How does content strategy serve as the \"connective tissue\" or \"dark matter\" that bridges gaps between disparate marketing disciplines?"
        ],
        disciplines: [
          {
            id: 'discipline-content-landscape',
            title: 'The Content Landscape',
            description: 'Content can mean anything and everything—Paid Media, Digital Marketing, Product Marketing, Demand Generation, GTM Channel/Partner Marketing, Sales/Field Marketing, Social Media/Community Management.\n\nBut now, content is playing an increasingly important role outside of Marketing & Communications.',
            graphicId: 'landscape'
          },
          {
            id: 'discipline-force-multiplier',
            title: 'Content Acts as a Force Multiplier',
            description: 'Content becomes more effective when it is working in alignment between channels, teams, journeys, etc.\n\nThe state of converged media means content is impacting all content types and delivery channels:\n\n• Good web/blog content increases organic search traffic\n• Good organic content improves paid social\n• Sponsored content/articles outperforms display advertising',
            graphicId: 'force-multiplier'
          },
          {
            id: 'discipline-outside-marketing',
            title: 'Content Outside of Marketing',
            description: 'Content also exists across departments, functions and lines of business as well as outside of the organization:\n\n• Executive comms: Content is building credibility outside the boardroom\n• HR: Content is supporting recruitment and retention\n• Sales: Content is driving sales enablement (front line staff)\n• Product: Content is supporting core product needs (e.g. features and functionality positioning)\n• Channel partners: Content also is an active agent for partners who work to deliver adjacent offerings',
            graphicId: 'outside-marketing'
          },
          {
            id: 'discipline-enterprise-view',
            title: 'Connecting It All: An Enterprise View',
            description: 'How can we ensure a consistent brand positioning, narrative, and story across all departments, functions, and Lines of Business (LoB), given the ubiquitous nature of content?\n\nThis demands an "Enterprise content strategy"—the highest-level, overarching content plan:\n\n• A holistic perspective of an organization\'s structure, processes, data, and systems, enabling comprehensive management and strategic decision-making\n• Connects disparate business units, providing leaders with a complete organizational picture—and importantly, a unified narrative that crosses all content spaces for all audiences',
            graphicId: 'enterprise-view'
          }
        ]
      },
      {
        id: 'chapter-3-b2b-stakeholder-archetypes',
        title: 'Chapter 3: B2B & Stakeholder Archetypes',
        description: 'This chapter examines the B2B organizational landscape where various teams optimize different stages of the customer lifecycle, prioritizing unique metrics and content. By understanding the B2B stakeholder archetypes, you will see how content acts as a critical, unifying force that requires alignment to ensure a cohesive, end-to-end customer journey.',
        duration: '20 mins',
        format: 'interactive',
        slideDeckUrl: 'https://docs.google.com/presentation/d/1LHs2oGrlL8cofJPmZGk9tH1g-XjI6VPvsYfFLUauzfI/edit?slide=id.g32cad2cbb84_0_3#slide=id.g32cad2cbb84_0_3',
        podcastUrl: 'https://notebooklm.google.com/notebook/6654ed02-91d3-49cb-8c74-98db828b9acc/artifact/8debcb5e-5db7-4bcc-994d-c066648ac798?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_',
        podcastTitle: 'Why Content Is B2B Dark Matter',
        outcome: '• How B2B functions optimize different customer lifecycle stages\n• What each team prioritizes when it comes to content and unique metrics\n• Explain how content serves a critical, unifying role across the B2B ecosystem',
        discussionQuestions: [
          "Identify how content functions differently across various teams, lines of business, and organizational roles.",
          "Analyze how the role of content is expanding beyond traditional Marketing and Communications departments.",
          "Explore how content strategy acts as connective tissue that bridges gaps between marketing disciplines."
        ],
        disciplines: [
          {
            id: 'discipline-b2b-landscape',
            title: 'Slide 6: B2B Organizational Landscape',
            description: 'In a B2B organization, marketing and revenue functions are highly interconnected, but each team is responsible for optimizing a different stage of the customer lifecycle—from generating awareness to driving retention and growth. As a result, they each prioritize different metrics, insights, and types of content based on their role in moving the customer forward.\n\nNo matter the function, every team should have a growth mindset.',
            graphicId: 'b2b-landscape-graphic'
          },
          {
            id: 'discipline-content-unifier',
            title: 'Slide 7: Content Sits in the middle of it all',
            description: 'Content plays a critical unifying role across this ecosystem: while Demand Gen may focus on conversion assets, Sales on proof points, and Customer Success on onboarding and education, all rely on tailored content to achieve their goals.\n\nThe challenge—and opportunity—is ensuring content is aligned across these functions to support a cohesive, end-to-end customer journey.',
            graphicId: 'content-unifier-graphic'
          },
          {
            id: 'discipline-stakeholder-transition',
            title: 'Slide 8: What Does Each Team Care About',
            description: 'Now that we’ve established the organizational structure, let’s double click into each ‘B2B stakeholder Archetype’ to understand the insights and content that are priorities for each.\n\nEach function optimizes for a different part of the customer journey — but all rely on shared insights and content to succeed.',
            graphicId: 'b2b-transition-graphic'
          },
          {
            id: 'discipline-b2b-archetypes-table',
            title: 'Slides 9 & 10: B2B Archetypes',
            description: 'This master reference panel combines B2B Archetype team functions, journey stage focus, and prioritized insights and content across all 9 organization roles.',
            graphicId: 'b2b-archetypes-table-graphic'
          },
          {
            id: 'discipline-okta-case-study',
            title: "Slide 10: Case Study: Okta's Content Needs",
            description: 'Working with various Okta teams, we saw overlap in topics, audiences, and channels, but efforts weren’t always aligned strategically and operationally.\n\nAs their content hub, we increased visibility and alignment, identified content efficiencies, and combined efforts for greater content ROI.\n\nFormalizing content as an organizational function beyond Marketing enabled effective scaling.',
            graphicId: 'okta-graphic'
          }
        ]
      },
      {
        id: 'chapter-4-agency-vs-consultancy-mindset',
        title: 'Chapter 4: How Other Agencies Do It',
        description: 'The landscape of professional services is undergoing a "Great Convergence." The lines between traditional advertising agencies, management consultancies, and specialized content shops have blurred into a single competitive arena. For Quietly to thrive, our team must understand not just what we do, but where we sit in this ecosystem. This chapter deconstructs the competitors we face, the evolving expectations of our clients, and the "Variable Fidelity" required to win in a market where AI is rapidly commoditizing basic execution.',
        duration: '20 mins',
        format: 'interactive',
        slideDeckUrl: 'https://docs.google.com/presentation/d/1NPNSQccJ__4tGSb1cGk8cG2tE-7aSxDhAD9oUqVAtJg/edit?slide=id.g32cad2cbb84_0_3#slide=id.g32cad2cbb84_0_3',
        outcome: '• Identify the Players: Distinguish between the holdcos, management consultancies, and full-stack boutique agencies.\n• Master the Workflow: Understand the typical AOR campaign lifecycle and how content integrates into broader media and creative plans.\n• Navigate the Fidelity Spectrum: Learn to adapt the "look and feel" of deliverables based on whether the work is strategic consulting or creative planning.\n• Economics of Modern Content: Understand how AI and shifting client expectations have moved the "value bar", and where systems thinking and subject-matter depth will become key differentiators.',
        discussionQuestions: [
          "The Stakeholder Mirror: If you were a client-side Marketing Director, why would you hire a \"Big 4\" Consultancy over a Creative Boutique for a content project? Vice versa? What are they offering that we must emulate?",
          "The Commodity Trap: In your specific role (Creative, Strategy, or Accounts), what part of your daily \"output\" is most at risk of being commoditized by AI? How do you \"level up\" that output to remain indispensable?",
          "Workflow Friction: Looking at the typical MarCom workflow (Brief → Media → Creative), where do you see the biggest opportunity for \"Content\" to move from an afterthought to the lead driver?",
          "Fidelity Check: Look at your last three decks or content deliverables. Did they meet the \"Fidelity Spectrum\"? Were they as high-level vs. tactical, show vs. tell, narrative vs. product-led, high concept vs. easily understood, etc. as the client might have expected?"
        ],
        disciplines: [
          {
            id: 'discipline-key-players',
            title: 'Identifying the Key Players',
            description: 'The landscape of competitors is divided into distinct categories with unique capabilities:\n\n• Holdcos (WPP, Omnicom, Publicis, IPG, Dentsu): Giant global networks with deep media-buying power and creative departments. They offer unparalleled scale but can suffer from siloing.\n\n• Management Consultancies (Accenture Interactive/Song, Deloitte Digital, PwC): Traditionally analytical, now aggressively acquiring creative and content agencies. They sell directly to the C-suite (CEO, CIO) and integrate creative into massive digital transformation projects.\n\n• Full-Stack Boutiques: Smaller, agile, hyper-focused agencies built on rapid speed, direct communication, and all-in-one execution.',
            graphicId: 'players'
          },
          {
            id: 'discipline-great-convergence',
            title: 'The Great Convergence',
            description: 'All players are leaning into AI to innovate and streamline operations:\n\n• Consolidation & tech-first bets: From Omnicom’s acquisition of IPG to Publicis’ agreement to acquire LiveRamp, key agency players (holdcos) are betting on data & technical capabilities to fuel growth\n\n• Tech-Enabled Independents: Specialized boutiques who can now use AI to simulate scale and multiply impact while staying lean and agile in headcount and operations\n\n• Consulting on AI: Consultancies are staying relevant by advising executives on how to use AI (e.g. strategic roadmaps, governance frameworks, AI workflows, etc.)',
            graphicId: 'convergence'
          },
          {
            id: 'discipline-mastering-workflow',
            title: 'Mastering the Workflow',
            description: 'To deliver maximum value, we must understand how content integrates into the standard Agency of Record (AOR) campaign lifecycle:\n\n• The Traditional Flow: Brief → Media Planning → Creative Development. Content is frequently treated as an afterthought near the end of the line.\n\n• The Modern Opportunity: Positioning content strategy as the catalyst. By injecting content planning directly into the brief phase, we can guide media allocations and inform creative directions, translating client business goals into highly performant customer journeys.',
            graphicId: 'workflow'
          },
          {
            id: 'discipline-fidelity-spectrum',
            title: 'Navigating the Fidelity Spectrum',
            description: 'We must adapt the "look and feel" of our deliverables based on the type of engagement:\n\n• High Strategic Consulting: Deliverables require structured frameworks, quantitative evidence, rigorous data, and systemic clarity. The presentation style must feel authoritative, objective, and executive-ready.\n\n• Creative Planning: Focuses on narrative, flow, visual mockups, conceptual storytelling, and emotional resonance. The focus is to paint a compelling vision of the future brand experience.',
            graphicId: 'fidelity'
          },
          {
            id: 'discipline-who-wins',
            title: 'Who’s Positioned to Win?',
            description: 'AI is rapidly commoditizing basic execution. When anyone can generate a mediocre article or social post in seconds, the "value bar" shifts:\n\n• Basic Execution is Commoditized: The value of simple raw copywriting or layout templating is decaying.\n\n• Systems Thinking Wins: The victor is the partner who understands how content pieces link together as a systematic operations engine, feeds continuous analytics, and leverages subject-matter depth.',
            graphicId: 'who-wins'
          }
        ]
      }
    ]
  },
  {
    id: 'foundational-ai-philosophy',
    number: 2,
    title: 'Foundational — AI @ Quietly',
    subtitle: 'Philosophy & Principles',
    isLocked: true,
    purpose: 'To move staff away from using AI as a "taskmaster" and toward using it as a "critical thinking partner".',
    preface: 'Philosophy: Understanding "the forest from the trees" and how to benefit from AI’s thoughts rather than just its output.',
    accentColor: '#319795',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    quizFormUrl: 'https://docs.google.com/forms',
    courses: [
      {
        id: 'bias-critical-thinking',
        title: 'Bias & Critical Thinking',
        description: 'How to remove bias from prompts to get better, more objective responses.',
        format: 'quiz',
        slideDeckUrl: 'https://docs.google.com/presentation/d/1rjbDJTuTh4JZp6-CEJ_bfqr6NY2MX74f8jYkZUMwzFk/edit?usp=sharing'
      },
      {
        id: 'prompting-best-practices',
        title: 'Prompting Best Practices',
        description: 'Moving from simple search-bar queries to chain-of-reasoning methodologies. Includes a Prompt Library for successful Gemini prompts.',
        format: 'interactive'
      }
    ]
  },
  {
    id: 'applied-tool-stack',
    number: 3,
    title: "Applied — Quietly's Tool Stack",
    subtitle: 'Standardizing research & synthesis',
    duration: 'Approx. 1.5 hours',
    isLocked: true,
    purpose: 'To standardize how we use data and synthesis tools across different departments, aligning raw research outputs with strategic intent and high-impact client deliverables.',
    outcome: `• Articulate common “types” of research (tools): Describe the common areas of research Quietly conducts, and examples of the tools used to facilitate that research.

• Understand basic application of tools across common use cases: Establish a working understanding of each tool, and able to apply it across the common task types noted.

• Distinguish between role-specific use cases of each tool: Identify and apply each tool in service of role-specific needs.`,
    accentColor: '#2C5282',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    quizFormUrl: 'https://docs.google.com/forms',
    courses: [
      {
        id: 'chapter-1-tools-by-design',
        title: 'Chapter 1: Tools by Design',
        description: 'A structured decision framework matching specific client inquiries to the ideal research methodology. We will deconstruct the "Which Tool? Cheat Sheet" to navigate social listening, keyword architecture, competitive intelligence, subscription panels, and first-party analytics.',
        duration: '30 mins',
        format: 'interactive',
        slideDeckUrl: 'https://docs.google.com/presentation/d/13cWfwpWmZD8Ic6aGnw1b7lWeea58NDsOxU02LqiHOE0/edit?slide=id.h1151ba94adef2dc9_1_128#slide=id.h1151ba94adef2dc9_1_128',
        googleVideoUrl: 'https://docs.google.com/videos/d/1rzbDy2PFlVmvwQIPHdNAT2OSsuIBfa_n1Ty9AkD98wg/play',
        outcome: '• Navigate the 5 primary research tool categories with precision and confidence.\n• Formulate sharp, testable hypotheses before pulling raw data from specialized platforms.\n• Select the optimal tool combination based on turnaround time, sample fidelity, and commercial objectives.',
        discussionQuestions: [
          "Before pulling data from a tool, how do you formulate the exact business hypothesis you are testing?",
          "When is qualitative audience research (like GWI or Statista) superior to real-time search volume (SEMrush), and how do they validate each other?",
          "How do we ensure research findings translate into actionable content strategy rather than raw data dumps?",
          "What are the common pitfalls when relying exclusively on social listening platforms without cross-referencing first-party CRM metrics?",
          "How can we balance exploratory research with strict project hour allocations?"
        ],
        disciplines: [
          {
            id: 'tool-pillar-social-listening',
            title: 'Social Listening & Audience Sentiment',
            description: 'Platforms like Meltwater and Brandwatch allow us to monitor unprompted brand conversations, volume spikes, and emotional sentiment across social channels.\n\nBest used for: Brand crisis tracking, campaign reaction sentiment, share-of-voice vs competitors, and uncovering emergent cultural discourse.\n\nKey metric: Net Sentiment Score, Volume Velocity, and Top Mention Drivers.'
          },
          {
            id: 'tool-pillar-search-intent',
            title: 'Search Intent & Keyword Architecture',
            description: 'SEMrush and Ahrefs uncover exactly what questions and queries target audiences are typing into search engines.\n\nBest used for: Information architecture, content gap identification, SERP feature opportunities, and long-tail query clusters.\n\nKey metric: Search Volume, Keyword Difficulty (KD%), and Search Intent (Informational, Navigational, Commercial, Transactional).'
          },
          {
            id: 'tool-pillar-competitive-intelligence',
            title: 'Competitive Intelligence & Traffic Benchmarking',
            description: 'Similarweb and SpyFu provide estimated top-of-funnel web traffic, referral sources, and channel distribution models for competitors.\n\nBest used for: Channel attribution benchmarking, competitive growth trends, and identifying under-exploited referral partners.\n\nKey metric: Traffic Share by Channel, Bounce Rate, and Top Referring Domains.'
          },
          {
            id: 'tool-pillar-syndicated-research',
            title: 'Syndicated Panel & Consumer Research',
            description: 'GWI (GlobalWebIndex) and Statista provide statistically weighted survey panels representing millions of global consumers.\n\nBest used for: Persona validation, cross-generational media consumption habits, and high-level behavioral trends.\n\nKey metric: Index Scores (comparing target audience likelihood against national averages) and Segment Penetration.'
          },
          {
            id: 'tool-pillar-first-party-data',
            title: 'First-Party Analytics & CRM Telemetry',
            description: 'Google Analytics 4, HubSpot, and CRM systems reveal the actual ground truth of what users do once they land on owned properties.\n\nBest used for: Content ROI attribution, conversion funnel drop-offs, and validating top-performing landing pages.\n\nKey metric: Engaged Sessions, Scroll Depth, Conversion Rate, and Customer Lifetime Value (LTV).'
          }
        ]
      },
      {
        id: 'chapter-2-tool-specific-usage',
        title: 'Chapter 2: Tool-Specific Usage',
        description: 'Tactical execution playbooks and best practices for Quietly’s core toolkit. Learn how to configure targeted queries, build precision boolean search strings, extract high-signal exports, and avoid common data traps across SEMrush, vidIQ, BuzzSumo, Similarweb, and GWI.',
        duration: '35 mins',
        format: 'interactive',
        outcome: '• Master advanced search filters and keyword gap analysis in SEMrush.\n• Extract content resonance patterns, outlier formats, and influencer authority using BuzzSumo.\n• Uncover competitor distribution channels, referral traffic, and search share in Similarweb.\n• Optimize YouTube metadata, velocity, and tags using vidIQ.\n• Build consumer sentiment profiles using syndicated panel data.',
        discussionQuestions: [
          "How do you validate the accuracy and sample size of third-party tool estimates before presenting them to a client?",
          "What is your workflow for isolating high-intent, low-competition keywords in SEMrush vs. vanity search volumes?",
          "In video and YouTube strategy (via vidIQ), how do title tags, thumbnail velocity, and search volume interact?",
          "How can we streamline the handoff of raw tool exports between strategists and content creators?",
          "When should you challenge data that seems counterintuitive to your creative intuition?"
        ],
        disciplines: [
          {
            id: 'usage-google-suite',
            title: 'Google Search & Analytics Suite',
            category: 'Organic Search, Trends & Behavioral Analytics',
            coverage: 'Comprehensive platform walkthroughs spanning Google Search Console, Google Trends, Google Keyword Planner, and Google Analytics 4 (Reports & Explorations).',
            researchQuestions: [
              'What are people searching for and what terms should we target?',
              'Which pages get found on Google and which need improving?',
              'How many people visit, where do they come from, and what do they do?'
            ],
            description: "Comprehensive tutorials covering Google's official intelligence ecosystem: Google Search Console, Google Trends, Google Keyword Planner, and Google Analytics 4 (Reports & Free Form Explorations).\n\nUse this unified playbook to master indexing, search intent shifts, keyword forecasting, audience acquisition, and custom behavioral reporting.",
            videoUrl: 'https://www.youtube.com/watch?v=iB7_i4giItw',
            videoList: [
              {
                title: 'Google Search Console Tutorial 2025',
                videoUrl: 'https://www.youtube.com/watch?v=iB7_i4giItw',
                durationNote: '39:16 — watch 1:36–11:00',
                platform: 'YouTube',
                category: 'Organic Search Performance, Visibility',
                coverage: 'Platform walkthrough: Performance, queries/pages, filters, indexing, sitemaps, links, and keyword research.',
                researchQuestions: [
                  'What are people searching for?',
                  'Which pages get found on Google?',
                  'Which pages need improving?'
                ],
                roleTakeaways: {
                  strategist: 'SEO opportunities • Diagnose visibility changes • Inform search reporting',
                  contentLead: 'Refresh underperforming pages • Find audience language • Identify visible topics',
                  clientPartner: 'Explain organic performance • Track client visibility • Surface indexing issues'
                }
              },
              {
                title: 'How to Use Google Trends',
                videoUrl: 'https://www.youtube.com/watch?v=IlEo_T17Ljs',
                durationNote: '10:35 — watch through 6:00',
                platform: 'YouTube',
                category: 'Market Demand, Search Trends',
                coverage: 'Comparing topics, seasonality, filters, locations, and related searches for content research.',
                researchQuestions: [
                  'Is this topic popular?',
                  'Is interest growing?',
                  'What related topics are trending?'
                ],
                roleTakeaways: {
                  strategist: 'Time campaigns around demand • Validate market trends',
                  contentLead: 'Find related topics and seasonal content angles',
                  clientPartner: 'Bring trend evidence to clients • Monitor category interest'
                }
              },
              {
                title: 'Google Keyword Planner Tutorial 2026',
                videoUrl: 'https://www.youtube.com/watch?v=J54VY4e8nDo',
                durationNote: '17:39',
                platform: 'YouTube',
                category: 'Keyword, Search Volume Research',
                coverage: 'Navigating Keyword Planner, discovering ideas, assessing volume/competition, and choosing terms.',
                researchQuestions: [
                  'What keywords do people use?',
                  'How often are these terms searched?',
                  'What related keywords should we use?'
                ],
                roleTakeaways: {
                  strategist: 'Size search opportunities • Build paid and organic plans • Compare market language',
                  contentLead: 'Build topic lists • Select primary terms • Find brief-worthy variants',
                  clientPartner: 'Support paid-search discussions • Explain keyword rationale • Estimate competitive themes'
                }
              },
              {
                title: 'GA4 — Reports: Get Started with GA4 Reports',
                videoUrl: 'https://www.youtube.com/watch?v=XEwUtEe_ogY',
                durationNote: '14:03 — watch 0:55–9:30',
                platform: 'YouTube',
                category: 'Web Traffic, Channel Performance',
                coverage: 'Navigating and using the standard acquisition, engagement, demographic, and technology reports.',
                researchQuestions: [
                  'How many people visit our site?',
                  'Which pages do they visit?',
                  'Where do they come from?'
                ],
                roleTakeaways: {
                  strategist: 'Evaluate channel performance • Identify audience patterns • Inform traffic engagement reports',
                  contentLead: 'Identify strong content • See how readers engage • Find pages to update',
                  clientPartner: 'Prepare performance updates • Explain traffic results • Connect work to key events'
                }
              },
              {
                title: 'GA4 — Explorations: Free Form Exploration in Google Analytics 4',
                videoUrl: 'https://www.youtube.com/watch?v=UgKEjIq_L_g',
                durationNote: '20:45 — watch through 8:05',
                platform: 'YouTube',
                category: 'User Behavior, Journey Analysis',
                coverage: 'Navigating Explore, understanding variables/settings, and building a basic free-form exploration.',
                researchQuestions: [
                  'What do visitors do on our site?',
                  'Where do they leave?',
                  'How do different audiences behave?'
                ],
                roleTakeaways: {
                  strategist: 'Investigate questions standard reports cannot answer • Analyze journeys',
                  contentLead: 'Analyze reader paths • Compare engagement • Find internal-linking opportunities',
                  clientPartner: 'Answer client-specific questions • Create focused analyses • Explain journey insights'
                }
              }
            ]
          },
          {
            id: 'usage-similarweb',
            title: 'Similarweb',
            category: 'Competitor Intelligence, Traffic Benchmarking',
            coverage: 'Website Analysis for traffic, audience, and competitor research.',
            researchQuestions: [
              'Who are our competitors?',
              'Where does competitor traffic come from?',
              'What content performs well for them?'
            ],
            roleTakeaways: {
              strategist: 'Benchmark markets and competitors • Identify channel opportunities',
              contentLead: 'Find competitor formats and topics • Identify popular site sections • Research referrals and search',
              clientPartner: 'Prepare competitor snapshots • Add context to reports • Explain market position'
            },
            description: `Website Analysis for traffic, audience, and competitor research.

Mapping competitor digital marketing channels to determine where their traffic originates: direct, organic search, paid search, social, or display.

Workflow: Benchmark traffic shares over a 6-month trailing window, identify surge periods, and isolate which specific referral publishers drive conversion-ready traffic.

Pro-Tip: Examine device split (mobile vs desktop) to guide content format requirements.`,
            videoUrl: 'https://www.youtube.com/watch?v=18LPb1tRuqA',
            videoList: [
              {
                title: 'Getting Started: Website Analysis',
                videoUrl: 'https://www.youtube.com/watch?v=18LPb1tRuqA',
                durationNote: '4:25',
                platform: 'Official Similarweb YouTube',
                category: 'Competitor Intelligence, Traffic Benchmarking',
                coverage: 'Website Analysis for traffic, audience, and competitor research.',
                researchQuestions: [
                  'Who are our competitors?',
                  'Where does competitor traffic come from?',
                  'What content performs well for them?'
                ],
                roleTakeaways: {
                  strategist: 'Benchmark markets and competitors • Identify channel opportunities',
                  contentLead: 'Find competitor formats and topics • Identify popular site sections • Research referrals and search',
                  clientPartner: 'Prepare competitor snapshots • Add context to reports • Explain market position'
                }
              }
            ]
          },
          {
            id: 'usage-keywordtool',
            title: 'KeywordTool.io',
            category: 'Audience Search Intent',
            coverage: 'Provider-made keyword-discovery workflow; YouTube-focused but applicable to the tool’s other search tabs.',
            researchQuestions: [
              'What questions do people ask?',
              'What related terms do people search?',
              'What ideas could we cover?'
            ],
            roleTakeaways: {
              strategist: 'Expand audience-language research • Compare cross-platform demand • Find niche opportunities',
              contentLead: 'Generate blog, video, and FAQ ideas • Build keyword lists • Discover question-led angles',
              clientPartner: 'Turn client topics into ideas • Show audience language'
            },
            description: `Discover hidden keyword opportunities and long-tail query volumes across YouTube, Google, and specialized search engines.

Provider-made keyword-discovery workflow; YouTube-focused but directly applicable to the tool’s other search tabs and topic clusters.

Workflow: Search core seed terms, toggle to the Questions tab to find customer pain points, and filter by prepositions to generate high-intent editorial clusters.

Pro-Tip: Compare YouTube search volume with Google Web search volume to spot content format mismatches.`,
            videoUrl: 'https://www.youtube.com/watch?v=g7TrG0DAc8w',
            videoList: [
              {
                title: 'Discover Hidden Keyword Opportunities for YouTube with Keyword Tool',
                videoUrl: 'https://www.youtube.com/watch?v=g7TrG0DAc8w',
                durationNote: '10:40',
                platform: 'Official Keyword Tool YouTube',
                category: 'Audience Search Intent',
                coverage: 'Provider-made keyword-discovery workflow; YouTube-focused but applicable to the tool’s other search tabs.',
                researchQuestions: [
                  'What questions do people ask?',
                  'What related terms do people search?',
                  'What ideas could we cover?'
                ],
                roleTakeaways: {
                  strategist: 'Expand audience-language research • Compare cross-platform demand • Find niche opportunities',
                  contentLead: 'Generate blog, video, and FAQ ideas • Build keyword lists • Discover question-led angles',
                  clientPartner: 'Turn client topics into ideas • Show audience language'
                }
              }
            ]
          },
          {
            id: 'usage-semrush',
            title: 'Semrush',
            category: 'SEO Opportunities, Keyword Research, Prompt Research',
            coverage: 'Finding keyword opportunities and selecting content topics using Semrush.',
            researchQuestions: [
              'What keywords should we target?',
              'What do competitors rank for?',
              'What topics are we missing?',
              'What are people prompting?'
            ],
            roleTakeaways: {
              strategist: 'Set search priorities • Compare market visibility • Identify SEO gaps',
              contentLead: 'Research article keywords • Find supporting terms • Select opportunities by intent',
              clientPartner: 'Explain recommendations • Report on keyword gaps • Support SEO roadmaps'
            },
            description: `Finding keyword opportunities and selecting content topics using Semrush.

Using the Keyword Gap tool to identify competitor ranking vulnerabilities where Quietly clients can achieve rapid organic wins.

Workflow: Compare client domain against top 3 direct competitors, filter by "Untapped" and "Weak", sort by search intent to build immediate editorial clusters.

Pro-Tip: Always check SERP volatility and current snippet ownership before prioritizing high-volume keywords.`,
            videoUrl: 'https://www.youtube.com/watch?v=xHu5pFhbHn4',
            videoList: [
              {
                title: 'Semrush Tutorial for Beginners: Keyword Research',
                videoUrl: 'https://www.youtube.com/watch?v=xHu5pFhbHn4',
                durationNote: '12:33',
                platform: 'Official Semrush YouTube',
                category: 'SEO Opportunities, Keyword Research, Prompt Research',
                coverage: 'Finding keyword opportunities and selecting content topics using Semrush.',
                researchQuestions: [
                  'What keywords should we target?',
                  'What do competitors rank for?',
                  'What topics are we missing?',
                  'What are people prompting?'
                ],
                roleTakeaways: {
                  strategist: 'Set search priorities • Compare market visibility • Identify SEO gaps',
                  contentLead: 'Research article keywords • Find supporting terms • Select opportunities by intent',
                  clientPartner: 'Explain recommendations • Report on keyword gaps • Support SEO roadmaps'
                }
              }
            ]
          },
          {
            id: 'usage-buzzsumo',
            title: 'BuzzSumo',
            category: 'Social Listening, Content Engagement',
            coverage: 'Brief platform orientation and content-research use cases.',
            researchQuestions: [
              'What content gets attention?',
              'What headlines work well?',
              'What topics are popular?'
            ],
            roleTakeaways: {
              strategist: 'Identify content patterns • Inform outreach strategy',
              contentLead: 'Find headline ideas • Research trending themes • Identify content gaps',
              clientPartner: 'Support recommendations • Find media opportunities • Share engagement evidence'
            },
            description: `Brief platform orientation and content-research use cases.

Analyzing which headlines, formats (listicles, guides, interviews), and word counts generated disproportionate social engagement over the past 12 months.

Workflow: Search core industry keywords, review top 100 performing articles by network shares, and extract recurring headline hooks and content structures.

Pro-Tip: Use Evergreen Score to isolate enduring content assets from temporary viral spikes.`,
            videoUrl: 'https://www.youtube.com/watch?v=rZbtJxzErq0',
            videoList: [
              {
                title: 'What Is BuzzSumo?',
                videoUrl: 'https://www.youtube.com/watch?v=rZbtJxzErq0',
                durationNote: '3:22 — start at 0:55',
                platform: 'Official BuzzSumo YouTube',
                category: 'Social Listening, Content Engagement',
                coverage: 'Brief platform orientation and content-research use cases.',
                researchQuestions: [
                  'What content gets attention?',
                  'What headlines work well?',
                  'What topics are popular?'
                ],
                roleTakeaways: {
                  strategist: 'Identify content patterns • Inform outreach strategy',
                  contentLead: 'Find headline ideas • Research trending themes • Identify content gaps',
                  clientPartner: 'Support recommendations • Find media opportunities • Share engagement evidence'
                }
              }
            ]
          },
          {
            id: 'usage-vidiq',
            title: 'vidIQ',
            category: 'Video Strategy, YouTube SEO',
            coverage: 'Current platform walkthrough: navigation, idea and keyword research, optimization, and growth tools.',
            researchQuestions: [
              'Which YouTube topics have demand?',
              'Which videos outperform in a niche?',
              'Which keywords belong in a title or description?',
              'How is a channel performing?'
            ],
            roleTakeaways: {
              strategist: 'Build YouTube strategies • Research competitors • Optimize metadata',
              contentLead: 'Research video topics • Identify strong formats',
              clientPartner: 'Report on channel opportunity • Support video recommendations • Prepare channel snapshots'
            },
            description: `Current platform walkthrough: navigation, idea and keyword research, optimization, and growth tools.

Demystifying YouTube algorithm dynamics to maximize discoverability and audience retention for branded video series.

Workflow: Audit video tags against high-volume YouTube search queries, track Views Per Hour (VPH) velocity, and analyze competitor thumbnail composition.

Pro-Tip: Optimize the first 120 characters of video descriptions to appear in preview snippets.`,
            videoUrl: 'https://www.youtube.com/watch?v=oTsIa7hxnzc',
            videoList: [
              {
                title: 'How To Grow Your YouTube Channel Using vidIQ in 2026',
                videoUrl: 'https://www.youtube.com/watch?v=oTsIa7hxnzc',
                durationNote: 'watch from 12:30',
                platform: 'Official vidIQ YouTube',
                category: 'Video Strategy, YouTube SEO',
                coverage: 'Current platform walkthrough: navigation, idea and keyword research, optimization, and growth tools.',
                researchQuestions: [
                  'Which YouTube topics have demand?',
                  'Which videos outperform in a niche?',
                  'Which keywords belong in a title or description?',
                  'How is a channel performing?'
                ],
                roleTakeaways: {
                  strategist: 'Build YouTube strategies • Research competitors • Optimize metadata',
                  contentLead: 'Research video topics • Identify strong formats',
                  clientPartner: 'Report on channel opportunity • Support video recommendations • Prepare channel snapshots'
                }
              }
            ]
          }
        ]
      },
      {
        id: 'chapter-3-work-stream-application',
        title: 'Chapter 3: Work Stream Application',
        description: 'Connecting raw tool outputs to daily client deliverables. Examine how Content Leads, Brand Strategists, and Account Directors interpret the same data differently to drive creative briefs, editorial calendars, competitive audits, and C-suite commercial buy-in.',
        duration: '25 mins',
        format: 'interactive',
        outcome: `• Understand the distinct operational lenses of Strategists, Content Leads, and Client Partners when analyzing shared data.
• Convert dry SERP charts and competitor audits into compelling editorial narrative arcs.
• Defend strategic scopes, content budgets, and creative platforms with defensible quantitative proof.
• Calibrate deliverable fidelity to audience expectations—from internal sync notes to polished executive decks.`,
        discussionQuestions: [
          "How should a Content Lead translate a list of 50 keywords from a Strategist into 3 high-impact story arcs?",
          "When presenting research to a skeptical CMO, which tool metrics build immediate credibility?",
          "How do we prevent 'analysis paralysis' where teams spend excessive time gathering data rather than building creative deliverables?",
          "What are the telltale signs that a deliverable is too data-heavy and failing to communicate the strategic takeaway?",
          "How does data-led storytelling differ between a mid-campaign status update and a final retrospective post-mortem?"
        ]
      }
    ]
  },
  {
    id: 'applied-practical-ai',
    number: 4,
    title: 'Applied — Practical AI Application',
    subtitle: 'Evolving delivery',
    isLocked: true,
    purpose: 'Enabling staff to ship more sophisticated, "merchandised" content.',
    accentColor: '#805AD5',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    courses: [
      {
        id: 'google-workspace-gemini-101',
        title: 'Embedded AI within Google Workspace (Gemini) 101',
        description: 'Practical application of Gemini within Sheets, Slides, and Docs.',
        format: 'document'
      },
      {
        id: 'genai-tool-usage',
        title: 'GenAI Tool-Specific Usage',
        description: 'Application of GenAI tools outside Google solutions and overarching best practices.',
        format: 'document'
      },
      {
        id: 'ai-driven-design-build',
        title: 'AI-Driven Design/Build',
        description: 'Training Content Leads on directing Gemini and other generative AI tools to design and build content that mimics client look-and-feel.',
        format: 'interactive'
      }
    ]
  }
];

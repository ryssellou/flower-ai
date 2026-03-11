import {
  Cpu,
  Workflow,
  Bot,
  MessageSquare,
  LineChart,
  Settings,
  ShieldCheck,
  Zap,
  Clock
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'custom-ai',
    title: 'Custom AI Development',
    description: 'Bespoke AI models and systems architected for your specific business KPIs.',
    icon: Cpu,
    benefits: ['Tailored to unique workflows', 'Proprietary IP ownership', 'Seamless integration'],
    useCases: ['Automated quality control', 'Predictive demand forecasting'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Connecting leading AI models to your existing tech stack and automation pipelines.',
    icon: Workflow,
    benefits: ['Zapier/Make deep integrations', 'Custom API middleware', 'Reduced manual data entry'],
    useCases: ['CRM data enrichment', 'Marketing automation loops'],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Systems',
    description: 'Autonomous agents that execute complex multi-step tasks across departments.',
    icon: Bot,
    benefits: ['Task-oriented autonomy', 'Multi-agent orchestration', '24/7 operational efficiency'],
    useCases: ['Autonomous research agents', 'Automated project management'],
  },
  {
    id: 'llm-chatbot',
    title: 'LLM & Chatbot Development',
    description: 'Next-gen conversational interfaces with RAG for 100% document-backed accuracy.',
    icon: MessageSquare,
    benefits: ['Zero-hallucination support', 'Natural language processing', 'Multilingual capabilities'],
    useCases: ['Customer support automation', 'Internal knowledge base agents'],
  },
  {
    id: 'ai-consulting',
    title: 'AI Consulting & Strategy',
    description: 'Feasibility studies, ROI projections, and practical implementation roadmaps.',
    icon: LineChart,
    benefits: ['ROI-focused planning', 'Risk mitigation', 'Technology selection'],
    useCases: ['AI readiness assessment', 'Strategic AI roadmap design'],
  },
  {
    id: 'ai-maintenance',
    title: 'AI Maintenance & Support',
    description: 'Ongoing optimization, monitoring, and scaling of your AI infrastructure.',
    icon: Settings,
    benefits: ['Model drift monitoring', 'Performance optimization', 'Security updates'],
    useCases: ['Continuous model retraining', 'Live environment monitoring'],
  },
];

export const INDUSTRIES = [
  {
    name: 'Healthcare',
    problems: ['Administrative burden', 'Regulatory compliance', 'Data siloes'],
    solutions: ['CQC-ready incident reporting', 'Automated care planning support'],
    results: '70% reduction in documentation time',
  },
  {
    name: 'Retail & E-comm',
    problems: ['Stock inefficiencies', 'High support overhead', 'Generic marketing'],
    solutions: ['Predictive inventory management', 'Hyper-personalized customer journeys'],
    results: '£250k annual support savings',
  },
  {
    name: 'Finance',
    problems: ['Manual reconciliation', 'Fraud detection speed', 'Unstructured data'],
    solutions: ['Automated document reconciliation', 'Real-time fraud pattern detection'],
    results: '40% faster processing time',
  },
  {
    name: 'Manufacturing',
    problems: ['Quality control inconsistencies', 'Equipment downtime', 'Supply chain gaps'],
    solutions: ['Computer vision for QC', 'Predictive maintenance alerts'],
    results: '25% increase in throughput',
  },
  {
    name: 'Real Estate',
    problems: ['Lead qualification speed', 'Market analysis latency', 'Document processing'],
    solutions: ['Intelligent lead agents', 'Automated property analysis'],
    results: '3x lead conversion rate',
  },
  {
    name: 'Hospitality',
    problems: ['Dynamic pricing latency', 'Guest experience consistency', 'Operational overhead'],
    solutions: ['Dynamic pricing engines', 'Personalized guest automation'],
    results: '15% increase in RevPAR',
  },
];

export const TEAM = [
  {
    name: 'Elena Rose',
    role: 'CEO & Founder',
    bio: '15+ years in enterprise strategy and AI innovation across the UK healthcare and tech sectors.',
    image: '/images/flower-ai/tm1.png',
    skills: ['Strategy', 'LLMs', 'ROI'],
    links: { linkedin: '#', github: '#' },
  },
  {
    name: 'Marcus Thistle',
    role: 'Lead AI Architect',
    bio: 'Expert in neural architectures and multi-agent systems with a PhD in Machine Learning.',
    image: '/images/flower-ai/tm2.png',
    skills: ['Python', 'LangChain', 'PyTorch'],
    links: { linkedin: '#', github: '#' },
  },
  {
    name: 'Lily Chen',
    role: 'Software Engineer',
    bio: 'Specialist in RAG implementation and building custom enterprise-grade agentic workflows.',
    image: '/images/flower-ai/tm3.png',
    skills: ['Claude API', 'VectorDB', 'FastAPI'],
    links: { linkedin: '#', github: '#' },
  },
  {
    name: 'Oliver Fern',
    role: 'Creative Director',
    bio: 'Bridging technical potential and business results with a focus on elegant AI solutions.',
    image: '/images/flower-ai/tm4.png',
    skills: ['Design', 'UX', 'Branding'],
    links: { linkedin: '#', github: '#' },
  },
];

export const CASE_STUDIES = [
  {
    client: 'National Care Group',
    industry: 'Healthcare',
    thumbnail: '/images/Flower_ai_hero_v2_1767624696676.png',
    problem: 'Staff spending 40% of time on manual incident reporting and compliance documentation.',
    solution: 'Voice-to-Report Agentic AI system with CQC compliance guardrails.',
    result: '70% reduction in admin time',
  },
  {
    client: 'Global Retail Corp',
    industry: 'Retail',
    thumbnail: '/images/Flower_app_mockup_v2_1767624719243.png',
    problem: 'support overhead scaling unsustainably with customer growth.',
    solution: 'RAG-based support agent integrated with existing CRM.',
    result: '£250k saved annually',
  },
];

export const DIFFERENTIATORS = [
  {
    title: 'Production-Ready AI',
    description: 'We move beyond POCs. Our systems are built for enterprise-grade reliability and security.',
    icon: ShieldCheck,
  },
  {
    title: 'Measurable ROI',
    description: 'Every project begins with a KPI assessment. We focus on results, not just the technology.',
    icon: Zap,
  },
  {
    title: 'Ongoing Support',
    description: 'AI evolves. We provide continuous model monitoring and infrastructure scaling.',
    icon: Clock,
  },
];


import React from 'react';
import {
  BotMessageSquare, Zap, Lock, Aperture, ShieldCheck, BookText, Brain, Compass,
  Lightbulb, Atom, Code, Layers, Globe, Gem, Sparkles as SkillSparklesIcon // Renamed to avoid conflict
} from 'lucide-react';
import { Project, Skill } from './types';

export const projects: Project[] = [
  {
    id: 'sherlock-069',
    title: 'Sherlock 0.69: The Cognition Engine',
    subtitle: 'An AI-powered agent for deep, ethical behavioral prediction.',
    icon: <BotMessageSquare className="text-teal-400" size={32} />,
    challenge: 'To build an AI that thinks like a human, capable of comprehensive social media ID analysis, user profiling, and behavioral prediction, while navigating profound ethical and legal complexities.',
    solution: 'Conceptualizing an AI agent that uses OSINT, NLP, and Computer Vision for identity resolution, social graph analysis, and predictive analytics. Emphasizing ethical frameworks, transparent data governance, and human-in-the-loop validation to ensure responsible use and prevent misuse. Includes features like personality modeling and cross-platform tracking, with a focus on *lawful* and *consented* data. The core is about *strategic insight* and *understanding complex systems*, not intrusive data practices.',
    outcome: 'A visionary blueprint for an ethical intelligence platform. The goal is to provide real-time, future-oriented insights for legitimate applications (e.g., HR & Recruitment for cultural fit, Law Enforcement for ethical threat analysis, Journalism for in-depth profile studies, Personal Use for self-awareness) by combining public data with advanced analytics, adhering strictly to privacy laws (GDPR, CCPA, etc.).',
    sourceDocs: ['SHERLOCK_0.69_Full_Project_Brief.pdf', 'GOD_AI_Strategy_Blueprint.pdf', 'AGENT 69.docx'],
  },
  {
    id: 'skysentinel',
    title: 'SkySentinel: Urban Aerial Defense System',
    subtitle: 'Autonomous microdrones for real-time crime prevention and tactical assistance.',
    icon: <Zap className="text-red-400" size={32} />,
    challenge: 'Addressing the critical gap in urban safety and real-time intervention for violent crimes, particularly in high-risk zones, where police presence alone is insufficient.',
    solution: 'Designing a low-cost, autonomous drone unit equipped with high-speed silent motors, non-lethal shock mechanisms (taser-like), and AI-based threat detection/target lock. Features include zone patrol, wireless charging, noise-canceling tech, and encrypted signals. User options like "Secure Guide," "Help," and "SOS" are conceived for citizen safety.',
    outcome: 'A scalable, silent, and autonomous support system for urban safety, capable of preventing violent crimes and assisting tactical operations. Envisions integration into state police emergency frameworks, making cities safer from the sky.',
    sourceDocs: ['DEFENSE MARK 1 DRONE .docx'],
  },
  {
    id: 'shadowlink',
    title: 'ShadowLink: Quantum-Secured Messaging',
    subtitle: 'Military-grade, cross-platform communication with AI scam resistance.',
    icon: <Lock className="text-purple-400" size={32} />,
    challenge: 'The pervasive threats of scams, privacy breaches, and fragmented communication across existing messaging platforms, leading to a lack of trust and security.',
    solution: 'ShadowLink proposes end-to-end encryption for all communications by default, self-destructing messages/accounts, and AI scam detection that flags suspicious links and payment requests in real-time. It aims for unified cross-platform messaging (interoperability with WhatsApp, Telegram, SMS, email) and decentralized storage on blockchain nodes for censorship resistance.',
    outcome: 'A messaging solution that prioritizes military-grade security, user empowerment (e.g., Shadow Mode for privacy), and scam-resistant monetization models (freemium, no ads). It targets activists, journalists, and businesses with a "No Scams, No Spies" slogan.',
    sourceDocs: ['SHADOWLINKC.docx'],
  },
  {
    id: 'godeye-ai',
    title: 'GODEYE-AI: OSINT Strategic Blueprint',
    subtitle: 'An ethical AI-powered open-source intelligence system for authorized agencies.',
    icon: <Aperture className="text-indigo-400" size={32} />,
    challenge: 'The need for authorized agencies to efficiently process vast amounts of publicly accessible data into actionable intelligence, while strictly adhering to legal and ethical guidelines regarding privacy and data governance.',
    solution: 'A secure, modular AI-powered OSINT system. It ingests public/authorized data (social media, news, forums) via APIs/crawlers, processes it with NLP and Computer Vision for identity verification, social graph analysis, threat detection, and temporal/geospatial trends. Emphasizes "Privacy by Design," human-in-the-loop validation, and compliance with GDPR/CCPA. The goal is to provide timely insights for national security and law enforcement responsibly.',
    outcome: 'Enhanced effectiveness and cost savings for intelligence gathering by automating analysis. It creates a scalable, legally compliant platform that transforms open-source data into intelligence, fostering interagency collaboration and reducing legal risks.',
    sourceDocs: ['GOD_AI_Strategy_Blueprint.pdf', 'AGENT EYE.docx'],
  },
  {
    id: 'agniveer-ai',
    title: 'Agniveer.ai: Cognitive Defense Network',
    subtitle: 'India’s real-time, AI-powered suicide prevention and decision defense system.',
    icon: <ShieldCheck className="text-green-400" size={32} />,
    challenge: 'The critical issue of high suicide rates and mental health crises in India, lacking real-time, anonymous, and trusted digital intervention systems.',
    solution: 'A privacy-respecting AI system with a Real-Time Suicide Risk Analyzer (identifying distress signals from text/voice without names/login), a Decision Defense Coach (Mind Guardian Mode with GPT-modeled responses based on stoicism, psychology, Bhagavad Gita), an Instant Rescue Network (GPS-based alerts to verified guardians), and a Cognitive Trap Decoder (explaining mental loops). Includes an opt-in dashboard for anonymized insights for Govts/NGOs.',
    outcome: 'A silent national defense system for mental collapse, scalable to every mobile device. Aims to save lives by providing hyper-personalized micro-coaching and real-time intervention, transforming mental health support across India.',
    sourceDocs: ['IDEAS.docx'],
  },
  {
    id: '069-book',
    title: 'The 0.69 Book: A Culture Layer on AI',
    subtitle: 'A foundational text for shaping AGI’s values and service to humanity.',
    icon: <BookText className="text-yellow-400" size={32} />,
    challenge: 'The need to move beyond merely building AI to consciously designing its values, purpose, and cultural integration into human civilization.',
    solution: 'The 0.69 Book is a conceptual project proving the creation of "worldviews" and "culture layers on top of AI rather than mere products." It represents Skylord\'s role as a "Creator of Universes," defining how AGI should exist and serve humanity ethically.',
    outcome: 'A proof-of-concept for shaping AGI\'s soul and ensuring human-AI synergy, providing a philosophical and strategic blueprint for future AI development and alignment.',
    sourceDocs: ['dream job.pdf', 'resume 01 ....pdf'],
  },
  {
    id: 'neuro-nav',
    title: 'NeuroNav: Brain-Based Habit Tracker',
    subtitle: 'Visualizing reward loops and recommending brain-science backed counter-habits.',
    icon: <Brain className="text-pink-400" size={32} />,
    challenge: 'People track habits but often fail because they don’t understand the underlying neurological mechanisms (e.g., dopamine loops, mental fatigue).',
    solution: 'An app that tracks dopamine-based habits, visualizes reward loops and mental fatigue, and recommends counter-habits grounded in brain science. Emphasizes psychological depth and gorgeous timelines.',
    outcome: 'A personal and viral tool for deeper self-understanding and more effective habit formation, leveraging AI for reasoning and personalized recommendations.',
    sourceDocs: ['IDEAS.docx'],
  },
  {
    id: 'panicproof',
    title: 'PanicProof: Crisis Simulator & Decision Coach',
    subtitle: 'AI-evaluated choices and coaching for real-life emergencies.',
    icon: <Compass className="text-orange-400" size={32} />,
    challenge: 'The human tendency to freeze or panic in emergency situations, leading to suboptimal decision-making.',
    solution: 'A simulator that puts users in real-life crisis scenarios (e.g., lost wallet, accident, gas leak), allows them to choose steps under pressure, and then uses AI to evaluate choices and coach better responses. Features time-locked UI and GPT scoring.',
    outcome: 'A unique and ethically impactful tool that trains users for composure and effective decision-making in high-stress situations, making them more resilient.',
    sourceDocs: ['IDEAS.docx'],
  },
];


export const skills: Skill[] = [
  {
    name: 'Visionary Ideologist',
    description: 'Wired to see 10 years ahead, thinking in systems, consequences, and realities others cannot simulate.',
    icon: <Lightbulb size={24} className="text-teal-300" />,
  },
  {
    name: 'Polymathic Generalist',
    description: 'Possesses mental APIs into every domain, from psychology to hacking to AGI ethics, understanding what should be built, how, and why it matters.',
    icon: <Atom size={24} className="text-pink-300" />,
  },
  {
    name: 'Prompt Engineer + Knowledge Hacker',
    description: 'Engineers cognition through language, using AI as a second brain for multimodal prompting and narrative logic.',
    icon: <Code size={24} className="text-blue-300" />,
  },
  {
    name: 'Philosopher + Strategist',
    description: 'Leverages an 11-layer framework fusing neuroscience, psychology, sociology, and spirituality for multi-dimensional thinking in AGI safety and alignment.',
    icon: <Layers size={24} className="text-purple-300" />,
  },
  {
    name: 'System Designer',
    description: 'Designs blueprints for future AI, seeing problems at the root level (e.g., societal collapse under pressure, the soul of AGI, human evolution).',
    icon: <Globe size={24} className="text-green-300" />,
  },
  {
    name: 'Research & Synthesis',
    description: 'Fast learning, deep dives, connections. God-tier ability to synthesize diverse, complex inputs into coherent, actionable strategies.',
    icon: <Brain size={24} className="text-yellow-300" />,
    godTier: true,
  },
  {
    name: 'Report & Content Gen',
    description: 'Long-form AI + philosophical content. God-tier ability to transform visionary concepts into practical frameworks and executable plans.',
    icon: <BookText size={24} className="text-red-300" />,
    godTier: true,
  },
  {
    name: 'Relentless Drive & Contribution',
    description: 'Operates with vision without ego, driven purely by mission and contribution, making an unwavering promise to dedicate everything to breakthrough growth and lasting impact.',
    icon: <Gem size={24} className="text-fuchsia-300" />,
  },
  {
    name: 'Adaptable & Unconventional',
    description: 'Thrives in uncertainty, possesses anti-fragile mindset, and capable of rapid learning to bridge any technical gaps.',
    icon: <SkillSparklesIcon size={24} className="text-sky-300" />, // Use renamed icon
  },
];

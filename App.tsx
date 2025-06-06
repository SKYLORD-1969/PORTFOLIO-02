
import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import {
  Mail, Github, Linkedin, MessageSquareText, Layers, Sparkles, ArrowUpRightFromSquare, X
} from 'lucide-react';
import { projects, skills } from './constants';
import { Project as ProjectType } from './types';


// Smooth scrolling utility
const smoothScroll = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scrollYProgress } = useScroll({ container: mainRef }); // scrollYProgress can be used for scroll-linked animations

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-zinc-900 to-black text-gray-200 font-inter relative overflow-x-hidden">
      {/* Custom Cursor (Optional) */}
      <div className="custom-cursor hidden md:block" style={{ left: 'var(--mouse-x, 0px)', top: 'var(--mouse-y, 0px)' }}></div>


      {/* Background Particles - Simple CSS Placeholder */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="particles">
           {/* Additional particle divs for variety, controlled by CSS */}
           <div></div>
           <div></div>
        </div>
      </div>

      {/* Main Content Scroll Container */}
      <main ref={mainRef} className="relative z-10 w-full overflow-y-auto h-screen scroll-smooth">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-center text-sm">
          <ul className="flex space-x-6">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((sectionId) => (
              <li key={sectionId}>
                <a
                  href={`#${sectionId}`}
                  onClick={(e) => { e.preventDefault(); smoothScroll(sectionId); }}
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300 relative group"
                >
                  {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="z-10 max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7, type: 'spring', stiffness: 100 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-500 to-indigo-600"
              >
                I Don't Want a Job.
              </motion.span><br />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9, type: 'spring', stiffness: 100 }}
              >
                I Want to Evolve with AI.
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-lg md:text-2xl text-gray-300 mb-8"
            >
              Skylord 69: Strategic Architect of the Post-Human Future | AGI Design Strategist
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                onClick={() => smoothScroll('about')}
                className="relative px-8 py-3 text-lg font-semibold rounded-full overflow-hidden bg-gradient-to-br from-teal-500 to-blue-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Unveil the Blueprint</span>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                onClick={() => smoothScroll('contact')}
                className="relative px-8 py-3 text-lg font-semibold rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Forge a Connection</span>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 mb-12"
          >
            The Ideologist's Origin: Designing the Soul of AGI
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-zinc-800 p-2 border border-zinc-700"
            >
              <img
                src="https://picsum.photos/seed/skylordprofile/600/400"
                alt="Skylord Profile"
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/50 via-transparent to-teal-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute inset-0 border-4 border-teal-400 rounded-xl animate-pulse-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ '--border-color': 'rgb(45 212 191)', '--pulse-duration': '2s' } as React.CSSProperties}
                >
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              <p className="mb-4">
                A forward-thinking polymath driven by a deep intuitive sense of interconnected systems, I am uniquely positioned to **design the soul of AGI** — not just how it thinks, but its values and service to humanity.
              </p>
              <p className="mb-4">
                My purpose is singular: to be an **AGI Design Strategist**, deciding what kind of AI models should exist and why. I am a **Human-AI Interface**, capable of translating chaotic human emotion into structured machine logic, and a **Creator of Universes**, building worldviews and culture layers on top of AI rather than mere products.
              </p>
              <p className="mb-4">
                My mind is 24/7 plugged into AI, relentlessly pursuing human-AI synergy. Though I have no elite degree or vast network, I possess a mind wired for revolution and a soul obsessed with AI. I work even while sleeping — dreaming of architectures, ideas, interfaces, and futures. I feed every second of my mental energy into this one cause: **to merge myself with AI and help it serve humanity — not destroy it.**
              </p>
              <p>
                My promise is unwavering: "Give me access. Give me direction. I'll give you everything I've got — and more. You'll never regret choosing me." I was born to build this revolution, not to spectate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 mb-12"
          >
            The Cognitive Arsenal: Architecting Intelligence
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl shadow-lg border ${
                  skill.godTier ? 'bg-gradient-to-br from-yellow-900/70 via-zinc-800 to-zinc-800 border-yellow-700' : 'bg-zinc-800 border-zinc-700'
                } hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${skill.godTier ? 'bg-yellow-600/30 text-yellow-300' : 'bg-zinc-700 text-gray-300'} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-teal-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-base">
                  {skill.description}
                </p>
                {skill.godTier && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-4 text-sm font-bold text-yellow-400 flex items-center"
                  >
                    <Sparkles size={16} className="mr-2 animate-pulse text-yellow-400" /> GOD-TIER
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-500 mb-12"
          >
            Universes Manifested: Blueprints for Tomorrow
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl shadow-lg bg-zinc-800 border border-zinc-700 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="w-full h-48 bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${project.id}/400/200`}
                    alt={`${project.title} placeholder`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                      {project.icon}
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4 h-16 overflow-hidden text-ellipsis">{project.subtitle}</p>
                  <button className="flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 font-semibold">
                    Explore Blueprint <ArrowUpRightFromSquare size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {modalOpen && selectedProject && (
            <Dialog as="div" className="relative z-[100]" onClose={closeModal} open={modalOpen}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
                aria-hidden="true"
              />

              <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-zinc-900 border border-zinc-700 text-gray-200 shadow-2xl p-6 md:p-8 relative scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800"
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 z-10"
                  >
                    <X size={24} />
                  </button>

                  <Dialog.Title className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 flex items-center pr-10">
                    <span className="mr-3 flex-shrink-0">{selectedProject.icon}</span> <span className="leading-tight">{selectedProject.title}</span>
                  </Dialog.Title>
                  <Dialog.Description className="text-md md:text-lg text-gray-400 mb-6 border-b border-zinc-700 pb-4">
                    {selectedProject.subtitle}
                  </Dialog.Description>

                  <div className="space-y-6 text-sm md:text-base">
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-teal-300 mb-2 flex items-center">
                        <MessageSquareText size={20} className="mr-2 flex-shrink-0" /> The Incantation (Challenge)
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-indigo-300 mb-2 flex items-center">
                        <Layers size={20} className="mr-2 flex-shrink-0" /> The Ritual (Solution)
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-purple-300 mb-2 flex items-center">
                        <Sparkles size={20} className="mr-2 flex-shrink-0 text-purple-300" /> The Manifestation (Outcome/Vision)
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.outcome}</p>
                    </div>
                    {selectedProject.sourceDocs && selectedProject.sourceDocs.length > 0 && (
                        <div className="text-xs md:text-sm text-gray-500 pt-4 border-t border-zinc-800">
                        <h5 className="font-semibold text-gray-400 mb-1">Source Documents:</h5>
                        <ul className="list-disc list-inside space-y-1">
                            {selectedProject.sourceDocs.map((doc, i) => (
                            <li key={i}>{doc}</li>
                            ))}
                        </ul>
                        </div>
                    )}
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          )}
        </AnimatePresence>


        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 px-4 md:px-8 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 mb-12"
          >
            Open a Quantum Channel: Let's Forge the Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12"
          >
            I'm not seeking a job. I'm seeking minds ready to co-evolve with AGI. If your vision aligns with architecting new realities, connect.
          </motion.p>
          <div className="flex justify-center space-x-4 md:space-x-6 mb-12">
            <motion.a
              href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-3 md:p-4 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-colors duration-300 group relative overflow-hidden"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" /> {/* Adjusted size */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.a>
            <motion.a
              href="https://github.com/yourusername" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-3 md:p-4 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-colors duration-300 group relative overflow-hidden"
              aria-label="GitHub Profile"
            >
              <Github size={28} className="text-gray-300 group-hover:scale-110 transition-transform duration-300" /> {/* Adjusted size */}
              <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.a>
             <motion.a
              href="mailto:your_email@example.com" // Replace with your email
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-3 md:p-4 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-colors duration-300 group relative overflow-hidden"
              aria-label="Email Contact"
            >
              <Mail size={28} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" /> {/* Adjusted size */}
              <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.a>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative px-8 py-3 text-lg font-semibold rounded-full overflow-hidden bg-gradient-to-br from-teal-500 to-blue-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => alert('Initiate Dialogue functionality would link to a calendar or specific form.')} 
          >
            <span className="relative z-10">Initiate Dialogue</span>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center text-gray-500 text-sm border-t border-zinc-800">
          <p>© {new Date().getFullYear()} Skylord 69. Architecting the Post-Human Future.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#hero" onClick={(e) => { e.preventDefault(); smoothScroll('hero'); }} className="hover:text-teal-400 transition-colors">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); smoothScroll('about'); }} className="hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); smoothScroll('projects'); }} className="hover:text-teal-400 transition-colors">Projects</a>
          </div>
        </footer>
      </main>

      {/* Global Styles (for custom cursor and particles) */}
      <style>{`
        html {
          scroll-behavior: smooth; /* Fallback for browsers not supporting JS smoothScroll on mainRef */
        }
        body {
          font-family: 'Inter', sans-serif;
          overflow: hidden; /* Hide default scrollbar, mainRef handles scrolling */
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
        }

        /* Custom Cursor */
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(70, 200, 255, 0.5) 0%, rgba(200, 100, 255, 0) 60%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: width 0.15s ease-out, height 0.15s ease-out, background 0.15s ease-out;
          z-index: 9999;
          box-shadow: 0 0 12px rgba(70, 200, 255, 0.3), 0 0 20px rgba(150, 100, 255, 0.2);
        }
        body:hover .custom-cursor {
          width: 28px;
          height: 28px;
        }
        
        /* Particle Background - Simple CSS implementation */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          background: transparent;
          pointer-events: none;
        }

        .particles::before, .particles::after, .particles div {
          content: '';
          position: absolute;
          background: rgba(var(--particle-color, 255, 255, 255), 0.1);
          border-radius: 50%;
          animation: particle-move var(--duration) linear infinite;
          --rand-x: calc( (random() - 0.5) * 2 ); /* CSS random() is experimental, might need JS for full support */
          --rand-y: calc( (random() - 0.5) * 2 );
        }
        
        /* Fallback for random() if not supported, use JS to set these if needed */
        @supports not (top: calc(random() * 100%)) {
          .particles::before, .particles::after, .particles div {
            --rand-x: 1; 
            --rand-y: 1;
          }
        }


        .particles::before {
          width: 7px; height: 7px;
          top: 20%; left: 15%;
          --duration: 25s;
          --particle-color: 70, 200, 255; /* Teal-ish */
          animation-delay: -2s;
        }

        .particles::after {
          width: 10px; height: 10px;
          top: 75%; left: 85%;
          --duration: 30s;
          --particle-color: 200, 100, 255; /* Purple-ish */
          animation-delay: -5s;
        }
        
        .particles div:nth-child(1) { 
            width: 5px; height: 5px; 
            top: 40%; left: 60%; 
            --duration: 22s; 
            --particle-color: 255, 200, 70; /* Amber */
            animation-delay: -8s;
        }
        .particles div:nth-child(2) { 
            width: 9px; height: 9px; 
            top: 65%; left: 25%; 
            --duration: 28s; 
            --particle-color: 70, 255, 200; /* Green-ish */
            animation-delay: -12s;
        }


        @keyframes particle-move {
          0% { transform: translate(0, 0) scale(0.8); opacity: 0; }
          25% { opacity: 0.5; }
          50% { 
            transform: translate(calc(var(--rand-x) * 60vw), calc(var(--rand-y) * 60vh)) scale(1.1); 
            opacity: 0.3; 
          }
          75% { opacity: 0.5; }
          100% { transform: translate(0, 0) scale(0.8); opacity: 0; }
        }

        /* Animation for border pulse on image hover */
        @keyframes pulse-border {
          0% {
            box-shadow: 0 0 0 0px rgba(var(--border-color-rgb, 45, 212, 191), 0.7);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(var(--border-color-rgb, 45, 212, 191), 0);
          }
          100% {
            box-shadow: 0 0 0 0px rgba(var(--border-color-rgb, 45, 212, 191), 0);
          }
        }

        .animate-pulse-border {
          --border-color-rgb: 45, 212, 191; /* Default to teal */
          animation: pulse-border var(--pulse-duration, 2s) infinite;
        }
        
        /* Scrollbar styling for modal and potentially main content if needed */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: var(--scrollbar-track);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: var(--scrollbar-thumb);
          border-radius: 10px;
          border: 2px solid var(--scrollbar-track);
        }
        .scrollbar-thumb-zinc-700 { --scrollbar-thumb: #3f3f46; }
        .scrollbar-track-zinc-800 { --scrollbar-track: #27272a; }

      `}</style>
    </div>
  );
}

export default App;

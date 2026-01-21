import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// Hooks y Context
import useCyberSound from '../hooks/useCyberSound';
import { useLanguage } from '../context/LanguageContext';

// Componentes
import CyberButton from '../components/CyberButton';
import TechOrbit from '../components/TechOrbit';
import ProjectCard from '../components/ProjectCard';
import GreetingBar from '../components/GreetingBar';
import TerminalFooter from '../components/TerminalFooter';
import LanguageToggle from '../components/LanguageToggle';
import CyberModal from '../components/CyberModal';     
import SystemSpecs from '../components/SystemSpecs';
import MermaidDiagram from '../components/MermaidDiagram'; // <--- 1. IMPORTAR

export default function Home() {
  const { t, lang } = useLanguage(); 
  const { playClick } = useCyberSound();

  const [activeFilter, setActiveFilter] = useState(null);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  
  // Estado para guardar el CÓDIGO del diagrama seleccionado
  const [selectedBlueprint, setSelectedBlueprint] = useState(null);

  // --- 2. DEFINIR LOS DIAGRAMAS (CÓDIGO MERMAID) ---
  const projectsData = [
    {
      id: 1,
      title: "SENTINEL",
      category: "TIEMPO REAL",
      type: "Live Monitoring",
      tags: ['Python', 'Redis', 'WebSockets'],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
      githubUrl: "https://github.com/felipehiguerat/sentel", 
      demoUrl: "https://sentel-seven.vercel.app/",
      // Diagrama de Flujo para Sentinel
      blueprint:  `
        graph TD
          User[💻 Usuario / Navegador] -- "WebSocket (WSS)" --> Frontend[⚛️ Next.js Frontend]
          Frontend -- "Start/Stop Commands" --> Backend[🐍 FastAPI Backend]
          
          subgraph "Backend Core (Clean Arch)"
              Orchestrator[⚙️ Simulation Orchestrator]
              Generator[🎲 Traffic Generator]
              Detector[🛡️ DoS Detector Service]
          end
          
          Backend --> Orchestrator
          Orchestrator --> Generator
          
          subgraph "Data Layer"
              Redis[(⚡ Upstash Redis)]
              SQL[(🐘 Supabase PostgreSQL)]
          end
          
          Orchestrator -- "Check Traffic Rate" --> Detector
          Detector -- "Sliding Window (ZSET)" --> Redis
          
          Orchestrator -- "If Anomaly Detected" --> SQL
          
          Orchestrator -- "JSON Stream" --> Frontend

          %% Estilos Cyberpunk
          style Frontend fill:#0f172a,stroke:#06b6d4,stroke-width:2px,color:#fff
          style Backend fill:#0f172a,stroke:#22c55e,stroke-width:2px,color:#fff
          style Redis fill:#450a0a,stroke:#ef4444,stroke-width:2px,color:#fff
          style SQL fill:#172554,stroke:#3b82f6,stroke-width:2px,color:#fff
          style User fill:#fff,stroke:#333,color:#000
          `
          
    },
    {
      id: 2,
      title: "IA ANALYZER",
      category: "INTELIGENCIA",
      type: "Data Processing",
      tags: ['Scikit-learn', 'FastAPI', 'Python', 'Mongo'], 
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
      githubUrl: "https://github.com/felipehiguerat/IAurlanalayzer",
      demoUrl: "https://i-aurlanalayzer.vercel.app/",
      // Diagrama de Flujo para IA Analyzer
      blueprint: `
        graph TD
    A[Cliente: Next.js App] -->|1. Petición de Análisis URL| B(API Gateway: FastAPI)
    B -->|2. Autenticación JWT| C[(DB SQL: PostgreSQL)]
    B -->|3. Activar Scraper| D(Servicio de Scraping)
    D -->|4. Extraer Datos| E[Sitios Web Externos]
    D -->|5. Datos Raw| B
    B -->|6. Clasificar Lead| F(Servicio de ML: Scikit-Learn)
    F -->|7. Scoring Hot/Cold| B
    B -->|8. Guardar Dossier| G[(DB NoSQL: MongoDB)]
    G -->|9. Confirmación| B
    B -->|10. Lead Clasificado| A

    style A fill:#3b82f6,stroke:#fff,color:#fff
    style B fill:#009688,stroke:#fff,color:#fff
    style C fill:#336791,stroke:#fff,color:#fff
    style G fill:#47a248,stroke:#fff,color:#fff
    style F fill:#f7931e,stroke:#fff,color:#fff
      `
    },
  ];

  useEffect(() => {
    const targets = ["https://tu-api.onrender.com"];
    targets.forEach(url => fetch(url, { mode: 'no-cors' }).catch(() => {}));
  }, []);

  const filteredProjects = projectsData.filter(p => activeFilter === 'TODOS' || p.category === activeFilter);

  const handleFilterClick = (filter) => {
    playClick();
    setActiveFilter(filter);
  };

  const handleSpecsClick = () => {
    playClick();
    setIsSpecsOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Head>
        <title>Cyberpunk Portfolio | System Architect</title>
      </Head>

      <LanguageToggle />

      <CyberModal isOpen={isSpecsOpen} onClose={() => setIsSpecsOpen(false)} title="SYSTEM SPECIFICATIONS">
        <SystemSpecs />
      </CyberModal>

      {/* --- 3. MODAL DE ARQUITECTURA (CON MERMAID) --- */}
      <CyberModal isOpen={!!selectedBlueprint} onClose={() => setSelectedBlueprint(null)} title="SYSTEM BLUEPRINT">
        <div className="bg-white/5 p-2 rounded">
            {/* Si hay un diagrama seleccionado, lo renderizamos */}
            {selectedBlueprint && <MermaidDiagram chart={selectedBlueprint} />}
            
            <p className="mt-4 font-mono text-xs text-slate-400 border-t border-slate-700 pt-2">
                {lang === 'es' ? '> Diagrama generado en tiempo real vía Mermaid.js' : '> Diagram generated in real-time via Mermaid.js'}
            </p>
        </div>
      </CyberModal>

      <main className="flex flex-col items-center px-4 pt-20 relative min-h-screen">
        
        <div className="fixed top-0 left-0 w-full h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none z-0"></div>

        {/* HERO */}
        <section className="text-center z-10 max-w-3xl mx-auto mb-8 relative">
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-600 bg-clip-text text-transparent leading-[1.1]">
            {t.heroTitle}
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <CyberButton variant="primary" onClick={() => handleFilterClick('TODOS')}>
                {t.heroButton}
            </CyberButton>
            <CyberButton variant="ghost" onClick={handleSpecsClick} className="text-xs">
                {t.specsButton}
            </CyberButton>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="z-10 relative w-full mb-6">
          <TechOrbit />
        </section>

        {/* GREETING */}
        <GreetingBar 
            key={lang} 
            companyName="GOOGLE" 
            prefix={t.greetingPrefix} 
            content={t.greetingBody} 
        />

        {/* FILTROS */}
        <section className="flex flex-wrap justify-center gap-4 mb-12 w-full max-w-4xl z-10">
          {[
            { id: 'TODOS', label: t.filters.all },
            { id: 'INTELIGENCIA', label: t.filters.ai },
            { id: 'TIEMPO REAL', label: t.filters.realTime }
          ].map((f) => (
            <CyberButton 
              key={f.id}
              variant="outline" 
              active={activeFilter === f.id}
              onClick={() => handleFilterClick(f.id)}
            >
              {f.label}
            </CyberButton>
          ))}
        </section>

        {/* PROYECTOS */}
        <section className="w-full max-w-6xl z-10 min-h-[300px] mb-20">
          {activeFilter ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-[scan_0.5s_ease-out] max-w-4xl mx-auto">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id}
                    {...project} 
                    // Cuando dan click en "Ver Arquitectura"
                   onOpenBlueprint={project.blueprint ? () => {
                  playClick();
                  setSelectedBlueprint(project.blueprint);
                } : undefined} // Si no hay blueprint, no pasamos la función y el icono no sale
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-slate-500 font-mono border border-slate-800 border-dashed rounded-lg bg-slate-900/30">
                  {t.noData}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 border border-dashed border-slate-800 rounded-xl bg-slate-900/20 p-8 max-w-4xl mx-auto w-full">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping mb-4"></div>
                <p className="font-mono text-slate-500 text-sm tracking-widest uppercase text-center">
                    {t.waiting}
                </p>
                <p className="text-xs text-slate-600 mt-2">
                    {t.waitingSub}
                </p>
            </div>
          )}
        </section>

        <TerminalFooter />
      </main>
    </div>
  );
}
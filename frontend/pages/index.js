import React, { useState } from 'react';
import Head from 'next/head';

import CyberButton from '../components/CyberButton';
import TechOrbit from '../components/TechOrbit';
import ProjectCard from '../components/ProjectCard';
import GreetingBar from '../components/GreetingBar';
import TerminalFooter from '../components/TerminalFooter';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState(null);

  // --- DATOS DE LOS PROYECTOS ---
  const projectsData = [
    {
      id: 1,
      title: "SENTINEL",
      category: "TIEMPO REAL",
      type: "Live Monitoring",
      tags: ['Python', 'Redis', 'WebSockets'],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
      
      // CAMBIA ESTOS LINKS POR LOS TUYOS:
      githubUrl: "https://github.com/felipehiguerat/sentel", 
      demoUrl: "https://sentel-seven.vercel.app/",
    },
    {
      id: 2,
      title: "IA ANALYZER",
      category: "INTELIGENCIA",
      type: "Data Processing",
      tags: ['Scikit-learn', 'FastAPI', 'Python', 'Mongo'], 
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
      
      // CAMBIA ESTOS LINKS POR LOS TUYOS:
      githubUrl: "https://github.com/felipehiguerat/IAurlanalayzer",
      demoUrl: "https://i-aurlanalayzer.vercel.app/",
    },
  ];

  // Lógica de filtrado
  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'TODOS') return true;
    return project.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Head>
        <title>Cyberpunk Portfolio | System Architect</title>
        <meta name="description" content="Portfolio de Arquitectura de Software" />
      </Head>

      <main className="flex flex-col items-center px-4 pt-20 relative min-h-screen">
        
        {/* --- FONDO AMBIENTAL --- */}
        <div className="fixed top-0 left-0 w-full h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none z-0"></div>

        {/* --- 1. HERO SECTION --- */}
        <section className="text-center z-10 max-w-3xl mx-auto mb-12 relative">
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-600 bg-clip-text text-transparent leading-[1.1]">
            CONSTRUYENDO SISTEMAS <br/> QUE NO DUERMEN
          </h1>
          <div className="flex justify-center">
            <CyberButton variant="primary" onClick={() => setActiveFilter('TODOS')}>
                INICIAR SISTEMAS
            </CyberButton>
          </div>
        </section>

        {/* --- 2. TECH STACK (GLOBO 3D) --- */}
        <section className="z-10 relative w-full mb-6">
          <TechOrbit />
        </section>

        {/* --- 3. GREETING BAR --- */}
        <GreetingBar companyName="EMPRESA INVITADA" />

        {/* --- 4. FILTROS --- */}
        <section className="flex flex-wrap justify-center gap-4 mb-12 w-full max-w-4xl z-10">
          {['TODOS', 'INTELIGENCIA', 'TIEMPO REAL'].map((filterName) => (
            <CyberButton 
              key={filterName}
              variant="outline" 
              active={activeFilter === filterName}
              onClick={() => setActiveFilter(filterName)}
            >
              {filterName}
            </CyberButton>
          ))}
        </section>

        {/* --- 5. GRID DE PROYECTOS --- */}
        <section className="w-full max-w-6xl z-10 min-h-[300px] mb-20">
          {activeFilter ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-[scan_0.5s_ease-out] max-w-4xl mx-auto">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id}
                    title={project.title}
                    type={project.type}
                    tags={project.tags}
                    image={project.image}
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-slate-500 font-mono border border-slate-800 border-dashed rounded-lg bg-slate-900/30">
                  // ERROR 404: NO DATA FOUND IN THIS SECTOR
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 border border-dashed border-slate-800 rounded-xl bg-slate-900/20 p-8 max-w-4xl mx-auto w-full">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping mb-4"></div>
                <p className="font-mono text-slate-500 text-sm tracking-widest uppercase text-center">
                    Esperando selección de subsistema...
                </p>
                <p className="text-xs text-slate-600 mt-2">
                    Seleccione un filtro arriba para visualizar datos
                </p>
            </div>
          )}
        </section>

        {/* --- 6. FOOTER --- */}
        <TerminalFooter />
        
      </main>
    </div>
  );
}
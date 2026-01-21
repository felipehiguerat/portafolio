import React from 'react';
import { ExternalLink, Github, Workflow } from 'lucide-react'; // Importamos Workflow
import useCyberSound from '../hooks/useCyberSound';

export default function ProjectCard({ 
  title, 
  type, 
  tags = [], 
  image, 
  imageGradient = "from-cyan-500/20 to-blue-600/20",
  githubUrl, 
  demoUrl, 
  onOpenBlueprint // Recibimos la función para abrir el modal
}) {
  const { playHover } = useCyberSound();

  return (
    <div 
      onMouseEnter={playHover}
      className="group relative border border-slate-800 bg-slate-950/60 p-4 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-sm overflow-hidden z-0 flex flex-col h-full"
    >
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="font-mono text-lg text-slate-200 font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <span className="text-[10px] uppercase font-mono text-cyan-500/80 border border-cyan-500/30 px-2 py-0.5 rounded shadow-[0_0_5px_rgba(6,182,212,0.2)] bg-black/50">
          {type}
        </span>
      </div>

      {/* Imagen */}
      <div className="h-32 w-full rounded-lg mb-4 relative overflow-hidden border border-slate-800 group-hover:border-cyan-500/30 transition-colors shrink-0 z-0">
        {image ? (
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
            />
        ) : (
            <div className={`w-full h-full bg-gradient-to-br ${imageGradient} opacity-20`}></div>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,1)] animate-scan opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-4 mt-auto relative z-50">
        
        {/* Tags */}
        <div className="flex gap-2 flex-wrap pointer-events-none">
            {tags.map((tag, index) => (
                <span key={index} className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    {tag}
                </span>
            ))}
        </div>
        
        {/* BARRA DE BOTONES (ICONOS) */}
        <div className="flex items-center justify-end gap-4 border-t border-slate-800/50 pt-3 pointer-events-auto">
            
            {/* 1. Botón ARQUITECTURA (Solo si existe la función) */}
            {onOpenBlueprint && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onOpenBlueprint();
                    }}
                    className="text-slate-500 hover:text-purple-400 transition-colors hover:scale-125 transform duration-200 cursor-pointer"
                    title="Ver Arquitectura / Blueprint"
                >
                    <Workflow size={20} />
                </button>
            )}

            {/* 2. Botón GITHUB */}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors hover:scale-125 transform duration-200 cursor-pointer"
                title="Ver Código"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20}/>
              </a>
            )}

            {/* 3. Botón DEMO */}
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors hover:scale-125 transform duration-200 cursor-pointer"
                title="Ver Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20}/>
              </a>
            )}
        </div>
      </div>
    </div>
  );
}
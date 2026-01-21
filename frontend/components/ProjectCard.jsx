import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ 
  title, 
  type, 
  tags = [], 
  image, 
  imageGradient = "from-cyan-500/20 to-blue-600/20",
  githubUrl,
  demoUrl
}) {
  return (
    <div className="group relative border border-slate-800 bg-slate-950/60 p-4 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-sm overflow-hidden z-0">
      
      {/* --- Header de la Tarjeta --- */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="font-mono text-lg text-slate-200 font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <span className="text-[10px] uppercase font-mono text-cyan-500/80 border border-cyan-500/30 px-2 py-0.5 rounded shadow-[0_0_5px_rgba(6,182,212,0.2)] bg-black/50">
          {type}
        </span>
      </div>

      {/* --- Imagen / Visual --- */}
      <div className="h-32 w-full rounded-lg mb-4 relative overflow-hidden border border-slate-800 group-hover:border-cyan-500/30 transition-colors z-0">
        {image ? (
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
            />
        ) : (
            <div className={`w-full h-full bg-gradient-to-br ${imageGradient} opacity-20`}></div>
        )}
        {/* Decoraciones de fondo (Grid) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
        {/* Linea de escaneo */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,1)] animate-scan opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>

      {/* --- Footer / Tags y Links --- */}
      {/* CAMBIO IMPORTANTE: Z-Index alto (z-50) para asegurar que nada lo tape */}
      <div className="flex justify-between items-center mt-4 relative z-50">
        
        {/* Tags */}
        <div className="flex gap-2 flex-wrap pointer-events-none">
            {tags.map((tag, index) => (
                <span key={index} className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    {tag}
                </span>
            ))}
        </div>
        
        {/* LINKS DE ACCIÓN */}
        {/* pointer-events-auto asegura que el ratón interactúe */}
        <div className="flex gap-3 pointer-events-auto">
            {/* Botón Github */}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors hover:scale-125 transform duration-200 cursor-pointer block p-1"
                title="Ver Código en GitHub"
                onClick={(e) => e.stopPropagation()} // Evita burbujeo de eventos raro
              >
                <Github size={20}/>
              </a>
            )}

            {/* Botón Demo */}
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors hover:scale-125 transform duration-200 cursor-pointer block p-1"
                title="Ver Demo en Vivo"
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
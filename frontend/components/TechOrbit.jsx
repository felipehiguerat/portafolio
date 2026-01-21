import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { Database, Code2, AppWindow, Cpu, Globe as GlobeIcon, Server, ShieldCheck,  NoSql, FileJson } from 'lucide-react';

export default function TechOrbit() {
  const canvasRef = useRef();

  // --- CONFIGURACIÓN DE TUS TECNOLOGÍAS ---
  const techStack = [
    { name: 'Python', icon: <Code2 size={20} />, color: 'text-yellow-400', border: 'border-yellow-400/30' },
    { name: 'SQL', icon: <Database size={20} />, color: 'text-purple-400', border: 'border-purple-400/30' },
    { name: 'React', icon: <AppWindow size={20} />, color: 'text-cyan-400', border: 'border-cyan-400/30' },
    { name: 'Node.js', icon: <Server size={20} />, color: 'text-green-400', border: 'border-green-400/30' },
    { name: 'NoSQL', icon: <FileJson size={20} />, color: 'text-blue-400', border: 'border-blue-400/30' },
    { name: 'Security', icon: <ShieldCheck size={20} />, color: 'text-red-400', border: 'border-red-400/30' },
  ];

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.15],
      markerColor: [0.1, 0.8, 1], // Cyan markers
      glowColor: [0.05, 0.3, 0.5],
      opacity: 1,
      markers: [
        { location: [37.7595, -122.4367], size: 0.04 },
        { location: [40.7128, -74.0060], size: 0.04 },
        { location: [51.5074, -0.1278], size: 0.04 },
        { location: [35.6762, 139.6503], size: 0.04 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003; // Velocidad de giro del mundo
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[600px] h-[500px] flex items-center justify-center mx-auto">
      
      {/* 1. EL GLOBO 3D (FONDO) */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '500px' }}
            className="opacity-80"
          />
      </div>

      {/* 2. SISTEMA DE ORBITA DE SATÉLITES (Gira sobre el globo) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        
        {/* Este contenedor gira */}
        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] animate-[spin_25s_linear_infinite]">
            
            {/* Mapeamos las tecnologías en círculo */}
            {techStack.map((tech, index) => {
                const total = techStack.length;
                const angle = (360 / total) * index; // Calculamos el ángulo para distribuir equitativamente
                
                return (
                    <div
                        key={tech.name}
                        className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
                        style={{
                            transform: `rotate(${angle}deg) translate(170px) rotate(-${angle}deg)` // El translate define el radio de la órbita (170px)
                        }}
                    >
                        {/* El Icono Individual - Gira en sentido contrario para mantenerse derecho (Counter-rotate) */}
                        <div className="animate-[spin_25s_linear_infinite_reverse]">
                            <div className={`flex flex-col items-center justify-center group pointer-events-auto cursor-pointer`}>
                                <div className={`bg-slate-950/80 p-3 rounded-full border ${tech.border} ${tech.color} shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform hover:scale-125 hover:shadow-[0_0_20px_currentColor]`}>
                                    {tech.icon}
                                </div>
                                <span className="absolute -bottom-6 text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-0.5 rounded border border-slate-800 whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>

      {/* 3. LOGO CENTRAL (Overlay estático) */}
      <div className="absolute z-20 pointer-events-none flex flex-col items-center justify-center">
         <div className="text-center bg-black/30 p-2 rounded-lg backdrop-blur-[2px]">
             <span className="text-xs font-mono text-cyan-500/50 tracking-[0.3em] uppercase block mb-1">Mainframe</span>
             <h2 className="text-2xl font-black text-white tracking-tighter drop-shadow-lg">
                 CORE<span className="text-cyan-500">.SYS</span>
             </h2>
         </div>
      </div>

    </div>
  );
}
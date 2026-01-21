import React from 'react';

export default function GreetingBar({ 
    companyName = "EMPRESA", 
    prefix = "HOLA,", // Valor por defecto porsiacaso
    content           // El texto largo
}) {
    return (
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4 p-1 my-8 mx-auto px-4 z-20 relative animate-slide-in opacity-0">
            
            <style>{`
                @keyframes slideInLeft {
                    0% { opacity: 0; transform: translateX(-50px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-in {
                    animation: slideInLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                    animation-delay: 0.2s;
                }
            `}</style>

            {/* Mensaje Principal */}
            <div className="bg-gradient-to-r from-cyan-950/40 to-slate-900/40 border-l-4 border-cyan-500 px-6 py-4 rounded-r-lg backdrop-blur-md w-full text-center md:text-left shadow-lg">
                <p className="font-mono text-cyan-100 text-sm md:text-base tracking-wide leading-relaxed">
                    <span className="text-slate-400 mr-2">{'>'}</span>
                    
                    {/* PARTE 1: HOLA/HELLO */}
                    {prefix} 
                    
                    {/* PARTE 2: EMPRESA (Con estilos) */}
                    <span className="text-cyan-400 font-bold bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20 mx-2">
                        {companyName}
                    </span>. 
                    
                    {/* PARTE 3: TEXTO LARGO (Traducido) */}
                    <span className="block mt-2 text-slate-300 text-xs md:text-sm font-sans normal-case opacity-90">
                        {content}
                    </span>
                </p>
            </div>
            
            {/* Indicador de Estado */}
            <div className="flex items-center gap-3 px-4 py-2 border border-green-900/50 bg-green-950/10 rounded-full shadow-[0_0_15px_rgba(20,83,45,0.2)] shrink-0">
                <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500 absolute top-0 left-0 animate-ping opacity-75"></div>
                </div>
                <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest whitespace-nowrap">
                    System Optimal
                </span>
            </div>
        </div>
    );
}
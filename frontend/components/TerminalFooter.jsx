import React from 'react';

export default function TerminalFooter() {
  return (
    <div className="w-full max-w-4xl mt-20 mb-6 border-t border-slate-800 pt-8 mx-auto px-4">
        
        {/* Contenedor estilo Terminal */}
        <div className="bg-black/60 rounded-lg p-5 font-mono text-sm border border-slate-800 relative overflow-hidden shadow-2xl backdrop-blur-sm">
            
            {/* Barra de título de la terminal (Decorativa) */}
            <div className="flex gap-2 mb-4 opacity-50">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>

            {/* Decoración: Luz de estado parpadeante */}
            <div className="absolute right-4 top-4 flex items-center gap-2">
                <span className="text-[10px] text-slate-500 uppercase">Status: Online</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            </div>
            
            {/* Línea de comando */}
            <p className="text-green-400 mb-2">
                visitor@portfolio:~/ <span className="text-white">ls -la contact_info/</span>
            </p>
            
            {/* Output (Enlaces) */}
            <div className="pl-4 flex flex-col gap-2 text-slate-300 mt-3 border-l-2 border-slate-800">
                <a 
                    href="https://github.com/felipehiguerat" 
                    className="hover:text-cyan-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200"
                >
                    <span className="text-slate-600">-rw-r--r--</span> 
                    https://github.com/felipehiguerat
                </a>
                <a 
                    href="https://www.linkedin.com/in/felipe-higuera-tovar" 
                    className="hover:text-cyan-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200"
                >
                    <span className="text-slate-600">-rw-r--r--</span> 
                    www.linkedin.com/in/felipe-higuera-tovar
                </a>
                <a 
                    href="mailto:felipehiguera27@gmail.com" 
                    className="hover:text-cyan-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200"
                >
                    <span className="text-slate-600">-rw-r--r--</span> 
                    felipehiguera27@gmail.com
                </a>
            </div>

            {/* Prompt final parpadeante */}
            <p className="text-green-400 mt-4">
                visitor@portfolio:~/ <span className="animate-pulse">_</span>
            </p>
        </div>
        
        <p className="text-center text-slate-600 text-xs mt-4 font-mono">
            © {new Date().getFullYear()} SYSTEM ARCHITECT. ALL RIGHTS RESERVED.
        </p>
    </div>
  );
}
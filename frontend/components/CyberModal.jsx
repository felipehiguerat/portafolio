import React from 'react';
import { X } from 'lucide-react';

export default function CyberModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" onClick={onClose}></div>
      
      {/* Ventana AUMENTADA DE TAMAÑO (max-w-5xl) */}
      <div className="relative w-full max-w-5xl bg-[#0a0a0f] border border-cyan-500/50 rounded-lg shadow-[0_0_50px_rgba(6,182,212,0.2)] animate-[scan_0.3s_ease-out] overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900/50 shrink-0">
            <h2 className="text-cyan-400 font-mono text-lg tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                {title}
            </h2>
            <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition-colors p-1">
                <X size={28} />
            </button>
        </div>

        {/* Contenido con Scroll y más padding */}
        <div className="p-0 overflow-y-auto custom-scrollbar flex-1 bg-slate-950/30">
            {children}
        </div>

        {/* Decoración */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      </div>
    </div>
  );
}
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Función auxiliar para mezclar clases de Tailwind sin conflictos
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function CyberButton({ 
  children, 
  className, 
  variant = "outline",
  active = false,
  ...props 
}) {
  

  const baseStyles = "relative px-6 py-2 font-mono text-sm uppercase tracking-wider transition-all duration-300 border rounded-full backdrop-blur-sm focus:outline-none";
  
  
  const variants = {
    primary: "border-cyan-500 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:bg-cyan-500/20",
    outline: "border-slate-700 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] bg-slate-950/40",
    ghost: "border-transparent text-slate-500 hover:text-cyan-400"
  };

  // Estilo cuando el botón está "activo" (usado para los filtros)
  const activeStyle = active 
    ? "border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)] bg-cyan-950/30" 
    : "";

  return (
    <button 
      className={cn(baseStyles, variants[variant], activeStyle, className)} 
      {...props}
    >
      {children}
    </button>
  );
}
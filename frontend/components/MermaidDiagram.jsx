import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  themeVariables: {
    fontFamily: 'monospace',
    fontSize: '16px', // Fuente más grande para legibilidad
    primaryColor: '#06b6d4',
    primaryTextColor: '#fff',
    primaryBorderColor: '#06b6d4',
    lineColor: '#94a3b8',
    secondaryColor: '#0f172a',
    tertiaryColor: '#1e293b',
  }
});

export default function MermaidDiagram({ chart }) {
  const elementRef = useRef(null);
  const [svg, setSvg] = useState('');

  useEffect(() => {
    if (chart && elementRef.current) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      
      // Renderizamos
      mermaid.render(id, chart).then(({ svg }) => {
        setSvg(svg);
      });
    }
  }, [chart]);

  return (
    <div 
      ref={elementRef} 
      // Clases para centrar y permitir scroll si es gigante
      className="w-full h-full min-h-[400px] flex items-center justify-center p-8 bg-[#0b0f19] overflow-auto"
    >
      <div 
        // Inyectamos el SVG y forzamos que ocupe espacio
        className="w-full flex justify-center [&>svg]:max-w-full [&>svg]:h-auto"
        dangerouslySetInnerHTML={{ __html: svg }} 
      />
    </div>
  );
}
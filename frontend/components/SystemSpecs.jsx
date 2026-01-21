import React from 'react';
import { Cpu, Brain, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext'; // <--- IMPORTANTE

export default function SystemSpecs() {
  const { t } = useLanguage(); // <--- Obtenemos los textos

  return (
    <div className="font-mono text-sm text-slate-300 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 p-4 rounded border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <Cpu size={18} /> <span>{t.specs.cpu}</span>
                </div>
                <p className="text-xs text-slate-500 mb-1">{t.specs.cpuDesc}</p>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-cyan-500 h-full w-[95%] shadow-[0_0_10px_currentColor]"></div>
                </div>
            </div>
            
            <div className="bg-slate-900/50 p-4 rounded border border-slate-800">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Brain size={18} /> <span>{t.specs.memory}</span>
                </div>
                <p className="text-xs text-slate-500 mb-1">{t.specs.memoryDesc}</p>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-[100%] shadow-[0_0_10px_currentColor]"></div>
                </div>
            </div>
        </div>

        <div className="bg-black p-5 rounded border border-slate-800 font-mono text-xs md:text-sm leading-relaxed relative overflow-hidden">
            <div className="relative z-10">
                <div className="flex items-center gap-2 text-green-500 mb-2">
                    <Terminal size={14} /> <span>root@architect:~$ cat bio.txt</span>
                </div>
                <p className="text-slate-300 mb-4">
                    <br/> {t.specs.terminalInit}<br/>
                    <br/> {t.specs.role}
                </p>
                <p className="text-slate-400">{t.specs.bio}</p>
                <div className="mt-4 flex gap-2 text-yellow-500">
                    <span>{t.specs.warn}</span> <span className="text-slate-500">{t.specs.warnDesc}</span>
                </div>
            </div>
        </div>
    </div>
  );
}
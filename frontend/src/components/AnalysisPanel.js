import React from 'react';

export const AnalysisPanel = ({ result, onClose, panelRef }) => {
    if (!result) return null;
    return (
        <div ref={panelRef} className="w-full mt-3">
            <div className="w-full rounded-xl border border-white/12 bg-gradient-to-br from-white/5 to-white/10 glass shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between px-5 py-3">
                    <div className="text-slate-50 font-extrabold tracking-wide">Pipeline analysis</div>
                    <button className="glass-button rounded-md px-2 py-1" onClick={onClose}>✕</button>
                </div>
                <div className="grid grid-cols-3 gap-3 px-5 pb-4 text-slate-50">
                    <div className="glass-stats">
                        <div className="text-xs text-violet-200">Nodes</div>
                        <div className="text-lg font-bold mt-1">{result.num_nodes}</div>
                    </div>
                    <div className="glass-stats">
                        <div className="text-xs text-violet-200">Edges</div>
                        <div className="text-lg font-bold mt-1">{result.num_edges}</div>
                    </div>
                    <div className="glass-stats">
                        <div className="text-xs text-violet-200">Is DAG</div>
                        <div className="text-lg font-bold mt-1 flex items-center gap-2">
                            {result.is_dag ? 'Yes' : 'No'}
                            <span className="text-[11px] rounded-full border border-violet-300/30 bg-violet-400/10 px-2 py-0.5">
                                {result.is_dag ? 'Acyclic' : 'Has cycle'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

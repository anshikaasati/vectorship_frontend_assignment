import React from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle, AlertCircle, Share2, Layers, ArrowRight } from 'lucide-react';

export const AnalysisPanel = ({ result, onClose }) => {
    if (!result) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div
                className="
          relative w-full max-w-lg 
          bg-card border border-border rounded-xl shadow-2xl 
          animate-in fade-in zoom-in duration-300
        "
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-full ${result?.is_dag ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'}`}>
                            {result?.is_dag ? <CheckCircle className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">
                                {result?.is_dag ? 'Pipeline Verified' : 'Pipeline Issues Found'}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {result?.is_dag ? 'Your automation flow is valid.' : 'Cyclic dependencies detected.'}
                            </p>
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                            <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                <Layers className="w-4 h-4" />
                                <span className="text-xs font-semibold uppercase tracking-wider">Nodes</span>
                            </div>
                            <div className="text-3xl font-bold text-foreground">{result?.num_nodes || 0}</div>
                        </div>

                        <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                            <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                <Share2 className="w-4 h-4" />
                                <span className="text-xs font-semibold uppercase tracking-wider">Edges</span>
                            </div>
                            <div className="text-3xl font-bold text-foreground">{result?.num_edges || 0}</div>
                        </div>

                        <div className="col-span-2 p-4 rounded-xl bg-secondary/50 border border-border flex items-center justify-between">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <ArrowRight className="w-4 h-4" />
                                <span className="text-xs font-semibold uppercase tracking-wider">Is DAG?</span>
                            </div>
                            <span className={`text-lg font-bold ${result?.is_dag ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                {result?.is_dag ? 'Yes' : 'No'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

import { useCallback, useRef, useState } from 'react';
import { useStore } from '../store';
import toast from 'react-hot-toast';
import { AnalysisPanel } from './AnalysisPanel';
import { parsePipeline, analyzeLocally } from '../services/api';

export const SubmitButton = () => {
    const nodes = useStore((s) => s.nodes);
    const edges = useStore((s) => s.edges);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const panelRef = useRef(null);

    const scrollPanelIntoView = () => {
        setTimeout(() => {
            const el = panelRef.current;
            if (el && typeof el.scrollIntoView === 'function') {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 50);
    };

    const onSubmit = useCallback(async () => {
        setLoading(true);
        try {
            const data = await parsePipeline(nodes, edges);
            setResult(data);
            toast.success('Analysis complete');
            scrollPanelIntoView();
        } catch (err) {
            console.warn('Backend unreachable, running local analysis instead:', err);
            const data = analyzeLocally(nodes, edges);
            setResult(data);
            toast('Backend unreachable. Showing local analysis.');
            scrollPanelIntoView();
        } finally {
            setLoading(false);
        }
    }, [nodes, edges]);

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    className="
                        px-4 py-2 rounded-md
                        bg-primary text-primary-foreground font-medium
                        hover:bg-primary/90 transition-colors
                        shadow-sm
                    "
                    type="button"
                    onClick={onSubmit}
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </div>
            <AnalysisPanel result={result} onClose={() => setResult(null)} panelRef={panelRef} />
        </>
    );
}

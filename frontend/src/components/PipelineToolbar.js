
import { DraggableNode } from './DraggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="sticky top-0 z-10 glass border-0 px-6 py-4 backdrop-blur-sm">
            <div className="text-slate-100 font-semibold tracking-wide text-2xl pb-2">VectorShift Pipeline Builder</div>
            <div className="mt-3 flex flex-wrap gap-3">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='merge' label='Merge' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='http' label='HTTP' />
                <DraggableNode type='math' label='Math' />
            </div>
        </div>
    );
};

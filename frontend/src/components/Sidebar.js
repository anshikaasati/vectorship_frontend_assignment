import React from 'react';
import { DraggableNode } from './DraggableNode';
import {
    Layout,
    Settings,
    Box,
    Workflow,
    Type,
    FileText,
    Clock,
    Divide,
    ArrowRightLeft,
    Search
} from 'lucide-react';

export const Sidebar = () => {
    return (
        <aside className="w-80 h-screen flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300">
            {/* Sidebar Header */}
            <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
                <div className="flex items-center gap-2 font-bold text-xl text-primary">
                    <Workflow className="w-6 h-6" />
                    <span>VectorShift</span>
                </div>
            </div>

            {/* Navigation (Mock) */}
            <div className="p-4 space-y-1">
                <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
                    <Layout className="w-4 h-4" />
                    <span>Assemble Automation</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground cursor-pointer transition-colors">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                </div>
            </div>

            <div className="px-6 py-2">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        className="w-full h-9 rounded-md border border-input bg-background pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Search components..."
                    />
                </div>
            </div>

            {/* Draggable Components Section */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6 scrollbar-thin scrollbar-thumb-border">

                {/* Inputs & Outputs */}
                <div>
                    <h3 className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                        <Box className="w-3.5 h-3.5" />
                        General
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        <DraggableNode type='customInput' label='Input' icon={<ArrowRightLeft className="w-4 h-4" />} />
                        <DraggableNode type='customOutput' label='Output' icon={<ArrowRightLeft className="w-4 h-4 rotate-180" />} />
                        <DraggableNode type='text' label='Text' icon={<Type className="w-4 h-4" />} />
                    </div>
                </div>

                {/* Processing */}
                <div>
                    <h3 className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                        <Workflow className="w-3.5 h-3.5" />
                        Logic
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        <DraggableNode type='filter' label='Filter' icon={<Layout className="w-4 h-4" />} />
                        <DraggableNode type='merge' label='Merge' icon={<ArrowRightLeft className="w-4 h-4" />} />
                        <DraggableNode type='delay' label='Delay' icon={<Clock className="w-4 h-4" />} />
                        <DraggableNode type='math' label='Math' icon={<Divide className="w-4 h-4" />} />
                    </div>
                </div>

                {/* Advanced */}
                <div>
                    <h3 className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                        <FileText className="w-3.5 h-3.5" />
                        Advanced
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        <DraggableNode type='llm' label='LLM' icon={<Box className="w-4 h-4" />} />
                        <DraggableNode type='http' label='HTTP' icon={<Layout className="w-4 h-4" />} />
                    </div>
                </div>

            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-sidebar-border text-xs text-muted-foreground text-center">
                © 2024 VectorShift
            </div>
        </aside>
    );
};

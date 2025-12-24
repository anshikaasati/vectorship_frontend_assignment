import React, { useState } from 'react';
import { DraggableNode } from './DraggableNode';
import {
    Layout,
    Box,
    Workflow,
    Type,
    FileText,
    Clock,
    Divide,
    ArrowRightLeft,
    Search,
    MessageSquare,
    Globe
} from 'lucide-react';

export const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        {
            title: 'General',
            icon: Box,
            items: [
                { type: 'customInput', label: 'Input', icon: ArrowRightLeft },
                { type: 'customOutput', label: 'Output', icon: ArrowRightLeft, iconClassName: 'rotate-180' },
                { type: 'text', label: 'Text', icon: Type },
            ]
        },
        {
            title: 'Logic',
            icon: Workflow,
            items: [
                { type: 'filter', label: 'Filter', icon: Layout },
                { type: 'merge', label: 'Merge', icon: ArrowRightLeft },
                { type: 'delay', label: 'Delay', icon: Clock },
                { type: 'math', label: 'Math', icon: Divide },
            ]
        },
        {
            title: 'Advanced',
            icon: FileText,
            items: [
                { type: 'llm', label: 'LLM', icon: MessageSquare },
                { type: 'http', label: 'HTTP', icon: Globe },
            ]
        }
    ];

    const filteredCategories = categories.map(category => ({
        ...category,
        items: category.items.filter(item =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.items.length > 0);

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
            </div>

            <div className="px-6 py-2">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        className="w-full h-9 rounded-md border border-input bg-background pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Search components..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Draggable Components Section */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6 scrollbar-thin scrollbar-thumb-border">
                {filteredCategories.map((category, idx) => (
                    <div key={category.title}>
                        <h3 className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                            <category.icon className="w-3.5 h-3.5" />
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {category.items.map((item) => (
                                <DraggableNode
                                    key={item.type}
                                    type={item.type}
                                    label={item.label}
                                    icon={<item.icon className={`w-4 h-4 ${item.iconClassName || ''}`} />}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                {filteredCategories.length === 0 && (
                    <div className="text-center text-sm text-muted-foreground py-8">
                        No components found
                    </div>
                )}
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-sidebar-border text-xs text-muted-foreground text-center">
                © 2024 VectorShift
            </div>
        </aside>
    );
};

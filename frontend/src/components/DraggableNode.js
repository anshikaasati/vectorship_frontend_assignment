// DraggableNode.js
import React from 'react';

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.currentTarget.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="
          cursor-grab 
          flex flex-col items-start gap-2 
          p-3 rounded-xl border border-sidebar-border bg-sidebar-accent/50 
          hover:ring-2 hover:ring-primary/20 hover:border-primary/50
          transition-all duration-200 group
        "
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.currentTarget.style.cursor = 'grab')}
      draggable
    >
      {/* Optional Icon Placeholder */}
      <div className="h-8 w-8 rounded-lg bg-background border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
        {icon || <span className="text-xs font-bold">{label[0]}</span>}
      </div>
      <span className="text-sm font-medium text-sidebar-foreground">{label}</span>
    </div>
  );
};
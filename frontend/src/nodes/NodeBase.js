import React from 'react';

export const NodeBase = ({ title, children, selected, style }) => {
    return (
        <div
            style={style}
            className={`
      relative min-w-[200px] rounded-xl border-2 bg-card text-card-foreground shadow-sm transition-all
      ${selected ? 'border-primary ring-1 ring-primary' : 'border-border hover:border-primary/50'}
    `}>
            {/* Node Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-secondary/30 rounded-t-xl">
                <span className="font-semibold text-sm">{title}</span>
                {/* Optional: Add icon here if needed */}
                <div className="h-2 w-2 rounded-full bg-green-500/50" />
            </div>

            {/* Node Body */}
            <div className="p-4 space-y-3">
                {children}
            </div>
        </div>
    );
};

export const Field = ({ label, children }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</label>
        {children}
    </div>
);

export const TextInput = ({ value, onChange, placeholder, className }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
      flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors 
      file:border-0 file:bg-transparent file:text-sm file:font-medium 
      placeholder:text-muted-foreground 
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
      disabled:cursor-not-allowed disabled:opacity-50
      ${className}
    `}
    />
);

export const SelectInput = ({ value, onChange, options = [], className }) => (
    <select
        value={value}
        onChange={onChange}
        className={`
      flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors 
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
      disabled:cursor-not-allowed disabled:opacity-50
      ${className}
    `}
    >
        {options.map((opt) => (
            <option key={opt} value={opt} className="bg-background text-foreground">
                {opt}
            </option>
        ))}
    </select>
);

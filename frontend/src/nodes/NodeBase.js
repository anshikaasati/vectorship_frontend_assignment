
import React from 'react';

export const NodeBase = ({ title, width = 260, minHeight = 120, children }) => {
  return (
    <div className="relative glass-card bg-white/5" style={{ width, minHeight }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-white/10 rounded-t-xl">
        <span className="font-semibold text-slate-50 tracking-wide drop-shadow rounded-md px-2 py-1">{title}</span>
      </div>
      <div className="p-3 flex flex-col gap-2">
        {children}
      </div>
      <div className="glass-ring" />
    </div>
  );
};

export const Field = ({ label, children }) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-violet-200/90">{label}</span>
      {children}
    </label>
  );
};

export const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="w-full px-3 py-2 rounded-lg border border-white/15 bg-white/10 text-violet-50 outline-none focus:border-violet-300/60 focus:ring-2 focus:ring-violet-400/40 placeholder-violet-200/50"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export const SelectInput = ({ value, onChange, options }) => {
  return (
    <select
      className="w-full px-3 py-2 rounded-lg border border-white/15 bg-white/10 text-violet-50 outline-none focus:border-violet-300/60 focus:ring-2 focus:ring-violet-400/40"
      value={value}
      onChange={onChange}
    >
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-violet-900 text-violet-100">
          {opt}
        </option>
      ))}
    </select>
  );
};
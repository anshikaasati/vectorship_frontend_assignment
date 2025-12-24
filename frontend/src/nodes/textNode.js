
import { useEffect, useMemo, useRef, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeBase, Field } from './NodeBase';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // Extract variables and set handles
  useEffect(() => {
    const found = new Set();
    let match;
    while ((match = VARIABLE_REGEX.exec(currText)) !== null) {
      found.add(match[1]);
    }
    setVariables(Array.from(found));
  }, [currText]);

  // Auto resize height and width based on content
  useEffect(() => {
    const el = textAreaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(240, Math.max(80, el.scrollHeight)) + 'px';
  }, [currText]);

  const computedWidth = useMemo(() => {
    const lines = currText.split('\n');
    const maxLen = lines.reduce((m, l) => Math.max(m, l.length), 0);
    const base = 220;
    const perChar = 7; // rough monospace width
    return Math.min(520, Math.max(base, 16 + maxLen * perChar));
  }, [currText]);

  return (
    <NodeBase title="Text" style={{ width: computedWidth, minHeight: 100 }}>
      {variables.map((v, idx) => (
        <Handle key={`var-${v}`} type="target" position={Position.Left} id={`${id}-var-${v}`} style={{ top: 44 + idx * 22 }} />
      ))}
      <Field label="Text">
        <textarea
          ref={textAreaRef}
          className="
            w-full rounded-md border border-input bg-transparent 
            px-3 py-2 text-sm shadow-sm 
            placeholder:text-muted-foreground 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
            resize-none
          "
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          placeholder="Type your text. Use {{variable}} to add inputs."
          rows={3}
        />
      </Field>
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </NodeBase>
  );
};

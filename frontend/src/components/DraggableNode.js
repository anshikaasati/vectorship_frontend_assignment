
export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.currentTarget.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`cursor-grab min-w-[96px] h-[48px] flex items-center justify-center rounded-lg glass text-violet-50 text-sm shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition duration-150 hover:bg-white/15 hover:-translate-y-0.5 ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.currentTarget.style.cursor = 'grab')}
        draggable
      >
          <span className="font-medium drop-shadow-sm">{label}</span>
      </div>
    );
  };
  
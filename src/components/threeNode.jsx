import React from 'react';


// Componente TreeNode
export default function TreeNode({ value, left, right }) {
  return (
    <div className="flex flex-col items-center">
      <div className="node bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        {value}
      </div>
      <div className="flex">
        {left && <div className="edge bg-blue-500 w-1 h-6"></div>}
        {right && <div className="edge bg-blue-500 w-1 h-6"></div>}
      </div>
    </div>
  );
}
// components/ActionButtons.tsx
import React from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';

const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-3 mt-4">
      <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-400 hover:text-white">
        <FunnelIcon className="w-4 h-4" />
        Filter
      </button>
      <button className="px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-400 hover:text-white">
        Sort by: <span className="ml-1 font-medium text-white">Highest Price</span>
      </button>
    </div>
  );
};

export default ActionButtons;

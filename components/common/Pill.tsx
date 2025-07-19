// components/Pill.tsx
import React from 'react';
import clsx from 'clsx';

interface PillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-full border transition-all duration-200 text-sm font-medium',
        isActive
          ? 'bg-green-100 border-green-300 text-green-800'
          : 'bg-black text-gray-400 border-gray-600 hover:text-white hover:border-white'
      )}
    >
      {label}
    </button>
  );
};

export default Pill;

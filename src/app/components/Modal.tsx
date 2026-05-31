import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
}

export default function Modal({ open, onClose, children, width = 'w-80' }: ModalProps) {
  return (
    <div
      onClick={onClose}
      className={`z-50 fixed inset-0 flex justify-center transition-colors ${open ? 'visible bg-gradient-to-br from-indigo-950 to-slate-950' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-xl shadow my-auto ${width} p-8 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-300 hover:bg-gray-50 hover:text-gray-600"
        >
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
}

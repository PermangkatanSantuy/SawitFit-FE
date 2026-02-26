"use client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function ModalAddMeal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
        {children}
      </div>
    </div>
  );
}

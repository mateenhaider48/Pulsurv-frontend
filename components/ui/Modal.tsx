"use client";

import * as React from "react";
import { Button } from "./Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  const dialogRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl dark:bg-zinc-900"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="mb-4 flex items-center justify-between gap-4 border-b border-zinc-200 pb-3 dark:border-zinc-700">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {title}
          </h2>
          <Button
            variant="ghost"
            className="h-8 w-8 rounded-full p-0 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            aria-label="Close"
            onClick={onClose}
          >
            <span className="text-lg">&times;</span>
          </Button>
        </header>

        <div className="text-sm text-zinc-700 dark:text-zinc-200">{children}</div>
      </div>
    </div>
  );
};

export default Modal;


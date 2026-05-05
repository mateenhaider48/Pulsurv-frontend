"use client";

import * as React from "react";
import { Button } from "./Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");

  if (!open) return null;

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          className="absolute right-4 top-4 h-8 w-8 rounded-full p-0 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          aria-label="Close"
          onClick={onClose}
        >
          <span className="text-lg">&times;</span>
        </Button>

        {/* Header */}
        <h2 className="mb-5 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Details
        </h2>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

          {/* Avatar Upload */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Picture
            </label>
            <div
              onClick={() => inputRef.current?.click()}
              className="w-20 h-20 rounded-full border-1.5 border-dashed border-custom-secondary flex items-center justify-center cursor-pointer overflow-hidden bg-zinc-50 dark:bg-zinc-800 hover:border-custom-secondary/70 transition-colors"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs text-zinc-400 select-none">Upload</span>
              )}
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </div>

          {/* Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 px-3 rounded-lg border-1.5 border-custom-secondary bg-transparent text-sm font-medium text-custom-dark-grey/90 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-custom-secondary/20 transition"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-700">
            <Button
              className="px-4 h-9 rounded-lg text-sm text-zinc-600 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="px-4 h-9 rounded-lg text-sm bg-custom-secondary text-white hover:opacity-90"
              onClick={() => console.log({ name, preview })}
            >
              Save
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Modal;
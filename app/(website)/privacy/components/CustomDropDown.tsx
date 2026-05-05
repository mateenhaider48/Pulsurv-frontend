import { useState, useRef, useEffect } from "react";
import { DropDownIcon } from "@/components/svg-icons";

export function CustomDropdown({
  options,
  placeholder = "Table of Contents",
  onChange,
}:any) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any | null>(null);


  const handleSelect = (opt: any) => {
    setSelected(opt);
    setOpen(false);
    onChange?.(opt.value);
  };

 
  return (
    <div className="relative w-40 sm:w-55">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="
          w-full h-8 sm:h-10 px-1 sm:px-3 pr-2 sm:pr-8
          bg-transparent border-1 sm:border-1 border-custom-secondary rounded-lg text-sm font-medium text-left
          flex items-center cursor-pointer
          transition-all duration-150
          text-custom-dark-grey/90
         "
      >
        <span className="flex-1 ">
          {selected ? selected.label : placeholder}
        </span>

        <span
          className={
            "absolute right-2.5 top-1/2 -translate-y-1/2 text-custom-dark-grey/50 transition-transform duration-200"
          }
        >
          <DropDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-custom-dark-grey" />
        </span>
      </button>

      {/* Menu */}
      {open && (
        <ul className="absolute z-50 top-15 left-0 right-0  bg-white border-1.5  rounded-lg overflow-hidden shadow-md animate-in fade-in slide-in-from-top-1 duration-100">
          <p
            className="text-sm cursor-pointer px-3 py-1 font-bold text-custom-dark-grey/90 "
          >
            Table of Contents
          </p>
          {options.map((opt:any) => (
            <li
              key={opt.value}
              onClick={() => handleSelect(opt)}
              className={`
                flex items-center gap-2 px-1 sm:px-3 py-1
                text-sm cursor-pointer hover:text-custom-secondary transition-colors duration-100
                ${
                  selected?.value === opt.value
                    ? "font-medium text-custom-secondary"
                    : "font-normal text-custom-dark-grey/90"
                }
              `}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

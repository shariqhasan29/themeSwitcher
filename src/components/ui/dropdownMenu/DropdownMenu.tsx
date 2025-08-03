import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "../../../assets/icons";

interface DropdownProps<T extends string> {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export function DropdownMenu<T extends string>({
  options,
  value,
  onChange,
  className = "",
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between w-full p-3 border rounded-md transition-all
          bg-secondary text-primary border-primary
          hover:bg-accent hover:text-primary
          focus:outline-none focus:ring-2 focus:ring-accent
        `}
      >
        <span>{selectedOption?.label || "Select..."}</span>
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul
          className={`
            absolute z-50 w-full mt-1 max-h-60 overflow-auto border rounded-md shadow
            bg-secondary border-primary
          `}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`
                px-4 py-2 cursor-pointer transition-colors
                hover:bg-accent hover:text-primary
                ${
                  value === option.value
                    ? "bg-accent text-primary font-semibold"
                    : ""
                }
              `}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

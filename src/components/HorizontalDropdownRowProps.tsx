import { useState } from "react";
import BulletPoint from "./BulletPoint"; // Adjust path if needed

interface HorizontalDropdownRowProps {
  options: { label: string; targetId: string }[];
}

export default function HorizontalDropdownRow({
  options,
}: HorizontalDropdownRowProps) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <div className="relative   fss">
      <button
        onClick={() => setOpen(!open)}
        className=" text-white px-4 py-2 rounded cursor-pointer"
      >
        جدول مطالب
      </button>

      <div
        className={`absolute top-1/2 right-full -translate-y-1/2 transition-all duration-300 ease-out z-10 ${
          open
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4 pointer-events-none"
        }  shadow-lg rounded px-4 py-2 w-max flex  gap-[20px]`}
      >
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(option.targetId)}
            className="px-[20px] flex  items-center gap-[20px] text-left hover:text-blue-600 text-black cursor-pointer"
          >
            <BulletPoint />
            <span className=" text-white">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

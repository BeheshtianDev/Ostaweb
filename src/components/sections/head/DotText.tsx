import React from "react";
type DotTextProps = {
  text: string;
  left?: { de?: string; mo?: string };
  right?: { de?: string; mo?: string };
  bottom?: { de?: string; mo?: string };
};

const DotText = React.memo(({ text, left, right, bottom }: DotTextProps) => {
  // Use desktop positions by default (mobile handled via Tailwind classes)
  const style: React.CSSProperties = {
    left: left?.de,
    right: right?.de,
    bottom: bottom?.de,
  };

  return (
    <div
      className={`
        flex gap-3 absolute font-extralight animate-pulse
        de:text-base mo:text-sm
        ${left?.mo ? `mo:left-[${left.mo}]` : ""}
        ${right?.mo ? `mo:right-[${right.mo}]` : ""}
        ${bottom?.mo ? `mo:bottom-[${bottom.mo}]` : ""}
      `}
      style={style}
    >
      <div className="relative w-6 h-6 mr-2">
        <span className="absolute inline-flex h-full w-full justify-center items-center rounded-full bg-[#B5964D] opacity-75">
          <span className="rounded-full h-6 w-6 bg-[#B5964D] opacity-80 animate-ping"></span>
          <span className="absolute rounded-full h-3 w-3 bg-white opacity-90"></span>
        </span>
      </div>
      <div className="max-w-[280px]">{text}</div>
    </div>
  );
});

export default DotText;

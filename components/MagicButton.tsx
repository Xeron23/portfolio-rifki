import type { ReactNode } from "react";

const MagicButton = ({ title, icon, position, handleClick, otherClasses = "" }: { title: string; icon: ReactNode; position: "left" | "right"; handleClick?: () => void; otherClasses?: string }) => {
  const content = <><span>{position === "left" ? icon : null}</span><span>{title}</span><span>{position === "right" ? icon : null}</span></>;
  const className = `shine-button inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#65e8df]/35 bg-[#65e8df]/10 px-6 text-sm font-semibold text-[#b9fff9] ${otherClasses}`;

  if (handleClick) return <button type="button" onClick={handleClick} className={className}>{content}</button>;
  return <span className={className}>{content}</span>;
};

export default MagicButton;

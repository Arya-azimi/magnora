interface HoverBgTransformProps {
  className?: string;
}

export default function HoverBgTransform({ className = "" }: HoverBgTransformProps) {
  return (
    <div
      className={`bg-background-13/5 absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-400 group-hover:opacity-100 ${className}`}
    ></div>
  );
}
export const buttonVariants = {
  default: "bg-[#00FFA3] text-black hover:bg-[#1AFFB0] transition-colors",
  outline: "border border-[#00FFA3] text-[#00FFA3] bg-transparent hover:bg-[#00FFA320]",
  secondary: "bg-[#181e24] text-white hover:bg-[#232c36]",
};

export function Button({ className = "", variant = "default", children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-xl font-semibold shadow-sm focus:outline-none ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

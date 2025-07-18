export const inputVariants = {
  default:
    "block w-full rounded-lg border border-[#232c36] bg-[#232c36] px-3 py-2 text-white text-base focus:border-[#00FFA3] focus:ring-2 focus:ring-[#00FFA3] outline-none transition",
};

export function Input({ className = "", variant = "default", ...props }) {
  return (
    <input
      className={`${inputVariants[variant]} ${className}`}
      {...props}
    />
  );
}

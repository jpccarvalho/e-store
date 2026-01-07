import { cn } from "@/shared/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        {
          "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-900":
            variant === "primary",

          "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 focus:ring-zinc-400":
            variant === "secondary",

          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600":
            variant === "danger",
        },
        className
      )}
    />
  );
}

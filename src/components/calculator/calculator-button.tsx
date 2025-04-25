import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-custom-keys-bg-tertiary text-custom-text-main shadow-custom-keys-shadow-tertiary text-[2.5rem] hover:bg-custom-keys-bg-tertiary-hover",

      secondary:
        "bg-custom-keys-bg-primary hover:bg-custom-keys-bg-primary-hover text-custom-text-white shadow-custom-keys-shadow-primary",

      submit:
        "bg-custom-keys-bg-secondary hover:bg-custom-keys-bg-secondary-hover text-custom-text-submit shadow-custom-keys-shadow-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function CalculatorButton({
  className,
  variant,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-lg pt-2 text-[1.75rem] leading-12 font-bold shadow-[0_4px] transition-colors",
        buttonVariants({ variant, className }),
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}

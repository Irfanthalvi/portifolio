import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground font-semibold shadow-lg shadow-cyan-glow/20 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0',
        destructive:
          'bg-red-500 text-white hover:bg-red-600',
        outline:
          'border border-border bg-transparent hover:bg-muted/50 hover:text-foreground hover:border-cyan-glow/40',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-muted/50 hover:text-foreground',
        link:
          'text-primary underline-offset-4 hover:underline',
        glow:
          'bg-gradient-to-r from-[#00eeff] to-[#38bdf8] text-[#060a11] font-bold shadow-[0_0_20px_rgba(0,238,255,0.35)] hover:shadow-[0_0_30px_rgba(0,238,255,0.55)] hover:-translate-y-0.5 transition-all',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-6 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

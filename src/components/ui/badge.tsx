import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-[#0052FF] text-white',
        secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
        yellow: 'bg-[#FFB800] text-slate-950',
        green: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
        glass: 'bg-white/90 backdrop-blur-md text-slate-900 shadow-sm',
        outline: 'border border-slate-200 text-slate-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
  cva,
  type VariantProps,
} from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-0",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white rounded-xl hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5',
        destructive:
          'bg-destructive text-white rounded-xl hover:bg-destructive/90 hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-destructive/20',
        outline:
          'bg-white border-2 border-charcoal text-charcoal rounded-xl hover:bg-white hover:border-primary hover:text-charcoal hover:shadow-xl hover:-translate-y-1 focus-visible:ring-charcoal',
        secondary:
          'bg-charcoal text-white rounded-xl hover:bg-charcoal-light hover:shadow-lg hover:-translate-y-0.5',
        ghost:
          'rounded-lg hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline hover:shadow-none hover:translate-y-0',
      },
      size: {
        default: 'px-8 py-3 text-lg min-h-[48px]',
        sm: 'px-6 py-2 text-base min-h-[44px]',
        lg: 'text-base sm:text-lg md:text-xl px-7 sm:px-9 md:px-12 py-3.5 md:py-4 min-h-[52px] md:min-h-[60px]',
        icon: 'size-12',
        'icon-sm': 'size-10',
        'icon-lg': 'size-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className })
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }

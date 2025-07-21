import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({ ref, className, variant, ...props }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> & { ref?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}
Alert.displayName = 'Alert'

function AlertTitle({ ref, className, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { ref?: React.RefObject<HTMLParagraphElement | null> }) {
  return (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
}
AlertTitle.displayName = 'AlertTitle'

function AlertDescription({ ref, className, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { ref?: React.RefObject<HTMLParagraphElement | null> }) {
  return (
    <div
      ref={ref}
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      {...props}
    />
  )
}
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }

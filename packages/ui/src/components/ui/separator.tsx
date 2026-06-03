import * as React from 'react'
import { Separator as SeparatorPrimitive } from '@base-ui/react/separator'

import { cn } from '@ui-internal/lib/utils'

function Separator({ className, ...props }: React.ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      data-slot='separator'
      className={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch",
        className,
      )}
      {...props}
    />
  )
}

export { Separator }

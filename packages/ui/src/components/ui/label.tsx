import * as React from 'react'

import { cn } from '@ui-internal/lib/utils'

function Label({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      data-slot='label'
      className={cn(
        'inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Label }

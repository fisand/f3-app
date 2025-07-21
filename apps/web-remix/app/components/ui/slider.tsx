import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Slider({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { ref?: React.RefObject<React.ElementRef<typeof SliderPrimitive.Root> | null> }) {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="bg-primary/20 relative h-1.5 w-full grow overflow-hidden rounded-full">
        <SliderPrimitive.Range className="bg-primary absolute h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="border-primary/50 bg-background focus-visible:ring-ring block h-4 w-4 border rounded-full shadow transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1" />
    </SliderPrimitive.Root>
  )
}
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

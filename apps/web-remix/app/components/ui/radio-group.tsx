import { DotFilledIcon } from '@radix-ui/react-icons'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'

import { cn } from '@/lib/utils'

function RadioGroup({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & { ref?: React.RefObject<React.ElementRef<typeof RadioGroupPrimitive.Root> | null> }) {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  )
}
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

function RadioGroupItem({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { ref?: React.RefObject<React.ElementRef<typeof RadioGroupPrimitive.Item> | null> }) {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <DotFilledIcon className="fill-primary h-3.5 w-3.5" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

import * as React from 'react'

import { cn } from '@ui-internal/lib/utils'

interface InputProps extends React.ComponentProps<'input'> {
  inputContainerClassName?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

function Input({
  inputContainerClassName,
  className,
  type,
  leadingIcon,
  trailingIcon,
  disabled,
  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        'group relative w-full data-[disabled]:pointer-events-none',
        inputContainerClassName,
      )}
      data-disabled={disabled ? '' : undefined}
      data-slot='input-container'
    >
      {leadingIcon && (
        <span
          data-slot='input-leading-icon'
          className="text-muted-foreground absolute top-1/2 left-3 shrink-0 -translate-y-1/2 [&_svg]:shrink-0 [&_svg:not([class*='pointer-events-'])]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
        >
          {leadingIcon}
        </span>
      )}
      <input
        type={type}
        data-slot='input'
        className={cn(
          'placeholder:text-muted-foreground/72 selection:bg-primary selection:text-primary-foreground border-input bg-background not-dark:bg-clip-padding flex h-9 w-full min-w-0 rounded-lg border px-3 py-1 text-base shadow-xs/5 ring-ring/24 transition-[color,box-shadow] outline-none before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-disabled:not-focus-visible:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] disabled:pointer-events-none disabled:opacity-64 sm:h-8 sm:text-sm',
          'focus-visible:border-ring focus-visible:ring-[3px]',
          'aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/16',
          'file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'dark:bg-input/32 dark:not-disabled:not-focus-visible:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          leadingIcon && 'pl-10',
          trailingIcon && 'pr-10',
          className,
        )}
        disabled={disabled}
        {...props}
      />
      {trailingIcon && (
        <span
          data-slot='input-trailing-icon'
          className="text-muted-foreground absolute top-1/2 right-3 shrink-0 -translate-y-1/2 [&_svg]:shrink-0 [&_svg:not([class*='pointer-events-'])]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
        >
          {trailingIcon}
        </span>
      )}
    </div>
  )
}

export { Input }

import { ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Breadcrumb({ ref, ...props }: React.ComponentPropsWithoutRef<'nav'> & {
  separator?: React.ReactNode
} & { ref?: React.RefObject<HTMLElement | null> }) {
  return <nav ref={ref} aria-label="breadcrumb" {...props} />
}
Breadcrumb.displayName = 'Breadcrumb'

function BreadcrumbList({ ref, className, ...props }: React.ComponentPropsWithoutRef<'ol'> & { ref?: React.RefObject<HTMLOListElement | null> }) {
  return (
    <ol
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
        className,
      )}
      {...props}
    />
  )
}
BreadcrumbList.displayName = 'BreadcrumbList'

function BreadcrumbItem({ ref, className, ...props }: React.ComponentPropsWithoutRef<'li'> & { ref?: React.RefObject<HTMLLIElement | null> }) {
  return (
    <li
      ref={ref}
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
}
BreadcrumbItem.displayName = 'BreadcrumbItem'

function BreadcrumbLink({ ref, asChild, className, ...props }: React.ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean
} & { ref?: React.RefObject<HTMLAnchorElement | null> }) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      className={cn('transition-colors hover:text-foreground', className)}
      {...props}
    />
  )
}
BreadcrumbLink.displayName = 'BreadcrumbLink'

function BreadcrumbPage({ ref, className, ...props }: React.ComponentPropsWithoutRef<'span'> & { ref?: React.RefObject<HTMLSpanElement | null> }) {
  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-normal text-foreground', className)}
      {...props}
    />
  )
}
BreadcrumbPage.displayName = 'BreadcrumbPage'

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:w-3.5 [&>svg]:h-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  )
}
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <DotsHorizontalIcon className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  )
}
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}

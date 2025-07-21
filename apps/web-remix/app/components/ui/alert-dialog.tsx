import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import * as React from 'react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

function AlertDialogOverlay({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Overlay> | null> }) {
  return (
    <AlertDialogPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      {...props}
      ref={ref}
    />
  )
}
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

function AlertDialogContent({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Content> | null> }) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

function AlertDialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-2 text-center sm:text-left',
        className,
      )}
      {...props}
    />
  )
}
AlertDialogHeader.displayName = 'AlertDialogHeader'

function AlertDialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      )}
      {...props}
    />
  )
}
AlertDialogFooter.displayName = 'AlertDialogFooter'

function AlertDialogTitle({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Title> | null> }) {
  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  )
}
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

function AlertDialogDescription({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Description> | null> }) {
  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}
AlertDialogDescription.displayName
  = AlertDialogPrimitive.Description.displayName

function AlertDialogAction({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Action> | null> }) {
  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

function AlertDialogCancel({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Cancel> | null> }) {
  return (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      className={cn(
        buttonVariants({ variant: 'outline' }),
        'mt-2 sm:mt-0',
        className,
      )}
      {...props}
    />
  )
}
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}

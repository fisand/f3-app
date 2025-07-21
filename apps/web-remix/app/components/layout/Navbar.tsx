import { useConnectModal } from '@rainbow-me/rainbowkit'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

import { cn } from '@/lib/utils'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavbarProps {
  items: NavItem[]
  className?: string
}

export function Navbar({ items, className }: NavbarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [_, setIsMobile] = useState(false)
  const { openConnectModal } = useConnectModal()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6',
        className,
      )}
    >
      <div className="flex items-center gap-3 border rounded-full px-1 py-1 shadow-lg backdrop-blur-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => {
                setActiveTab(item.name)
                if (item.name.toLowerCase() === 'connect') {
                  openConnectModal?.()
                }
              }}
              className={cn(
                'relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors',
                'text-white/40 hover:text-white',
                isActive && 'text-white',
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full bg-rose-300/5 -z-10"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute left-1/2 h-1 w-8 rounded-t-full bg-rose-300 -top-2 -translate-x-1/2">
                    <div className="absolute h-6 w-12 rounded-full bg-rose-300/20 blur-md -left-2 -top-2" />
                    <div className="absolute h-6 w-8 rounded-full bg-rose-300/20 blur-md -top-1" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-rose-300/20 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { Circle } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-white/[0.08]',
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'backdrop-blur-[2px] border-2 border-white/[0.15]',
            'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]',
          )}
        />
      </motion.div>
    </motion.div>
  )
}

function HeroGeometric({
  badge = ['Design Collective', 'Creative Studio', 'Web Development'],
  title1 = 'Elevate Your Digital Vision',
  title2 = 'Crafting Exceptional Websites',
  description = 'Help you build better websites with a focus on design, performance, and user experience.',
}: {
  badge?: string[]
  title1?: string
  title2?: string
  description?: string
}) {
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBadgeIndex(prev => (prev + 1) % badge.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [badge.length])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] bg-gradient-to-br blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 mx-auto px-4 container md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants as any}
            initial="hidden"
            animate="visible"
            className="mb-8 w-320px inline-flex items-center gap-2 rounded-full px-3 py-1 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">
              Fisand template created by
            </span>
            <div className="h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBadgeIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                  className="h-6 flex items-center justify-center"
                >
                  <span className="text-sm text-white/60 tracking-wide">
                    {badge[currentBadgeIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants as any}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:mb-8 md:text-8xl sm:text-6xl">
              <span className="from-white to-white/80 bg-gradient-to-b bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  'bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 ',
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants as any}
            initial="hidden"
            animate="visible"
          >
            <p className="mx-auto mb-8 max-w-xl px-4 text-base text-white/40 font-light leading-relaxed tracking-wide md:text-xl sm:text-lg">
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 from-[#030303] via-transparent to-[#030303]/80 bg-gradient-to-t" />
    </div>
  )
}

export { HeroGeometric }

import { cn } from '@repo/ui/src/lib/utils'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { createFileRoute } from '@tanstack/react-router'
import { useRef } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

type NavItem = {
  id: string
  label: string
}

type CourseItem = {
  name: string
  focus: string
  description: string
}

type DownloadItem = {
  name: string
  platform: string
  description: string
  image: string
}

const navItems: NavItem[] = [
  { id: 'philosophy', label: '理念' },
  { id: 'courses', label: '课程' },
  { id: 'space', label: '空间' },
  { id: 'app', label: 'App' },
]

const courseItems: CourseItem[] = [
  {
    name: '瑜伽',
    focus: '呼吸与延展',
    description: '在缓慢的打开与停留里唤醒身体感知，让紧绷的肩颈、背部与情绪都重新松开。',
  },
  {
    name: '普拉提',
    focus: '控制与核心',
    description: '通过更精准的核心发力和稳定训练，帮助身体找回线条、姿态与轻盈的支撑感。',
  },
  {
    name: '塑形',
    focus: '力量与轮廓',
    description: '把力量训练收束成更适合女性节奏的课程，让耐力、曲线和日常状态一起慢慢成形。',
  },
]

const rhythmNotes = [
  '每一次训练都应当被温柔地记录，而不是匆忙地消耗。',
  '当身体重新变得有秩序，线条和气质会自然出现。',
  'bhq 把到店课程和日常陪伴连接成一条更稳定的自律路径。',
]

const studioHighlights = [
  '更安静的空间节奏，让每一节课都保有呼吸感。',
  '连锁门店采用统一的女性友好动线与预约体验。',
  '从入门到长期练习，都能在熟悉的环境里稳稳进阶。',
]

const companionMoments = [
  '晨间唤醒：给忙碌的一天留一段向内收束的时间。',
  '课后记录：把身体的变化慢慢看见，而不是只看体重数字。',
  '日常提醒：在 App 和小程序里，让自律不再只发生在门店里。',
]

const downloadItems: DownloadItem[] = [
  {
    name: 'iOS App',
    platform: 'Apple 下载入口',
    description: '适合把练习、记录与节奏都放进同一块日常屏幕里。',
    image: '/bhq/qr-ios.svg',
  },
  {
    name: 'Android App',
    platform: 'Android 下载入口',
    description: '保留训练计划、课程节奏和你每天一点点看得见的变化。',
    image: '/bhq/qr-android.svg',
  },
  {
    name: '微信小程序',
    platform: '轻量体验入口',
    description: '随手打开，查看课程安排、品牌动态与线下门店节奏。',
    image: '/bhq/qr-wechat.svg',
  },
]

const containerClass =
  'mx-auto w-[min(1180px,_calc(100%-2rem))] lt-sm:w-[min(1180px,_calc(100%-1.25rem))]'
const sectionClass = 'relative scroll-mt-24 py-[clamp(4.75rem,9vw,7.5rem)]'
const sectionLabelClass =
  'inline-flex w-fit rounded-full bg-[#f6e8b4]/78 px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-[#5a4538]'
const sectionTitleClass =
  'font-serif text-[clamp(2.05rem,4vw,3.95rem)] leading-[1.12] tracking-[0.012em] [text-wrap:balance] text-[#5a4538]'
const heroHeadlineClass =
  'max-w-[7ch] font-serif text-[clamp(2.7rem,5.5vw,4.95rem)] leading-[1.08] tracking-[0.015em] [text-wrap:balance] text-[#5a4538]'
const courseTitleClass =
  'font-serif text-[1.9rem] leading-[1.12] tracking-[0.01em] text-[#5a4538] md:text-[2rem]'

function Home() {
  const heroRef = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const hazeY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  return (
    <main className='relative overflow-clip bg-[#fffdfa]'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#fffefb_0%,#fffdfa_38%,#faf7ef_100%)]'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-[2%] top-[2%] h-80 w-80 rounded-full bg-[#f6e8b4]/45 blur-[90px]'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute right-[4%] top-[4%] h-64 w-64 rounded-full bg-[#fff7d8]/55 blur-[90px]'
      />

      <section id='top' ref={heroRef} className='relative isolate min-h-[100svh] overflow-clip'>
        <motion.div
          aria-hidden='true'
          className='pointer-events-none absolute left-[-8rem] top-44 z-0 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(246,232,180,0.62),rgba(246,232,180,0)_72%)] blur-[28px] opacity-80'
          style={shouldReduceMotion ? undefined : { y: hazeY }}
        />
        <motion.div
          aria-hidden='true'
          className='pointer-events-none absolute right-[-8rem] top-32 z-0 h-[29rem] w-[29rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,247,216,0.95),rgba(255,247,216,0)_76%)] blur-[28px] opacity-80'
          style={shouldReduceMotion ? undefined : { y: mediaY }}
        />

        <header className='absolute inset-x-0 top-0 z-40 pt-4'>
          <nav
            className={cn(
              containerClass,
              'flex items-center justify-between gap-4 rounded-full border border-[#5a4538]/8 bg-white/78 px-[1.1rem] py-[0.9rem] shadow-[0_12px_28px_rgba(90,69,56,0.08)] backdrop-blur-[18px] lt-lg:rounded-[1.35rem]',
            )}
            aria-label='Primary'
          >
            <a
              href='#top'
              className='font-serif text-[1.65rem] font-semibold lowercase tracking-[-0.08em] text-[#5a4538]'
            >
              bhq
            </a>

            <div className='hidden items-center gap-6 md:flex'>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className='text-sm text-[#8a7769] transition-colors hover:text-[#5a4538]'
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href='#download'
              className='inline-flex items-center justify-center rounded-full border border-[#f0e2ab] bg-[#fff8dc]/82 px-4 py-[0.7rem] text-[0.9rem] leading-none text-[#5a4538] transition hover:-translate-y-px hover:bg-[#fff4cc]'
            >
              下载 App
            </a>
          </nav>
        </header>

        <div
          className={cn(
            containerClass,
            'relative z-10 grid min-h-[100svh] items-center gap-12 pb-12 pt-28 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:gap-[4.5rem] lg:pb-16 lg:pt-32',
          )}
        >
          <motion.div
            className='max-w-[34rem] space-y-8'
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='space-y-5'>
              <p className={sectionLabelClass}>城市女性运动生活方式品牌</p>
              <motion.span
                className='block font-serif text-[clamp(4.75rem,14vw,9.5rem)] font-semibold lowercase leading-[0.82] tracking-[-0.1em] text-[#5a4538]'
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
              >
                bhq
              </motion.span>
              <motion.h1
                className={heroHeadlineClass}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className='block'>自律成就</span>
                <span className='mt-2 block md:mt-3'>我们的美</span>
              </motion.h1>
            </div>

            <motion.p
              className='max-w-[31rem] text-[1.03rem] leading-8 text-[#8a7769] md:text-[1.08rem]'
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              bhq 围绕瑜伽、普拉提与塑形课程，为城市女性提供一条更温柔也更稳定的身体管理路径。
              从到店练习，到日常节奏，再到长期线条的建立，我们把训练变成一种可以持续的生活方式。
            </motion.p>

            <motion.div
              className='flex flex-col gap-4 sm:flex-row'
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href='#courses'
                className='inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#5a4538] px-5 text-[0.96rem] text-[#fffdf8] shadow-[0_16px_28px_rgba(90,69,56,0.18)] transition hover:-translate-y-px hover:bg-[#4d3b31]'
              >
                <span>了解课程</span>
                <span className='i-lucide-arrow-right h-4 w-4' />
              </a>
              <a
                href='#download'
                className='inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#efe0aa] bg-[#fff8dd] px-5 text-[0.96rem] text-[#5a4538] transition hover:-translate-y-px hover:border-[#e3d28e] hover:bg-[#fff3c6]'
              >
                <span>下载 App</span>
                <span className='i-lucide-smartphone h-4 w-4' />
              </a>
            </motion.div>

            <motion.div
              className='flex flex-wrap gap-4 text-sm uppercase tracking-[0.14em] text-[#8a7769]'
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <span>Yoga</span>
              <span>Pilates</span>
              <span>Sculpt</span>
            </motion.div>
          </motion.div>

          <motion.div
            className='relative flex items-end justify-center lg:justify-end'
            style={shouldReduceMotion ? undefined : { y: mediaY, scale: mediaScale }}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='relative w-full max-w-[38rem] overflow-hidden rounded-[2rem_2rem_2rem_7rem] border border-white/88 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(248,242,220,0.66))] shadow-[0_30px_72px_rgba(90,69,56,0.10)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(90,69,56,0.08))] after:content-[\"\"] lt-lg:rounded-[1.75rem_1.75rem_1.75rem_4.5rem]'>
              <img
                src='/bhq/hero-main-v2.png'
                alt='年轻女性在明亮室内进行普拉提训练'
                className='h-full w-full object-cover'
                fetchPriority='high'
              />
            </div>

            <div className='absolute bottom-4 left-4 max-w-[16rem] rounded-[1.25rem] border border-white/70 bg-[#5a4538]/44 px-4 py-[0.95rem] text-[0.92rem] leading-[1.7] text-[#fffdf8]/92 backdrop-blur-[16px] md:bottom-6 md:left-auto md:right-6'>
              在伸展与力量之间，慢慢找回身体的节奏感。
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id='philosophy'
        className={sectionClass}
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.25 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={cn(containerClass, 'grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14')}
        >
          <div className='space-y-5'>
            <p className={sectionLabelClass}>理念</p>
            <h2 className={cn(sectionTitleClass, 'max-w-[9ch]')}>把训练变成一种温柔的秩序</h2>
          </div>

          <div className='grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-12'>
            <div className='space-y-5 text-[1.02rem] leading-8 text-[#8a7769] md:text-[1.08rem]'>
              <p>
                bhq
                不急着用高强度和口号制造焦虑。我们更在意的是，当女性重新感受到身体的支撑、呼吸和延展，整个人会慢慢回到一种更稳定也更轻盈的状态里。
              </p>
              <p>
                线条的建立不是一次性完成的，它来自一次次认真收束核心、拉开背部、站稳脚底，也来自每一天愿意为自己留出的那一点自律。
              </p>
            </div>

            <div className='space-y-6 border-[#5a4538]/12 pt-2 lg:border-l lg:pl-8'>
              {rhythmNotes.map((note) => (
                <div
                  key={note}
                  className='space-y-2 border-b border-[#5a4538]/12 pb-5 last:border-b-0'
                >
                  <p className='text-sm uppercase tracking-[0.18em] text-[#a58f53]'>manifesto</p>
                  <p className='text-[0.98rem] leading-7 text-[#5a4538]'>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id='courses'
        className={cn(sectionClass, 'bg-[#f9f4e5]/70')}
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.25 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={cn(containerClass, 'grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14')}
        >
          <div className='space-y-5'>
            <p className={sectionLabelClass}>课程</p>
            <h2 className={cn(sectionTitleClass, 'max-w-[8ch]')}>三种练习，落到同一种长期变化</h2>
          </div>

          <div className='divide-y divide-[#5a4538]/12'>
            {courseItems.map((course, index) => (
              <motion.article
                key={course.name}
                className='grid gap-4 py-8 first:pt-0 last:pb-0 lg:grid-cols-[4rem_12rem_minmax(0,1fr)] lg:gap-6'
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.75,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className='font-serif text-[1.9rem] leading-none tracking-[0.02em] text-[#b8a35d] md:text-[2rem]'>
                  0{index + 1}
                </span>

                <div className='space-y-2'>
                  <h3 className={courseTitleClass}>{course.name}</h3>
                  <p className='text-sm uppercase tracking-[0.18em] text-[#8a7769]'>
                    {course.focus}
                  </p>
                </div>

                <p className='max-w-[36rem] text-[1rem] leading-8 text-[#8a7769]'>
                  {course.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id='space'
        className={sectionClass}
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.25 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={cn(
            containerClass,
            'grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] lg:gap-16',
          )}
        >
          <motion.div
            className='order-2 space-y-6 lg:order-1'
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='space-y-5'>
              <p className={sectionLabelClass}>空间</p>
              <h2 className={cn(sectionTitleClass, 'max-w-[10ch]')}>
                连锁门店，也保持同一种柔和的到店体验
              </h2>
            </div>
            <p className='max-w-[36rem] text-[1rem] leading-8 text-[#8a7769] md:text-[1.06rem]'>
              bhq
              的门店不是单纯完成训练的场所。我们更希望它像一段可以放心进入的日常节奏，让身体先安静下来，再慢慢发力。无论在哪一家门店，都能感受到一致的氛围、流线与练习状态。
            </p>

            <div className='space-y-4 pt-4'>
              {studioHighlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className='flex items-start gap-3 border-b border-[#5a4538]/12 pb-4'
                >
                  <span
                    className={cn(
                      'mt-1 h-2.5 w-2.5 shrink-0 rounded-full',
                      index === 1 ? 'bg-[#d6c173]' : 'bg-[#f0e2aa]',
                    )}
                  />
                  <p className='text-[0.98rem] leading-7 text-[#5a4538]'>{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className='order-1 lg:order-2'
            initial={shouldReduceMotion ? false : { opacity: 0, x: 26 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='relative mx-auto max-w-[40rem] overflow-hidden rounded-[2rem] border border-white/88 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(248,242,220,0.64))] shadow-[0_30px_72px_rgba(90,69,56,0.10)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(90,69,56,0.08))] after:content-[\"\"]'>
              <img
                src='/bhq/studio-detail-v2.png'
                alt='明亮通透的瑜伽教室空间'
                className='h-full w-full object-cover'
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id='app'
        className={cn(sectionClass, 'pt-[clamp(4rem,8vw,6rem)]')}
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.25 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={containerClass}>
          <div className='relative overflow-hidden rounded-[2rem] border border-[#5a4538]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(251,246,233,0.96))] p-[clamp(1.5rem,3vw,2.5rem)] shadow-[0_24px_60px_rgba(90,69,56,0.07)]'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute right-[6%] top-[8%] h-40 w-40 rounded-full bg-[#f6e8b4]/55 blur-[60px]'
            />

            <div className='relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_18rem] lg:gap-12'>
              <div className='space-y-6'>
                <p className={sectionLabelClass}>App</p>
                <h2 className={cn(sectionTitleClass, 'max-w-[11ch]')}>
                  把门店之外的时间，也留给身体慢慢变化
                </h2>
                <p className='max-w-[40rem] text-[1rem] leading-8 text-[#8a7769] md:text-[1.05rem]'>
                  训练不只发生在一节课里。bhq App
                  和微信小程序会把练习后的记录、节奏提醒与日常陪伴继续延伸，让你在更忙的日子里，也还能保留一点属于自己的身体秩序。
                </p>

                <div className='grid gap-5 pt-2 md:grid-cols-3'>
                  {companionMoments.map((moment, index) => (
                    <motion.div
                      key={moment}
                      className='border-t border-[#5a4538]/12 pt-4'
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.72,
                        delay: shouldReduceMotion ? 0 : index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className='mb-3 block text-sm uppercase tracking-[0.18em] text-[#a58f53]'>
                        0{index + 1}
                      </span>
                      <p className='text-[0.98rem] leading-7 text-[#5a4538]'>{moment}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className='self-end rounded-[1.75rem] border border-[#eadcb0] bg-[#fff8df]/86 p-6'>
                <p className='text-sm uppercase tracking-[0.18em] text-[#5a4538]'>daily rhythm</p>
                <div className='mt-4 space-y-3 text-[0.98rem] leading-7 text-[#5a4538]'>
                  <p>课程提醒、练习记录、身体反馈，会在同一个入口里被慢慢整理。</p>
                  <p>当线下体验和线上节奏衔接起来，自律就更像一种日常，而不是偶尔的冲刺。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id='download'
        className={cn(sectionClass, 'pt-2 sm:pt-4')}
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.25 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={containerClass}>
          <div className='relative overflow-hidden rounded-[2.35rem] bg-[linear-gradient(135deg,#6a5548_0%,#5a4538_48%,#48362d_100%)] p-[clamp(1.6rem,4vw,2.8rem)] shadow-[0_28px_72px_rgba(90,69,56,0.24)] before:pointer-events-none before:absolute before:-bottom-32 before:-right-20 before:h-72 before:w-72 before:rounded-full before:bg-[#f6e8b4]/38 before:blur-[10px] before:content-[\"\"]'>
            <div className='relative z-10 max-w-[39rem] space-y-5'>
              <p className={sectionLabelClass}>download</p>
              <h2 className='max-w-[9ch] font-serif text-[clamp(2.2rem,4.2vw,4rem)] leading-[1.12] tracking-[0.015em] [text-wrap:balance] text-[#fffdf8]'>
                <span className='block'>把训练带回日常。</span>
                <span className='mt-2 block md:mt-3'>把节奏留在自己手里。</span>
              </h2>
              <p className='text-[1rem] leading-8 text-[#fffdf8]/78 md:text-[1.05rem]'>
                扫码进入 bhq 的移动入口。无论你偏好
                App，还是更轻量的微信小程序，都能把课程、记录和身体变化留在每天看得见的位置。
              </p>
            </div>

            <div className='relative z-10 mt-10 grid gap-4 md:grid-cols-3'>
              {downloadItems.map((item, index) => (
                <motion.article
                  key={item.name}
                  className='grid gap-4 rounded-[1.5rem] border border-white/16 bg-white/10 p-4 backdrop-blur-[14px]'
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.78,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <img
                    src={item.image}
                    alt={`${item.name} 二维码`}
                    className='aspect-square w-full rounded-2xl bg-[#fffdf8] object-cover p-[0.6rem]'
                  />
                  <div className='space-y-2'>
                    <p className='text-sm uppercase tracking-[0.18em] text-[#fff2cc]'>
                      {item.platform}
                    </p>
                    <h3 className='font-serif text-[1.5rem] leading-[1.12] tracking-[0.01em] text-[#fffdf8] md:text-[1.65rem]'>
                      {item.name}
                    </h3>
                    <p className='text-sm leading-7 text-[#fffdf8]/78'>{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <footer className='relative pb-7'>
        <div
          className={cn(
            containerClass,
            'flex flex-col gap-6 border-t border-[#5a4538]/12 py-8 md:flex-row md:items-end md:justify-between',
          )}
        >
          <div className='space-y-2'>
            <p className='font-serif text-[2.7rem] font-semibold lowercase leading-none tracking-[-0.08em] text-[#5a4538]'>
              bhq
            </p>
            <p className='text-sm text-[#8a7769]'>瑜伽 · 普拉提 · 塑形</p>
          </div>

          <div className='flex flex-wrap gap-4 text-sm text-[#8a7769] md:justify-center'>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className='transition-colors hover:text-[#5a4538]'
              >
                {item.label}
              </a>
            ))}
            <a href='#download' className='transition-colors hover:text-[#5a4538]'>
              下载
            </a>
          </div>

          <div className='max-w-[19rem] space-y-2 md:text-right'>
            <p className='text-sm leading-6 text-[#8a7769]'>
              连锁门店体验、App 与微信小程序入口，将在真实品牌资料接入后继续替换更新。
            </p>
            <p className='text-xs leading-5 text-[#9b897a]'>
              中文字体使用{' '}
              <a
                href='https://hyperos.mi.com/font/zh/faq/'
                target='_blank'
                rel='noreferrer'
                className='underline decoration-[#d9c372]/70 underline-offset-4 transition-colors hover:text-[#5a4538]'
              >
                MiSans
              </a>
              ，遵循 Xiaomi HyperOS 的字体许可说明。
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

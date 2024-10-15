import { cn } from '@/lib/utils'

import { type InspiraImageParticle as ImageParticle, inspiraImageParticles } from './image-particle'

export const Particle = (props: {
  src: string
  className?: string
  canvasWidth?: string
  canvasHeight?: string
  gravity?: string
  particleSize?: string
  particleGap?: string
  mouseForce?: string
  renderer?: 'default' | 'webgl'
  color?: string
  colorArr?: number[]
  initPosition?: 'random' | 'top' | 'left' | 'bottom' | 'right' | 'misplaced' | 'none'
  initDirection?: 'random' | 'top' | 'left' | 'bottom' | 'right' | 'none'
  fadePosition?: 'explode' | 'top' | 'left' | 'bottom' | 'right' | 'random' | 'none'
  fadeDirection?: 'random' | 'top' | 'left' | 'bottom' | 'right' | 'none'
  noise?: number
  responsiveWidth?: boolean
}) => {
  const particles = useRef<ImageParticle>()
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imageRef.current) return

    const { InspiraImageParticle } = inspiraImageParticles()
    particles.current = new InspiraImageParticle(imageRef.current)
  }, [])

  return (
    <img
      ref={imageRef}
      src={props.src}
      className={cn('hidden w-32 h-32', props.className)}
      data-particle-gap={props.particleGap}
      data-width={props.canvasWidth}
      data-height={props.canvasHeight}
      data-gravity={props.gravity}
      data-particle-size={props.particleSize}
      data-mouse-force={props.mouseForce}
      data-renderer={props.renderer}
      data-color={props.color}
      data-color-arr={props.colorArr}
      data-init-position={props.initPosition}
      data-init-direction={props.initDirection}
      data-fade-position={props.fadePosition}
      data-fade-direction={props.fadeDirection}
      data-noise={props.noise}
      data-responsive-width={props.responsiveWidth}
    />
  )
}

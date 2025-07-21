import type { User } from '@prisma/client'

import { HeroGeometric } from '@/components/layout/HeroSection'

export function Welcome({ author }: { author: User[] }) {
  return (
    <HeroGeometric
      badge={author.map(author => author.name ?? '')}
      title1="Simple design"
      title2="Built for efficiency"
    />
  )
}

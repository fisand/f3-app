import { prisma } from 'db'

import { Welcome } from '../welcome/welcome'
import type { Route } from './+types/_index'

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'fisand-remix' },
    { name: 'description', content: 'Welcome to fisand remix!' },
  ]
}

export async function loader() {
  const users = await prisma.user.findMany()
  return { users }
}

export default function Home({
  loaderData,
}: Route.ComponentProps) {
  const authors = loaderData.users
  return <Welcome author={authors} />
}

# 🚀 F3-App

**The Fantastic, Fast, and Fun Monorepo Template!**

Welcome to F3-App, where we've taken the "F" in Full-stack and tripled it! 🎉

## 🌟 What's This All About?

F3-App is your one-stop shop for kickstarting a modern web application with all the bells and whistles. We've carefully curated a tech stack that's so hot, it might just melt your keyboard! 🔥

## 🛠️ Our Fantastic Features

- 🏎️ **Vite-powered React**: Because waiting for your app to build is so last year!
- 🔮 **tRPC API**: Type-safe APIs that'll make you wonder how you ever lived without them.
- 💾 **Prisma**: Database management so smooth, it feels like cheating.
- 🎨 **Tailwind CSS v4**: Utility-first styling with shared tokens, custom variants, and icon utilities.
- 🚄 **Fastify**: An API server so quick, it'll give Usain Bolt a run for his money.
- 🧰 **Turbo**: Monorepo management that'll make you feel like a 10x developer.

## TypeScript 7 compatibility

The workspace uses TypeScript 7.0.2. TypeScript 7 is a native compiler port and no longer exposes the previous compiler API from the `typescript` package, so tools that consume that API need separate compatibility verification.

The current workspace checks and production builds pass with TypeScript 7, but some locked dependencies still exclude it in their peer ranges: Vite+ 0.2.4 and React Router 7.15.1 allow TypeScript 5/6, Expo SDK 56's `@expo/require-utils` allows 5/6, and the transitive Solana Kit 5.5.1 peer range allows only TypeScript 5. `vite-plugin-checker` is pinned to 0.14.5, whose TypeScript peer range is unrestricted. These peer warnings mean the ecosystem is not yet uniformly declaring TypeScript 7 support; upgrade the affected tool/framework stacks separately when their migration paths are validated.

## 🚦 Getting Started

1. Clone this repo (you're already awesome for choosing it!)
2. Run `vp install`
3. Start coding like there's no tomorrow!

## 📋 Todo List (Because Even Awesome Projects Have Room for Improvement)

- [x] ~~Replace Next.js with Vite React (✨ Done! Who needs server-side rendering anyway?)~~ sometimes we need ssr
- [ ] Implement Vitest (Because testing is important, even if it's not as fun as coding)
- [x] Integrate tRPC API (✅ Type-safety for the win!)
- [x] Set up Prisma (💽 Database management has never been this cool)
- [x] Configure Tailwind CSS v4 (🎨 Making your app pretty, one utility class at a time)
- [x] Implement Fastify (🏃‍♂️ Gotta go fast!)
- [ ] Add PostgreSQL (🐘 Because elephants never forget... your data)
- [ ] docker deployment
- [ ] supabase
- [ ] CI/CD pipeline
- [ ] extension app
- [x] expo app template

## 🤔 Why F3-App?

- It's **Fantastic**: We've handpicked the best tools so you don't have to.
- It's **Fast**: From development to production, speed is our middle name.
- It's **Fun**: Because if you're not enjoying your stack, you're doing it wrong!

## 🎉 Join the F3 Revolution!

Are you ready to take your web development game to the next level? Dive into F3-App and experience the joy of a well-structured, high-performance monorepo setup.

Remember, in the world of F3-App, the only limit is your imagination (and maybe your coffee supply ☕).

Happy coding, and may the force of F3 be with you! 🚀✨

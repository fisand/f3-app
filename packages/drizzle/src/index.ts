import 'dotenv/config'

import { drizzle } from 'drizzle-orm/libsql'

const db = drizzle(process.env.DB_FILE_NAME!)

export { db }

export * from './db/relations'
export * from './db/schema'

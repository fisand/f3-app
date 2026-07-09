#!/usr/bin/env node

/**
 * Generate .d.mts and .d.cts declaration files from .d.ts files produced by tsc.
 *
 * TypeScript 7.0 removed the old JavaScript compiler API (ts.sys, ts.createProgram, etc.),
 * which breaks rolldown-plugin-dts used by vp pack / tsdown. As a workaround, we run
 * `tsc --declaration --emitDeclarationOnly` to produce .d.ts files, then copy them
 * to .d.mts and .d.cts so that the package exports resolve correctly for both ESM and CJS.
 */

import { execSync } from 'node:child_process'
import { cpSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const outDir = process.argv[2] || 'dist'

// Step 1: Generate .d.ts files with tsc
execSync(`npx tsc --declaration --emitDeclarationOnly --noEmit false --outDir ${outDir}`, {
  stdio: 'inherit',
})

// Step 2: Find all .d.ts files and copy them to .d.mts and .d.cts
function walkDir(dir) {
  const files = []
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)
    if (statSync(fullPath).isDirectory()) {
      files.push(...walkDir(fullPath))
    } else if (entry.endsWith('.d.ts') && !entry.endsWith('.d.mts') && !entry.endsWith('.d.cts')) {
      files.push(fullPath)
    }
  }
  return files
}

if (existsSync(outDir)) {
  const dtsFiles = walkDir(outDir)
  for (const file of dtsFiles) {
    const baseName = file.replace(/\.d\.ts$/, '')
    cpSync(file, `${baseName}.d.mts`)
    cpSync(file, `${baseName}.d.cts`)
    console.log(`  copied ${relative('.', file)} → .d.mts, .d.cts`)
  }
}

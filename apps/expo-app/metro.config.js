// Learn more https://docs.expo.dev/guides/monorepos
const { getDefaultConfig } = require('expo/metro-config')
const { FileStore } = require('metro-cache')
const path = require('node:path')
const { withNativeWind } = require('nativewind/metro')

const projectRoot = __dirname
const workspaceRoot = path.resolve(projectRoot, '../..')

const config = getDefaultConfig(projectRoot)

// Since we are using pnpm, we have to setup the monorepo manually for Metro
// #1 - Watch all files in the monorepo
config.watchFolders = [workspaceRoot]
// #2 - Try resolving with project modules first, then workspace modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

// Use turborepo to restore the cache when possible
config.cacheStores = [
  new FileStore({ root: path.join(projectRoot, 'node_modules', '.cache', 'metro') }),
]

module.exports = withNativeWind(config, { input: './global.css' })

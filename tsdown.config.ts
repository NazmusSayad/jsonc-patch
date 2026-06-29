import { type InternalModuleFormat } from 'rolldown'
import { defineConfig } from 'tsdown'
import packageJSON from './package.json' with { type: 'json' }

export default defineConfig({
  entry: './src/index.ts',

  outDir: './dist',
  tsconfig: './tsconfig.json',
  format: ['cjs', 'es'] satisfies InternalModuleFormat[],

  dts: true,
  clean: true,
  target: 'ES6',
  minify: 'dce-only',

  external: [/node:/gim, ...getExternal((packageJSON as any).dependencies)],

  outputOptions(options, format) {
    const ext = format === 'cjs' ? 'cjs' : format === 'es' ? 'mjs' : 'js'

    return {
      ...options,
      entryFileNames: `[name].${ext}`,
      chunkFileNames: `__[name].[hash].${ext}`,
    }
  },
})

function getExternal(dependencies: unknown) {
  return Object.keys((dependencies ?? {}) as Record<string, string>).map(
    (dep) => new RegExp(`(^${dep}$)|(^${dep}/)`)
  )
}

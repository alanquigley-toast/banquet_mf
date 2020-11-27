import { getConfig } from '@toasttab/buffet-rollup-config'
import pkg from './package.json'
const { esm, cjs } = getConfig(pkg)
export default [esm, cjs]

import * as PixiCore from "@pixi/core"

// A hack to not get bundlers like webpack and rollup to report
// warnings/errors about missing exports from PixiJS.

// @ts-ignore
export const ArrayResource: typeof PixiCore.ArrayResource = PixiCore["ArrayResource" + ""] || PixiCore["resources" + ""]["ArrayResource"]
import { colors as lgOriginColors } from '../../../windi/linearGradient'
import { genLgColor } from './utils'
import { Color } from './type'

/**
 * 渐变颜色组
 */
const lgColors = Object.fromEntries(
  Object.entries(lgOriginColors).map(([key, [startColor, endColor]]) => {
    return [key, genLgColor(startColor, endColor)]
  }),
) as Record<keyof typeof lgOriginColors, Color>

const colors: Record<keyof typeof lgColors, Color> = {
  ...lgColors,
}

export default colors

import * as echarts from 'echarts/core'
import { genWindiLgBgClass } from '../../../windi/linearGradient'
import type { Color } from './type'

/**
 * RGB 颜色字符串转 [r, g, b] 数组
 * @param color rgb(255,255,255)
 * @returns
 */
const rgb2rgbArray = (color: string) => {
  const arr = color.match(/\d+/g) || ['0', '0', '0']
  return arr.map(item => parseInt(item))
}

/**
 * RGB 转 HSL 颜色
 * @param rgb rgb(255,255,255)
 * @returns [h, s, l]
 */
const rgb2hsl = (rgb: string) => {
  const rgbArr = rgb2rgbArray(rgb)
  const r = rgbArr[0] / 255
  const g = rgbArr[1] / 255
  const b = rgbArr[2] / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const h = (max + min) / 2
  const s = h
  const l = h
  return [h, s, l]
}

/**
 * HEX 转 RGB 颜色
 * @param hex #ffffff
 * @returns rgb(255,255,255)
 */
const hex2rgb = (hex: string) => {
  const rgb = hex.replace('#', '')
  const r = parseInt(rgb.substring(0, 2), 16)
  const g = parseInt(rgb.substring(2, 4), 16)
  const b = parseInt(rgb.substring(4, 6), 16)
  return `rgb(${r},${g},${b})`
}

/**
 * RGB 转 HEX 颜色
 * @param rgb rgb(255,255,255)
 * @returns #ffffff
 */
const rgb2hex = (rgb: string): string => {
  const [r, g, b] = rgb2rgbArray(rgb)
  return `#${r}${g}${b}`
}

const hexOrRgb2rgb = (color: string) => {
  if (color.startsWith('#')) {
    return hex2rgb(color)
  }
  return color
}

/**
 * 平均两个颜色的 RGB 值
 * @param color1 rgb(255,255,255)
 * @param color2 rgb(255,255,255)
 * @returns rgb(255,255,255)
 */
const averageColor = (color1: string, color2: string) => {
  const rgbArr1 = rgb2rgbArray(hexOrRgb2rgb(color1))
  const rgbArr2 = rgb2rgbArray(hexOrRgb2rgb(color2))
  const r = (rgbArr1[0] + rgbArr2[0]) / 2
  const g = (rgbArr1[1] + rgbArr2[1]) / 2
  const b = (rgbArr1[2] + rgbArr2[2]) / 2
  return `rgb(${r},${g},${b})`
}

/**
 * 判断一个颜色是否为深色
 * @param color rgb(255,255,255)
 * @returns
 */
const isDarkColor = (color: string): boolean => {
  const hsl = rgb2hsl(color)
  return hsl[2] < 0.4
}

/**
 * 生成渐变颜色
 * @param startColor 开始颜色
 * @param endColor 结束颜色
 * @returns
 */
export const genLgColor = (startColor: string, endColor: string): Color => {
  const from = startColor.replace(/\s*/g, '')
  const to = endColor.replace(/\s*/g, '')
  const average = averageColor(startColor, endColor)
  const isDark = isDarkColor(average)
  return {
    echarts: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: from },
      { offset: 1, color: to },
    ]),
    bg: `bg-gradient-to-l ${genWindiLgBgClass(from, to)} ${
      isDark ? 'text-white' : ''
    }`,
    text: `bg-clip-text bg-gradient-to-l ${genWindiLgBgClass(
      from,
      to,
    )} text-transparent`,
  }
}

export const colors = {
  green: ['rgb(128, 255, 165)', 'rgb(1, 191, 236)'],
  blue: ['rgb(0, 221, 255)', 'rgb(77, 119, 255)'],
  purple: ['rgb(55, 162, 255)', 'rgb(116, 21, 219)'],
  pink: ['rgb(255, 0, 135)', 'rgb(135, 0, 157)'],
  yellow: ['rgb(255, 191, 0)', 'rgb(224, 62, 76)'],
}

export const genWindiClass = (
  startColor: string,
  endColor: string,
) => {
  const _startColor = startColor.replace(/\s*/g, '')
  const _endColor = endColor.replace(/\s*/g, '')
  return `from-[${_startColor}] to-[${_endColor}]`
}

export const safelist = Object.values(colors).map(
  value => {
    return genWindiClass(value[0], value[1])
  },
)

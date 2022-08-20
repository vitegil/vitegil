/**
 * @file 模拟后端服务接口
 */

/**
 * 睡眠函数
 */
const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const romdomRange = (length: number, min: number, max: number) => {
  return Array(length)
    .fill(0)
    .map(() => random(min, max))
}

export const getFullData = async () => {
  await sleep(1000)
  return {
    code: 0,
    msg: 'success',
    data: romdomRange(7, 100, 200),
  }
}

export const getLastData = async () => {
  await sleep(1000)
  return {
    code: 0,
    msg: 'success',
    data: random(100, 200),
  }
}

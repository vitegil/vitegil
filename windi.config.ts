import { defineConfig } from 'windicss/helpers'
import { safelist } from './windi/linearGradient'

export default defineConfig({
  shortcuts: {
    card: {
      'box-shadow': 'var(--el-box-shadow-light)',
      padding: '20px',
    },
    'data-label': 'flex flex-col p-15px items-center basis-1/5 rounded-4xl',
    'main-page': 'h-full w-full box-border pt-20px pl-20px',
  },
  safelist: [...safelist],
})

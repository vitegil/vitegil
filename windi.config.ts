import { defineConfig } from 'windicss/helpers'
import { safelist } from './windi/linearGradient'

export default defineConfig({
  shortcuts: {
    'card': {
      'box-shadow': 'var(--el-box-shadow-light)',
      'padding': '20px',
    },
    'main-page': 'h-full w-full box-border pt-20px pl-20px',
  },
  safelist: [...safelist],
})

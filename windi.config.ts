import { defineConfig } from 'windicss/helpers'
import { safelist } from './windi/linearGradient'

export default defineConfig({
  shortcuts: {
    card: {
      'box-shadow': 'var(--el-box-shadow-light)',
      padding: '20px',
    },
  },
  safelist: [
    ...safelist,
  ],
})

import { ref } from 'vue'

export const pageSize = 5
export const currentPage = ref(1)

export const handleCurrentChange = (current: number) => {
  currentPage.value = current
}

const data = {
  allGrade: 10,
  promiseError: {
    grade: 89.9,
    data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
  },
  jsError: {
    grade: 25,
    data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
  },
  resourceError: {
    grade: 67,
    data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
  },
}

export const errorApi = async () => {
  return data
}

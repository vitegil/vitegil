export const storageKey = {
  appId: 'VITEGIL_APP_ID',
}

export const env = {
  isDev:
    import.meta.env.MODE === 'development' || import.meta.env.MODE === 'mock',
  isStrictDev: import.meta.env.MODE === 'development',
  isStrictMock: import.meta.env.MODE === 'mock',
}

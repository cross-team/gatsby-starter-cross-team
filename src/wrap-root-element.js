import React from 'react'
const ThemeProvider = require('./src/providers/theme-provider').default

const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

export default wrapRootElement
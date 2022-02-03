import React from 'react'
import './config/ReactotronConfig'
import { StatusBar } from 'react-native'
import Routes from './routes'

const App = () => {
  return(
    <>
      <StatusBar barStyle='ligth-content' backgroundColor="#8B10AE" />
      <Routes />
    </>
  )
}

export default App

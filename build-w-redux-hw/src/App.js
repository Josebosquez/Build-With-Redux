import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import Mainpage from './component/Mainpage';
import store from './component/counter';

function App() {
  return (
    <ReduxProvider store={store}>
      <Mainpage/>
    </ReduxProvider>
  )
}

export default App

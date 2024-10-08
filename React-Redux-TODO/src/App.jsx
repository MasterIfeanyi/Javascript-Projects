import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import Todo from './components/Todo'
const App = () => {
  return (
    <Provider store={store}>
        <Todo/>
    </Provider>
  )
}

export default App
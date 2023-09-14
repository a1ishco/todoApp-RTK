import './App.css'
import TodoList from './component/TodoList'
import { store } from './store/store'
import {Provider} from 'react-redux'

function App() {

  return (
    <>
    <Provider store={store}>
      <TodoList/>
    </Provider>
      
    </>
  )
}

export default App

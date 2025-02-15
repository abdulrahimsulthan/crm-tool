import { Provider } from "react-redux"
import { store } from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <div className='text-3xl'>App</div>
    </Provider>
  )
}

export default App
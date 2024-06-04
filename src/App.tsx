import { Provider } from "react-redux"
import { store } from "./redux/store"
import MainStack from "./navigator/main"
const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  )
}

export default App;
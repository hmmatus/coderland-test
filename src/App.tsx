import { Provider } from "react-redux"
import { store } from "./redux/store"
import MainStack from "./navigator/main"
import { NavigationContainer } from "@react-navigation/native"
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import HomeScreen from './screens/Home'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import SignInScreen from './screens/SignInScreen'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

import React, { Component } from 'react'

const AppStack = createStackNavigator({ Home: HomeScreen })
const AuthStack = createStackNavigator({ SignIn: SignInScreen })

const MainNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    )
  }
}

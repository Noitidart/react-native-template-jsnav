// @flow

import './boot'

import React, { Component } from 'react'
import { AppRegistry, ScrollView, StatusBar, View } from 'react-native'
import { Provider } from 'react-redux'

import store from './flow-control'

import AppNavigator from './AppNavigator'

import styles from './styles'

type State = {
    isOpaque: false
}

class App extends Component<{||}, State> {
    state = {
        isOpaque: false
    }

    render() {
        const { isOpaque } = this.state;

        return (
            <Provider store={store}>
                <ScrollView style={isOpaque ? styles.appOpaque : styles.app} contentContainerStyle={styles.appContent} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
                    <AppNavigator onNavigationStateChange={null} screenProps={{ setAppOpaque:this.setAppOpaque }} />
                </ScrollView>
            </Provider>
        )
    }

    setAppOpaque = () => this.setState( () => ({ isOpaque:true }) )
}

export default App

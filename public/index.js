/*
 * User : murse
 * Date : 12.09.2021
 * Time : 12:40
 * Editor : Visual Studio Code Editor
 */

import React, {Component} from 'react';
//import {View, Text} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';

import About from './pages/about';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="home"
            component={Home}
            title="Home"
            back={true}
            headerLayoutPreset="center"
            inital
          />
          <Scene key="about" component={About} title="About" />
        </Stack>
      </Router>
    );
  }
}
// Export the App
export default App;

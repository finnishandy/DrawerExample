import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { AppRegistry, Text } from 'react-native';

import PageOne from './src/PageOne';
import PageTwo from './src/PageTwo';

class RoutingExample extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('RoutingExample', () => RoutingExample);

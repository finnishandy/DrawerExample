import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import PageTwo from './PageTwo';

export default class PageOne extends Component {



  render() {
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
      main: {paddingLeft: 3},
    };
    let closeControlPanel = () => {
      this.refs._drawer.close()
    };
    let openControlPanel = () => {
      this.refs._drawer.open()
    };
    let boundClose = closeControlPanel.bind(this);

    return (
      <Drawer
      type="overlay"
      ref="_drawer"
      content={<PageTwo text="close me" close={closeControlPanel} />}
      tapToClose={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}>
        <View style={{margin: 128}}>
          <Text onPress={openControlPanel}>This is PageOne!</Text>
        </View>
      </Drawer>
    )
  }
}

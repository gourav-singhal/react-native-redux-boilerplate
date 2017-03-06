import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';
import { Provider } from 'react-redux';

import ROUTES from './config/routes';
import styles from './index.styles';
import store from './redux/store/configureStore';

export default class RNRedux extends Component {

/* eslint-disable */
    renderScene(route: any, navigator: any) {
        /* eslint-enable */
        const ComponentName = ROUTES[route.name];
        return <ComponentName route={route} navigator={navigator} />;
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator
                    style={styles.container}
                    initialRoute={{ name: 'splashScreen' }}
                    renderScene={this.renderScene}
                    configureScene={() => ({
                        ...Navigator.SceneConfigs.HorizontalSwipeJump,
                        gestures: false,
                    })}
                />
            </Provider>
        );
    }
}

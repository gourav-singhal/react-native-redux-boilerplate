/**
 * @flow
 */
import React, { Component } from 'react';

import {
    View,
    Image,
    StatusBar
} from 'react-native';

import styles from './SplashScreen.styles';

export default class SplashScreen extends Component {
    componentWillMount()
    {
        setTimeout( () => {
             this.props.navigator.push({ name : 'main'})
            }, 3000 
        );  
    }

    render() {
        StatusBar.setHidden(true);
        return (
            <Image source={ require("./assets/bg.jpg") } style={ styles.splash }>
            </Image>
        );
    }
}

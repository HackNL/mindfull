import React, {Component} from 'react';
import appStyle from '../style/Styles';

import {AppRegistry, StyleSheet, Dimensions, View} from 'react-native';
import Star from './Star';

import TimerMixin from 'react-timer-mixin';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
const INTERVAL =  6000;

export default class GradientView extends Component {
    static propTypes = {
        children: React.PropTypes.element
    }

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }
    componentWillUnmount(){
    }


    render() {

        return (
            <View>
                <Star bottom={-500}  ></Star>
                <Star bottom={-700}  ></Star>
                <Star bottom={-360}  ></Star>
                <Star bottom={-220}  ></Star>
                <Star bottom={-450}  ></Star>
                <Star bottom={-710}  ></Star>
                <Star bottom={-100}  ></Star>
                <Star bottom={-560}  ></Star>
                <Star bottom={-730}  ></Star>
                <Star bottom={-310}  ></Star>
                <Star bottom={-250}  ></Star>
                <Star bottom={-350}  ></Star>
                <Star bottom={-780}  ></Star>
                <Star bottom={-70}  ></Star>
            </View>
        )
    }
}

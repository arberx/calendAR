import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <Button
                    title="Get Started!"
                    raised
                    backgroundColor='white'
                    color='#000000'
                />
            );
        }
    }


    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View
                    key={slide.text} 
                    style={styles.slideStyle}
                >
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{ flex: 1 }}
            >
                { this.renderSlides() }                
            </ScrollView>
        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        backgroundColor: '#F5B041'
    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
};
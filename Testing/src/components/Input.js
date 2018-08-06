
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
export default class Input extends Component {
    state = {}
    onHandleChange = value => {
        this.props.onChange(this.props.name, value);
    };
    onHandleTouched = value => {
        this.props.onTouch(this.props.name)
    }
    render() {
        const { label, error, ...rest } = this.props;
        return (
            <View style={styles.container}>
                <FormLabel>{label}</FormLabel>
                <FormInput placeholder={label} {...rest} onChangeText={this.onHandleChange} onBlur={this.onHandleTouched} />
                {error && <FormValidationMessage>{error}</FormValidationMessage>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",

    },
});
